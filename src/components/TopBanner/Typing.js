import React,{useState,useEffect} from "react";
import './Typing.css'

const speed = 80;
const start = 500;
const underlineDuration = 500;
const underlineDelay = 1000;
const underline = underlineDuration+underlineDelay;
const texts =[
    [..."We-define-the-"],
    [..."'undefined'"],
[..."and-build-the-Crypto-Narrative."]
]
const Typing = () => {
  return (
      <div className="typewriter">
        <div className="typingRow">
          {texts[0].map((char, i) => (
            <span
              key={i}
              className={char === "-" ? "hide" : ""}
              style={{ animationDelay: `${start+i * speed}ms` }}
            >
              {char}
            </span>
          ))}
        {texts[1].map((char, i) => (
            <span
              key={i}
              className="otherFont"
              style={{ animationDelay: `${start+i * speed+texts[0].length*speed}ms` }}
            >
              {char}
            </span>
          ))}
                  <div className="underline"
                      style={{
                          animationDelay: `${start+underlineDelay + texts[0].length * speed + texts[1].length * speed}ms`,
                          animationDuration:`${underlineDuration}ms` }}
                  
                  />
                  <div className="mark" style={{
                      "animation": `blink-caret 0.8s step-end infinite,
      stop-caret 0.5s step-end ${underline+texts[0].length*speed+texts[1].length*speed}ms forwards`
                  }} />
        </div>
        <div className="typingRow">
          {texts[2].map((char, i) => (
            <span
              key={i}
              className={char === "-" ? "hide" : ""}
              style={{ animationDelay: `${start+underline+i * speed +texts[0].length*speed+texts[1].length*speed}ms` }}
            >
              {char}
            </span>
          ))}
                  <div className="markDelay"
              style={{ animationDelay: `${start+underline+texts[0].length*speed+texts[1].length*speed}ms` }}
                  />
        </div>
      </div>
  );
};
export default Typing;
