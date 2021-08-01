import { action, thunk } from "easy-peasy";
import Decfundme from "../../abis/Decfundme.json";

const connection = {
  contract: null,
  loading: false,

  initialize: action((state) => {
    state.connected = null;
    state.loading = true;
  }),
  setContract: action((state) => {
    state.connected = true;
    state.loading = false;
  }),
  resetLoading: action((state) => {
    state.loading = false;
  }),

  connectToContract: thunk(async (actions) => {
    actions.initialize();
    try {
      const web3 = window.web3;
      const networkId = await web3.eth.net.getId();
      const network = Decfundme.networks[networkId];
      if (network) {
        const defundme = web3.eth.Contract(Decfundme.abi, network.address);
        actions.setContract(defundme);
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
