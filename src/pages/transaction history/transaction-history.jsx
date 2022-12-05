import React from "react";
import { getTransaction } from "../../services/transaction";
import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import spaceman from "../../assets/spacemen2.png"

function TransactionHistory() {
  const [transaction, setTransaction] = useState([]);
  const [filter, setFilter] = useState("All");
  const filtered = React.useMemo(() => {
    return filter === "All"
      ? transaction
      : transaction.filter((z) => z.transaction_type === filter);
  }, [transaction, filter]);

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
                <div className="filter">
                  Transaction <FaFilter />
                </div>
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
          {filtered.map((t, i) => {
            return (
              <tr key={i}>
                <td>{t.transaction_id}</td>
                <td>{t.contract_id}</td>
                <td className={t.transaction_amount > 0 ? "green" : "red"}>
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
          })}
        </tbody>
      </table>
      {filtered.length === 0 ? (
        <span style={{textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center", height:"90%"}}>
          <span>
            <img src={spaceman} alt="two confused spacemen" style={{height:"200px"}}/>
            <h3 style={{color:"black"}}>No transaction history to show</h3>
            <h4>Get trading and see your records here</h4>
          </span>
        </span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default TransactionHistory;
