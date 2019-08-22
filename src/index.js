import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { reducer } from "./reducers/reducer";
import App from "./components/App";

const store = createStore(
  reducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(<App store={store} />, document.getElementById("app"));

export default { reducer };
