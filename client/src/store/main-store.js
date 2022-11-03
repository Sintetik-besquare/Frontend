import { observable, computed, action, decorate } from "mobx";

export default class MainStore {
  start = Date.now();
  current = Date.now();

  get elapsedTime() {
    return this.current - this.start + "milliseconds";
  }

  tick() {
    this.current = Date.now();
  }
}
decorate(MainStore, {
  start: observable,
  current: observable,
  elapsedTime: computed,
  tick: action,
});
