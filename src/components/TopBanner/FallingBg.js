import React,{useMemo} from "react";

import './FallingBg.css'

const Num = () => {
const number=useMemo(()=>{
  const n=[]
  for(let i=0;i<20;i++){
    n.push((Math.random()>=0.5)? 1 : 0)
  }
  return n;
},[])
const style=useMemo(()=>{
  return {'left':`${Math.random()*100}`+'%','opacity':Math.random()*0.8,
         'animationDelay':`${Math.random()*2000}ms`,
         '--before-delay':`${Math.random()*1000}ms`,
          'fontSize':`${Math.random()*30+10}px`
         };
},[])
  return (
    <section className="container" style={style}>
    <div className="item">
      {number.map(n=>(
      <span className="item-txt">{n}</span>
      ))}
     </div>

</section>
  );
};
const FallingBg = () => {

  return (
      <div className="top-banner-bg">
          {Array(15).fill(0).map(i =>
    <Num />
            )}
  </div>
  );
};
export default FallingBg;