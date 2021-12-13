/** @format */

import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Menu from "../assets/icon-hamburger.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const menuClass = show ? "menu-list" : "hideMenu";
  const menulogoClass = show ? "hideMenu" : "menu";

  return (
    <div className="header">
      <img src={Logo} alt="" className="header-logo" />
      <img
        src={Menu}
        alt=""
        className={`${menulogoClass}`}
        onClick={() => setShow(true)}
      />

      <ul className={`${menuClass}`}>
        <li onClick={() => setShow(false)} className="close-btn">
          <div className="wrapper">
            <div className="arrow">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="">Pricing </NavLink>
        </li>
        <li>
          <NavLink to="">Product </NavLink>
        </li>
        <li>
          <NavLink to="">About Us </NavLink>
        </li>
        <li>
          <NavLink to="">Careers </NavLink>
        </li>
        <li>
          <NavLink to="">Community </NavLink>
        </li>
      </ul>
      <NavLink className="getStartedButton" to="">
        Get Started{" "}
      </NavLink>
    </div>
  );
};

export default Header;
