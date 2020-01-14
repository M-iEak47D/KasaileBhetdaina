import React, {useState} from 'react';
import ReactDOM from "react-dom";
import Dashboard from '../Dashboard/Dashboard';
import "./Homepage.css"
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import PrivateRoute from './PrivateRoute';
import { AuthContext, useAuth } from '../Context/Auth';
import ResetPassword from '../Components/Register/ResetPassword';
import ClassSelect from '../Dashboard/Profile/ClassSelect';



export default function Index(){
    const [Authtoken, setAuthtoken] = useState(true)
    const  setAuthtokens  = useAuth();

    
    return(
        <React.Fragment>
        <AuthContext.Provider value={{Authtoken}}>
         <BrowserRouter>
            <Switch>
                <Route path="/set-password" component={ResetPassword}  />
                <PrivateRoute><Dashboard /></PrivateRoute>
            </Switch>
          </BrowserRouter>
          </AuthContext.Provider>
         </React.Fragment> 
    )
}

if (document.getElementById("example")) {
    ReactDOM.render(<Index />, document.getElementById("example"));
}