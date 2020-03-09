var contractABI = [];
var contractAddress = '0x346915E6946cc9493F3eeFcED7E4ed6AF8d0b76c';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);
console.log(simpleSmartContract);

web3.eth.getAccounts()
.then(console.log);