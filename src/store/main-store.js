import { observable, action, decorate } from "mobx";

export default class MainStore {
  start = Date.now();
  current = Date.now();
  wallet = 10000;

  get elapsedTime() {
    return this.current - this.start + "milliseconds";
  }

  setWallet() {
    this.wallet += 10000;//todo: get user wallet balance
  }

  resetWallet() {
    this.wallet = 10000;
  }
}
decorate(MainStore, {
  start: observable,
  current: observable,
  wallet: observable,
  setWallet: action,
  resetWallet: action,
});
