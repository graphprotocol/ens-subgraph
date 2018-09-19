export function transfer(event: Transfer): void {
  let domain = new Entity()


  // let auctionID = Auction.bind(event.address, event.blockHash).uniqueID()

  domain.setAddress('owner', event.params.owner)
  domain.setString('node', event.params.node)


  store.set('Domain', event.params.node, domain)

}

export function newOwner(event: NewOwner): void {
  let subdomain = new Entity()

    // let auctionID = Auction.bind(event.address, event.blockHash).uniqueID()

  subdomain.setAddress('owner', event.params.owner)
  subdomain.setString('node', event.params.node)
  subdomain.setString('label', event.params.label)


  //might neeed to hex the id tuype 
  store.set('Subdomain', event.params.node, subdomain)

  
}


