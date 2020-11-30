import React from "react";
import { connect } from "react-redux";

function HomeComponent({ products, lastProduct }) {
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
const mapStateToProps = (state) => ({
  products: state.products,
  lastProduct: state.lastProduct,
});
export default connect(mapStateToProps)(HomeComponent);
