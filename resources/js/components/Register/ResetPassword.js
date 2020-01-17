import React, { useEffect } from 'react';
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom';
import "../../pages/Homepage.css"
import Password from './Password';

export default function ResetPassword() {

    let history = useHistory();
    const user_id = history.location.state.detail.user_id;
    // const path = {
    //     pathname: "/"
    // }
    // useEffect(() => {
    //     if (history.action != "PUSH") {
    //         window.onpopstate = e => {
    //             history.replace(path);
    //         }
    //         if (history.action == "POP") {
    //             history.replace(path)
    //         }
    //     }
    // }, [history])
    return (
        <React.Fragment>
            <div className="setting-container">

                <div className="row">
                    <div className="col-6 color-section">

                    </div>
                    <div className="col-6 nocolor-section">

                    </div>
                </div>
                <Switch>
                    <Password user_id={user_id} history= {history}/>
                </Switch>
            </div>
        </React.Fragment>
    )
}