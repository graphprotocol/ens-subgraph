export function transfer(event: Transfer): void {
  let domain = new Entity()

  domain.setAddress('ownerAddr', event.params.owner)
  domain.setString('domainHash', event.params.node.toHex())

  store.set('Domain', event.params.node.toHex(), domain)

}

export function newOwner(event: NewOwner): void {
  let subdomain = new Entity()

    // let auctionID = Auction.bind(event.address, event.blockHash).uniqueID()

  subdomain.setAddress('ownerAddr', event.params.owner)
  subdomain.setString('domainHash', event.params.node.toHex())
  subdomain.setString('subDomainHash', event.params.label.toHex())


  //might neeed to hex the id tuype 
  //ADDED THE CAPITAL D, will this fix? 
  store.set('SubDomain', event.params.node.toHex(), subdomain)

  
}


