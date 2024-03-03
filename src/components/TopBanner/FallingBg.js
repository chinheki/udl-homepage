import React, { useMemo } from "react";

import "./FallingBg.css";

const Num = () => {
  const number = useMemo(() => {
    const n = [];
    for (let i = 0; i < 20; i++) {
      n.push(Math.random() >= 0.5 ? 1 : 0);
    }
    return n.join("");
  }, []);
  const style = useMemo(() => {
    return {
      left: `${Math.random() * 100}` + "%",
      opacity: Math.random() * 0.8,
      animationDelay: `${Math.random() * 2000}ms`,
      fontSize: `${Math.random() * 20 + 10}px`
    };
  }, []);
  return (
    <section className="falling-bg-container" style={style}>
       {number}
    </section>
  );
};
const FallingBg = () => {
  return (
    <div className="top-banner-bg">
      {Array(10)
        .fill(0)
        .map((i) => (
          <Num key={i} />
        ))}
    </div>
  );
};
export default FallingBg;
