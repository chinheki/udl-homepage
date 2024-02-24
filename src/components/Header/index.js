import React from "react";
import "./Header.css";
export const onClickTab = (id) => {
  const top = document.querySelector(id)?.offsetTop;
  const root = document.querySelector('#root');
  if (top && root) {
   root.scrollTop=top
  }
}

const Header = () => {
  return (
    <div className="header">
      <div className="logoWrap">
        <div className="logo" />
      </div>
      <div className="tabPart">
        <div className="tab" onClick={()=>onClickTab("#portfolio")}>
          <p>Protfolio</p>
          <div className="num">0</div>
        </div>

        <div className="tab" onClick={()=>onClickTab("#teamList")}>Team</div>
        {/* <div className="tab" onClick={()=>onClickTab("#blog")}>Writting press</div> */}
      </div>
      <div className="iconWrap">
        <div className="iconPart" />
      </div>
    </div>
  );
};
export default Header;
