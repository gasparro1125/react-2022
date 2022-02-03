import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { MyContextProvider} from "./context"


ReactDOM.render(
    <div>
        <MyContextProvider>
            <App />
        </MyContextProvider>
    </div>,document.getElementById("root"));