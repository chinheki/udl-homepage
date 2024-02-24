import React from "react";
import { XOutlined, LinkedinOutlined } from "@ant-design/icons";
import "./Footer.css";
import { onClickTab } from "../Header";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo" />
      <div className="right">
        <div className="tabPart">
          <div className="tab" onClick={()=>onClickTab("#portfolio")}>
            <p>Protfolio</p>
            <div className="num">5</div>
          </div>

          <div className="tab" onClick={()=>onClickTab("#teamList")}>Team</div>
          {/* <div className="tab" onClick={()=>onClickTab("#blog")}>Writting press</div> */}
        </div>
        <div className="iconPart">
          <XOutlined
            onClick={() => window.open("https://twitter.com/0xundefined_")}
            style={{ color: "#fff" }}
          />
          <LinkedinOutlined
            onClick={() =>
              window.open("https://www.linkedin.com/company/undefined-labs/")
            }
            style={{ color: "#fff" }}
          />
          <div
            className="logo medium"
            onClick={() => window.open("https://medium.com/undefined-labs")}
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
