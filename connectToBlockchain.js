//importing my web3 modules
const Web3=require("web3");

async function connect(){
  //connect to blockchain
const provider=new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
const web3=new Web3(provider);
//console.log(web3);

// Fetch the account address
const accounts=await web3.eth.getAccounts();
// console.log(accounts[0]);

// Fetch the account balance
const balanceWei=  await web3.eth.getBalance(accounts[0]);
// console.log(balanceWei);

// to convert Balance to wei=> Ether
const balanceEther=web3.utils.fromWei(balanceWei,"ether");
// console.log(balanceEther);

// to convert Balance to Ether=> Wei
const balanceWei2=web3.utils.toWei(balanceEther,"ether");
console.log(balanceWei2);


}
connect();