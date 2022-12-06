import React from "react";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";
import { MdOutlineClose } from "react-icons/md";

const Status = () => {
  const { chart_store } = useStores();

  return (
    <div
      id="summary"
      className={
        chart_store.payoutSummary.status === "Win" ? "win-gradient" : "lost-gradient"
      }
    >
      <MdOutlineClose
        className="btn_close_summary"
        onClick={() => {
          chart_store.toggleShowSummary(false);
        }}
      />
      <h1 style={{ margin: 0, padding: 0 }}>{chart_store.payoutSummary.status}</h1>

      <table>
        <tr>
          <td>Entry:</td>
          <td>{chart_store.payoutSummary.entry_price}$ </td>
        </tr>
        <tr>
          <td>Exit:</td>
          <td>{chart_store.payoutSummary.exit_price.toFixed(2)}$ </td>
        </tr>
        <tr>
          <td>Payout:</td>
          <td>{chart_store.payoutSummary.payout}</td>
        </tr>
        <tr>
          <td>Index:</td>
          <td>{chart_store.orderSummary.index}</td>
        </tr>
        <tr>
          <td>Ticks:</td>
          <td>{chart_store.orderSummary.ticks}</td>
        </tr>
        <tr>
          <td>Stake:</td>
          <td>{chart_store.orderSummary.stake}</td>
        </tr>
        <tr>
          <td>Contract:</td>
          <td>{chart_store.orderSummary.contract_type}</td>
        </tr>
        <tr>
          <td>Option:</td>
          <td>{chart_store.orderSummary.option_type}</td>
        </tr>
      </table>
    </div>
  );
};

export default observer(Status);
