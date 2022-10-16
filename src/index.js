import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../src/slices/index.js";

import App from "./components/app";

createRoot(document.getElementById("root"))
.render(
    <Provider store={store}>
        <App /> 
    </Provider>
);