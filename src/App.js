import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
