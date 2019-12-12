import React from 'react';
import ReactDOM from "react-dom";
import Homepage from './Homepage';
import {BrowserRouter,Route, Switch} from 'react-router-dom'


function Index(){
    return(
        <BrowserRouter>
            <Switch>    
                <Route exact path="/" component={Homepage} />
            </Switch>
        </BrowserRouter>
    )
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}