import { action, thunk } from "easy-peasy";
import Web3 from "web3";

import Decfundme from "../abis/Decfundme.json";

const connection = {
  connected: null,
  loading: false,
  account: null,
  contract: null,
  setContract: action((state, payload) => {
    state.contract = payload;
    state.loading = false;
  }),
  initialize: action((state) => {
    state.connected = null;
    state.account = null;
    state.loading = true;
  }),
  setConnected: action((state) => {
    state.connected = true;
    state.loading = false;
  }),
  resetLoading: action((state) => {
    state.loading = false;
  }),
  setAccount: action((state, payload) => {
    state.account = payload;
  }),

  connectToBlockchain: thunk(async (actions) => {
    actions.initialize();
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        setTimeout(() => {
          actions.setConnected();
        }, 600);
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        setTimeout(() => {
          actions.setConnected();
        }, 600);
      } else {
        window.alert("Non-Ethereum browser detected, you should consider trying metamask");
        setTimeout(() => {
          actions.resetLoading();
        }, 600);
      }
    } catch (e) {
      console.log(e);
      actions.resetLoading();
    }
  }),

  getAccount: thunk(async (actions) => {
    try {
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      actions.setAccount(accounts[0]);
    } catch (e) {
      console.log(e);
    }
  }),

  connectToContract: thunk(async (actions) => {
    actions.initialize();
    try {
      const web3 = window.web3;
      const networkId = await web3.eth.net.getId();
      const network = Decfundme.networks[networkId];
      if (network) {
        const decfundme = await new web3.eth.Contract(Decfundme.abi, network.address);
        actions.setContract(decfundme);
      } else {
        alert("Error");
      }
    } catch (e) {
      console.log(e);
      actions.resetLoading();
    }
  }),
};

export default connection;
