import React from "react";
import { useStores } from "../../../store";
import { observer } from "mobx-react-lite";


const Status = () => {
  const { chart_store } = useStores();
  return <div>{chart_store.status}</div>;
};

export default observer(Status)