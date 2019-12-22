import React from 'react';
import ReactDOM from "react-dom";
import Homepage from './Homepage';
import Dashboard from '../Dashboard/Dashboard';
import Newquiz from "../quiz/quizlayout";
import {BrowserRouter,Route, Switch} from 'react-router-dom'


export default function Index(){
    return(
<<<<<<< HEAD
        <Newquiz />
=======
        <BrowserRouter>
            <Switch>    
                <Route exact path="/" component={Homepage} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
         </BrowserRouter>
>>>>>>> 788be5ea29cbdcd4a1c58fdd21e2198c01fa3bd5
    )
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}