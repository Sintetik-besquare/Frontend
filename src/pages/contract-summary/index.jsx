import React, { useState, useEffect } from "react";
import { getContractSummary } from "../../services/transaction";

function ContractSummary() {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    getContractSummary().then(setTransaction);
  }, []);

  return (
    <>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Contract ID</th>
              <th>Contract Type</th>
              <th>Duration</th>
              <th>Entry Spot</th>
              <th>Exit Spot</th>
              <th>Option Type</th>
              <th>Stake</th>
              <th>Payout</th>
              <th>Symbol</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((t, i) => {
              return (
                <tr key={i}>
                  <td>{t.contract_id}</td>
                  <td>{t.contract_type}</td>
                  <td>{t.duration}</td>
                  <td>{t.entry_spot}</td>
                  <td>{t.exit_spot}</td>
                  <td>{t.option_type.toUpperCase()}</td>
                  <td>{t.stake}</td>
                  <td>{t.payout}</td>
                  <td>{t.symbol}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ContractSummary;
