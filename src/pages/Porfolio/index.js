import React, { useState, useMemo } from "react";
import "./Profiles.css";
import data from "@resource/portfolio.json";
import Title from "@/components/Title";
import CaseCard from "@/components/Profiles/CaseCard";
import Layout from "../../components/Layout";
import { Select } from "antd";
const all = "All";
const Portfolio = () => {
  const [sector, setSector] = useState(null);
  const [stage, setStage] = useState(null);
  const [region, setRegion] = useState(null);
  const filterData = useMemo(
    () =>
      data.data.filter(
        (d) =>
          (!sector || sector === all || d.type === sector) &&
          (!stage || stage === all || d.stage === stage) &&
          (!region || region === all || d.region === region)
      ),
    [data, sector, stage, region]
  );
  const typeOptions = [
    ...data.data
      .map((d) => d.type)
      .reduce((p, c) => {
        if (!p.includes(c)) {
          p.push(c);
        }
        return p;
      }, []),
    all
  ];
  const areaOptions = [
    ...data.data
      .map((d) => d.region)
      .reduce((p, c) => {
        console.log(p);
        if (!p.includes(c)) {
          p.push(c);
        }
        return p;
      }, []),
    all
  ];
  const stageOptions = [
    ...data.data
      .map((d) => d.stage)
      .reduce((p, c) => {
        console.log(p);
        if (!p.includes(c)) {
          p.push(c);
        }
        return p;
      }, []),
    all
  ];
  return (
    <Layout>
      <Title title="Our portfolio" className="portfolioTitle" />
      <div className="portfolioRow">
        <div className="profileBg" />
        <div className="portfolioFilter portfolioList">
          <Select
            onChange={(v) => setSector(v)}
            placeholder={"Sector"}
            value={sector}
            popupClassName="portfolio-drop"
          >
            {typeOptions.map((o) => (
              <Select.Option value={o} key={o}>
                {o}
              </Select.Option>
            ))}
          </Select>
           <Select
            onChange={(v) => setStage(v)}
            popupClassName="portfolio-drop"
            placeholder={"Stage"}
            value={stage}
          >
            {stageOptions.map((o) => (
              <Select.Option value={o} key={o}>
                {o}
              </Select.Option>
            ))}
          </Select>
           <Select
            onChange={(v) => setRegion(v)}
            popupClassName="portfolio-drop"
            placeholder={"Region"}
            value={region}
          >
            {areaOptions.map((o) => (
              <Select.Option value={o} key={o}>
                {o}
              </Select.Option>
            ))}
          </Select>
        </div>
        <div className="portfolioList">
          {(filterData || []).map((p) => (
            <CaseCard
              img={p.image}
              name={p.name}
              dec={`${p.location}, ${p.establishedAt}`}
              type={p.type}
              link={p.homepage}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Portfolio;
