import React,{ useState } from "react";
import "./Profiles.css";
import data from "@resource/portfolio.json"
import Title from "@/components/Title";
import CaseCard from "@/components/Profiles/CaseCard";
import Layout from "../../components/Layout/inedx";
const Portfolio = () => {
  return (
    <Layout>
      <Title title="Our portfolio" className="profile" id="portfolio"/>
     <div className="portfolioRow">
        <div
          className="profileBg"
        />
        <div className="portfolioList">
          {(data.data||[]).map(p =>
                <CaseCard
              img={p.image}
              name={p.name}
              dec={`${p.location}, ${p.establishedAt}`}
          type={p.type}
              link={p.homepage}
            />
            )}
        </div>
      </div>
    </Layout>
  );
};
export default Portfolio;
