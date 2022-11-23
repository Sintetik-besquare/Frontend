import React from "react";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";
import { MdOutlineClose } from "react-icons/md";

const Status = () => {
  const { chart_store } = useStores();

  return (
    <div id="summary">
      <MdOutlineClose
        className="btn_close_summary"
        onClick={() => {
          chart_store.setShowSummary(false);
        }}
      />
      <h1>{chart_store.summary.status}</h1>
      <p>
        entry: {chart_store.summary.entry_price}$ @
        {chart_store.summary.entry_time}
      </p>
      <p>
        exit: {chart_store.summary.exit_price}$ @{chart_store.summary.exit_time}
      </p>
      <p>index: {chart_store.index}</p>
      <p>ticks: {chart_store.ticks}</p>
      <p>stake: {chart_store.stake}</p>
      <p>option: {chart_store.summary.option_type}</p>
      <p>payout: {chart_store.summary.payout}</p>
    </div>
  );
};

export default observer(Status);
