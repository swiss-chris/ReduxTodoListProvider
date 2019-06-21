import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import reducer from "./reducer";
import App from "./App";

const store = createStore(
  reducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(<App store={store} />, document.getElementById("app"));

export default { reducer };
