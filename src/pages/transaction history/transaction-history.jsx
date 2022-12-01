import React from "react";
import { getTransaction } from "../../services/transaction";
import { FaFilter, FaEquals } from "react-icons/fa";
import { useState, useEffect } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { VscDebugRestart } from "react-icons/vsc";
import GreenGraph from "../../assets/green_graph.png";
import RedGraph from "../../assets/red_graph.png";

function TransactionHistory() {
  const [filter, setFilter] = useState("All");
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    getTransaction().then(setTransaction);
  }, []);

  return (
    <>
      <div className="transaction-container">
        <div>Hello</div>
        <div className="transaction-columns">
          <div style={{ width: "50vw" }}>
            <div className="dropdown-filter">
              <button className="filter">
                <FaFilter /> Filter by
              </button>
              <div className="filter-types">
                <button
                  onClick={() => {
                    setFilter("All");
                  }}
                >
                  All
                </button>
                <button
                  onClick={() => {
                    setFilter("ResetBalance");
                  }}
                >
                  Reset
                </button>
                <button
                  onClick={() => {
                    setFilter("Buy");
                  }}
                >
                  Buy
                </button>
                <button
                  onClick={() => {
                    setFilter("Sell");
                  }}
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
          <div id="history-list">
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
                            <FaEquals style={{ color: "white" }} />
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
                        <div style={{ textAlign: "left" }}>
                          {t.transaction_type}: {t.transaction_amount} USD
                          <br />
                          Balance: {t.balance} USD
                        </div>
                        <div>
                          {t.transaction_type === "Sell" ? (
                            t.transaction_amount === "0.00" ? (
                              <img src={RedGraph} altpo="Logo" />
                            ) : (
                              <img src={GreenGraph} altpo="Logo" />
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (transaction.length === 0) {
                return <div className="transaction-card">Balance: "none"</div>;
              }
            })}
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default TransactionHistory;
