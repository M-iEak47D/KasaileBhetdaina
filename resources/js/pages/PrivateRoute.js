import React, { Children } from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router-dom";
import { useAuth } from "../Context/Auth";
import Homepage from "./Homepage";
import ClassSelect from "../Dashboard/Profile/ClassSelect";
import ViewNote from "../Dashboard/Subject/NoteViewer/ViewNote";


const PrivateRoute = ({ children, ...rest }) => {
    console.log(useAuth())
    const { Authtoken } = useAuth()  
    console.log();

    return(
    <Route {...rest} render={({location})=>(
        Authtoken ? (
        <Switch>
        <Route path="/view-note" component={ViewNote} />
        <Route path="/class-select" component={ClassSelect} /> 
        {children}
        </Switch>
        )
        : (
            <Route path="/" component={Homepage}    />
          )
        )}
        />  
    )
}

export default PrivateRoute