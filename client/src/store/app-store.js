import { observable, computed, action, decorate } from "mobx";

export default class AppStore {
  start = Date.now();
  current = Date.now();

  get elapsedTime() {
    return this.current - this.start + "milliseconds";
  }

  tick() {
    this.current = Date.now();
  }
}
decorate(AppStore, {
  start: observable,
  current: observable,
  elapsedTime: computed,
  tick: action,
});
