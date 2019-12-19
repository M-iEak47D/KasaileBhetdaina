import React from 'react';
import ReactDOM from "react-dom";
import Homepage from './Homepage';
import Newquiz from "../quiz/quizlayout";
import {BrowserRouter,Route, Switch} from 'react-router-dom'


function Index(){
    return(
        <BrowserRouter>
            <Switch>    
                <Route exact path="/" component={Homepage} />
                {/* <Route path= */}
            </Switch>
         </BrowserRouter>
    )
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}