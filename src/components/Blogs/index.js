import React, { useState, useEffect } from "react";
import "./Blog.css";
import { getBlogList } from "../../api/api";
import Blog from "./Blog";
import RightArrow from "./rightArrow.svg";
import Title from "../Title";
const Blogs = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const list = getBlogList();
    setList(list);
  }, []);
  return (
    <div className="blogWrap">
      <Title title="Writing & Press" />
      <div className="blogBoard">
        {list.map((blog, i) => (
          <Blog
            key={i}
            time={blog.time ?? ""}
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
