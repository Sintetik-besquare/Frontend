import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import { getUserDetails } from "../../../services/user-info";

const PrimaryCard = () => {
  const { user_store } = useStores();

  return (
    <div>
      <h1 style={{ color: "white" }}>{user_store.email}</h1>
      <h1 style={{ color: "white" }}>
        Joined on: {Date(user_store.date_join).toString()}
      </h1>
    </div>
  );
};

export default observer(PrimaryCard);
