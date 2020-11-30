import "./App.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { WebSocketContextProvider } from "../contexts/websocketContext";
import AddProductComponent from "./addProductComponent";
import HomeComponent from "./homeComponent";

function App() {
  return (
    <Provider store={store}>
      <WebSocketContextProvider>
        <div className="App">
          <AddProductComponent />
          <HomeComponent />
        </div>
      </WebSocketContextProvider>
    </Provider>
  );
}

export default App;
