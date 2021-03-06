import { action, thunk } from "easy-peasy";
import store from ".";
import Alert from "../config/sweetalert";

const connection = {
  data: [],
  loading: false,

  setPosts: action((state, payload) => {
    state.data = payload;
    state.loading = false;
  }),
  initialize: action((state) => {
    state.data = [];
    state.loading = true;
  }),

  resetLoading: action((state) => {
    state.loading = false;
  }),
  getPosts: thunk(async (actions) => {
    actions.initialize();
    try {
      const contract = store.getState().connection.contract;
      let values = [];
      if (contract !== null) {
        const postCount = await contract.methods.postCount().call();
        for (let i = 1; i <= postCount; i++) {
          const post = await contract.methods.posts(i).call();
          const { imageHash, name, title, amountRequested, amountFunded, description, id } = post;
          values.push({ imageHash, name, title, amountRequested, amountFunded, description, id });
        }
      }
      setTimeout(() => {
        actions.setPosts(values.sort((a, b) => b.amountFunded - a.amountFunded));
      }, 500);
    } catch (e) {
      console.log(e);
      Alert({ message: e.message, type: "error" });
      actions.resetLoading();
    }
  }),
};

export default connection;
