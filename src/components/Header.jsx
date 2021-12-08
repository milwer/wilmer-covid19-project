import React, { useState, useContext } from "react";
import "../styles/Header.scss";
import logo from "../assets/logos/covid-logo.png";

const Header = () => {
  return (
    <nav>
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/countries">Countries</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
