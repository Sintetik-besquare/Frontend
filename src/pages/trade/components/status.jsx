import React from "react";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";

const Status = () => {
  const { chart_store } = useStores();

  return (
    <div>
      <h1 style={{color:"white"}}>{chart_store.iswinning}</h1>
    </div>
  );
};

export default observer(Status);
