import React from 'react';
import {Link, Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';


export default function PractiseSubject(){
   let {path, url} = useRouteMatch();
    let History = useHistory();
    return(
        <React.Fragment>
        <div className="main-subject-containter">
            <div className="subject-navbar d-flex justify-content-between">
                <a onClick={History.goBack} className="back">
                  <i className="fa fa-arrow-left"></i>
                  </a>
                <div className="top-subject-navbar">
                    <div className="icon-box">
                        <i className="fa fa-atom"></i>
                        </div>
                    <div className="title-box">
                    <h2>Physics</h2>
                    <div className="chapter-number">10 Chapters</div>
                </div>
                

                </div>     
            </div>
           <div className="practiseSubject">
                <div className="practiseSubjectWrapper">
                    <div className="row"> 
                        <div className="col-md-6">
                        
                        <div className="chapter-name">
                            <span>1</span> Measurement 
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width:'70%'}}></div>
                        </div>
                        <div className="progress-percent">
                            70%     
                        </div>    
                        <div className="level">
                        Level <span> 1/10</span>
                            </div>                            
                   
                        </div>
                        <div className="col-md-6">
                                <div className="button-container">
                                    <Link to={`/quiz/measurement`}>Take a Test</Link>
                                    </div>    
                        </div>
                    </div>

                   
                </div>
                <div className="practiseSubjectWrapper">
                    <div className="row"> 
                        <div className="col-md-6">
                      
                        <div className="chapter-name">
                            <span>2</span> Force 
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width:'70%'}}></div>
                        </div>
                        <div className="progress-percent">
                            70%     
                        </div>    
                        <div className="level">
                        Level <span> 1/10</span>
                            </div>                            
                 
                        </div>
                        <div className="col-md-6">
                                <div className="button-container">
                                    <Link to={'/quiz/physics'}>Take a Test</Link>
                                    </div>    
                        </div>
                    </div>

                   
                </div>
                <div className="practiseSubjectWrapper">
                    <div className="row"> 
                        <div className="col-md-6">
                        <a href="">
                        <div className="chapter-name">
                            <span>3</span> Work 
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width:'70%'}}></div>
                        </div>
                        <div className="progress-percent">
                            70%     
                        </div>    
                        <div className="level">
                        Level <span> 1/10</span>
                            </div>                            
                    </a>
                        </div>
                        <div className="col-md-6">
                                <div className="button-container">
                                    <a href="#">Take a Test</a>
                                    </div>    
                        </div>
                    </div>

                   
                </div>
           </div>
        </div>
         
         
      
        </React.Fragment> 
       
        
    )
}