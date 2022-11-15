import React from "react";
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
import UserProfile from "./pages/user profile/index";
import Error from "./pages/error/index";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<Landing />} />
          <Route path="/error" element={<Error />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/news" element={<News />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default observer(App);
