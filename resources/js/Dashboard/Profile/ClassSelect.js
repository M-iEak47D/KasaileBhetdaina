import React from "react";
import ReactDOM from "react-dom";
import {Switch, Route} from "react-router-dom";

const ClassSelect = () => {
        return(
             <React.Fragment>
                            {/* <Switch>
                                <Route exact path={path} > */}
                                <div className="classSelect-wrapper">
                                <div className="row">
                                <div className="col-6">
                               
                                <div className="class">
                                    <h3>
                                           Enroll in Class:
                                    </h3>
                                    <ul>
                                        <li>10</li>
                                        <li>+2</li>
                                        <li>IOM</li>
                                        {/* <li><Link to={`${url}/ioe`} >IOE</Link></li> */}
                                        <li>BBA</li>
                                        <li>CA</li>
                                    </ul>
                                </div>
                                
                                </div>
                                <div className="col-6">
                                    <div className="preparation">
                                        <h3>
                                            Enroll in Preparation:
                                        </h3>
                                        <ul>
                                            <li>Bridge Course</li>
                                            <li>Nursing</li>
                                            <li>IOM</li>
                                            <li>IOE</li>
                                            <li>CMAT</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                                {/* </Route> */}
                               
                                {/* <Route path={`${path}/ioe`} >
                                    <SubClass />
                                </Route> */}
                            {/* </Switch> */}
                            </React.Fragment>
        )
}
export default ClassSelect;
    
