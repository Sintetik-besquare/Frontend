import React from "react";
import { useStores } from "../store";
import { observer } from "mobx-react-lite";

const ErrorMsg = (err) => {
  const { app_store } = useStores();

  function closeErrorModal() {
    app_store.show_error_message = false;
    app_store.error_messages = [];
  }

  return (
    app_store.show_error_message && (
      <div id="error-msg-container">
        <div id="error-msg-modal">
          {app_store.error_messages.map((err, i) => {
            return <p key={i}>{err}</p>;
          })}
          <button onClick={() => closeErrorModal()}>X</button>
        </div>
      </div>
    )
  );
};

export default observer(ErrorMsg);
