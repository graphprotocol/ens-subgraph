// export function transfer(event: Transfer): void {

//   // Get param data from challenge succeeded event
//   let hash = event.params.hash.toHex()
//   let owner = event.params.owner
//   let value = event.params.value
//   let date = event.params.registrationDate

//   // Create fail entity
//   let entry = new Entity()
//   entry.setString('hash', hash)
//   entry.setU256('value', value)
//   entry.setAddress('owner', owner)
//   entry.setU256('date', date)

//   // Apply store updates
//   store.set('Entry', hash, entry)
// }

// export function newOwner(event: NewOwner): void {
//   let hash = event.params.hash.toHex()
//   let value = event.params.value

//   let entry = new Entity()
//   entry.setString('hash', hash)
//   entry.setU256('value', value)

//   store.set('Entry', hash, entry)
// }


// - event: Transfer(bytes32,address)
// handler: xxxxxxxxx
// - event: NewOwner(bytes32,bytes32,address)