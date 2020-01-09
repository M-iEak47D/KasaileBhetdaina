import React from 'react';
import { Link, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import LearnSubject from '../Subject/LearnSubject';
export default function Learn() {

    let { path, url } = useRouteMatch();
    let {subjectId} = useParams();
    return (
        <React.Fragment>
        <Switch>
        <Route exact path ={path}> 
            <div className="main-title">
                What do you want to learn today?
            </div>
            <div className="container learn-subject">
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-6">
                        <Link to={`${url}/physics`}>
                            <div className="subject-container">
                                <div className="img-container" >
                                    <i className="fa fa-atom"></i>
                                </div>
                                <div className="title">
                                    Physics
                            </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-lg-3 col-6">
                        <Link to={`${url}/chemistry`}>
                            <div className="subject-container">
                                <div className="img-container" >
                                    <i className="fa fa-flask"></i>
                                </div>
                                <div className="title">
                                    Chemistry
                            </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 col-lg-3 col-6">
                        <a href="">
                            <div className="subject-container">
                                <div className="img-container" >
                                    <i className="fa fa-dna"></i>
                                </div>
                                <div className="title">
                                    Biology
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-lg-3 col-6">
                        <a href="">
                            <div className="subject-container">
                                <div className="img-container" >
                                    <i className="fa fa-calculator"></i>
                                </div>
                                <div className="title">
                                    Maths
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-lg-3 col-6">
                        <a href="">
                            <div className="subject-container">
                                <div className="img-container" >
                                    <i className="fa fa-book"></i>
                                </div>
                                <div className="title">
                                    English
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-lg-3 col-6">
                        <a href="">
                            <div className="subject-container">
                                <div className="img-container" >
                                    <i className="fa fa-users"></i>
                                </div>
                                <div className="title">
                                    Social
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-lg-3 col-6">
                        <a href="">
                            <div className="subject-container">
                                <div className="img-container" >
                                    <i className="fa fa-mountain"></i>
                                </div>
                                <div className="title">
                                    Nepali
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-lg-3 col-6">
                        <a href="">
                            <div className="subject-container">
                                <div className="img-container" >
                                    <i className="fa fa-laptop"></i>
                                </div>
                                <div className="title">
                                    Computer
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-lg-3 col-6">
                        <a href="">
                            <div className="subject-container">
                                <div className="img-container" >
                                    <i className="fa fa-file-invoice"></i>
                                </div>
                                <div className="title">
                                    Account
                            </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 col-lg-3 col-6">
                        <a href="">
                            <div className="subject-container">
                                <div className="img-container">
                                    <i className="fab fa-pagelines"></i>
                                </div>
                                <div className="title">
                                    EPH
                            </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            </Route>
                <Route path={`${path}/:subjectId`}>
                    <LearnSubject />
                </Route>
            </Switch>
        </React.Fragment>   
    )
}