import React, { useState, useEffect } from "react";
import "./Profiles.css";
import MoreCaseCard from "./MoreCaseCard";
import CaseCard from "./CaseCard";
import bg from "./bg.jpg";
import bluefin from './bluefin.png'
import layern from './layern.png'
import vertex from './vertex.png'
import stepn from './stepn.png'
import grvt from './grvt.png'
const Profiles = () => {
  return (
    <div className="profileRow">
      <div className="profileBg" style={{ "background-image": `url(${bg})` }} />
      <div className="profileList">
        <div className="profileColumn">
                  <CaseCard
                      img={bluefin}
                      name="Bluefin"
                      dec="UK, 2023"
                      type="DeFi"
                      link="https://bluefin.io/"
                  />
                       <CaseCard
                      img={layern}
                      name="LayerN"
                      dec="Singapole, 2023"
                      type="DeFi"
                      link="https://www.layern.com/"
                  />
                       <CaseCard
                      img={vertex}
                      name="Vertex"
                      dec="UK, 2021"
                      type="NFT"
                      link="https://vertexprotocol.com/"
                  />
        </div>
        <div className="profileColumn">
               <CaseCard
                      img={stepn}
                      name="Stepn"
                      dec="UK, 2021"
                      type="NFT"
                      link="https://www.stepn.com/"
                  />
             <CaseCard
                      img={grvt}
                      name="GRVT"
                      dec="Singapole, 2023"
                      type="DeFi"
                      link="https://grvt.io/"
                  />
          <MoreCaseCard />
        </div>
      </div>
      <div className="profileList left">
        <MoreCaseCard />
      </div>
    </div>
  );
};
export default Profiles;
