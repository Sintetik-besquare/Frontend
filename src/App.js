import React, { useEffect } from "react";
import { useStores } from "./store";
import { observer } from "mobx-react-lite";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./pages/landing/index.jsx";
import Trade from "./pages/trade/index.jsx";
import News from "./pages/news/index.jsx";
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";

const App = () => {
  const { app_store } = useStores();

  useEffect(() => {
    if (
      localStorage.getItem(
        "ACCESS_TOKEN" !== null && "ACCESS_TOKEN" !== undefined
      )
    ) {
      app_store.setLogin(true);
    } else {
      app_store.setLogin(false);
    }
  }, [app_store]);

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default observer(App);
