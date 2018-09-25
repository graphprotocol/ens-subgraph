var namehash = require('eth-ens-namehash')
// Also supports normalizing strings to ENS compatibility:
// var input = getUserInput()
// var normalized = namehash.normalize(input)

var string1 = 'mywallet'
var string2 = 'mywallet.eth'
var string3 = 'richard.mywallet.eth'
var string4 = 'richard'
var string5 = 'david.thisisme.eth'
var string6 = 'mywallet'
var string7 = 'mywallet'
var string8 = 'mywallet'
var string9 = 'mywallet'
var string10 = 'mywallet'

var hash1 = namehash.hash(string1)
var hash2 = namehash.hash(string2)
var hash3 = namehash.hash(string3)
var hash4 = namehash.hash(string4)
var hash5 = namehash.hash(string5)
var hash6 = namehash.hash(string6)
var hash7 = namehash.hash(string7)
var hash8 = namehash.hash(string8)
var hash9 = namehash.hash(string9)
var hash10 = namehash.hash(string10)

console.log("\n")
console.log(string1 + " : " + hash1 + "\n")
console.log(string2 + " : " + hash2 + "\n")
console.log(string3 + " : " + hash3 + "\n")
console.log(string4 + " : " + hash4 + "\n")
console.log(string5 + " : " + hash5 + "\n")




