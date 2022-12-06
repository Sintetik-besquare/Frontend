import { observable, decorate, action } from "mobx";

export default class AppStore {
  is_loggedin = false;
  is_deposited = false;
  show_modal = false;
  access_token = null;
  show_forgot_password = false;
  error_messages = [];
  confirm_messages = [];
  show_error_message = false;
  show_confirm_message = false;
  code = 0;
  confirm = false;

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
  error_messages: observable,
  show_error_message: observable,
  show_confirm_message: observable,
  confirm_message: observable,
  code: observable,
  confirm: observable,
  setLogin: action,
  deposit: action,
  setShowModal: action,
  setShowForgotPassword: action,
});
