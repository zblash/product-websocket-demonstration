import "./App.css";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import { WebSocketProvider } from "../contexts/websocketContext";
import AddProductComponent from "./AddProductComponent";
import HomeComponent from "./HomeComponent";

function App() {
  return (
    <Provider store={store}>
      <WebSocketProvider>
        <div className="App">
          <HomeComponent />
          <HomeComponent />
        </div>
      </WebSocketProvider>
    </Provider>
  );
}

export default App;
