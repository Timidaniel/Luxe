import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/services";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
}

export default App;
