import React from "react";
import ReactDom from 'react-dom';
//Import -> component
import App from "./App";
//Import -> React-router-dom for routing
import { BrowserRouter } from 'react-router-dom';
ReactDom.render(
    <React.Fragment>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.Fragment>, document.getElementById("root")
)