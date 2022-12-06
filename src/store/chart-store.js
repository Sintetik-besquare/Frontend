import { observable, action, decorate, computed } from "mobx";
import bs_binary_option from "../services/payout.js";

export default class ChartStore {
  //obervables
  historical_price = [];
  index = "VOL100";
  option_type = " "; //call put odd even matches differs
  contract_type = "Rise/fall"; // Rise/fall Even/odd Matches/differs
  ticks = 0;
  stake = 0.0;
  lastDigitPrediction = null;
  entry_time = Math.floor(Date.now() / 1000) - 1;
  wallet = 0;
  iswinning = [];
  payoutSummary = [];
  orderSummary = [];
  showSummary = false;
  showOrderForm = false;
  showIndexModal = false;
  showContractModal = false;
  isbuying = false;

  //computed
  get call_payout() {
    return this.#payout("Rise/fall", "call").toFixed(2);
  }

  get put_payout() {
    return this.#payout("Rise/fall", "put").toFixed(2);
  }

  get odd_payout() {
    return this.#payout("Even/odd", "odd").toFixed(2);
  }

  get even_payout() {
    return this.#payout("Even/odd", "even").toFixed(2);
  }

  get match_payout() {
    return this.#payout("Matches/differs", "matches").toFixed(2);
  }

  get differ_payout() {
    return this.#payout("Matches/differs", "differs").toFixed(2);
  }
  /**
   *
   * @param {"Rise/fall"|"Even/odd" | "Matches/differs"} contract
   * @param {"call"|"put"|"odd"|"even"|"matches"|"differs"} option
   * @returns {Number}
   */
  #payout(contract, option) {
    return this.ticks * this.stake ? this.stake /(bs_binary_option(1,1,1,this.ticks / (60 * 60 * 24 * 365),0,0,option, contract) +0.012): 0;
    // return bs_binary_option(1,1,1,this.ticks / (60 * 60 * 24 * 365),0,0,option, contract) +0.012;
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

  setLastDigitPrediction(digit){
    this.lastDigitPrediction = digit;
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

  setPayoutSummary(summary) {
    this.payoutSummary = summary;
  }
  setOrderSummary(summary) {
    this.orderSummary = summary;
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
  lastDigitPrediction: observable,
  entry_time: observable,
  call_payout: computed,
  put_payout: computed,
  odd_payout: computed,
  even_payout: computed,
  match_payout:computed,
  differ_payout: computed,
  wallet: observable,
  payoutSummary: observable,
  orderSummary: observable,
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
  setLastDigitPrediction: action,
  setIswinning: action,
  setWallet: action,
  setPayoutSummary: action,
  setOrderSummary: action,
  resetWallet: action,
  updateHistory: action,
  toggleShowSummary: action,
  toggleOrderForm: action,
  toggleIsBuying: action,
  toggleIndexModal: action,
  toggleContractModal: action,
});
