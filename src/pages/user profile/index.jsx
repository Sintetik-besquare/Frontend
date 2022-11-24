import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import Hero from "./components/hero";
import Tabs from "./components/tabs";

export const Index = () => {
  return (
    <div className="user-profile-page">
      <div className="user-profile-container">
        <Hero />
      </div>
        <Tabs />
    </div>
  );
};

export default observer(Index);
