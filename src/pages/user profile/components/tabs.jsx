import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../../store";
import UserProfile from "./user-profile";
import { getTransaction } from "../../../services/transaction";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";
import { FaSmileWink } from "react-icons/fa";
import GreenGraph from "../../../assets/green_graph.png";
import RedGraph from "../../../assets/red_graph.png";
import { observer } from "mobx-react-lite";

const Tabs = () => {
  const { app_store } = useStores();
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  const [transaction, setTransaction] = useState([]);
  const [filter, setFilter] = useState('All')

  function login() {
    navigate("/", { replace: true });
    app_store.setLogin(true);
  }

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    getTransaction().then(setTransaction);
  }, []);

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
            <UserProfile />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="transaction-container">
              <h2>Transaction History ({filter})</h2>
              <div style={{display:"flex", justifyContent:"center", gap:"10px"}}>
                <button onClick={()=>{setFilter('All')}}>All</button>
                <button onClick={()=>{setFilter("ResetBalance")}}>Reset</button>
                <button onClick={()=>{setFilter('Buy')}}>Buy</button>
                <button onClick={()=>{setFilter('Sell')}}>Sell</button>
              </div>
              <hr />
              {transaction.map((t, i) => {
                if (
                  t.transaction_type === filter ||
                  (filter === "All" && transaction.length !== 0)
                  ) {
                  return (
                    <div className="transaction-area">
                      <div key={i} className="transaction-card">
                        <div className="transaction-card-top">
                          <div className="trade-logo">Vol 100</div>
                          <div>
                            {new Intl.DateTimeFormat("en-US", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                            }).format(t.transaction_time * 1000)}
                          </div>
                          {t.transaction_type === "Sell" ? (
                            t.transaction_amount === "0.00" ? (
                              <FaSmileWink style={{ color: "yellow" }} />
                            ) : (
                              <AiFillCaretUp id="rise-icon" />
                            )
                          ) : t.transaction_type === "Buy" ? (
                            <AiFillCaretDown id="fall-icon" />
                          ) : (
                            <VscDebugRestart id="reset-icon" />
                          )}
                        </div>
                        <div className="transaction-card-bottom">
                          &nbsp;
                          <div style={{textAlign:"left"}}>
                            {t.transaction_type}: {t.transaction_amount} USD
                            <br />
                            Balance: {t.balance} USD
                          </div>
                          <div>
                          {t.transaction_type === "Sell" ? (
                            t.transaction_amount === "0.00" ? 
                          <img src={RedGraph} altpo="Logo" /> :
                          <img src={GreenGraph} altpo="Logo" />) :
                          "Not sell"
                          }
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else if (transaction.length == 0) {
                  return (
                    <div className="transaction-card">
                      Balance: "none"
                    </div>
                  )
                }
              })}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default observer(Tabs);