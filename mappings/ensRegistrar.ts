export function newOwner(event: NewOwner): void {
  let ensDomain = new Entity()
  // here we will actually have to calculate the subdomain namehash, since the event emitted is just label and node, and not the resultant subnode 
  // let subnode = namehash.subdomain(events.params.node + events.params.label)

  //temporary fix until I can get namehash algorithm to work in type script
  // let id = (event.params.node + "-" + event.params.label).toHex()

  // ensDomain.setString('id', id)
  ensDomain.setAddress('owner', event.params.owner)
  ensDomain.setString('node', event.params.node.toHex())
  ensDomain.setString('label', event.params.label.toHex())

  store.set('EnsDomain', event.params.node.toHex(), ensDomain)
}

export function transfer(event: Transfer): void {
  let ensDomain = new Entity()
  let id = event.params.node.toHex()

  ensDomain.setString('id', id)
  ensDomain.setAddress('owner', event.params.owner)

  store.set('EnsDomain', id, ensDomain)
}


// const namehash = require('eth-ens-namehash')


// export function transfer(event: Transfer): void {
//   let domain = new Entity()

//   domain.setAddress('ownerAddr', event.params.owner)
//   domain.setString('domainHash', event.params.node.toHex())

//   store.set('Domain', event.params.node.toHex(), domain)

// }

// export function newOwner(event: NewOwner): void {
//   let subdomain = new Entity()


//   //here we will actually have to calculate the name hash, since the event emitted is just label and node, and not the resultant subnode 
//   // let subnode = namehash.hash(events.params.node + events.params.label)



//   subdomain.setAddress('ownerAddr', event.params.owner)
//   subdomain.setString('parentNode', event.params.node.toHex())
//   subdomain.setString('label', event.params.label.toHex())


//   //might neeed to hex the id tuype 
//   //ADDED THE CAPITAL D, will this fix? 
//   store.set('SubDomain', event.params.node.toHex(), subdomain)

  
// }

//will un comment soon 

// export function transfer(event: Transfer): void {
//   let ensDomain = new Entity()
//   let id = event.params.node.toHex()

//   ensDomain.setString('id', id)
//   ensDomain.setAddress('owner', event.params.owner)

//   store.set('EnsDomain', id, ensDomain)
// }

// export function newOwner(event: NewOwner): void {
//   let ensDomain = new Entity()


//   // here we will actually have to calculate the subdomain namehash, since the event emitted is just label and node, and not the resultant subnode 
//   let subnode = namehash.subdomain(events.params.node + events.params.label)

//   let id = subnode.toHex()

//   ensDomain.setString('id', id)
//   ensDomain.setAddress('owner', event.params.owner)

//   ensDomain.setString('node', event.params.node.toHex())
//   ensDomain.setString('label', event.params.label.toHex())

//   store.set('EnsDomain', id, ensDomain)
// }

