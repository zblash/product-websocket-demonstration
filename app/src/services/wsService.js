import io from "socket.io-client";
import { WS_BASE } from "../constants";
import { receiveProducts } from "../redux/actions";

export const wsService = function (dispatch) {
  let socket;

  const sendProduct = (product) => {
    const payload = {
      product,
    };
    console.log("asda", socket);
    socket.emit("event://send-message", JSON.stringify(payload));
  };

  if (!socket) {
    socket = io.connect(WS_BASE);
    console.log(socket);
    socket.on("event://get-message", (msg) => {
      const payload = JSON.parse(msg);
      dispatch(receiveProducts(payload));
    });

    return {
      socket: socket,
      sendProduct,
    };
  }
};
