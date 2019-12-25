import React from 'react';
import ReactDOM from "react-dom";
import Homepage from './Homepage';
import Dashboard from '../Dashboard/Dashboard';
import Viewer from '../Dashboard/Viewer';
import Newquiz from "../quiz/quizlayout";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Test from "./test"



export default function Index(){
    return(
        <BrowserRouter>
            <Switch>    
                <Route exact path="/" component={Homepage} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/viewer" component={Viewer} />
                {/* <Route path="/new" component={Newquiz} /> */}
            </Switch>
         </BrowserRouter>
    )
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}