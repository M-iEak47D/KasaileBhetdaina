import React from 'react';
import { Link, Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import Note from './Component/Note';
import FlashCards from './Component/FlashCards';
import PastQuestions from './Component/PastQuestions';


export default function LearnSubject() {
  return (
    <React.Fragment>
      <div className="main-subject-containter">
        <div className="subject-navbar d-flex justify-content-between">
           <a onClick={history.goBack} className="back">
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
           <Note />
           <FlashCards />
           <PastQuestions />
        </div>
      </div>



    </React.Fragment>
  )
}