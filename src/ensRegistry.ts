// Import types and APIs from graph-ts
import {
  ByteArray,
  crypto,
} from '@graphprotocol/graph-ts'

// Import event types from the registry contract ABI
import { NewOwner, Transfer, NewResolver, NewTTL } from './types/ENSRegistry/EnsRegistry'

// Import entity types generated from the GraphQL schema
import { Account, Domain, Name, Resolver } from './types/schema'

import { Resolver as ResolverTemplate } from './types/ENSRegistry/templates'


// Handler for NewOwner events
export function handleNewOwner(event: NewOwner): void {
  let account = new Account(event.params.owner.toHexString())
  account.save()

  let subnode = crypto.keccak256(concat(event.params.node, event.params.label)).toHexString()
  let domain = new Domain(subnode)

  // Get label and node names
  let labelObject = Name.load(event.params.label.toHexString())
  if (labelObject != null) {
    domain.labelName = labelObject.name
  }

  domain.owner = account.id
  domain.parent = event.params.node.toHexString()
  domain.labelhash = event.params.label
  domain.save()
}

// Handler for Transfer events
export function handleTransfer(event: Transfer): void {
  let account = new Account(event.params.owner.toHexString())
  account.save()

  // Update the domain owner
  let node = event.params.node.toHexString()
  let domain = new Domain(node)
  domain.owner = account.id
  domain.save()
}

// Handler for NewResolver events
export function handleNewResolver(event: NewResolver): void {
  let node = event.params.node.toHexString()
  let domain = new Domain(node)
  domain.resolver = event.params.resolver
  domain.save()

  let resolver = new Resolver(event.params.resolver.toHexString())
  resolver.domain = event.params.node
  resolver.resolverEvents = []
  resolver.save()

  // This catches all new resolvers contracts dynamically, and all events emitted by them
  // ResolverTemplate.create(event.params.resolver)
}

// Handler for NewTTL events
export function handleNewTTL(event: NewTTL): void {
  let node = event.params.node.toHexString()
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