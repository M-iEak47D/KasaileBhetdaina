import React from 'react';
import { Link, Route, useRouteMatch, Switch, Redirect } from 'react-router-dom';


export default function Year() {

let {path, url} = useRouteMatch();
    return(
        <React.Fragment>
            <Switch>
                    <Route path={path} exact>
                        <div className="year-wrapper">
                            <div className="row">
                                <div className="col-6">
                               
                                <div className="select-faculty">
                                <h3>
                                            Select Year:
                                        </h3>
                                       
                                </div>
                                
                                </div>
                                <div className="col-6">
                                    <div className="faculty-class">
                                       
                                       
                                           
                               
                                    <ul>
                                        <li> <Link to={`/learn`}> 1st Year/Sem </Link></li>
                                        <li> <Link to={`/learn`}>  2nd Year/Sem</Link> </li>
                                        <li> <Link to={`/learn`}> 3rd Year/Sem </Link> </li>
                                        <li> <Link to={`/learn`}> 4th Year/Sem </Link> </li>
                                        <li> <Link to={`/learn`}> 5th Semester </Link> </li>
                                        <li> <Link to={`/learn`}> 6th Semester </Link> </li>
                                        <li> <Link to={`/learn`}> 7th Semester </Link> </li>
                                        <li> <Link to={`/learn`}> 8th Semester </Link> </li>
                                       
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Route>
                   
                    </Switch>
                    </React.Fragment>
    )
}