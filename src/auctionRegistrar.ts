// Import types and APIs from graph-ts
import {
  Address,
  Bytes,
  ByteArray,
  crypto,
} from '@graphprotocol/graph-ts'

// Import event types from the registry contract ABI
import { AuctionStarted, NewBid, BidRevealed, HashRegistered, HashReleased, HashInvalidated } from './types/AuctionRegistrar/AuctionRegistrar'

// Import entity types generated from the GraphQL schema
import { AuctionedName } from './types/schema'

export function auctionStarted(event: AuctionStarted): void {
  let auction = new AuctionedName(event.params.hash.toHex())
  auction.registrationDate = event.params.registrationDate as i32
  auction.bidCount = 0
  auction.maxBid = null
  auction.secondBid = null
  auction.state = "AUCTION"
  auction.save()
}

export function bidRevealed(event: BidRevealed): void {
  let auction = AuctionedName.load(event.params.hash.toHex())
  switch(event.params.status) {
    case 0: // Harmless invalid bid
    case 1: // Bid revealed late
      break;
    case 4: // Bid lower than second bid
      auction.bidCount += 1
      break;
    case 2: // New winning bid
      auction.secondBid = auction.maxBid
      auction.maxBid = event.params.value
      auction.winningBidder = event.params.owner.toHex()
      auction.bidCount += 1
      break;
    case 3: // Runner up bid
      auction.secondBid = event.params.value
      auction.bidCount += 1
      break;
  }
  auction.save()
}

export function hashRegistered(event: HashRegistered): void {
  let auction = AuctionedName.load(event.params.hash.toHex())
  auction.maxBid = event.params.value
  auction.winningBidder = event.params.owner.toHex()
  auction.registrationDate = event.params.registrationDate as i32
  auction.state = "FINALIZED"
  auction.save()
}

export function hashReleased(event: HashReleased): void {
  let auction = AuctionedName.load(event.params.hash.toHex())
  auction.state = "RELEASED"
  auction.save()
}

export function hashInvalidated(event: HashInvalidated): void {
  let auction = AuctionedName.load(event.params.hash.toHex())
  auction.state = "FORBIDDEN"
  auction.save()
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
