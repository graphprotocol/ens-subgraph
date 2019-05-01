# ENS Subgraph

This Subgraph sources events from the ENS contracts. This includes the ENS Registrar, the Auction Registrar, and any resolvers that are created and linked to domains. The resolvers are added through dynamic data sources. More information on all of this can be found at [The Graph Documentation](https://thegraph.com/docs/quick-start).

# Example Queries

Here we have example queries, so that you don't have to type them in yourself eachtime in the graphiql playground:

```graphql
{
  domains{
    id
    labelName
    labelhash
    parent{
      id
    }
    subdomains{
      id
    }
    owner{
      id
    }
    resolver
    ttl
  }
  resolvers{
   id 
    domain
  }
  resolverEvents{
    id
    resolver
  }
  addrChangeds{
    id
    resolver
    address
  }
  nameChangeds{
    id
    resolver
    name
  }
  abiChangeds{
    id
    resolver
    contentType
  }
  pubkeyChangeds{
    id
    resolver
    x
    y
  }
  textChangeds{
    id
    resolver
    indexedKey
    key
  }
  contenthashChangeds{
    id
    resolver
    hash
  }
  interfaceChangeds{
    id
    resolver
    interfaceID
    implementer
  }
  authorisationChangeds{
    id
    resolver
    owner
    target
    isAuthorized
  }
}
```