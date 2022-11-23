import React from "react";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";

const Status = () => {
  const { chart_store } = useStores();

  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          color: "white",
          margin: 0,
          padding: 0,
        }}
      >
        {chart_store.iswinning.map((e, i) => {
          return (
            <li key={i} style={{ width: "10%" }}>
              {e}
            </li>
          );
        })}
      </ul>

      {chart_store.showSummary === true ? (
        <div>
          <h1 style={{ color: "white" }}>
            entry: {chart_store.summary.entry_price}$ @
            {chart_store.summary.entry_time}
          </h1>
          <h1 style={{ color: "white" }}>
            exit: {chart_store.summary.exit_price}$ @
            {chart_store.summary.exit_time}
          </h1>
          <h1 style={{ color: "white" }}>index: {chart_store.index}</h1>
          <h1 style={{ color: "white" }}>ticks: {chart_store.ticks}</h1>
          <h1 style={{ color: "white" }}>stake: {chart_store.stake}</h1>
          <h1 style={{ color: "white" }}>
            option: {chart_store.summary.option_type}
          </h1>
          <h1 style={{ color: "white" }}>
            payout: {chart_store.summary.payout}
          </h1>
          <h1 style={{ color: "white" }}>
            status: {chart_store.summary.status}
          </h1>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default observer(Status);
