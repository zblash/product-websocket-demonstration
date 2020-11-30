import React from "react";
import { useSelector } from "react-redux";

function HomeComponent() {
  const products = useSelector((state) => state.products);
  const lastProduct = useSelector((state) => state.lastProduct);
  return (
    <>
      {lastProduct && (
        <div className="lat-product" styles={{ color: "red" }}>
          {lastProduct.name}
        </div>
      )}
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <div className="products" key={product.id}>
            {product.name}
          </div>
        ))}
    </>
  );
}

export default HomeComponent;
