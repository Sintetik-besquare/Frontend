import React from "react";
import { getTransaction } from "../../services/transaction";
import { FaFilter } from "react-icons/fa";
import { useState, useEffect } from "react";

function TransactionHistory() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("All");
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
          <th className="dropdown-filter"> 
              <div className="filter">transaction_type<FaFilter/></div>
              <div className="filter-types">
                <button onClick={()=>{setFilter('All')}}>All</button>
                <button onClick={()=>{setFilter("ResetBalance")}}>Reset</button>
                <button onClick={()=>{setFilter('Buy')}}>Buy</button>
                <button onClick={()=>{setFilter('Sell')}}>Sell</button>
              </div>
          </th>
        </tr>
        {transaction.map((t, i) => {

       if (t.transaction_type === filter ||(filter === "All" && transaction.length !== 0)) {
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
      } else {
        return (<></>)
      }


        })}
      </table>
    </>
  );
}

export default TransactionHistory;
