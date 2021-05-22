import React from "react";
import Product from "../product/Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:-mt-80">
      {products.slice(0, 4).map((product, i) => {
        return <Product {...product} key={i} />;
      })}
      <img src="/images/bannerImage9.jpg" alt="" className="md:col-span-full" />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((product, i) => {
          return <Product {...product} key={i} />;
        })}
      </div>
      {products.slice( 5,products.length).map((product, i) => {
        return <Product {...product} key={i} />;
      })}
    </div>
  );
}

export default ProductFeed;
