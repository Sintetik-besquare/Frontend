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
  }, []);

  return (
    <>
      <div className="user-profile-container">
        <Hero />
      </div>
      <div>
        <UserProfile />
      </div>
    </>
  );
};

export default Index;
