/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../assets/illustration-intro.svg";

const Intro = () => {
  return (
    <div className="introSection">
      <img src={Image} alt="" />
      <div className="Intro">
        <p>Bring everyone together to build better products.</p>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <NavLink to="" className="getStartedButton2">
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default Intro;
