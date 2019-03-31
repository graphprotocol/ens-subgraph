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
import { Account, AuctionedName } from './types/schema'

var rootNode:ByteArray = byteArrayFromHex("93cdeb708b7545dc668eb9280176169d1c33cfd8ed6f04690a0bcc88a93fc4ae")

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
  if(event.params.status == 5) {
    // Actually a cancelled bid; hash is not the label hash
    return
  }

  let auction = AuctionedName.load(event.params.hash.toHex())
  switch(event.params.status) {
    case 0: // Harmless invalid bid
    case 1: // Bid revealed late
      break;
    case 4: // Bid lower than second bid
      auction.bidCount += 1
      break;
    case 2: // New winning bid
      let account = new Account(event.params.owner.toHex())
      account.save()

      auction.secondBid = auction.maxBid
      auction.maxBid = event.params.value
      auction.winningBidder = account.id
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
  auction.secondBid = event.params.value
  auction.winningBidder = event.params.owner.toHex()
  auction.registrationDate = event.params.registrationDate as i32
  auction.domain = crypto.keccak256(concat(rootNode, event.params.hash)).toHex();
  auction.state = "FINALIZED"
  auction.save()
}

export function hashReleased(event: HashReleased): void {
  let node = crypto.keccak256(concat(rootNode, event.params.hash));
  let auction = AuctionedName.load(node.toHex())
  auction.releaseDate = event.block.timestamp as i32
  auction.state = "RELEASED"
  auction.save()
}

export function hashInvalidated(event: HashInvalidated): void {
  let node = crypto.keccak256(concat(rootNode, event.params.hash));
  let auction = AuctionedName.load(node.toHex())
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

function byteArrayFromHex(s: string): ByteArray {
  if(s.length % 2 !== 0) {
    throw new TypeError("Hex string must have an even number of characters")
  }
  let out = new Uint8Array(s.length / 2)
  for(var i = 0; i < s.length; i += 2) {
    out[i / 2] = parseInt(s.substring(i, i + 2), 16) as u32
  }
  return out as ByteArray;
}
