<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { useEffect } from "react";
import Hero from "./components/hero";
import UserProfile from "./components/user-profile";
import { getUser } from "../../services/users";
import { useState } from "react";
import { useStores } from "../../store"; //import store

export const Index = () => {
  const { chart_store, app_store, user_store } = useStores(); //initialize store
  const [user, setUser] = useState(app_store.is_loggedin); //access store

  useEffect(() => {
    getUser().then(setUser);
=======
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../store";
import Hero from "./components/hero";
import UserProfile from "./components/user-profile";
import { getUserDetails } from "../../services/user-info";

export const Index = () => {
=======
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../store";
import Hero from "./components/hero";
import UserProfile from "./components/user-profile";
import { getUserDetails } from "../../services/user-info";

export const Index = () => {
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
  const { user_store } = useStores();

  useEffect(() => {
    getUserDetails()
      .then((e) => {
        console.log("e");
        console.log(e);
        user_store.setAge(e.age);
        user_store.setId(e.client_id);
        user_store.setDateJoin(e.date_join);
        user_store.setEducation(e.education);
        user_store.setEmail(e.email);
        user_store.setFirstName(e.first_name);
        user_store.setGender(e.gender);
        user_store.setLastName(e.last_name);
        user_store.setOccupation(e.occupation);
        user_store.setResidence(e.residence);
      })
<<<<<<< HEAD
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
=======
>>>>>>> 31a50cdad367e5c142c33d808828eb066290e275
  }, []);

  return (
    <div className="user-profile-page">
      <div className="user-profile-container">
        <Hero />
      </div>
      <div>
        <UserProfile />
      </div>
    </div>
  );
};

export default observer(Index);
