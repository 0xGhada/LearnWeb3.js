 const Web3 =require("web3");

 async function sendEther(){
  const provider=new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
  const web3=new Web3(provider);

  const transact=await web3.eth.sendTransaction({
    from:"0x8294F88179366f3178623Ec32e6C3C3Fc1D16981",
    to:"0xA32C888c7e2Ff48c6A3e482358AA7Cf7B457D381",
    value:web3.utils.toWei("10","ether")});
    console.log(transact);
 }

 sendEther();