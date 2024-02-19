import React from "react";
import "./TopBanner.css";
import Banner from "./banner.svg";
import RightArrow from "./right-arrow.svg";

const TopBanner = () => {
  const onClick = () => {
    window.open("https://discord.gg/r2WVVFYMyf");
  };

  return (
    <div className="top-banner">
      <Banner />
      <div className="top-banner">
        <div className="top-banner-content">
          <div className="top-title">Who we are?</div>
          <div className="top-content">
            Undefined Labs proactively researches technological trends in the
            blockchain sector and distributes content to contribute to the
            popularization of the Asian blockchain market. We are dedicated to
            spreading narratives about promising crypto and new business
            ventures through research, videos, and offline education, striving
            to add value to our partners at Undefined Labs.
          </div>
          <div className="join-container">
            <div className="join" onClick={onClick}>
              Join the Undefined builder community
              <RightArrow />
            </div>
          </div>
          <div className="container">
            <div className="marquee-content">
              <span className="word">Narrative</span>
              <span className="divider" />
              <span className="word">Product</span>
              <span className="divider" />
              <span className="word">Token Economists</span>
              <span className="divider" />
              <span className="word">Tokenomics</span>
              <span className="divider" />
              <span className="word">Strategy</span>
              <span className="divider" />
              <span className="word">Narrative</span>
              <span className="divider" />
              <span className="word">Product</span>
              <span className="divider" />
              <span className="word">Token Economists</span>
              <span className="divider" />
              <span className="word">Tokenomics</span>
              <span className="divider" />
              <span className="word">Strategy</span>
              <span className="divider" />
            </div>
            <div className="marquee-content">
              <span className="word">Narrative</span>
              <span className="divider" />
              <span className="word">Product</span>
              <span className="divider" />
              <span className="word">Token Economists</span>
              <span className="divider" />
              <span className="word">Tokenomics</span>
              <span className="divider" />
              <span className="word">Strategy</span>
              <span className="divider" />
              <span className="word">Narrative</span>
              <span className="divider" />
              <span className="word">Product</span>
              <span className="divider" />
              <span className="word">Token Economists</span>
              <span className="divider" />
              <span className="word">Tokenomics</span>
              <span className="divider" />
              <span className="word">Strategy</span>
              <span className="divider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBanner;
