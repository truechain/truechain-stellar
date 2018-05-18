import Web3 from 'web3'
// import Tx from 'ethereumjs-tx'

let web3
if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider)
} else {
  web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'))
  // web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'))
  // web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))
  // web3 = new Web3(new Web3.providers.HttpProvider('ws://47.95.252.37:8546'))
  // web3 = new Web3(new Web3.providers.HttpProvider('http://47.95.252.37:8545'))
}
window.web3 = web3
// window.Tx = Tx

export default web3
