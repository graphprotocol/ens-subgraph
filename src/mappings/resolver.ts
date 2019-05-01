import {
  ABIChanged as ABIChangedEvent,
  AddrChanged as AddrChangedEvent,
  AuthorisationChanged as AuthorisationChangedEvent,
  ContenthashChanged as ContenthashChangedEvent,
  InterfaceChanged as InterfaceChangedEvent,
  NameChanged as NameChangedEvent,
  PubkeyChanged as PubkeyChangedEvent,
  TextChanged as TextChangedEvent
} from '../types/ENSRegistry/templates/Resolver/Resolver'

import {
  Domain,
  Resolver,
  AddrChanged,
  NameChanged,
  AbiChanged,
  PubkeyChanged,
  TextChanged,
  ContenthashChanged,
  InterfaceChanged,
  AuthorisationChanged
} from '../types/schema'

export function handleAddrChanged(event: AddrChangedEvent): void {
  let node = event.params.node.toHexString()
  let resolverEvent = new AddrChanged(node)
  resolverEvent.resolver = event.address
  resolverEvent.address = event.params.a
  resolverEvent.save()
}


export function handleNameChanged(event: NameChangedEvent): void {
  let node = event.params.node.toHexString()
  let resolverEvent = new NameChanged(node)
  resolverEvent.resolver = event.address
  resolverEvent.name = event.params.name
  resolverEvent.save()
}

export function handleABIChanged(event: ABIChangedEvent): void {
  let node = event.params.node.toHexString()
  let resolverEvent = new AbiChanged(node)
  resolverEvent.resolver = event.address
  resolverEvent.contentType = event.params.contentType
  resolverEvent.save()
}

export function handlePubkeyChanged(event: PubkeyChangedEvent): void {
  let node = event.params.node.toHexString()
  let resolverEvent = new PubkeyChanged(node)
  resolverEvent.resolver = event.address
  resolverEvent.x = event.params.x
  resolverEvent.y = event.params.y
  resolverEvent.save()
}

export function handleTextChanged(event: TextChangedEvent): void {
  let node = event.params.node.toHexString()
  let resolverEvent = new TextChanged(node)
  resolverEvent.resolver = event.address
  resolverEvent.indexedKey = event.params.indexedKey
  resolverEvent.key = event.params.key
  resolverEvent.save()
}

export function handleContentHashChanged(event: ContenthashChangedEvent): void {
  let node = event.params.node.toHexString()
  let resolverEvent = new ContenthashChanged(node)
  resolverEvent.resolver = event.address
  resolverEvent.hash = event.params.hash
  resolverEvent.save()
}

export function handleInterfaceChanged(event: InterfaceChangedEvent): void {
  let node = event.params.node.toHexString()
  let resolverEvent = new InterfaceChanged(node)
  resolverEvent.resolver = event.address
  resolverEvent.interfaceID = event.params.interfaceID
  resolverEvent.implementer = event.params.implementer
  resolverEvent.save()
}

export function handleAuthorisationChanged(event: AuthorisationChangedEvent): void {
  let node = event.params.node.toHexString()
  let resolverEvent = new AuthorisationChanged(node)
  resolverEvent.resolver = event.address
  resolverEvent.owner = event.params.owner
  resolverEvent.target = event.params.target
  resolverEvent.isAuthorized = event.params.isAuthorised
  resolverEvent.save()
}





