import React from 'react';
import ReactDOM from "react-dom";
import Homepage from './Homepage';
import Dashboard from '../Dashboard/Dashboard';
import Newquiz from "../quiz/quizlayout";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Test from "./test"


export default function Index(){
    return(
       
         <Test />
    )
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}