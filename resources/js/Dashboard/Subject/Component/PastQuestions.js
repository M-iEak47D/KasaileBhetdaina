import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

const PastQuestions = () =>{
    return(
        <div className="tab-pane  fade" id="past-question">
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
        
    )
}
export default PastQuestions;