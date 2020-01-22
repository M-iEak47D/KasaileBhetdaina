import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../Context/Auth";
import axios from "axios";

const ClassSelect = () => {
    const token = localStorage.getItem('tokens')
    const [loading, setLoading] = useState(false)
    const {StorageToken, Authtoken} = useAuth();
    let history = useHistory();

    const handleClassSubmit = (data) => {
        axios({
            method: 'post',
            url: 'http://noname.hellonep.com/api/store/class',
            data: {
                class_id: data,
                user_id: JSON.parse(token).user_id,
                auth_token: JSON.parse(token).token,
            }
        }).then(
            res => {
                console.log(res)
                if (res.data.status === "success") {
                    // const localstor = JSON.parse(localStorage.getItem('tokens'))
                    // localstor.class_id = data
                    // localStorage.setItem('tokens', JSON.stringify(localstor));
                    StorageToken({
                        name: res.data.name,
                        user_id: res.data.user_id,
                        class_id: res.data.class_id,
                        token: res.data.auth_token,

                    })
                }
                setLoading(true)
            }
        )
    }
    const [classResponse, setClassResponse] = useState([]);
    const [PreparationResponse, setPreparationResponse] = useState([]);


    useEffect(() => {
        axios.get('http://noname.hellonep.com/api/classes').then(
            response => {
                setClassResponse(response.data.classess)
                setPreparationResponse(response.data.preparations)
            })
    }, [])

    useEffect(() => {
        if(loading){
        history.push({
            pathname: '/learn'
        })
    }
    }, [Authtoken, loading])




    return (
        <React.Fragment>
            {/* <Switch>
                                <Route exact path={path} > */}
            <div className="setting-container">
                <div className="row">
                    <div className="col-6 color-section">
                    </div>
                    <div className="col-6 nocolor-section">
                    </div>
                </div>
                <div className="classSelect-wrapper">
                    <div className="row">
                        <div className="col-6">

                            <div className="class">
                                <h3>
                                    Enroll in Class:
                                    </h3>
                                <ul>
                                    {(classResponse).map((myClass, index) =>
                                        <li key={index} onClick={() => handleClassSubmit(myClass.id)}> {myClass.name} </li>
                                    )
                                    }
                                </ul>
                            
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="preparation">
                                <h3>
                                    Enroll in Preparation:
                                        </h3>
                                <ul>
                                    {(PreparationResponse).map((myPreparation,index)=>
                                        <li key={index} onClick={() => handleClassSubmit(myPreparation.id)}> {myPreparation.name}</li>
                                    )}
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
            </div>
        </React.Fragment>
    )
}
export default ClassSelect;

