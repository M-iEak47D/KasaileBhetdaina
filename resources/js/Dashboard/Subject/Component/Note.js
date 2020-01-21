import React, { useState, useEffect } from "React"
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch, useLocation, useRouteMatch } from "react-router-dom"

const Note = (props) => {
  console.log(props.chapterResponse)
  return (
    <div className="tab-pane active" id="note">
      <div className="subject-content">
        {props.chapterResponse.map((chapter, index) =>
          <div className="chapter-wrapper d-flex justify-content-between">
            <div className="chapter-title">
              <span>{index+1}</span>{chapter.name}
            </div>
            <div className="option">
              <a href="#"><i className="fa fa-download"></i></a>
              <Link to="/viewer"><i className="fa fa-eye"></i></Link>
              <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Note;