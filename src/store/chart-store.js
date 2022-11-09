import { observable, action, decorate } from "mobx";

export default class ChartStore {
  start = Date.now();
  current = Date.now();
  historical_price = [];
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

  updateHistory(stream){
    this.historical_price = stream;
  }
}
decorate(ChartStore, {
  start: observable,
  current: observable,
  historical_price: observable,
  updateHistory: action,
  wallet: observable,
  setWallet: action,
  resetWallet: action,
});
