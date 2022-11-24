import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
// import { useStores } from "../../store";
import Hero from "./components/hero";
import UserProfile from "./components/user-profile";
// import { getUserDetails } from "../../services/user-info";

export const Index = () => {
  // const { user_store } = useStores();

  // useEffect(() => {
  //   getUserDetails()
  //     .then((e) => {
  //       console.log("e");
  //       console.log(e);
  //       user_store.setAge(e.age);
  //       user_store.setId(e.client_id);
  //       user_store.setDateJoin(e.date_join);
  //       user_store.setEducation(e.education);
  //       user_store.setEmail(e.email);
  //       user_store.setFirstName(e.first_name);
  //       user_store.setGender(e.gender);
  //       user_store.setLastName(e.last_name);
  //       user_store.setOccupation(e.occupation);
  //       user_store.setResidence(e.residence);
  //     })
  // }, []);

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
