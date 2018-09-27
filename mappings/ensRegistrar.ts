export function newOwner(event: NewOwner): void {
  let ensDomain = new Entity()

  let domain = concat(event.params.node, event.params.label)
  //from graph-cli
  let hash = crypto.keccak256(domain)
  let id = hash.toHex()


  ensDomain.setString('id', id)
  ensDomain.setAddress('owner', event.params.owner)
  ensDomain.setString('node', event.params.node.toHex())
  ensDomain.setString('label', event.params.label.toHex())

  store.set('EnsDomain', id, ensDomain)
}

export function transfer(event: Transfer): void {
  let ensDomain = new Entity()
  let id = event.params.node.toHex()

  let transfer = store.get('Transfer', id)
  if (transfer == null) {
    transfer = new Entity()
    transfer.setString('id', id)
    transfer.setArray('owners', new TypedArray<Value>())
  }

  let owners = transfer.getArray('owners')
  owners.push(Value.fromAddress(event.params.owner))

  ensDomain.setString('id', id)
  ensDomain.setAddress('owners', event.params.owner)

  //note - store will only write the attributes that have been set. All others will be left unaffected 
  store.set('Transfer', id, transfer)
  store.set('EnsDomain', id, ensDomain)
}

function concat(a: ByteArray, b: ByteArray): ByteArray {
  let out = new Uint8Array(a.length + b.length);
  for (let i = 0; i < a.length; i++) {
    out[i] = a[i]
  }
  for (let j = 0; j < b.length; j++) {
    out[a.length + j] = b[j]
  }
  return out as ByteArray
}
