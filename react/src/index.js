import React from "react";
import ReactDomClient from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom"
const root = ReactDomClient.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter> 
)