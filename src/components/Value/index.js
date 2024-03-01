import React, { useState, useEffect } from "react";
import "./Value.css";
import Title from "../Title";
import Point from "./Point";
import bg from "./bg.png";

const Value = () => {
  const [hover, setHover] = useState(1);

  return (
    <div className="row">
      <Title title="Our Value-Add Thesis" className="small" />
      <div
        className="pointContainer"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Point top="8%" left="12%" hover={hover === 1} />
        <Point top="30%" left="60%" hover={hover === 2} />
        <Point top="82%" left="90%" hover={hover === 3} />
        <div
          className="area"
          onMouseEnter={() => setHover(1)}
          onMouseDown={() => setHover(1)}
          style={{ width: "40%" }}
        />
        <div
          className="area"
          onMouseEnter={() => setHover(2)}
          onMouseDown={() => setHover(2)}
          style={{ width: "20%" }}
        />
        <div
          className="area"
          onMouseEnter={() => setHover(3)}
          onMouseDown={() => setHover(3)}
          style={{ width: "40%" }}
        />
      </div>
      <div className="tabContainer">
        <Title title="Our Value-Add Thesis" className="wide" />
        <div className="tabRow">
          <div
            className="tab"
            onMouseEnter={() => setHover(1)}
            onMouseDown={() => setHover(1)}
          >
            <div>Build</div>
            <div className={hover === 1 ? "underline" : ""} />
          </div>
          <div
            className="tab"
            onMouseEnter={() => setHover(2)}
            onMouseDown={() => setHover(2)}
          >
            <div>Contribute</div>
            <div className={hover === 2 ? "underline" : ""} />
          </div>
          <div
            className="tab"
            onMouseEnter={() => setHover(3)}
            onMouseDown={() => setHover(3)}
          >
            <div>Invest</div>
            <div className={hover === 3 ? "underline" : ""} />
          </div>
        </div>
        <div className="tabContent">
          {hover === 1
            ? "Find the missing pieces in protocol and we can build narrative strategies and products that fit the market."
            : hover === 2
            ? "As a core contributor to the protocol, we contribute around a crypto-native strategy, contributing vertically on-chain and off-chain growth."
            : "Investing in sustainable growth of the protocol's unique narrative"}
        </div>
      </div>
    </div>
  );
};

export default Value;
