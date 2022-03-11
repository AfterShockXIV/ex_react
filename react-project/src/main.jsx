import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import configure from "./Apps/store";
import { PersistGate } from "redux-persist/integration/react";
import "./Configs";
import { Provider } from "react-redux";
const { store, persistor } = configure();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
