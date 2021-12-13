/** @format */

import React from "react";

const Question = () => {
  return (
    <div className="questions">
      <div className="major">
        <h2>What's different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="minors">
        <div className="minor">
          <h5>
            <span className="number">01</span>What's different about Manage?{" "}
          </h5>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="minor">
          <h5>
            <span className="number">02</span>What's different about Manage?{" "}
          </h5>
          <p>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="minor">
          <h5>
            <span className="number">03</span>Advanced built-in reports{" "}
          </h5>
          <p>
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
