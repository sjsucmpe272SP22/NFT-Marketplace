require("@nomiclabs/hardhat-waffle");
const fs = require ("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "5075b59362cd4a898438f67463676180"

module.exports = {
networks: {
  hardhat: {
    chainId: 1337
  },
  mumbai: {
    url: 'https://polygon-mumbai.infura.io/v3/${projectId}',
    accounts: [privateKey]
  },
  mainnet: {
    url: 'https://polygon-mainnet.infura.io/v3/${projectId}',
    accounts: [privateKey]
  }
},
  solidity:{
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  } 
};
