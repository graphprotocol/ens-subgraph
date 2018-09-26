var namehash = require('eth-ens-namehash')
var web3 = require("web3")
// Also supports normalizing strings to ENS compatibility:
// var input = getUserInput()
// var normalized = namehash.normalize(input)

var string1 = 'mywallet'
var string2 = 'mywallet.eth'
var string3 = 'richard.mywallet.eth'
var string4 = 'richard'
var string5 = 'david.thisisme.eth'
var string6 = 'eth'
var string7 = 'mywallet'
var string8 = 'mywallet'
var string9 = 'mywallet'
var string10 = 'mywallet'

var hash1 = namehash.hash(string1)
var hash2 = namehash.hash(string2)
var hash3 = namehash.hash(string3)
var hash4 = namehash.hash(string4)
var hash5 = namehash.hash(string5)
// var hash6 = namehash.hash(string6)
// var hash7 = namehash.hash(string7)
// var hash8 = namehash.hash(string8)
// var hash9 = namehash.hash(string9)
// var hash10 = namehash.hash(string10)

//This returns sha3('richard') without the 0x prefix
var labelHash4 = (web3.utils.soliditySha3(string4)).substring(2)

//This returns the namehash('mywallet.eth') without the 0x prfix
var remove0x = hash2.substring(2)

// var buildFromLabelAndNode = web3.utils.soliditySha3(remove0x + labelHash4)
// var hardcide = web3.utils.soliditySha3("200a4ff549fd75c2b282f412e84fdaf57a1b1d45e21ea2b551951c871dff12b7" + "4f5b812789fc606be1b3b16908db13fc7a9adf7ca72641f84d75b47069d3d7f0" )

var subdomain4 =  namehash.subdomain(remove0x, labelHash4)

console.log("\n")
console.log(string1 + " : " + hash1 + "\n")
console.log(string2 + " : " + hash2 + "\n")
console.log(string3 + " : " + hash3 + "\n")
console.log(string4 + " : " + hash4 + "\n")
console.log(string5 + " : " + hash5 + "\n")

console.log("\n")
console.log("Label Hash 4: " + labelHash4 )
console.log("remove 0x and get hash of mywallet.eth: " + remove0x)
// console.log(buildFromLabelAndNode)
// console.log("HARCOED: " + hardcide)

console.log("richard.mywallet.eth subdomain: " + subdomain4)


