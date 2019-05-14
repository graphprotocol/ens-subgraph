import {
  ABIChanged as ABIChangedEvent,
  AddrChanged as AddrChangedEvent,
  AuthorisationChanged as AuthorisationChangedEvent,
  ContenthashChanged as ContenthashChangedEvent,
  InterfaceChanged as InterfaceChangedEvent,
  NameChanged as NameChangedEvent,
  PubkeyChanged as PubkeyChangedEvent,
  TextChanged as TextChangedEvent
} from './types/Resolver/Resolver'

import {
  AddrChanged,
  NameChanged,
  AbiChanged,
  PubkeyChanged,
  TextChanged,
  ContenthashChanged,
  InterfaceChanged,
  AuthorisationChanged,
  ResolverEventCount
} from './types/schema'

import { BigInt } from "@graphprotocol/graph-ts"

export function handleAddrChanged(event: AddrChangedEvent): void {
  let count = ResolverEventCount.load("1")
  if (count == null){
    count = new ResolverEventCount("1")
    count.count = BigInt.fromI32(0)
  }
  count.count = count.count.plus(BigInt.fromI32(1))
  count.save()
  let id = count.count.toString()

  let resolverEvent = new AddrChanged(id)
  resolverEvent.resolver = event.address
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = event.address.toHexString().concat('-').concat(event.params.node.toHexString())
  resolverEvent.address = event.params.a
  resolverEvent.save()
}


export function handleNameChanged(event: NameChangedEvent): void {
  let count = ResolverEventCount.load("1")
  count.count = count.count.plus(BigInt.fromI32(1))
  count.save()
  let id = count.count.toString()

  let resolverEvent = new NameChanged(id)
  resolverEvent.resolver = event.address
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = event.address.toHexString().concat('-').concat(event.params.node.toHexString())
  resolverEvent.name = event.params.name
  resolverEvent.save()
}

export function handleABIChanged(event: ABIChangedEvent): void {
  let count = ResolverEventCount.load("1")
  count.count = count.count.plus(BigInt.fromI32(1))
  count.save()
  let id = count.count.toString()

  let resolverEvent = new AbiChanged(id)
  resolverEvent.resolver = event.address
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = event.address.toHexString().concat('-').concat(event.params.node.toHexString())
  resolverEvent.contentType = event.params.contentType
  resolverEvent.save()
}

export function handlePubkeyChanged(event: PubkeyChangedEvent): void {
  let count = ResolverEventCount.load("1")
  count.count = count.count.plus(BigInt.fromI32(1))
  count.save()
  let id = count.count.toString()

  let resolverEvent = new PubkeyChanged(id)
  resolverEvent.resolver = event.address
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = event.address.toHexString().concat('-').concat(event.params.node.toHexString())
  resolverEvent.x = event.params.x
  resolverEvent.y = event.params.y
  resolverEvent.save()
}

// Currently not in use - follow this issue for status - https://github.com/graphprotocol/graph-node/issues/913
// export function handleTextChanged(event: TextChangedEvent): void {
//   let count = ResolverEventCount.load("1")
//   count.count = count.count.plus(BigInt.fromI32(1))
//   count.save()
//   let id = count.count.toString()
//
//   let resolverEvent = new TextChanged(id)
//   resolverEvent.resolver = event.address
//   resolverEvent.node = event.params.node
//   resolverEvent.resolverID = event.address.toHexString().concat('-').concat(event.params.node.toHexString())
//   resolverEvent.indexedKey = event.params.indexedKey
//   resolverEvent.key = event.params.key
//   resolverEvent.save()
// }

export function handleContentHashChanged(event: ContenthashChangedEvent): void {
  let count = ResolverEventCount.load("1")
  count.count = count.count.plus(BigInt.fromI32(1))
  count.save()
  let id = count.count.toString()

  let resolverEvent = new ContenthashChanged(id)
  resolverEvent.resolver = event.address
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = event.address.toHexString().concat('-').concat(event.params.node.toHexString())
  resolverEvent.hash = event.params.hash
  resolverEvent.save()
}

export function handleInterfaceChanged(event: InterfaceChangedEvent): void {
  let count = ResolverEventCount.load("1")
  count.count = count.count.plus(BigInt.fromI32(1))
  count.save()
  let id = count.count.toString()

  let resolverEvent = new InterfaceChanged(id)
  resolverEvent.resolver = event.address
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = event.address.toHexString().concat('-').concat(event.params.node.toHexString())
  resolverEvent.interfaceID = event.params.interfaceID
  resolverEvent.implementer = event.params.implementer
  resolverEvent.save()
}

export function handleAuthorisationChanged(event: AuthorisationChangedEvent): void {
  let count = ResolverEventCount.load("1")
  count.count = count.count.plus(BigInt.fromI32(1))
  count.save()
  let id = count.count.toString()

  let resolverEvent = new AuthorisationChanged(id)
  resolverEvent.resolver = event.address
  resolverEvent.node = event.params.node
  resolverEvent.resolverID = event.address.toHexString().concat('-').concat(event.params.node.toHexString())
  resolverEvent.owner = event.params.owner
  resolverEvent.target = event.params.target
  resolverEvent.isAuthorized = event.params.isAuthorised
  resolverEvent.save()
}