import React from 'react';
import ReactDOM from "react-dom";
import Homepage from './Homepage';
import Dashboard from '../Dashboard/Dashboard';
import Viewer from '../Dashboard/Viewer';
import Newquiz from "../quiz/quizlayout";
import {BrowserRouter,Route,Switch} from 'react-router-dom'


export default function Index(){
    return(
        <React.Fragment>
         <BrowserRouter>
            <Switch>    
                <Route exact path="/" component={Homepage} />
                <Route path="/viewer" component={Viewer} />
                <Route path="/quiz" component={Newquiz} />
                <Dashboard />
            </Switch>
          </BrowserRouter>
         </React.Fragment>
    )
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}