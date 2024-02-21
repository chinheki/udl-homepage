import React,{ useState, useEffect } from "react";
import './Profiles.css'
import Right from './right.svg'
const CaseCard=({img,name,dec,type,link})=>{
   return (
       <div className="caseCard" onClick={() => window.open(link)}>
           <div className="seed">Seed</div>
      <div className="icon" style={{ 'background-image': `url(${img})` }} />
           <div className="name">{name}</div>
           <div className="dec">{dec}</div>
           <div className="link" >
               <div>{type}</div><Right /></div>
    </div>
     )
}

export default CaseCard;
