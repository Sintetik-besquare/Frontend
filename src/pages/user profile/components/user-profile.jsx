import React from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../../store";
import { useState } from "react";
import InputFieldText from "./input-field";
import TransactionHistory from "../../transaction history/transaction-history";

const UserProfile = () => {
  const { app_store } = useStores();
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);

  function login() {
    navigate("/", { replace: true });
    app_store.setLogin(true);
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="user-trx-tabs-container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            User Profile
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Transaction History
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <InputFieldText />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <TransactionHistory />
          </div>
        </div>
      </div>
      <div className="user-profile-container"></div>
    </>
  );
};

export default UserProfile;
