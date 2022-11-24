import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";

function Hero() {
  const { user_store } = useStores();
  return (
    <div>
      <h1 className="user-profile-hero">USER PROFILE</h1>
      <h1>{user_store.email}</h1>
      <h1>Joined on: {Date(user_store.date_join).toString()}</h1>
    </div>
  );
}

export default observer(Hero);
