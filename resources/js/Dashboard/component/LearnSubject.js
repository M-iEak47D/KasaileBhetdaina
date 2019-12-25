import React from 'react';
import {Link, Switch, Route, useRouteMatch} from 'react-router-dom';


export default function LearnSubject(){
   let {path, url} = useRouteMatch();
 
    return(
        <React.Fragment>
          <div className="main-subject-containter">
            <div className="subject-navbar d-flex justify-content-between">
                <Link to={`${url}`} className="back">
                  <i className="fa fa-arrow-left"></i>
                  </Link>
                <div className="top-subject-navbar">
                    <div className="icon-box">
                        <i className="fa fa-atom"></i>
                        </div>
                    <div className="title-box">
                    <h2>Physics</h2>
                    <div className="chapter-number">10 Chapters</div>
                </div>
                

                </div>
                <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="pill" href="#note">Notes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#flash">Flash Cards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#past-question">Question Set</a>
                        </li>
                    </ul>

                   


               
            </div>
            <div className="tab-content">
  <div className="tab-pane container active" id="note">
      <div className="subject-content">
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>01</span>Measurement
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <Link to={`/viewer/measure`}><i className="fa fa-eye"></i></Link>
                <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>02</span>Force
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
                <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>03</span>Power
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
                <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>04</span>Heat
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
                <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>05</span>Work
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
                <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
      </div>
  </div>
  <div className="tab-pane container fade" id="flash">
  <div className="chapter-title">
           <span>01</span>Measurement
    </div>
  <div className="top-content">
    <div className="container-fluid">
        <div id="carousel-one" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner row w-100 mx-auto" role="listbox">
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                  <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>           
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-one" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-one" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>
<div className="chapter-title">
           <span>02</span>Force
    </div>
  <div className="top-content">
    <div className="container-fluid">
        <div id="carousel-two" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner row w-100 mx-auto" role="listbox">
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                  <div className="carousel-box">
                  <a href="" className="question" data-toggle="modal" data-target="#carouselModalTwo"> What is Force? </a>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <a href="" className="question" data-toggle="modal" data-target="#carouselModalTwo"> What is Measurement? </a>
                  </div>           
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
                <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="carousel-box">
                     <div className="question"> What is Measurement? </div>
                  </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-two" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-two" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>

<div className="modal" id="carouselModalTwo">
  <div className="modal-dialog">
    <div className="modal-content">

     
      <div className="modal-body">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
        <strong>What is Force?</strong>
        <p style={{fontWeight:"lighter"}}>The original form of Newton's second law states that the net force acting
             upon an object is equal to the rate at which its momentum changes with time.
              If the mass of the object is constant, this law implies that the acceleration
               of an object is directly proportional to the net force acting on the object,
                is in the direction of the net force, and is inversely proportional to the 
                mass of the object.</p>
      </div>

     

    </div>
  </div>
</div>
  </div>
  <div className="tab-pane container fade" id="past-question">
  <div className="subject-content">
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>2063</span>Old Exam Questions
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <Link to={'/viewer/OEQ2063'}><i className="fa fa-eye"></i></Link>
                
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>2073</span>Old Exam Questions
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <Link to={'/viewer/OEQ2073'}><i className="fa fa-eye"></i></Link>
               
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>01</span>Model Question Set
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
               
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>02</span>Model Question Set
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
               
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>03</span>Model Question Set
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
               
            </div>
          </div>
      </div>
  </div>
</div>
</div>
         
         
      
        </React.Fragment>
    )
}