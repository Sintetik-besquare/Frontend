import { observable, action, decorate, computed } from "mobx";
import bs_binary_option from "../services/payout.js";

export default class ChartStore {
  //obervables
  historical_price = [];
  index = "VOL100";
  option_type = " "; 
  ticks = 0;
  stake = 0.0;
  entry_time = (Math.floor(Date.now() / 1000)-1); //TODO: entry_time = current_time -1s
  wallet = 0;
  iswinning = [];
  summary = [];
  showSummary = false
  showOrderForm = false;
  
  //computed
  get call_payout(){
    return this.#payout("call").toFixed(2)
  }
  
  get put_payout(){
    return this.#payout("put").toFixed(2)
  }

  /**
   * 
   * @param {"call"|"put"} type 
   * @returns {Number}
   */
  #payout(type){
return (this.ticks*this.stake)?this.stake /(bs_binary_option(1,1,1,this.ticks / (60 * 60 * 24 * 365),0,0,type) +0.012):0
  }
  //actions

  setHistory(historical_price){
    this.historical_price = historical_price;
  }

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

  setIswinning(iswinning) {
    this.iswinning.push(iswinning);
    setTimeout(() => {
      this.iswinning.shift()
    }, 3500);
  }

  setWallet(amt){
    this.wallet = amt;
  }

  setSummary(summary) {
    this.summary = summary;
  }

  setShowSummary(visibility) {
    this.showSummary = visibility;
  }

  toggleOrderForm(visibility) {
    this.showOrderForm = visibility;
  }

  resetWallet() {
    this.wallet = 20000;
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
  call_payout: computed,
  put_payout: computed,
  wallet: observable,
  summary: observable,
  showSummary: observable,
  iswinning: observable,
  showOrderForm: observable,
  setIndex: action,
  setOptionType: action,
  setTicks: action,
  setState: action,
  setIswinning: action,
  setWallet: action,
  setSummary: action,
  setShowSummary: action,
  toggleOrderForm: action,
  resetWallet: action,
  updateHistory: action,
});
