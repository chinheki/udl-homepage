import React from "react";
import "./Profiles.css";
import RightCircle from "./rightCircle.svg";
import { useNavigate } from "react-router-dom";
const MoreCaseCard = () => {
    const navigate = useNavigate();
  const onClick = () => {
      navigate("/portfolio");
  }
  return (
    <div className="caseCardMore" onClick={onClick}>
      <div className="up">
        <div className="upText">
          Check out the full <br />
          portfolio
        </div>
        <div className="downText">
          <p>Full portfolio</p>
          <RightCircle />
        </div>
      </div>
      <div className="down" />
    </div>
  );
};
export default MoreCaseCard;
