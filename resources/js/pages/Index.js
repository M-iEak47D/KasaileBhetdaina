import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import Dashboard from '../Dashboard/Dashboard';
import "./Homepage.css"
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import PrivateRoute from './PrivateRoute';
import { AuthContext, useAuth } from '../Context/Auth';
import ResetPassword from '../Components/Register/ResetPassword';
import ClassSelect from '../Dashboard/Profile/ClassSelect';
import Newquiz from '../Dashboard/Quiz/quizlayout';
import QuizResult from '../Dashboard/Quiz/QuizResult';



export default function Index(){
    const token = localStorage.getItem('tokens')
    const [Authtoken, setAuthtokens] = useState(token ? JSON.parse(token) : false);

    const Tokens = (data) => {
        localStorage.setItem('tokens',JSON.stringify(data))
        setAuthtokens(token)
    }
   
    return(
        <React.Fragment>
        <AuthContext.Provider value={{Authtoken, StorageToken: Tokens}}>
         <BrowserRouter>
            <Switch>
                <Route path="/quiz" component={Newquiz} />
                <Route path="/quiz-result" component={QuizResult} />
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