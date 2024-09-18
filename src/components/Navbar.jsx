import React from "react";
import "../assets/css/navbar.css";
import logo from "../assets/images/Menu.svg";
const Navbar = () => {
  return (
    <header>
      <h1 className="luxe">Luxe</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/">Service</a>
        <a href="/">Portofolio</a>
        <a href="/">How we works</a>
      </nav>
      <img src={logo} alt="" width={40} height={40} />
    </header>
  );
};

export default Navbar;
