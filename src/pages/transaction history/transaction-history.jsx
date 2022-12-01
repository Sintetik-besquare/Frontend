import React from "react";
import { getTransaction } from "../../services/transaction";
import { useState, useEffect } from "react";

function TransactionHistory() {
  const [filter, setFilter] = useState("All");
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    setTransaction([]);
    getTransaction().then(setTransaction);
  }, []);

  return (
    <>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Contract ID</th>
              <th>Transaction ID</th>
              <th>Transaction Amount</th>
              <th>Balance</th>
              <th>Transaction Time</th>
              <th>Transaction Type</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((t, i) => {
              return (
                <tr key={i}>
                  <td>{t.contract_id}</td>
                  <td>{t.transaction_id}</td>
                  {/* <td className={t.transaction_amount >= -1 ? "green" : "red"}>
                    {t.transaction_amount}  */}
                  <td className={t.transaction_amount >= -1 ? "green" : "red"}>
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
      </div>
    </>
  );
}

export default TransactionHistory;
