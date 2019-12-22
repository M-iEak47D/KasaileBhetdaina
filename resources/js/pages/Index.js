import React from 'react';
import ReactDOM from "react-dom";
import Homepage from './Homepage';
import Newquiz from "../quiz/quizlayout";
import {BrowserRouter,Route, Switch} from 'react-router-dom'


function Index(){
    return(
        <Newquiz />
    )
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}