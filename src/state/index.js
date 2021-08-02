import { createStore } from "easy-peasy";
import connection from "./connect";
import posts from './posts'

const store = createStore({
  connection,
  posts,
});

export default store;
