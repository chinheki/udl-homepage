import React from "react";
import "./Title.css";
import Icon from "./icon.svg";
const Title = ({title,className}) => {
  return (
      <div className={'subTitle'+(className?` ${className}`:'')}><Icon />{title}</div>
  );
};

export default Title;
