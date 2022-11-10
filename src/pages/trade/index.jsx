import React from "react";
import Chart from "./components/chart";
import OrderForm from "./components/order-form";

export const Index = () => {
  
  return (
    <div className="flex-block">
      <Chart />
      <OrderForm />
    </div>
  );
};

export default Index;
