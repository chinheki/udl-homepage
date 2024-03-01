import React,{useEffect,useState} from "react";
import "./Profiles.css";
import Right from "./right.svg";
const CaseCard = ({ img, name, dec, type, link,stage }) => {
  
  
  return (
    <div className="caseCard" onClick={() => window.open(link)}>
      <div className="seed">{stage}</div>
      <div className="icon svgContainer" style={{ backgroundImage: `url(/portfolioImages/${img})` }} />
      <div className="name">{name}</div>
      <div className="dec">{dec}</div>
      <div className="link">
        <div>{type}</div>
        <Right />
      </div>
    </div>
  );
};

export default CaseCard;
