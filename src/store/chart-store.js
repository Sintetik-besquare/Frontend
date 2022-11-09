import { observable, action, decorate } from "mobx";

export default class ChartStore {
  start = Date.now();
  current = Date.now();
  price_array = [];
  wallet = 10000;

  get elapsedTime() {
    return this.current - this.start + "milliseconds";
  }

  setWallet() {
    this.wallet += 10000;//todo: get user wallet balance
  }

  resetWallet() {
    this.wallet += 500;
  }
}
decorate(ChartStore, {
  start: observable,
  current: observable,
  price_array: observable,
  wallet: observable,
  setWallet: action,
  resetWallet: action,
});
