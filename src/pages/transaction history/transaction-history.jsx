import React from "react";
import { getTransaction } from "../../services/transaction";
import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";

function TransactionHistory() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("All");
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    setTransaction([]);
    getTransaction().then(setTransaction);
  }, []);

  return (
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Contract ID</th>
              <th>Amount</th>
              <th>Balance</th>
              <th>Time</th>
              <th>
                <div className="dropdown-filter">
                <div className="filter">Transaction <FaFilter /></div>
                <div className="filter-types">
                  <button onClick={()=>{setFilter('All')}}>All</button>
                  <button onClick={()=>{setFilter("ResetBalance")}}>Reset</button>
                  <button onClick={()=>{setFilter('Buy')}}>Buy</button>
                  <button onClick={()=>{setFilter('Sell')}}>Sell</button>
                </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((t, i) => {
              if (
                t.transaction_type === filter ||
                (filter === "All" && transaction.length !== 0)
              ) {
                return (
                  <tr key={i}>
                    <td>{t.transaction_id}</td>
                    <td>{t.contract_id}</td>
                    {/* <td className={t.transaction_amount >= -1 ? "green" : "red"}>
                    {t.transaction_amount}  */}
                    <td
                      className={t.transaction_amount >= -1 ? "green" : "red"}
                    >
                      {t.transaction_amount}
                    </td>
                    <td>{t.balance}</td>
                    <td>
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      }).format(t.transaction_time * 1000)}
                    </td>
                    <td>{t.transaction_type}</td>
                  </tr>
                );
              } else {
                return <></>;
              }
            })}
          </tbody>
        </table>
      </div>
  );
}

export default TransactionHistory;
