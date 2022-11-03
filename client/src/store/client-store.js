import { observable, computed, action, extendObservable } from "mobx";

class ClientStore {
  @observable loggedin = false;
  @observable deposited = false;
  // @observable key = [];

  constructor(store, initialState) {
    this.store = store;
    extendObservable(this, initialState);
  }

  @computed get isLogin() {
    return this.loggedin;
  }

  @computed get deposit() {
    return this.depositted;
  }

  @action login() {
    this.loggedin = true;
  }

  @action logout() {
    this.loggedin = false;
  }
}


export default new ClientStore();