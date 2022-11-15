import React from "react";
import Chart from "./components/chart";
import OrderForm from "./components/order-form";


export const Index = () => {
  
  return (
    <div className="trade_page">
      <Chart />
      <OrderForm/>
    </div>
  );
};

export default Index;
