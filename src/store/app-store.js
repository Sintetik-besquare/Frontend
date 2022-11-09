import { observable, decorate, action } from "mobx";

export default class AppStore {
  is_loggedin = false;
  is_deposited = false;
  show_modal = false;

  setLogin(isLogin) {
    return (this.is_loggedin = isLogin);
  }

  deposit() {
    return (this.is_deposited = !this.is_deposited);
  }

  setShowModal(show){
    return (this.show_modal = show);
  }
}
decorate(AppStore, {
  is_loggedin: observable,
  is_deposited: observable,
  show_modal: observable,
  setLogin: action,
  deposit: action,
  setShowModal: action,
});