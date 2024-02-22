import React, { useState, useEffect } from "react";
import "./Blog.css"

const Blog = ({ time, title, link }) => {
  return (
    <div
      className='blogRow'
    >
          <div className="time" >{time}</div>
          <div className="title" onClick={() => window.open(link)} >{title}</div>
    </div>
  );
};

export default Blog;