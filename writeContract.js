const Web3 = require("web3");

async function readContract() {
  const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
  const web3 = new Web3(provider);
  const ABI = [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_a",
          type: "uint256",
        },
      ],
      name: "setter",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "getter",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const contractAddress = "0xFb73c64dC883c5596aD8085e28aF3C23FE2c3616";
  const contract = new web3.eth.Contract(ABI, contractAddress);
//  console.log(contract);
const date =await contract.methods.setter(20).send({from:"0x49f82dA00eE71B16eD8965d9d409c3bb79837210"});
console.log(date);

}

readContract();
