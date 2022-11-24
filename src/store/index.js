import React from "react";
import AppStore from "./app-store";
import ChartStore from "./chart-store";
import UserStore from "./user-store";

class RootStore {
  constructor() {
    this.app_store = new AppStore(this);
    this.chart_store = new ChartStore(this);
    this.user_store = new UserStore(this);
  }
}

let stores_context;

export const useStores = () => {
  if (!stores_context) {
    const root_store = new RootStore();

    stores_context = React.createContext({
      app_store: root_store.app_store,
      chart_store: root_store.chart_store,
      user_store: root_store.user_store,
    });
  }

  return React.useContext(stores_context);
};
