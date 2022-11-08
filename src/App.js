import React from "react";
import "./App.scss";
import io from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStores } from "./store";

import Nav from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./pages/landing/index.jsx";
import Trade from "./pages/trade/index.jsx";
import News from "./pages/news/index.jsx";
import Signup from "./pages/auth/signup.jsx";
import Signin from "./pages/auth/signin.jsx";

const socket = io.connect("http://localhost:3002");

function App() {
  const { chart_store } = useStores();

  // To get price feed
  socket.on("getfeed", (price) => {
    chart_store.price_array.push(price)
    console.log(chart_store.price_array);
  });

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
}

export default App;