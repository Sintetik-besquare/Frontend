import { observable, action, decorate } from "mobx";

export default class ChartStore {
  historical_price = [];
  index = "Volatility 10 (1s)";
  option_type = " "; // CALL or PUT
  ticks = 0;
  stake = 0;
  entry_time = Math.floor(Date.now() / 1000);
  payout = this.ticks + this.stake;
  wallet = 10000;

  setIndex(index) {
    this.index = index;
  }

  setOptionType(option) {
    this.option_type = option;
  }

  setTicks(ticks) {
    this.ticks = ticks;
  }

  setStake(stake) {
    this.stake = stake;
  }

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
  setIndex: action,
  setOptionType: action,
  setTicks: action,
  setState: action,
  setWallet: action,
  resetWallet: action,
  updateHistory: action,
});

// ! stake  must be 2dp
