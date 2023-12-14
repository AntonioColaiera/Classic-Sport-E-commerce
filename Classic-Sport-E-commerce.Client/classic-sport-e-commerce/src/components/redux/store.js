import { configureStore } from "redux";

const reducer = require("./reducer");

const store = configureStore(reducer);

export default store;
