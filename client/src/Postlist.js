import React, { useState, useEffect, useContext } from "react";
import { PostContext } from "./PostContext";
import Post from "./post";
const PostList = () => {
  const [data, setData] = useContext(PostContext);

  return (
    <div>
      {data.map((item) => (
        <div>
          <Post title={item.title} body={item.body} id={item.id} />
        </div>
      ))}
    </div>
  );
};
export default PostList;
