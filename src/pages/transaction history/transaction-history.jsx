import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import TransactionHistoryCard from "./transaction-history-card";

const TransactionHistory = () => {
  // const [transactionHIstory, setTransactionHistory] = useState([]);

  // const getTransactionHistory = async () => {
  //   const response = await axios.get();
  //   setTransactionHistory(response.data);
  //   console.log(response);
  // };

  // useEffect(() => {
  //   // run these code on Mount
  //   //fetch code should be here
  // }, []);

  return (
    <>
      <div className="outgoing-transaction">
        <TransactionHistoryCard />
        {/* {transactionHIstory
          .slice()
          .sort(function (a, b) {
            return new Date(b.entrytime) - new Date(a.entrytime);
          })
          .map((transactionHIstory, i) => (
            <TransactionHistoryCard />
          ))} */}
      </div>
    </>
  );
};

export default TransactionHistory;
