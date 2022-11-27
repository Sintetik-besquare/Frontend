import React from "react";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";
import { MdOutlineClose } from "react-icons/md";

const Status = () => {
  const { chart_store } = useStores();

  return (
    <div id="summary" className={chart_store.summary.status==="Win" ? "win-gradient" : "lost-gradient"}>
      <MdOutlineClose
        className="btn_close_summary"
        onClick={() => {
          chart_store.setShowSummary(false);
        }}
      />
      <h1 style={{ margin: 0, padding: 0 }}>{chart_store.summary.status}</h1>

      {/* {chart_store.summary.exit_time} */}
      <table>
        <tr>
          <td>Entry:</td>
          <td>{chart_store.summary.entry_price}$ </td>
        </tr>
        <tr>
          <td>Exit:</td>
          <td>{chart_store.summary.exit_price}$ </td>
        </tr>
        <tr>
          <td>Payout:</td>
          <td>{chart_store.summary.payout}</td>
        </tr>
        <tr>
          <td>Index:</td>
          <td>{chart_store.index}</td>
        </tr>
        <tr>
          <td>Ticks:</td>
          <td>{chart_store.ticks}</td>
        </tr>
        <tr>
          <td>Stake:</td>
          <td>{chart_store.stake}</td>
        </tr>
        <tr>
          <td>Option:</td>
          <td>{chart_store.option_type}</td>
        </tr>
      </table>
      {/* <p>index: {chart_store.index}</p>
      <p>ticks: {chart_store.ticks}</p>
      <p>stake: {chart_store.stake}</p>
      <p>option: {chart_store.summary.option_type}</p> */}
    </div>
  );
};

export default observer(Status);