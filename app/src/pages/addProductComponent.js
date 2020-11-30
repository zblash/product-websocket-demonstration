import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useWebSocketContext } from "../contexts/websocketContext";

function AddProductComponent() {
  const [productName, setProductName] = React.useState();
  const [productId, setProductId] = React.useState();
  const ws = useWebSocketContext();

  const sendProduct = React.useCallback(() => {
    ws.sendProduct({ id: productId, name: productName });
  }, [productId, productName]);
  return (
    <div className="add-product">
      <input
        type="text"
        placeholder="Product Id"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product Id"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={sendProduct}>Add</button>
    </div>
  );
}
