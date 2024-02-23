import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logoWrap" >
      <div className="logo" />
    </div>
      <div className="tabPart" >
        <div className="tab"><p>Protfolio</p><div className="num">28</div></div>
        
      <div className="tab">Team</div>
      <div className="tab">Writting press</div>
    </div>
      <div className="iconWrap" >
      <div className="iconPart" />
    </div>
    </div>
  );
};
export default Header;
