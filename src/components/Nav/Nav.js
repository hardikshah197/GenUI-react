import React from "react";
import "./Nav.css";
import Button from "../UI/Button/Button";

const Nav = function () {
  return (
    <nav className="nav">
      <h1 className="nav--logo">Bus System</h1>
      <div className="nav--links">
        <a href="#home" className="nav--links__item">
          Home
        </a>

        <a href="#about" className="nav--links__item">
          About
        </a>
        <a href="#maps" className="nav--links__item">
          Maps
        </a>
        <a href="#routes" className="nav--links__item">
          Routes
        </a>
        <Button text="Contact Us" />
      </div>
    </nav>
  );
};

export default Nav;
