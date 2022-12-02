import { observable, decorate, action } from "mobx";

export default class AppStore {
  is_loggedin = false;
  is_deposited = false;
  show_modal = false;
  access_token = null;
  show_forgot_password = false;

  constructor() {
    this.access_token = localStorage.getItem("ACCESS_TOKEN");
    this.is_loggedin = !!this.access_token;
  }
  setLogin(isLogin) {
    return (this.is_loggedin = isLogin);
  }

  deposit() {
    return (this.is_deposited = !this.is_deposited);
  }

  setShowModal(show) {
    return (this.show_modal = show);
  }

  setAccessToken(token) {
    this.access_token = token;
    localStorage.setItem("ACCESS_TOKEN", token);
    this.is_loggedin = !!token;
  }

  setShowForgotPassword(show) {
    this.show_forgot_password = show;
  }
}
decorate(AppStore, {
  is_loggedin: observable,
  is_deposited: observable,
  show_modal: observable,
  access_token: observable,
  show_forgot_password: observable,
  setLogin: action,
  deposit: action,
  setShowModal: action,
  setShowForgotPassword: action,
});
