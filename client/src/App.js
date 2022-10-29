import './App.css';
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function App() {

  //To get price feed 
  socket.on("getfeed", (price) => {
    console.log(price); 
  })

  return (
    <div>
      ToDOOOOO
    </div>
  );
}

export default App;
