import React, { createContext } from "react";
import io from "socket.io-client";
import { WS_BASE } from "../constants";
import { useDispatch } from "react-redux";
import { receiveProducts } from "./actions";

const WebSocketContext = createContext(null);

const WebSocketContextProvider = ({ children }) => {
  let socket;
  let ws;

  const dispatch = useDispatch();

  const sendProduct = (product) => {
    const payload = {
      product,
    };
    socket.emit("event://send-message", JSON.stringify(payload));
    dispatch(receiveProducts(payload));
  };

  if (!socket) {
    socket = io.connect(WS_BASE);

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
