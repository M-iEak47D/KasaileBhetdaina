import React, { Children } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import Homepage from "./Homepage";
import ClassSelect from "../Dashboard/Profile/ClassSelect";
import ViewNote from "../Dashboard/Subject/NoteViewer/ViewNote";

const PrivateRoute = ({ children, ...rest }) => {
    const { Authtoken } = useAuth();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                Authtoken ? (
                    Authtoken.class_id == null ? (
                        <Switch>
                            <Route
                                path="/class-select"
                                component={ClassSelect}
                            />
                            <Redirect to="/class-select" />
                        </Switch>
                    ) : (
                        <Switch>
                            <Route
                                path="/class-select"
                                component={ClassSelect}
                            />
                            <Route path="/viewer" component={ViewNote} />
                            {children}
                        </Switch>
                    )
                ) : (
                    <Route path="/" component={Homepage} />
                )
            }
        />
    );
};

export default PrivateRoute;
