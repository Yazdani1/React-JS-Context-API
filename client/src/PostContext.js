import React, { useState, useEffect, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {

  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  const getPost = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <PostContext.Provider value={[data, setData]}>
      {props.children}
    </PostContext.Provider>
  );
};
