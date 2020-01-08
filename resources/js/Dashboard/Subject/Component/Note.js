import React from "React"
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"

const Note = () =>{
    return(
        <div className="tab-pane container active" id="note">
            <div className="subject-content">
              <div className="chapter-wrapper d-flex justify-content-between">
                <div className="chapter-title">
                  <span>01</span>Measurement
            </div>
                <div className="option">
                  <a href="#"><i className="fa fa-download"></i></a>
                  <Link to="/viewer"><i className="fa fa-eye"></i></Link>
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
             )
}

export default Note;