require("dotenv").config();
require("babel-register");
require("babel-polyfill");
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    kovan: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic: process.env.MNEMONIC,
          providerOrUrl: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
        });
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42,
    },
    mainnet: {
      provider: function () {
        return new HDWalletProvider({
          mnemonic: process.env.MNEMONIC,
          providerOrUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
        });
      },
      gas: 5000000,
      gasPrice: 25000000000,
      confimations: 2,
      network_id: 1,
    },
  },
  contracts_directory: "./contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
