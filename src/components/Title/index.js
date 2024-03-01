import React from "react";
import "./Title.css";
import bg from "./icon.svg";
const Title = ({ title, className,id }) => {
  return (
      <div className={"subTitle" + (className ? ` ${className}` : "")} id={id}>
      <div className="titleBg svgContainer" style={{ backgroundImage: `svg(${bg})` }} />
      {title}
    </div>
  );
};

export default Title;
