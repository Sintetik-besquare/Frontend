import React, { useState, useEffect } from "react";
import { getContractSummary } from "../../services/transaction";
import { FaFilter } from "react-icons/fa";
import spaceman from "../../assets/spacemen2.png"

function ContractSummary() {
  const [transaction, setTransaction] = useState([]);
  const [filter, setFilter] = useState("All");
  const filtered = React.useMemo(() => {
    return filter === "All"
      ? transaction
      : transaction.filter((z) => z.symbol === filter);
  }, [transaction, filter]);

  useEffect(() => {
    getContractSummary().then(setTransaction);
  }, []);

  return (
    <>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Contract id</th>
              <th>
                <div className="dropdown-filter">
                  <div className="filter">
                    Symbol <FaFilter />
                    <div className="filter-types">'
                      <button onClick={()=>{setFilter('All')}}>All</button>
                      <button onClick={()=>{setFilter("VOL20")}}>VOL20</button>
                      <button onClick={()=>{setFilter('VOL40')}}>VOL40</button>
                      <button onClick={()=>{setFilter('VOL60')}}>VOL60</button>
                      <button onClick={()=>{setFilter('VOL80')}}>VOL80</button>
                      <button onClick={()=>{setFilter('VOL100')}}>VOL100</button>
                      <button onClick={()=>{setFilter('VOL200')}}>VOL200</button>
                    </div>
                  </div>
                </div>
              </th>
              <th>Contract</th>
              <th>Option</th>
              <th>Duration</th>
              <th>Stake</th>
              <th>Entry</th>
              <th>Exit</th>
              <th>Payout</th>
            </tr>
          </thead>
          {filtered.map((t, i) => {
            return (
              <tbody>
                <tr key={i}>
                  <td>{t.contract_id}</td>
                  <td>{t.symbol}</td>
                  <td>{t.contract_type}</td>
                  <td>{t.option_type}</td>
                  <td>{t.duration}</td>
                  <td>{t.stake}</td>
                  <td>{t.entry_spot}</td>
                  <td>{t.exit_spot}</td>
                  <td>{t.payout}</td>
                </tr>
              </tbody>
            );
          })}

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
    </>
  );
}

export default ContractSummary;
