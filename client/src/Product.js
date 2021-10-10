import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

const Product = () => {
  const [listofproduct, setProducts] = useContext(ProductContext);

  return (
    <div>
      <h1>Hello From Product: {listofproduct.length} </h1>
      {
          listofproduct.map(product=>(
              <div>
                  <h1>{product.name}</h1>
                  <p>{product.price}</p>
              </div>
          ))
      }
    </div>
  );
};
export default Product;
