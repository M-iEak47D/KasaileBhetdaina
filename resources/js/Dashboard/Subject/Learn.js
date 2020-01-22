import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import LearnSubject from '../Subject/LearnSubject';
import { useAuth } from '../../Context/Auth';
import PageNotFound from '../../pages/PageNotFound';
import "../assets/css/userStyle.css"
import Axios from 'axios';

export default function Learn() {
    let { path, url } = useRouteMatch();
    let { subjectId } = useParams();

    const { Authtoken } = useAuth();
    console.log(Authtoken)

    const [SubjectResponse, setSubjectResponse] = useState([])
    const [loading, setLoading] = useState(true)
    let getUrl = 'http://noname.hellonep.com/api/subjects/'+(Authtoken.class_id)
    

    useEffect(() => {
        let source = Axios.CancelToken.source();

        const loadData = async() => {
            try{
                const response = await Axios.get(getUrl,{
                    cancelToken: source.token
                });
                setSubjectResponse(response.data.subjects);
            } catch (error) {
                if(Axios.isCancel(error)){
                    console.log(error)
                }else{
                    throw error;
                }
            }
    };
    loadData();
    return () =>{
        source.cancel()
    };
}, [getUrl]);

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