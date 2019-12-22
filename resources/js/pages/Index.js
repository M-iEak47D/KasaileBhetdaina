import React from 'react';
import ReactDOM from "react-dom";
import Homepage from './Homepage';
import Dashboard from '../Dashboard/Dashboard';
import Newquiz from "../quiz/quizlayout";
import {BrowserRouter,Route, Switch} from 'react-router-dom'


function Index(){
    return(
        <BrowserRouter>
            <Switch>    
                <Route exact path="/" component={Homepage} />
<<<<<<< HEAD
                <Route path="/dashboard" component={Dashboard} />
=======
                {/* <Route path= */}
>>>>>>> a6f298ecaac314deb1a1e35b66516fec19751c97
            </Switch>
         </BrowserRouter>
    )
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}