import React from "react";
import Product from "../product/Product";

function ProductFeed({ products }) {
  return (
    <div>
      {products.map((product) => {
      return   <Product {...product} key={product.id} />
      })}
    </div>
  );
}

export default ProductFeed;
