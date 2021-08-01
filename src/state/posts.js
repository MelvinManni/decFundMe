import { action } from "easy-peasy";

const postings = {
  items: [],
  loading: false,
  initialize: action((state) => {
    state.items = [];
    state.loading = true;
  }),
  setItems: action((state, payload) => {
    state.items = payload;
    state.loading = false;
  }),
  resetLoading: action((state) => {
    state.loading = false;
  }),

  

};

export default postings;
