import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../../store";
import MobileLogin from "../../../assets/astronout.png";
import InputFieldText from "./input-field";
import { getTransaction } from "../../../services/transaction";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";
import { FaSmileWink } from "react-icons/fa";

import { observer } from "mobx-react-lite";

const UserProfile = () => {
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
            <InputFieldText />
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
                      <div className="trade-logo">
                        Vol 100
                      </div>
                      {t.transaction_type === "Sell" ? t.transaction_amount === "0.00" ? 
                      <FaSmileWink style={{color:"yellow"}}/> :
                      <AiFillCaretUp id="rise-icon" /> : t.transaction_type === "Buy" ? 
                      <AiFillCaretDown id="fall-icon"/> : <VscDebugRestart id="reset-icon"/>}
                      </div>
                      <br />
                      {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(t.transaction_time * 1000)}
                      <br />
                      {t.transaction_type}: ${t.transaction_amount}
                      <br />
                      Balance: ${t.balance}
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

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>
        </div>
      </div>
      <div className="user-profile-container"></div>
    </>
  );
};

export default observer(UserProfile);
