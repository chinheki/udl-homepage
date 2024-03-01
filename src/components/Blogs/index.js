import React, { useState, useEffect } from "react";
import "./Blog.css";
import Blog from "./Blog";
import RightArrow from "./rightArrow.svg";
import Title from "../Title";
import data from "@resource/blogs.json";
const Blogs = () => {
  return (
    <div className="blogWrap" id="blog">
      <Title title="Writing & Press" id="blogTitle"/>
      <div className="blogBoard">
        {data.data.map((blog, i) => (
          <Blog
            key={i}
            time={blog.subTitle ?? ""}
            title={blog.title ?? ""}
            link={blog.link ?? ""}
          />
        ))}
      </div>
          <div className="readMore" onClick={() => window.open('https://medium.com/undefined-labs')}>
        Read more
        <RightArrow />
      </div>
    </div>
  );
};

export default Blogs;
