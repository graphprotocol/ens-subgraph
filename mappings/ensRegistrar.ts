// NOTES
// here we will actually have to calculate the subdomain namehash, since the event emitted is just label and node, and not the resultant subnode 
// let subnode = namehash.subdomain(events.params.node + events.params.label) NOTE - JS, old
export function newOwner(event: NewOwner): void {
  let ensDomain = new Entity()

  //temporary fix until I can get namehash algorithm to work in type script
  let id = (event.params.node.toHex() + "-" + event.params.label.toHex())

  ensDomain.setString('id', id)
  ensDomain.setAddress('owner', event.params.owner)
  ensDomain.setString('node', event.params.node.toHex())
  ensDomain.setString('label', event.params.label.toHex())

  store.set('EnsDomain', id, ensDomain)
}

// NOTES
// WHEN THE SHA3 is in here, i can then update the proper id'd entity, because right now its the concatenation, which the transfer event doesnt have access to 
// need store.get() if we desire to store multi transfered domains as ararys
// let transferInstance = store.get('Transfer', id)
export function transfer(event: Transfer): void {
  let ensDomain = new Entity()
  let id = event.params.node.toHex()

  ensDomain.setString('id', id)
  ensDomain.setAddress('owner', event.params.owner)

  let transferEntity = new Entity()
  transferEntity.setString('id', id)
  transferEntity.setAddress('owner', event.params.owner)

  //note - store will only write the attributes that have been set. All others will be left uneffected 
  store.set('EnsDomain', id, ensDomain)
  store.set('Transfer', id, transferEntity)
}

