import React from "react";
import { observer } from "mobx-react-lite";
import Chart from "./components/chart";
import OrderForm from "./components/order-form";
// import Status from "./components/status";

export const Index = () => {
  return (
    <div className="trade_page">
      <Chart />
      <OrderForm />
      {/* <div id="status-container"><Status /></div> */}
    </div>
  );
};

export default observer(Index);
