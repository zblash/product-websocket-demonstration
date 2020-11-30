import React from "react";
import { connect } from "react-redux";
import { wsService } from "../services/wsService";

function AddProductComponent({ wsService }) {
  const [productName, setProductName] = React.useState();
  const [productId, setProductId] = React.useState();

  const sendProduct = React.useCallback(() => {
    wsService.sendProduct({ id: productId, name: productName });
  }, [productId, productName, wsService]);
  return (
    <div className="add-product">
      <input
        type="text"
        placeholder="Product Id"
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Name"
        onChange={(e) => setProductName(e.target.value)}
      />
      <button onClick={sendProduct}>Add</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    wsService: wsService(dispatch),
  };
};
export default connect(null, mapDispatchToProps)(AddProductComponent);
