import React from 'react';
import {useRouteMatch, Switch, Route} from 'react-router-dom';
import "../../pages/Homepage.css"
// import ClassSelect from './component/ClassSelect';

export default function ResetPassword() {

    let {path, url} = useRouteMatch();
    return(
        <React.Fragment>
            <div className="setting-container">
               
                    <div className="row">
                        <div className="col-6 color-section">

                        </div>
                        <div className="col-6 nocolor-section">

                        </div>
                    </div>
                   <Switch>
                        <Route exact path={path} >
                            <Password />
                        </Route>
                        <Route path={`${path}/selectClass`} >
                            <ClassSelect />
                        </Route>
                   </Switch>
            </div>
        </React.Fragment>
    )
}