<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import { getUser, updateUser } from "../../../services/users";
import MobileLogin from "../../../assets/astronout.png";

function PrimaryCard() {
  //useStore from users.js
  const { user_store } = useStores();

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();

    var time = date + " " + month + " " + year + " ";
    return time;
  }

  useEffect(() => {
    getUser().then((z) => user_store.updateUserDetail(z));
  }, []);

  useEffect(() => {
    console.log(user_store.user_detail);
  }, [user_store.user_detail]);

  return (
    <>
      <div className="user-profile-primary-card">
        <div>
          <img src={MobileLogin} alt="N/A" style={{ width: "10vw" }} />
        </div>
        <div className="span-details-container">
          <h1>
            <span className="span-main-details">email</span>
            {user_store.user_detail.email}
          </h1>
          <h1>
            <span className="span-main-details">client id</span>
            {user_store.user_detail.client_id}
          </h1>
          <h1>
            <span className="span-main-details">joined since</span>
            {timeConverter(user_store.user_detail.date_join)}
          </h1>
        </div>
      </div>
      ;
    </>
=======
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import { getUserDetails } from "../../../services/user-info";

const PrimaryCard = () => {
  const { user_store } = useStores();

  return (
=======
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";
import { getUserDetails } from "../../../services/user-info";

const PrimaryCard = () => {
  const { user_store } = useStores();

  return (
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
    <div>
      <h1 style={{ color: "white" }}>{user_store.email}</h1>
      <h1 style={{ color: "white" }}>
        Joined on: {Date(user_store.date_join).toString()}
      </h1>
    </div>
<<<<<<< HEAD
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
=======
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
  );
};

export default observer(PrimaryCard);
