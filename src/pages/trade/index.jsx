import React from "react";
import Chart from "./components/chart";
import OrderForm from "./components/order-form";

export const Index = () => {
  
  return (
    <div className="trade_page">
      <span style={{width:"80%"}}><Chart /></span>
      <span><OrderForm/></span>
    </div>
  );
};

export default Index;
