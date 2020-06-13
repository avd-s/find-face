import React from "react";

const Rank = ({ entries }) => (
  <div>
    <div className="white f3 ">{"your total findings are.."}</div>
    <div className="white f1">{entries}</div>
  </div>
);

export default Rank;
