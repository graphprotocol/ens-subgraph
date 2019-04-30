// Import types and APIs from graph-ts
import {
  Address,
  Bytes,
  ByteArray,
  crypto,
} from '@graphprotocol/graph-ts'

// Import event types from the registrar contract ABI
import { NewOwner, Transfer as TransferEvent } from './types/ENSRegistrar/EnsRegistrar'

// Import entity types generated from the GraphQL schema
import { EnsDomain, Transfer } from './types/schema'

// Handler for NewOwner events
export function newOwner(event: NewOwner): void {
  let domainBytes = concat(event.params.node, event.params.label)
  let domainHash = crypto.keccak256(domainBytes)
  let domainId = domainHash.toHex()

  let domain = new EnsDomain(domainId)
  domain.owner = event.params.owner
  domain.node = event.params.node
  domain.label = event.params.label
  domain.save()
}

// Handler for Transfer events
export function transfer(event: TransferEvent): void {
  let domainId = event.params.node.toHex()

  // Create transfer if it does not exists yet
  let transfer = Transfer.load(domainId)
  if (transfer == null) {
    transfer = new Transfer(domainId)
    transfer.domain = domainId
    transfer.owners = new Array<Bytes>()
  }

  // Add the new owner to the list of historical owners of the domain
  let owners = transfer.owners
  owners.push(event.params.owner)
  transfer.owners = owners

  // Update the domain owner
  let domain = new EnsDomain(domainId)
  domain.owner = event.params.owner
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
