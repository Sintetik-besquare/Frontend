import { observable, decorate, action, autorun } from "mobx";

export default class AppStore {
  is_loggedin = false;
  is_deposited = false;

  setLogin(isLogin) {
    // console.log(" " + this.is_loggedin + " " + isLogin);
    return (this.is_loggedin = isLogin);
  }

  deposit() {
    return (this.is_deposited = !this.is_deposited);
  }
}
decorate(AppStore, {
  is_loggedin: observable,
  is_deposited: observable,
  setLogin: action,
  deposit: action,
});

// autorun(() => {
//   alert("");
// });
