import React from "react";
import { observer } from "mobx-react-lite";
import Chart from "./components/chart";
import OrderForm from "./components/order-form";

export const Index = () => {
  return (
    <div className="trade_page">
      <Chart />
      <OrderForm />
    </div>
  );
};

export default observer(Index);
