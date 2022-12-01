import React, { useState, useEffect } from "react";
import { getContractSummary } from "../../services/transaction";

function ContractSummary() {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    getContractSummary().then(setTransaction);
  }, []);

  return (
    <>
      <table>
        <tr>
          <th>contract id</th>
          <th>contract type</th>
          <th>duration</th>
          <th>entry spot</th>
          <th>exit spot</th>
          <th>option type</th>
          <th>stake</th>
          <th>payout</th>
          <th>symbol</th>
        </tr>
        {transaction.map((t, i) => {
          return (
            <tr key={i}>
              <td>{t.contract_id}</td>
              <td>{t.contract_type}</td>
              <td>{t.duration}</td>
              <td>{t.entry_spot}</td>
              <td>{t.exit_spot}</td>
              <td>{t.optoin_type}</td>
              <td>{t.stake}</td>
              <td>{t.payout}</td>
              <td>{t.symbol}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default ContractSummary;
