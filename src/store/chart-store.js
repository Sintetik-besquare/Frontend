import { observable, action, decorate, computed } from "mobx";
import bs_binary_option from "../services/payout.js";

export default class ChartStore {
  //obervables
  historical_price = [];
  index = "VOL100";
  option_type = " "; //call put
  contract_type = "Rise/Fall"; // rise/fall odd/even
  ticks = 0;
  stake = 0.0;
  entry_time = Math.floor(Date.now() / 1000) - 1; //TODO: entry_time = current_time -1s
  wallet = 0;
  iswinning = [];
  summary = [];
  showSummary = false;
  showOrderForm = false;
  showIndexModal = false;
  showContractModal = false;
  isbuying = false;

  //computed
  get call_payout() {
    return this.#payout("call").toFixed(2);
  }

  get put_payout() {
    return this.#payout("put").toFixed(2);
  }

  get odd_payout() {
    return this.#payout("odd").toFixed(2);
  }

  get even_payout() {
    return this.#payout("even").toFixed(2);
  }
  /**
   *
   * @param {"call"|"put"|"odd"|"even"} type
   * @returns {Number}
   */
  #payout(type) {
    return this.ticks * this.stake ? this.stake /(bs_binary_option(1,1,1,this.ticks / (60 * 60 * 24 * 365),0,0,type) +0.012): 0;
  }
  //actions

  setHistory(historical_price) {
    this.historical_price = historical_price;
  }

  setIndex(index) {
    this.index = index;
  }

  setOptionType(option) {
    this.option_type = option;
  }

  setContractType(contract) {
    this.contract_type = contract;
  }

  setTicks(ticks) {
    this.ticks = ticks;
  }

  setStake(stake) {
    this.stake = stake;
  }

  setIswinning(iswinning) {
    this.iswinning.push(iswinning);
    // setTimeout(() => {
    //   this.iswinning.shift();
    // }, 3500);
  }

  setWallet(amt) {
    this.wallet = amt;
  }

  setSummary(summary) {
    this.summary = summary;
  }

  toggleShowSummary(visibility) {
    this.showSummary = visibility;
  }

  toggleOrderForm(visibility) {
    this.showOrderForm = visibility;
  }

  toggleIndexModal(visibility) {
    this.showIndexModal = visibility;
    this.showContractModal = false;
  }

  toggleContractModal(visibility) {
    this.showContractModal = visibility;
    this.showIndexModal = false;
  }

  resetWallet() {
    this.wallet = 20000;
  }

  updateHistory(stream) {
    this.historical_price = stream;
  }

  toggleIsBuying(isbuying) {
    this.isbuying = isbuying;
  }
}
decorate(ChartStore, {
  historical_price: observable,
  index: observable,
  option_type: observable,
  contract_type: observable,
  ticks: observable,
  stake: observable,
  entry_time: observable,
  call_payout: computed,
  put_payout: computed,
  odd_payout: computed,
  even_payout: computed,
  wallet: observable,
  summary: observable,
  iswinning: observable,
  showSummary: observable,
  showOrderForm: observable,
  showIndexModal: observable,
  showContractModal: observable,
  isbuying: observable,
  setIndex: action,
  setOptionType: action,
  setContractType: action,
  setTicks: action,
  setState: action,
  setIswinning: action,
  setWallet: action,
  setSummary: action,
  resetWallet: action,
  updateHistory: action,
  toggleShowSummary: action,
  toggleOrderForm: action,
  toggleIsBuying: action,
  toggleIndexModal: action,
  toggleContractModal: action,
});
