import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

export default function Test(){
    return(
        <Router>
            <ul>
                <li>
                    <Link to="/netflix">Netflix</Link>
                </li>
                <li>
                    <Link to="/yahoo">Yahoo</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/:id" children= {<Child />} />
            </Switch>
        </Router>

    );
}

function Child() {
    let {id} = useParams();
    return(
        <div>
            <h3>Id: {id}</h3>
        </div>
    );
}