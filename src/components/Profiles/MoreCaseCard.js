import React from "react";
import "./Profiles.css";
import RightCircle from "./rightCircle.svg";
const MoreCaseCard = () => {
  return (
    <div className="caseCardMore">
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
