import React from "react";
import { useWebSocketContext } from "../contexts/websocketContext";

function AddProductComponent() {
  const [productName, setProductName] = React.useState();
  const [productId, setProductId] = React.useState();
  const ws = useWebSocketContext();

  const sendProduct = React.useCallback(() => {
    ws.sendProduct({ id: productId, name: productName });
  }, [productId, productName, ws]);
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

export default AddProductComponent;
