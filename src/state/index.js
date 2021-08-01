import { createStore } from "easy-peasy";
import postings from "./posts";
import connection from "./connect";

const store = createStore({
  postings,
  connection,
});

export default store;
