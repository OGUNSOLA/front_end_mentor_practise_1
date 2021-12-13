/** @format */

import React from "react";
import AnishaImg from "../assets/avatar-anisha.png";
import AliImg from "../assets/avatar-ali.png";
import RichardImg from "../assets/avatar-richard.png";
import ShanaiImg from "../assets/avatar-shanai.png";
import { NavLink } from "react-router-dom";

const Reviews = () => {
  const cards = [
    {
      id: 0,
      avatar: AnishaImg,
      name: "Anisha Li",
      text: "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      id: 1,
      avatar: AliImg,
      name: "Ali Bravo",
      text: "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.” ",
    },
    {
      id: 2,
      avatar: RichardImg,
      name: "Richard Watts",
      text: "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!” ",
    },
    {
      id: 3,
      avatar: ShanaiImg,
      name: "Shanai Gough ",
      text: "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.” ",
    },
  ];

  return (
    <div className="reviews_container ">
      <h1>What They've said</h1>
      <div className="reviews">
        {cards.map((card) => {
          return (
            <div className="review" key={card.id}>
              <img src={card.avatar} alt="" />
              <h3>{card.name}</h3>
              <p>{card.text}</p>
            </div>
          );
        })}
      </div>
      <NavLink to="" className="getStartedButton3">
        Get Started
      </NavLink>
      <div className="simplify">
        <h1>Simplify how your team works today.</h1>
        <NavLink to="" className="getStartedButton4">
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default Reviews;
