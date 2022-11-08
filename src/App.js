import React, { useEffect } from "react";
import "./App.scss";
import io from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStores } from "./store";

import Nav from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./pages/landing/index.jsx";
import Trade from "./pages/trade/index.jsx";
import News from "./pages/news/index.jsx";
<<<<<<< HEAD
import Signup from "./pages/auth/components/signup.jsx";
import Signin from "./pages/auth/components/signin.jsx";
=======
import Signup from "./pages/auth/signup";
import Signin from "./pages/auth/signin";
>>>>>>> 6beb4dfa9ee543c1dc1c797e0d9eaa876b31d341


import { getHistoricalFeed } from "./services/historical-feed";


const App = () => {
  const socket = io.connect("http://localhost:3002");
  const { chart_store } = useStores();
  const [history, setHistory] = React.useState([]);
  
  // wrap fetch in useEffect watch empty array (triggers on Mount)
  useEffect(() => {
    getHistoricalFeed().then(setHistory);
    console.log(history)
  }, []);

  // To get price feed
  socket.on("getfeed", (price) => {
    // chart_store.price_array.push(price)
    // console.log(price);
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
