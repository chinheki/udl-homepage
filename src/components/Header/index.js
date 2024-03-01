import React,{ useEffect } from "react";
import "./Header.css";
import { useNavigate,useLocation } from "react-router-dom";
export const onClickTab = (id) => {
  
  const top = document.querySelector(id)?.offsetTop;
  const root = document.querySelector('#root');
  if (top && root) {
   root.scrollTop=top
  }
}
const Header = () => {
  const navigate = useNavigate();
   const location = useLocation();
const onClick = (id) => {
    navigate("/",{state: { scrollId: id }});
  }
  const onClickTeamTab = (id) => {
    if (location.hash !== '#/') {
      
      onClick("#teamList");
    } else {
      onClickTab("#teamList");
    }
  }
  useEffect(() => {
    console.log(location.state)
    if (location.state?.scrollId) {
      onClickTab(location.state.scrollId)
    }
  },[location])
  return (
    <div className="header">
      <div className="logoWrap">
        <div className="logo svgContainer" onClick={onClick} />
      </div>
      <div className="tabPart">
        <div className="tab" onClick={()=>onClickTab("#portfolio")}>
          <p>Protfolio</p>
          <div className="num">5</div>
        </div>

        <div className="tab" onClick={onClickTeamTab}>Team</div>
        {/* <div className="tab" onClick={()=>onClickTab("#blog")}>Writting press</div> */}
      </div>
      <div className="iconWrap">
        <div className="iconPart svgContainer" />
      </div>
    </div>
  );
};
export default Header;
