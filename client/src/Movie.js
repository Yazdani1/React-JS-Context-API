import React from "react";

const Movie = ({name,price,id}) => {

  return (
    <div>
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{id}</p>
    </div>
  );
};

export default Movie;
