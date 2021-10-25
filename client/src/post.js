import React from "react";
import "./App.css";

const Post = ({ body, title, id }) => {
  return (
    <div className="post_design">
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{id}</p>
    </div>
  );
};
export default Post;
