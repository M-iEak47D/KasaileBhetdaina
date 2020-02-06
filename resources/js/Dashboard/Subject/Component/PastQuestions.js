import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";

const PastQuestions = ({QuestionResponse}) =>{
    return(
        <div className="tab-pane  fade" id="past-question">
            <div className="subject-content">
              {QuestionResponse.data && QuestionResponse.data.map((question, index)=>
              <div className="chapter-wrapper d-flex justify-content-between" key={index}>
                <div className="chapter-title">
                  {question.title}
            </div>
                <div className="option">
                  <a href="#"><i className="fa fa-download"></i></a>
                  <Link to={'/viewer/OEQ2063'}><i className="fa fa-eye"></i></Link>
                </div>
              </div>
              )}
            </div>
          </div>
        
    )
}
export default PastQuestions;