import React from 'react';
import {Link , Switch , Route, useRouteMatch} from 'react-router-dom';
import TestSubject from './TestSubject';

export default function Test(){
    let {path, url} = useRouteMatch();
    return(
        <React.Fragment>
        
       
        <Switch>
            <Route exact path={path} >
        <div className="main-title">
            Are you Ready for Exam?
        </div>
        <div className="practise-subject">
            <div className="row">
                <div className="col-md-3 col-lg-3 col-12">
                
                        <div className="practise-wrapper">
                        <Link to={`${url}/physics`}>
                            <div className="row">
                                <div className="col-md-3 col-3">
                                    <div className="icon-box" style={{backgroundColor: '#ffed6a'}}>
                                        <i className="fa fa-atom"></i>
                                    </div>
                                </div>
                                <div className="col-md-9 col-9">
                                    <div className="subject-name">
                                        Physics <i className="fa fa-caret-right"></i>
                                    </div>
                                    <div className="progress">
                                      <div className="progress-bar" style={{width:'70%'}}></div>
                                    </div>
                                    <div className="progress-percent">
                                        70%
                                    </div>
                                </div>
                            </div>
                                        </Link>
                        </div>
    
                </div>
                <div className="col-md-3 col-lg-3 col-12">
                   
                        <div className="practise-wrapper">
                            <a href="">
                            <div className="row">
                                <div className="col-md-3 col-3">
                                    <div className="icon-box" style={{backgroundColor: '#ff8282'}}>
                                        <i className="fa fa-flask"></i>
                                    </div>
                                </div>
                                <div className="col-md-9 col-9">
                                    <div className="subject-name">
                                        Chemistry <i className="fa fa-caret-right"></i>
                                    </div>
                                    <div className="progress">
                                      <div className="progress-bar" style={{width:'70%'}}></div>
                                    </div>
                                    <div className="progress-percent">
                                        70%
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                    
                </div>
                <div className="col-md-3 col-lg-3 col-12">
                   
                        <div className="practise-wrapper">
                            <a href="">
                            <div className="row">
                                <div className="col-md-3 col-3">
                                    <div className="icon-box" style={{backgroundColor: '#6c97f9'}}>
                                        <i className="fa fa-dna"></i>
                                    </div>
                                </div>
                                <div className="col-md-9 col-9">
                                    <div className="subject-name">
                                        Biology <i className="fa fa-caret-right"></i>
                                    </div>
                                    <div className="progress">
                                      <div className="progress-bar" style={{width:'70%'}}></div>
                                    </div>
                                    <div className="progress-percent">
                                        70%
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                    
                </div>
                <div className="col-md-3 col-lg-3 col-12">
                   
                        <div className="practise-wrapper">
                            <a href="">
                            <div className="row">
                                <div className="col-md-3 col-3">
                                    <div className="icon-box" style={{backgroundColor: '#8af966'}}>
                                        <i className="fa fa-calculator"></i>
                                    </div>
                                </div>
                                <div className="col-md-9 col-9">
                                    <div className="subject-name">
                                        Maths <i className="fa fa-caret-right"></i>
                                    </div>
                                    <div className="progress">
                                      <div className="progress-bar" style={{width:'70%'}}></div>
                                    </div>
                                    <div className="progress-percent">
                                        70%
                                    </div>
                                </div>
                            </div>
                            </a>
                        </div>
                  
                </div>
            </div>
        </div>
        <div className="sub-title">
            Your practise Report
        </div>
        <div className="practise-report">
            <div className="row">
                
                <div className="col-md-4 col-lg-4 col-12">
                    <div className="report-wrapper ">
                        <div className="title d-flex justify-content-center">
                           
                            <div className="title-wrapper">
                                <strong>Overall Report</strong>
                               
                            </div>

                           

                        </div>
                        <div className="content-wrapper">
                            <div className="overall-report">
                                92%
                                <div className="title">
                                    Course Completion
                                </div>
                            </div>
                        </div>
                        <div className="footer-wrapper">
                            <div className="title-wrapper d-flex justify-content-between">
                                <div className="title">
                                    <small>Time</small>
                                    <strong>1 hrs</strong>
                                    <i className="fa fa-long-arrow-alt-up" style={{color: 'green'}}></i>
                                </div>
                                 <div className="title">
                                    <small>Goals</small>
                                    <strong>1 </strong>
                                    <i className="fa fa-long-arrow-alt-down" style={{color: 'red'}}></i>
                                </div>
                                <div className="title">
                                    <small>Accuracy</small>
                                    <strong>90%</strong>
                                    <i className="fa fa-long-arrow-alt-down" style={{color: 'red'}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-12">
                    <div className="report-wrapper ">
                        <div className="title d-flex justify-content-between">
                            <span className="prev"><i className="fa fa-caret-left"></i></span>
                            <div className="title-wrapper">
                                <strong>Weekly Report</strong>
                                <small>Jan 1 - Feb 1</small>
                            </div>

                            <span className="next"><i className="fa fa-caret-right"></i></span>

                        </div>
                        <div className="content-wrapper">
                            <img src={require("../assets/images/graph.jpg")} alt="" className="img-fluid" />
                        </div>
                        <div className="footer-wrapper">
                            <div className="title-wrapper d-flex justify-content-between">
                                <div className="title">
                                    <small>Time</small>
                                    <strong>1 hrs</strong>
                                    <i className="fa fa-long-arrow-alt-up" style={{color: 'green'}}></i>
                                </div>
                                 <div className="title">
                                    <small>Goals</small>
                                    <strong>1 </strong>
                                    <i className="fa fa-long-arrow-alt-down" style={{color: 'red'}}></i>
                                </div>
                                <div className="title">
                                    <small>Accuracy</small>
                                    <strong>90%</strong>
                                    <i className="fa fa-long-arrow-alt-down" style={{color: 'red'}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="col-md-4 col-lg-4 col-12">
                    <div className="report-wrapper ">
                        <div className="title d-flex justify-content-between">
                            <span className="prev"><i className="fa fa-caret-left"></i></span>
                            <div className="title-wrapper">
                                <strong>Yearly Report</strong>
                                <small>2019 - 2020</small>
                            </div>

                            <span className="next"><i className="fa fa-caret-right"></i></span>

                        </div>
                        <div className="content-wrapper">
                            <img src={require("../assets/images/graph.jpg")} alt="" className="img-fluid" />
                        </div>
                        <div className="footer-wrapper">
                            <div className="title-wrapper d-flex justify-content-between">
                                <div className="title">
                                    <small>Time</small>
                                    <strong>1 hrs</strong>
                                    <i className="fa fa-long-arrow-alt-up" style={{color: 'green'}}></i>
                                </div>
                                 <div className="title">
                                    <small>Goals</small>
                                    <strong>1 </strong>
                                    <i className="fa fa-long-arrow-alt-down" style={{color: 'red'}}></i>
                                </div>
                                <div className="title">
                                    <small>Accuracy</small>
                                    <strong>90%</strong>
                                    <i className="fa fa-long-arrow-alt-down" style={{color: 'red'}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       
    </div>
    </Route>
    <Route path={`${path}/physics`}>
            <TestSubject />
    </Route>
</Switch>

</React.Fragment>
    )
}