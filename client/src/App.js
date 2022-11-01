import "./App.scss";
// import io from "socket.io-client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./pages/landing/index.jsx";
import Trade from "./pages/trade/index.jsx";
import News from "./pages/news/index.jsx";
import Signup from "./pages/auth/signup.jsx";
import Signin from "./pages/auth/signin.jsx";

import Component from "./dump/components"

// const socket = io.connect("http://localhost:3001");

function App() {
  //To get price feed
  // socket.on("getfeed", (price) => {
  //   console.log(price);
  // });

  return (
    <div>
      <Component />
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
    </div>
  );
}

export default App;
