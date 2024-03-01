import "./Cardlist.css";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import photo1 from "./photo1.png";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import photo4 from "./photo4.png";
import photo5 from "./photo5.jpg";
import bg from "./bg.jpg";
import Title from "../Title";
const step = 420;

const CardList = () => {
  const [scrollL, setScrollL] = useState(false);
  const [scrollR, setScrollR] = useState(false);
  const onClickRight = () => {
      const scroll =document.querySelector('.card').getBoundingClientRect().width+19;
    const parent = document.querySelector("#cardContainer");
    parent?.scrollTo({ left: parent?.scrollLeft +scroll, behavior: "smooth" });
    onScroll(parent?.scrollLeft +scroll);
  };
  const onClickLeft = () => {
      const scroll =document.querySelector('.card').getBoundingClientRect().width+19;

    const parent = document.querySelector("#cardContainer");
    parent?.scrollTo({ left: parent?.scrollLeft -scroll, behavior: "smooth" });
    onScroll(parent?.scrollLeft -scroll);
  };
  const onScroll = (scrollLeft) => {
    let scale = 1;
    if (document.body.getBoundingClientRect().width < 800) {
      scale = 0.5;
    }
    const list = document.querySelector("#cardList"),
      parent = document.querySelector("#cardContainer");
    if (scrollLeft > 0) {
      setScrollL(true);
    } else {
      setScrollL(false);
    }
    if (
      list?.getBoundingClientRect()?.width -
        parent?.getBoundingClientRect()?.width >
      scrollLeft * scale
    ) {
      setScrollR(true);
    } else {
      setScrollR(false);
    }
  };
  const onResize = () => {
    let scale = 1;
    if (document.body.getBoundingClientRect().width < 800) {
      scale = 0.5;
    }
    const list = document.querySelector("#cardList"),
      parent = document.querySelector("#cardContainer");
    if (parent?.scrollLeft > 0) {
      setScrollL(true);
    } else {
      setScrollL(false);
    }
    if (
      list?.getBoundingClientRect()?.width -
        parent?.getBoundingClientRect()?.width >
      parent?.scrollLeft * scale
    ) {
      setScrollR(true);
    } else {
      setScrollR(false);
    }
  };

  useEffect(() => {
    let timeout = false;
    const delay = 250;
    window.addEventListener("resize", function () {
      clearTimeout(timeout);
      timeout = setTimeout(onResize, delay);
    });
    onResize();
  }, []);
  return (
    <div className="board" id="teamList">
      <div className="boardBg" style={{ backgroundImage: `url(${bg})` }} />
      <Title title="Our team members have been investing and building since 2017" id="team"/>

      <div className="cardContainerWrap">
        {!!scrollL && (
          <div className="leftArrow" onClick={onClickLeft}>
            <div className="leftIcon" />
          </div>
        )}
        <div className="cardContainer" id="cardContainer">
          <div className="cardList" id="cardList">
            <Card
              url={photo1}
              name="Donghyeon Jo"
              type="CEO"
              xUrl="https://twitter.com/0xProfessorJo"
              lUrl="https://www.linkedin.com/in/donghyeon-jo-8957a154"
            />
            <Card
              url={photo2}
              name="Michael He"
              type="CTO"
              lUrl="https://www.linkedin.com/in/hlxwell/"
            />
            <Card
              url={photo3}
              name="Mike Mu"
              type="Research Director"
              xUrl="https://twitter.com/mikemu_eth"
              lUrl="linkedin.com/in/mike-mu-a69160162"
            />
            <Card
              url={photo4}
              name="Donghwan Kim"
              type="Public Retions Director"
              xUrl="https://twitter.com/2heandie"
              lUrl="https://www.linkedin.com/in/donghwan-kim-772b83147/"
            />
            <Card
              url={photo5}
              name="Sunglee Kim"
              type="Operation Director"
              xUrl="https://twitter.com/0xLeekim"
              lUrl="https://www.linkedin.com/in/sunglee-kim-7b3a1216b/"
            />
          </div>
        </div>
        {!!scrollR && (
          <div className="rigthArrow" onClick={onClickRight}>
            <div className="rightIcon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardList;
