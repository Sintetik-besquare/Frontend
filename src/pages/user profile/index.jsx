import React from "react";
import Hero from "./components/hero";
import UserProfile from "./components/user-profile";

export const Index = () => {
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
