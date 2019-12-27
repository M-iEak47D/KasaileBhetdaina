import React from 'react';
import {Link, Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';


export default function TestSubject(){
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
           <div className="testSubject">
                <div className="testSubjectWrapper">
                   
                        
                        <div className="title">
                            Test Your Ability 
                        </div>
                        <div className="subtitle">
                            The questions are as per your educational curriculum with 
                            relevant question and time frame.
                        </div>
                        <div className="time">
                            Time frame: <span> 30 min</span>    
                        </div>
                        <div className="attempt-container"> 
                        <div className="attempt">
                                Attempt: 2
                        </div>
                        <div   className="remaining">
                            Remaining : 3
                        </div>
                        </div>  
                        <div className="button-container">
                            <Link to={`/quiz/physics`}> 
                                                Take a Test
                                                </Link>
                            </div>    
                        
                        
                        
                </div>

                   
            </div>
                
           
        </div>
         
         
      
    </React.Fragment> 
       
        
    )
}