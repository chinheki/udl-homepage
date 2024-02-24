import React, { useState, useEffect } from "react";
import "./Value.css";

const Point = ({ top, left, hover }) => {
  return (
    <div
      className={"outer" + (hover ? " hover" : "")}
      style={{ top: top, left: left }}
    >
      <div className="outMiddle" />
      <div className="middle" />
      <div className="innerMiddle" />
      <div className="inner" />
    </div>
  );
};

export default Point;
