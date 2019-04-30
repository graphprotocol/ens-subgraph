// Import types and APIs from graph-ts
import {
  Address,
  Bytes,
  ByteArray,
  crypto,
} from '@graphprotocol/graph-ts'

// Import event types from the registry contract ABI
import { NewOwner, Transfer as TransferEvent, NewResolver, NewTTL } from '../types/ENSRegistry/EnsRegistry'

// Import entity types generated from the GraphQL schema
import { Account, Domain, Name } from '../types/schema'

// Handler for NewOwner events
export function newOwner(event: NewOwner): void {
  let subnode = crypto.keccak256(concat(event.params.node, event.params.label)).toHex()

  let account = new Account(event.params.owner.toHex())
  account.save()

  let domain = new Domain(subnode)

  domain.owner = account.id
  domain.parent = event.params.node.toHex()
  domain.labelhash = event.params.label
  domain.save()

}

// Handler for Transfer events
export function transfer(event: TransferEvent): void {
  let node = event.params.node.toHex()

  // // Create transfer if it does not exists yet
  // let transfer = store.get('Transfer', domainId) as Transfer | null
  // if (transfer == null) {
  //   transfer = new Transfer()
  //   transfer.domain = domainId
  //   transfer.owners = new Array<Bytes>()
  // }
  //
  // // Add the new owner to the list of historical owners of the domain
  // let owners = transfer.owners
  // owners.push(event.params.owner)
  // transfer.owners = owners

  let account = new Account(event.params.owner.toHex())
  account.save()

  // Update the domain owner
  let domain = new Domain(node)
  domain.owner = account.id
  domain.save()
}

// Handler for NewResolver events
export function newResolver(event: NewResolver): void {
  let node = event.params.node.toHex()

  let domain = new Domain(node)
  domain.resolver = event.params.resolver
  domain.save()
}

// Handler for NewTTL events
export function newTTL(event: NewTTL): void {
  let node = event.params.node.toHex()

  let domain = new Domain(node)
  domain.ttl = event.params.ttl
  domain.save()
}

// Helper for concatenating two byte arrays
function concat(a: ByteArray, b: ByteArray): ByteArray {
  let out = new Uint8Array(a.length + b.length)
  for (let i = 0; i < a.length; i++) {
    out[i] = a[i]
  }
  for (let j = 0; j < b.length; j++) {
    out[a.length + j] = b[j]
  }
  return out as ByteArray
}
