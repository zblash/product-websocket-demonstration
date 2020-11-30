import React, { createContext } from "react";
import io from "socket.io-client";
import { WS_BASE } from "../constants";
import { useDispatch } from "react-redux";
import { receiveProducts } from "../redux/actions";

const WebSocketContext = createContext(null);

const WebSocketContextProvider = ({ children }) => {
  let socket;
  let ws;

  const dispatch = useDispatch();

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

    ws = {
      socket: socket,
      sendProduct,
    };
  }

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};

const useWebSocketContext = () => {
  return React.useContext(WebSocketContext);
};

export { WebSocketContext, WebSocketContextProvider, useWebSocketContext };
