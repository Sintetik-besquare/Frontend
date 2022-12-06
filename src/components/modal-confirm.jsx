import React from "react";
import { useStores } from "../store";
import { observer } from "mobx-react-lite";

const ErrorMsg = (msg) => {
  const { app_store } = useStores();

  function cancel() {
    app_store.show_confirm_message = false;
    app_store.confirm_messages = [];
  }

  function confirm() {
    app_store.confirm = true;
    app_store.show_confirm_message = false;
    app_store.confirm_messages = [];
  }

  return (
    app_store.show_confirm_message && (
      <div id="confirm-msg-container">
        <div id="confirm-msg-modal">
          {app_store.confirm_messages.map((msg, i) => {
            return <p key={i}>{msg}</p>;
          })}
          <div>
            <button className="button_red_small" onClick={() => cancel()}>No</button>
            <button className="button_green_small" onClick={() => confirm()}>Yes</button>{" "}
          </div>
        </div>
      </div>
    )
  );
};

export default observer(ErrorMsg);