import React from 'react';
import { Link, Route, useRouteMatch, Switch } from 'react-router-dom';
import Year from './Year';

export default function SubClass() {

let {path, url} = useRouteMatch();
    return(
        <React.Fragment>
            <Switch>
                    <Route path={path} exact>
                        <div className="subClass-wrapper">
                            <div className="row">
                                <div className="col-6">
                               
                                <div className="select-faculty">
                                <h3>
                                            Select Faculty:
                                        </h3>
                                       
                                </div>
                                
                                </div>
                                <div className="col-6">
                                    <div className="faculty-class">
                                       
                                       
                                    <ul>
                                        <li> <Link to={`${url}/year`}> Computer </Link></li>
                                        <li>Management</li>
                                        <li>Science</li>
                                        <li>Civil</li>
                                        <li>Architecture</li>
                                        <li>Electronics</li>
                                       
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Route>
                <Route path={`${path}/year`} >
                    <Year />
                </Route>
                    </Switch>
                    </React.Fragment>
    )
}