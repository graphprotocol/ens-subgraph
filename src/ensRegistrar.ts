// Required for dynamic memory allocation in WASM / AssemblyScript
import 'allocator/arena'
export { allocate_memory }

// Import types and APIs from graph-ts
import {
  Address,
  Bytes,
  ByteArray,
  Entity,
  Value,
  store,
  crypto,
} from '@graphprotocol/graph-ts'

// Import event types from the registrar contract ABI
import { NewOwner, Transfer as TransferEvent, NewResolver, NewTTL } from './types/ENSRegistrar/EnsRegistrar'

// Import entity types generated from the GraphQL schema
import { Domain } from './types/schema'

// Handler for NewOwner events
export function newOwner(event: NewOwner): void {
  let subnode = crypto.keccak256(concat(event.params.node, event.params.label)).toHex()

  let domain = new Domain()
  domain.owner = event.params.owner
  domain.parent = event.params.node.toHex()
  domain.labelhash = event.params.label
  store.set('Domain', subnode, domain)
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

  // Update the domain owner
  let domain = new Domain()
  domain.owner = event.params.owner

  // store.set('Transfer', domainId, transfer as Transfer)
  store.set('Domain', node, domain)
}

// Handler for NewResolver events
export function newResolver(event: NewResolver): void {
  let node = event.params.node.toHex()

  let domain = new Domain()
  domain.resolver = event.params.resolver
  store.set('Domain', node, domain)
}

// Handler for NewTTL events
export function newTTL(event: NewTTL): void {
  let node = event.params.node.toHex()

  let domain = new Domain()
  domain.ttl = event.params.ttl as i32
  store.set('Domain', node, domain)
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
