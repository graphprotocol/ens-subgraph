// Required for dynamic memory allocation in WASM / AssemblyScript
import 'allocator/arena'
export { allocate_memory }

// Import types and APIs from graph-ts
import { Entity, Value, store, crypto, ByteArray } from '@graphprotocol/graph-ts'

// Import event types from the registrar contract ABI
import { NewOwner, Transfer } from './types/ENSRegistrar/EnsRegistrar'

// Handler for NewOwner events
export function newOwner(event: NewOwner): void {
  let ensDomain = new Entity()

  let domain = concat(event.params.node, event.params.label)
  let hash = crypto.keccak256(domain)
  let id = hash.toHex()

  ensDomain.setString('id', id)
  ensDomain.setAddress('owner', event.params.owner)
  ensDomain.setString('node', event.params.node.toHex())
  ensDomain.setString('label', event.params.label.toHex())

  store.set('EnsDomain', id, ensDomain)
}

// Handler for Transfer events
export function transfer(event: Transfer): void {
  let ensDomain = new Entity()
  let id = event.params.node.toHex()

  let transfer = store.get('Transfer', id)
  if (transfer == null) {
    transfer = new Entity()
    transfer.setString('id', id)
    transfer.setString('domain', id)
    transfer.setArray('owners', new Array<Value>())
  }

  // Add the new owner to the list of historical owners of the domain
  let owners = transfer.getArray('owners')
  owners.push(Value.fromAddress(event.params.owner))

  ensDomain.setString('id', id)
  ensDomain.setAddress('owners', event.params.owner)

  store.set('Transfer', id, transfer as Entity)
  store.set('EnsDomain', id, ensDomain)
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
