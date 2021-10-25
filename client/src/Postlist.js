import React, { useState, useEffect, useContext } from "react";
import { PostContext } from "./PostContext";
import Post from "./post";
const PostList = () => {
  const [data, setData] = useContext(PostContext);

  return (
    <div>
      {data ? (
        data.map((item) => (
          <>
            <Post title={item.title} body={item.body} id={item.id} />
          </>
        ))
      ) : (
        <h1>Loadingg....</h1>
      )}
    </div>
  );
};
export default PostList;
