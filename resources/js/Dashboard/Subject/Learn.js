import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import LearnSubject from '../Subject/LearnSubject';
import axios from 'axios';
import { useAuth } from '../../Context/Auth';
import PageNotFound from '../../pages/PageNotFound';
import "../assets/css/userStyle.css"

export default function Learn() {
    let { path, url } = useRouteMatch();
    let { subjectId } = useParams();

    const { Authtoken } = useAuth();

    const [SubjectResponse, setSubjectResponse] = useState([])
    const [loading, setLoading] = useState(true)

    // const fetch = async() => {
        // await 
    // }

    useEffect(() => {
        axios.get('http://noname.hellonep.com/api/subjects/' + Authtoken.class_id).then(
            response => {
                setSubjectResponse(response.data.subjects)
            })
            .then(setLoading(false))    }, [])

    return (
        <React.Fragment>
            <Switch>
                <Route exact path={path}>
                    
                    <div className="main-title">
                        What do you want to learn today?
                    </div>
                    <div className="container learn-subject">
                    { SubjectResponse.length ===0 ? <h2>Loading...</h2> :
                
                        <div className="row">
                            {SubjectResponse.map((subject, index) =>
                                <div className="col-md-3 col-lg-3 col-6">
                                    <Link to={`${url}/` + subject.slug}>
                                        <div className="subject-container" key={index} >
                                            <div className="img-container" >
                                                <i className="fa fa-atom"></i>
                                            </div>
                                            <div className="title">
                                                {subject.name}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>
                    }
                    </div>
                </Route>
                <Route path={`${path}/:subjectId`}>
                    <LearnSubject />
                </Route>
                {/* <Route path={`${path}/` + "*"} component={PageNotFound} /> */}
            </Switch>
        </React.Fragment>
    )
}