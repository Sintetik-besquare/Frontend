import { observable, action, decorate } from "mobx";

export default class ChartStore {
  historical_price = [];
  index = "Volatility 10";
  option_type = ""; // CALL or PUT
  ticks = 0;
  stake = 0;
  entry_time = Math.floor(Date.now() / 1000);
  payout = this.ticks + this.stake;
  wallet = 10000;

  setWallet() {
    this.wallet += 10000; //todo: get user wallet balance
  }

  resetWallet() {
    this.wallet += 500;
  }

  updateHistory(stream) {
    this.historical_price = stream;
  }
}
decorate(ChartStore, {
  historical_price: observable,
  index: observable,
  option_type: observable,
  ticks: observable,
  stake: observable,
  entry_time: observable,
  payout: observable,
  wallet: observable,
  setWallet: action,
  resetWallet: action,
  updateHistory: action,
});
