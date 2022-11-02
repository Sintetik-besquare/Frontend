import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import "./index.css";

import App from "./App";

import clientStore from "./store//client-store";
import transactionStore from "";

const stores = {
  clientStore,
  transactionStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
