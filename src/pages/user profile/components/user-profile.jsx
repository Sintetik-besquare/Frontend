import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStores } from "../../../store";
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import InputFieldText from "./input-field";
import TransactionHistory from "../../transaction history/transaction-history";
=======
import MobileLogin from "../../../assets/astronout.png";
import InputFieldText from "./input-field";
import { getTransaction } from "../../../services/transaction";
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
=======
import MobileLogin from "../../../assets/astronout.png";
import InputFieldText from "./input-field";
import { getTransaction } from "../../../services/transaction";
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275

const UserProfile = () => {
  const { app_store } = useStores();
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  const [transaction, setTransaction] = useState([]);
  const [filter, setFilter] = useState('Buy')

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
<<<<<<< HEAD
<<<<<<< HEAD
            <TransactionHistory />
=======
=======
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
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
                if(t.transaction_type===filter || filter === 'All')
                return (
                  <div key={i} className="transaction-card">
                    {Date(t.transaction_time).toString()}
                    <br />
                    {t.transaction_type}: {t.transaction_amount}
                    <br />
                    balance: {t.balance}
                  </div>
                )
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
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
          </div>
        </div>
      </div>
      <div className="user-profile-container"></div>
    </>
  );
};

export default UserProfile;
