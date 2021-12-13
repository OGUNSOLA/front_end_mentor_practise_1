/** @format */

import React from "react";
import Logo from "../assets/logo-white.svg";
import Facebook from "../assets/icon-facebook.svg";
import Youtube from "../assets/icon-youtube.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pinterest from "../assets/icon-pinterest.svg";
import Instagram from "../assets/icon-instagram.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social_media">
        <img src={Logo} alt="" className="footer-logo" />
        <div className="socials">
          <NavLink to="">
            <img src={Facebook} alt="facebook logo" />{" "}
          </NavLink>
          <NavLink to="">
            <img src={Youtube} alt="youtube logo" />{" "}
          </NavLink>
          <NavLink to="">
            <img src={Twitter} alt=" twitter logo" />{" "}
          </NavLink>
          <NavLink to="">
            <img src={Instagram} alt=" instagram logo" />{" "}
          </NavLink>{" "}
          <NavLink to="">
            <img src={Pinterest} alt=" pinterest logo" />
          </NavLink>{" "}
        </div>
      </div>
      <div className="links">
        <div className="first_links">
          <NavLink to="">Home</NavLink>
          <NavLink to="">Pricing</NavLink>
          <NavLink to="">Products</NavLink>
          <NavLink to="">About Us</NavLink>
        </div>
        <div className="second_links">
          <NavLink to="">Careers</NavLink>
          <NavLink to="">Community</NavLink>
          <NavLink to="">Privacy Policy</NavLink>
        </div>
      </div>

      <div className="search_Area">
        <div className="search">
          <form action="">
            <input type="text" />
            <button>Go</button>
          </form>
        </div>
        <p className="copy_right">Copyright 2020. All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
