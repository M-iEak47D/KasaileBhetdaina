import React from 'react';
import {Link, Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';


export default function Doubts(){
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
                        <i className="fa fa-comment"></i>
                        </div>
                    <div className="title-box">
                    <h2>Doubts</h2>
                    <div className="chapter-number">Get the Solution For your doubts</div>
                    </div>
                

                </div> 
            </div>
           <div className="doubts-container">
                <div className="doubts-wrapper">
                   
                       <div className="container">
                           <div className="row">
                               <div className="col-md-2 col-lg-1 col-3">
                                   <div className="icon-box"><i className="fa fa-comment"></i></div> 
                               </div>
                               <div className="col-md-6 col-lg-7 col-9">
                                   <div className="title">Hit a Doubt</div>
                                   <div className="subtitle">Are you stuck with questions?  </div>
                                   <div className="subtitle">No problem! We are here to solve it out.</div>
                                   
                               </div>
                               <div className="col-md-4 col-lg-4 col-12">
                                   <div className="button-container">
                                       <a href="" data-toggle="collapse" data-target="#doubts">Hit Now</a>
                                   </div>
                               </div>
                            </div>
                           
                       </div>
                      
            
                </div>
                
                    <div id="doubts" class="collapse">
                        <div className="title"> Select a subject</div>
                            <div className="row">
                                <div className="col-md-6">
                                    <a href="" data-toggle="modal" data-target="#doubtSub1">
                                <div className="subject-wrapper">
                                    <i className="fa fa-atom"></i>
                                    <div className="subject-name">
                                        Physics
                                    </div>
                                </div>
                                </a>
                                </div>
                                <div className="col-md-6">
                                <a href="" data-toggle="modal" data-target="#doubtSub1">
                                <div className="subject-wrapper">
                                    <i className="fa fa-flask"></i>
                                    <div className="subject-name">
                                        Chemistry
                                    </div>
                                </div>
                                </a>
                                </div>
                                <div className="col-md-6">
                                <a href="" data-toggle="modal" data-target="#doubtSub1">
                                <div className="subject-wrapper">
                                    <i className="fa fa-dna"></i>
                                    <div className="subject-name">
                                        Biology
                                    </div>
                                </div>
                                </a>
                                </div>
                                <div className="col-md-6">

                                <a href="" data-toggle="modal" data-target="#doubtSub1">
                                <div className="subject-wrapper">
                                    <i className="fa fa-calculator"></i>
                                    <div className="subject-name">
                                        Math
                                    </div>
                                </div>
                                </a>
                                </div>
                           
                                
                            </div>
                        </div>
                   
                <div className="questionary-container">
                    <div className="questionary-wrapper">
                        <div className="row">
                            <div className="col-10">
                                <div className="question">
                                    What's the formula to convert meter into centimeter?
                                    <span className="badge">New</span>
                                </div>
                                <a href="" className="answer" data-toggle="modal" data-target="#questionaryModalOne">
                                    View Answer
                                    </a> 
                                    <div className="modal" id="questionaryModalOne">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                            
                                            <div className="modal-body">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <div className="question">What's the formula to convert meter into centimeter?</div>
                                                <img src={require('../assets/images/graph.jpg')} />
                                                    <p style={{fontWeight:"lighter"}}>The original form of Newton's second law states that the net force acting
                                                    upon an object is equal to the rate at which its momentum changes with time.
                                                    If the mass of the object is constant, this law implies that the acceleration
                                                    of an object is directly proportional to the net force acting on the object,
                                                        is in the direction of the net force, and is inversely proportional to the 
                                                        mass of the object.
                                                        </p>
                                            </div>
                                            
                                            </div>
                                        </div>
                                        </div> 
                            </div>
                            <div className="col-2">
                                <div className="updated-time">
                                    2 days ago
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="questionary-wrapper">
                        <div className="row">
                            <div className="col-10">
                                <div className="question">
                                    What's the formula to convert meter into centimeter?
                                    <span className="badge">New</span>
                                </div>
                                <a href="" className="answer" data-toggle="modal" data-target="#questionaryModalOne">
                                    View Answer
                                    </a> 
                                    <div className="modal" id="questionaryModalOne">
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                            
                                            <div className="modal-body">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <div className="question">What's the formula to convert meter into centimeter?</div>
                                                <img src={require('../assets/images/graph.jpg')} />
                                                    <p style={{fontWeight:"lighter"}}>The original form of Newton's second law states that the net force acting
                                                    upon an object is equal to the rate at which its momentum changes with time.
                                                    If the mass of the object is constant, this law implies that the acceleration
                                                    of an object is directly proportional to the net force acting on the object,
                                                        is in the direction of the net force, and is inversely proportional to the 
                                                        mass of the object.
                                                        </p>
                                            </div>

                                            

                                            </div>
                                        </div>
                                        </div> 
                            </div>
                            <div className="col-2">
                                <div className="updated-time">
                                    2 days ago
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                        <div className="modal" id="doubtSub1">
  <div className="modal-dialog">
    <div className="modal-content">

     
      <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <div className="title">Upload image of your doubt question. (optional)</div> 
            <form>

        <div className="row">
            <div className="col-md-6 col-12">
            <div className="img-container">
            <img src={require('../assets/images/addPhoto.png')} className="img-fluid" /> 
            
          </div> 
            </div>
            <div className="col-md-6 col-12">
            <input type="file" />
            </div>
        </div>
          
         <div className="form-group">
             <label>Explain your Doubts</label>
          <textarea className="form-control">

          </textarea>
          </div>
            <div className="btn-container">
            <input type="submit" value="Send" className="submitBtn"/>
            </div>
                  </form>
        </div>
     

    </div>
  </div>
</div>   
            </div>
                
           
        </div>
   
         
         
      
    </React.Fragment> 
       
        
    )
}