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
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "wrap",
          color: "white",
          margin: 0,
          padding: 0,
        }}
      >
        {chart_store.iswinning.map((e, i) => {
          return (
            <li key={i} style={{ width: "10%" }} id="iswinning">
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default observer(Status);
