import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pannier" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
