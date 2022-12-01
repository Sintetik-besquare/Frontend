import React from "react";
import { getTransaction } from "../../services/transaction";
import { FaFilter } from "react-icons/fa";
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
      <table>
        <tr>
          <th>contract id</th>
          <th>transaction_id</th>
          <th>transaction_amount</th>
          <th>balance</th>
          <th>transaction_time</th>
          <th>transaction_type</th>
        </tr>
        {transaction.map((t, i) => {
          return (
            <tr key={i}>
              <td>{t.contract_id}</td>
              <td>{t.transaction_id}</td>
              <td>{t.transaction_amount}</td>
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
      </table>
    </>
  );
}

export default TransactionHistory;
