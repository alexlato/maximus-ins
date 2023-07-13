import React from "react";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
