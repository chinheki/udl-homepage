import React,{ useState } from "react";
import "./Profiles.css";
import Title from "../Title";
import data from "@resource/portfolio.json"
import bg from '@resource/images/portfolioBg.jpg'
import CaseCard from "./CaseCard";
import MoreCaseCard from "./MoreCaseCard";
const Profiles = () => {
  const sample=[["Bluefin","LayerN","Vertex"].map(n=>data.data.find(p=>p.name===n)),["Stepn","GRVT"].map(n=>data.data.find(p=>p.name===n))]

  return (
    <>
      <Title title="Our portfolio" className="profile" id="portfolio"/>
   <div className="profileRow">
        <div
          className="profileBg"
        />
        <div className="profileList">
        <div className="profileColumn">
          {sample[0].map((p,i) =>
            <CaseCard
              key={i}
              img={p.image}
              name={p.name}
              dec={`${p.location}, ${p.establishedAt}`}
          type={p.type}
              link={p.homepage}
            />
            )}
          
          </div>
          <div className="profileColumn">
              {sample[1].map((p,i) =>
                <CaseCard
              key={i}
              img={p.image}
              name={p.name}
              dec={`${p.location}, ${p.establishedAt}`}
          type={p.type}
              link={p.homepage}
            />
            )}
          
          <MoreCaseCard  />
          </div>
        </div>
        <div className="profileList left">
        <MoreCaseCard />
        </div>
      </div>
    </>
  );
};
export default Profiles;
