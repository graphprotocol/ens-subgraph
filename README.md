#ENS Subgraph

*Please check out https://github.com/graphprotocol/graph-node/blob/master/docs/getting-started.md for an introduction to subgraphs*

This Subgraph sources two events from the ENS Registry, at the address on mainnnet at "0x314159265dd8dbb310642f98f50c066173c1259b". The two events that emit events are:

- setOwner(bytes32 node, address owner)
  - which emits `Transfer(node, owner)`
  - This event indicates when an ens subdomain has changed ownership
- setSubnodeOwner(bytes32 node, bytes32 label, address owner)
  - which emits `NewOwner(node, label, owner)`
  - This event indicated when any ens domain has been registered

Contract events can be seen here: https://github.com/ensdomains/ens/blob/master/contracts/ENSRegistry.sol

The ABI was taken from https://etherscan.io/address/0x314159265dd8dbb310642f98f50c066173c1259b#code, but can be taken from compiling the contracts from the ens github repository as well.

Whenever `setSubnodeOwner` event `NewOwner` is emitted, the Graph Node will store this value as an entity `EnsDomain`. It will add every subnodeOwner. It processes blocks in ascending order. `setOwner` will be stored as an entity `Tranfer`. This will also update the owner attritbute of the `EnsDomain` entity the transfer is associated with 


##Graph Node Information

The graph node can source events by calling into infura through http or ws calls. It can also connect to a geth node or parity node. Fast synced geth nodes also work. Geth is slightly more reliable, as sometimes infura returns errors outside of our control. But infura is the quickest way to start up the graph node, if you don't already have a fully synced geth node.  

This subgraph has three files which tell the node to source the two ENS events specified above. They are:
* The subgraph manifest (subgraph.yaml)
* A GraphQL schema      (schema.graphql)
* A mapping script      (EnsRegistrar.ts)

These files are all written and complete in this repository. If you want to read about how to modify these files yourself, please check out https://github.com/graphprotocol/graph-node/blob/master/docs/getting-started.md. 

This subgraph must be compiled from the `feature/block-stream` branch right now (September 26th 2018). In a few days this branch will be merged into master.

The first 3327420 blocks will be skipped, as the ENS contracts did not exist on mainnet before this. Then it will take a while. The ENS contracts were highly active upon launch, and less active as of late. The whole thing took about 87hours on a 2017 Macbook Pro. 


The [Graph Node](https://github.com/graphprotocol/graph-node) contains full instructions for running a graph node. The steps below describe how to start up the ENS-Subgraph graph node

## Steps to get the ENS-Subgraph Running 
  1. Install IPFS and run `ipfs init` followed by `ipfs daemon`
  2. Install PostgreSQL and run `initdb -D .postgres` followed by `createdb ens-subgraph`
  3. If using Ubuntu, you may need to install additional packages: `sudo apt-get install -y clang libpq-dev libssl-dev pkg-config`
  4. Clone this repository, bulid it with `yarn install` and `yarn build-ipfs`. Get the Subgraph ID output that starts with `Qm`, you will need this for step 6
  5. Clone https://github.com/graphprotocol/graph-node , go to the `feature/block-stream` branch, and cargo build
  6a. Now that all the dependencies are running, you can run the following command to connect to infura:

```
  cargo run -p graph-node --release -- \
  --postgres-url postgresql://USERNAME@localhost:5432/ens-subgraph \
  --ethereum-ws mainnet:wss://mainnet.infura.io/_ws \
  --ipfs 127.0.0.1:5001 \
  --subgraph <SUBGRAPHID FROM STEP 4>
```

  6b. Or you can run the following command to connect to a local geth node: 

```
  cargo run -p graph-node --release -- \
  --postgres-url postgresql://USERNAME@localhost:5432/ens-subgraph \
  --ethereum-rpc mainnet:http://127.0.0.1:8545 \
  --ipfs 127.0.0.1:5001 \
  --subgraph <SUBGRAPHID FROM STEP 4>
```

Once you have built the subgraph and started a Graph Node you may open a [Graphiql](https://github.com/graphql/graphiql) browser at `127.0.0.1:8000` and get started with querying.

## Getting started with Querying 

See the query API here: https://github.com/graphprotocol/graph-node/blob/master/docs/graphql-api.md 

Below are three ways to show how to query the ENS Subgraph for intesting data. 

### Finding all the subdomains of a domain
This comes in handy when you know what the domain is, and you want to see how many subdomains it has. The domain "0x91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2" is the
`addr.reverse` domain. When you query this, you can see how many domains have been registered in the reverse lookup.  

```
{
  ensDomains(where: {node_contains: "0x91d1777781884d03a6757a803996e38de2a42967fb37eeaca72729271025a9e2"}) {
    id
    label
    node
    owner
  }
}
```

### Finding all the domains that one Ethereum Account Owns

This comes in handy when there is a user who has registered potentially 100's of names, but can't remember them all. Simply filter by owner, and all of their purchases will be shown.

```
{
  ensDomains(where: {owner_contains: "0xc73C21952577366A0fBfD62B461Aeb5305801157"}) {
    id
    label
    node
    owner
  }
}
```

Querying this account will return many domains. As seen this is an active ens registrar account https://etherscan.io/address/0xc73C21952577366A0fBfD62B461Aeb5305801157

### Searching Transfer events

This just queries all transfer events in order of the domain hash (id):

```
{
  transfers(orderBy: id) {
    id
    owner
  }
}
```

Note that there are much fewer Transfer events sourced than NewOwner events. This is because many names have been registered, but only a small group of them have had their ownership changed. 