import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "./store";

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/navbar";
import Landing from "./pages/landing/index.jsx";
import Trade from "./pages/trade/index.jsx";
import News from "./pages/news/index.jsx";
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";
import UserProfile from "./pages/user profile/index";
import Error from "./pages/error/index";
import Password from "./pages/auth/forgot-password";

import { getUserDetails } from "./services/user-info";
import { getBalance } from "./services/wallet";
import ErrorMsg from "./components/modal-error";
import ConfirmMsg from "./components/modal-confirm";

const App = () => {
  const { app_store, user_store, chart_store } = useStores();

  useEffect(() => {
    if (app_store.is_loggedin) {
      getBalance().then((e) => {
        chart_store.setWallet(e);
      });

      getUserDetails().then((e) => {
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
      });
    }
  }, [app_store.is_loggedin, chart_store, user_store]);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<Landing />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/news" element={<News />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpw" element={<Password />} />
          {app_store.is_loggedin ? (
            <Route path="/profile" element={<UserProfile />} />
          ) : (
            <Route path="/profile" element={<Error />} />
          )}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <ErrorMsg />
      <ConfirmMsg />
    </div>
  );
};

export default observer(App);
