import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Dashboard from "../Dashboard/Dashboard";
import "./Homepage.css";
import {
    BrowserRouter,
    Route,
    Switch,
    useRouteMatch,
    useParams
} from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import { AuthContext, useAuth } from "../Context/Auth";
import ResetPassword from "../Components/Register/ResetPassword";
import ClassSelect from "../Dashboard/Profile/ClassSelect";
import Newquiz from "../Dashboard/Quiz/quizlayout";
import QuizResult from "../Dashboard/Quiz/QuizResult";

export default function Index() {
    const Tokens = data => {
        localStorage.setItem("tokens", JSON.stringify(data));
        // setAuthtokens(token)
        const token = JSON.parse(localStorage.getItem("tokens"));
        setAuthtokens(token);
    };
    const [Authtoken, setAuthtokens] = useState(
        Tokens.tokens
            ? Tokens.tokens
            : localStorage.getItem("tokens")
            ? JSON.parse(localStorage.getItem("tokens"))
            : false
    );
    // let { path, url } = useRouteMatch();
    // console.log(path);

    return (
        <React.Fragment>
            <AuthContext.Provider value={{ Authtoken, StorageToken: Tokens }}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/quiz-result" component={QuizResult} />
                        <Route path="/set-password" component={ResetPassword} />
                        <PrivateRoute>
                            <Route path="/quiz" component={Newquiz} />
                            <Dashboard />
                        </PrivateRoute>
                    </Switch>
                </BrowserRouter>
            </AuthContext.Provider>
        </React.Fragment>
    );
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}
// let { params } = useParams();
