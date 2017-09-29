
// web3 is an Ethereum client library
const Web3 = require('web3');
const web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

// This file is generated by the Solidity compiler to easily interact with
// the contract using the web3 library.
// abi = Application Binary Interface
const monopolyAbi = require('../contracts/MonopolyBank.json');
const MonopolyContract = web3.eth.contract(monopolyAbi);


// // module.exports = LoginContract;

const contractAddress = "0x04B1efA3E9d84B353aDC84338C0EaD736323325E";
const monopolyContract = MonopolyContract.at(contractAddress);

// // Get handle on Paid event
const paidEvent = monopolyContract.Paid();

paidEvent.watch((error, event) => {
    if(error) {
        console.log(error);
        return;
    }

    console.log(event);

});