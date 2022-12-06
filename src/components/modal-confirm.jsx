import React from "react";
import { useStores } from "../store";
import { observer } from "mobx-react-lite";
import { resetBalance } from "../services/wallet";

const ErrorMsg = () => {
  const { app_store, chart_store } = useStores();

  function cancel() {
    app_store.show_confirm_message = false;
    app_store.confirm_messages = "";
    app_store.confirm = false;
  }

  function confirm() {
    if (app_store.reset === 1) {
      //reset wallet
      app_store.confirm = true;
      resetBalance(true).then((e) => {
        chart_store.setWallet(e);
      });
      clearStore();
    } else if (app_store.reset === 2) {
      //logout
      app_store.setAccessToken("");
      localStorage.clear();
      app_store.show_modal = false;
      app_store.setLogin(false);
      clearStore();
    }
  }

  function clearStore() {
    app_store.show_confirm_message = false;
    app_store.confirm_messages = "";
    app_store.reset = 0;
  }

  return (
    <>
      {app_store.show_confirm_message && (
        <div id="confirm-msg-container">
          <div id="confirm-msg-modal">
            <p>{app_store.confirm_messages}</p>
            <div>
              <button className="button_red_small" onClick={() => cancel()}>
                No
              </button>
              <button className="button_green_small" onClick={() => confirm()}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      {app_store.confirm && (
        <div id="error-msg-container">
          <div id="error-msg-modal">
            <p>wallet has been resetted, balance is now $20000.00</p>
            <button onClick={() => cancel()}>X</button>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(ErrorMsg);
