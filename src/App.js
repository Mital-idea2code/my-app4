import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="App">
      {activeSection === "home" && <Home onSectionChange={handleSectionChange} />}
      {activeSection === "about" && <About onSectionChange={handleSectionChange} />}
      {activeSection === "skill" && <Skill onSectionChange={handleSectionChange} />}
    </div>
  );
}

export default App;
