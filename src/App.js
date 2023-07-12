import React from "react";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
