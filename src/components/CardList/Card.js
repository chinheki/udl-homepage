import React from "react";
import { XOutlined, LinkedinOutlined } from '@ant-design/icons';
import './Cardlist.css'
const Card = ({ url, name, xUrl, lUrl, type }) => {
    const jump = (uri) => {
         window.open(uri)
     }
  return (
      <div className="card" style={{ 'background-image': `url(${url})` }}>
          <div className="cardContent">
              
      <div>{name}</div>
      <div>{type}</div>
      <div className="linkContainer">
              {xUrl && <XOutlined onClick={() => jump(xUrl)} style={{ fontSize: '23px', color: '#fff' }}/>}
              {lUrl && <LinkedinOutlined onClick={() => jump(lUrl)} style={{ fontSize: '23px', color: '#fff' }}/>}
      </div>
          </div>
    </div>
  );
};
export default Card;