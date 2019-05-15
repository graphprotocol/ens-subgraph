import {
  ABIChanged as ABIChangedEvent,
  AddrChanged as AddrChangedEvent,
  AuthorisationChanged as AuthorisationChangedEvent,
  ContenthashChanged as ContenthashChangedEvent,
  InterfaceChanged as InterfaceChangedEvent,
  NameChanged as NameChangedEvent,
  PubkeyChanged as PubkeyChangedEvent,
} from './types/Resolver/Resolver'

import {
  AddrChanged,
  NameChanged,
  AbiChanged,
  PubkeyChanged,
  ContenthashChanged,
  InterfaceChanged,
  AuthorisationChanged,
} from './types/schema'

import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts";

export function handleAddrChanged(event: AddrChangedEvent): void {
  let resolverEvent = new AddrChanged(createEventID(event.block.number, event.logIndex))
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = createResolverID(event.params.node, event.address)
  resolverEvent.node = event.params.node
  resolverEvent.a = event.params.a
  resolverEvent.save()
}


export function handleNameChanged(event: NameChangedEvent): void {
  let resolverEvent = new NameChanged(createEventID(event.block.number, event.logIndex))
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = createResolverID(event.params.node, event.address)
  resolverEvent.name = event.params.name
  resolverEvent.save()
}

export function handleABIChanged(event: ABIChangedEvent): void {
  let resolverEvent = new AbiChanged(createEventID(event.block.number, event.logIndex))
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = createResolverID(event.params.node, event.address)
  resolverEvent.contentType = event.params.contentType
  resolverEvent.save()
}

export function handlePubkeyChanged(event: PubkeyChangedEvent): void {
  let resolverEvent = new PubkeyChanged(createEventID(event.block.number, event.logIndex))
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = createResolverID(event.params.node, event.address)
  resolverEvent.x = event.params.x
  resolverEvent.y = event.params.y
  resolverEvent.save()
}

// Currently not in use - follow this issue for status - https://github.com/graphprotocol/graph-node/issues/913
// export function handleTextChanged(event: TextChangedEvent): void {
//   let resolverEvent = new TextChanged(createEventID(event.block.number, event.logIndex))
//   resolverEvent.node = event.params.node
//   resolverEvent.resolverID = createResolverID(event.params.node, event.address)
//   resolverEvent.indexedKey = event.params.indexedKey
//   resolverEvent.key = event.params.key
//   resolverEvent.save()
// }

export function handleContentHashChanged(event: ContenthashChangedEvent): void {
  let resolverEvent = new ContenthashChanged(createEventID(event.block.number, event.logIndex))
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = createResolverID(event.params.node, event.address)
  resolverEvent.hash = event.params.hash
  resolverEvent.save()
}

export function handleInterfaceChanged(event: InterfaceChangedEvent): void {
  let resolverEvent = new InterfaceChanged(createEventID(event.block.number, event.logIndex))
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = createResolverID(event.params.node, event.address)
  resolverEvent.interfaceID = event.params.interfaceID
  resolverEvent.implementer = event.params.implementer
  resolverEvent.save()
}

export function handleAuthorisationChanged(event: AuthorisationChangedEvent): void {
  let resolverEvent = new AuthorisationChanged(createEventID(event.block.number, event.logIndex))
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = createResolverID(event.params.node, event.address)
  resolverEvent.owner = event.params.owner
  resolverEvent.target = event.params.target
  resolverEvent.isAuthorized = event.params.isAuthorised
  resolverEvent.save()
}

function createEventID(blockNumber: BigInt, logIndex: BigInt): string {
  return blockNumber.toString().concat('-').concat(logIndex.toString())
}

function createResolverID(node: Bytes, resolver: Address): string {
  return resolver.toHexString().concat('-').concat(node.toHexString())
}