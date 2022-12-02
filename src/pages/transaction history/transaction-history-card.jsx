import React from "react";
import { useState } from "react";
import StockMarket from "../../assets/stock-market.png";

const TransactionHistoryCard = () => {
  const [volatility, setVolatility] = useState();
  const [referenceId, setReferenceId] = useState();
  const [payout, setPayout] = useState();
  const [transactionTime, setTransactionTime] = useState();
  const [transactionType, setTransactionType] = useState();

  const getVolatility = () => {
    setVolatility(volatility);
  };

  const getReferenceId = () => {
    setReferenceId(referenceId);
  };

  const getPayout = () => {
    setPayout(payout);
  };

  const getTransactionTime = () => {
    setTransactionTime(transactionTime);
  };

  const getTransactionType = () => {
    setTransactionType(transactionType);
  };

  return (
    <>
      <div className="transaction-history-container">
        <div className="box orange">
          <h2 className="transaction-history-volatility">
            Volatility ${volatility}
            <span className={payout === 1 ? "red" : "green"}>Win</span>
          </h2>
          <h3>
            Rise/fall
            <span className={payout === 1 ? "red" : "green"}>${payout}</span>
          </h3>
          <div className="transaction-history-details">
            <p>Reference ID: ${referenceId}</p>
            <p></p>
            <p>Transaction type: ${transactionType}</p>
            <p>Transaction time: ${transactionTime}</p>
          </div>

          <img
            src={StockMarket}
            alt=""
            style={{
              resizeMode: "repeat",
              height: 60,
              width: 70,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default TransactionHistoryCard;
