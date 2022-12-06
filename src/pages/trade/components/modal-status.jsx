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
          fontSize: "x-small",
        }}
      >
        {chart_store.iswinning.map((e, i) => {
          return (
            <li
              key={i}
              style={
                e === "Win"
                  ? { color: "green", border:"1px solid green"}
                  : {color: "red", border:"1px solid red"}
              }
              id="iswinning"
            >
              {e}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default observer(Status);
