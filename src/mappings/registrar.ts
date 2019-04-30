// Import types and APIs from graph-ts
import {
  Bytes,
  ByteArray,
  crypto,
} from '@graphprotocol/graph-ts'

// Import event types from the registrar contract ABI
import { NewOwner, Transfer, NewResolver, NewTTL } from '../types/Registrar/Registrar'

// Import entity types generated from the GraphQL schema
import { Domain, Resolver } from '../types/schema'

import { Resolver as ResolverTemplate } from '../types/Registrar/templates'

export function handleNewOwner(event: NewOwner): void {
  let domainBytes = concat(event.params.node, event.params.label)
  let domainHash = crypto.keccak256(domainBytes)
  let domainId = domainHash.toHexString()

  let domain = new Domain(domainId)
  domain.owner = event.params.owner
  domain.node = event.params.node
  domain.label = event.params.label
  domain.pastOwners = []
  domain.save()
}

export function handleTransfer(event: Transfer): void {
  // let domainId = event.params.node.toHexString()
  // let domain = Domain.load(domainId)
  // domain.owner = event.params.owner
  // let owners = domain.pastOwners
  // owners.push(event.params.owner)
  // domain.pastOwners = owners
  // domain.save()
}

export function handleNewResolver(event: NewResolver): void {
  let domain = new Domain(event.params.node.toHexString())
  domain.resolver = event.params.resolver
  domain.save()

  let resolver = new Resolver(event.params.resolver.toHexString())
  resolver.domain = event.params.node
  resolver.save()

  // This will allow us to catch all new resolvers, and all events emitted by them
  ResolverTemplate.create(event.params.resolver)
}

export function handleNewTTL(event: NewTTL): void {
  let domain = new Domain(event.params.node.toHexString())
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
