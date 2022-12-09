import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./components/app";

const rootElem = document.getElementById("root");
if (rootElem) {
    const root = createRoot(rootElem);

    root.render(
        <Provider store={store}>
            <App /> 
        </Provider>
    );
}

