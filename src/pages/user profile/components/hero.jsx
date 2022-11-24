import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";

function Hero() {
  const { user_store } = useStores();
  return (
    <div style={{textAlign:"center"}}>
      <b className="user-profile-hero">USER PROFILE</b>
      <p>{user_store.email}</p>
      <p>Joined on: {Date(user_store.date_join).toString()}</p>
    </div>
  );
}

export default observer(Hero);
