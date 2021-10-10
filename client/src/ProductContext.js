import React, { useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const products = [
    {
      name: "T-shirt",
      price: 10,
    },
    {
      name: "Jacket",
      price: 85,
    },
    {
      name: "Shoes",
      price: 55,
    },
    {
      name: "Mobile",
      price: 55,
    },
    {
      name: "Laptop",
      price: 55,
    },
  ];

  const [listofproduct, setProducts] = useState(products);

  return (
    <ProductContext.Provider value={[listofproduct, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
