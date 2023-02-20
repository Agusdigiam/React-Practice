import React from "react";
import ReactDOM from "react-dom/client";
import { Saludar } from "./Taskapp";
import "./style.css"
import { Article } from "./Article";
import  { Cardart } from './Card';

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <>
    <Saludar></Saludar>
    <Article></Article>
    <Cardart></Cardart>

    </>
)