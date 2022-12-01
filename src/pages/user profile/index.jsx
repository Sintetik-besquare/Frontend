import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../store";
import UserProfile from "./components/user-profile";
import { observer } from "mobx-react-lite";
import ContractSummary from "../contract-summary";
import TransactionHistory from "../transaction history/transaction-history.jsx";

const Tabs = () => {
  const { app_store } = useStores();
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(2);

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
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Contract Summary
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <UserProfile />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <TransactionHistory />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <ContractSummary />
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(Tabs);
