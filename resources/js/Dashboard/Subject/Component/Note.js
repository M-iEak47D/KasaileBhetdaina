import React, { useState, useEffect } from "React"
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch, useLocation, useRouteMatch } from "react-router-dom"
import axios from "axios";
import { useAuth } from "../../../Context/Auth";

const Note = ({chapterResponse}) => {
  const {Authtoken} = useAuth();

  console.log('chapters', chapterResponse)
 
  const HandleBookmark = (data) =>{
    axios({
      method: 'post',
      url: 'http://noname.hellonep.com/api/bookmark/store',
      data: { 
         note_id: data,
         class_id: Authtoken.class_id,
         user_id: Authtoken.user_id,
         type: "note",
         auth_token: Authtoken.token,

      }
    }).then(
      response=>{
        console.log(response)
      }
    )
  }

  return (
    <div className="tab-pane active" id="note">
      <div className="subject-content">
        {(chapterResponse.data) ? 
          <React.Fragment>
        {chapterResponse.data.map((note, index) =>
          <div className="chapter-wrapper d-flex justify-content-between">
            <div className="chapter-title">
              <span>{index+1}</span>{note.name}
            </div>
            <div className="option">
              <a href="#"><i className="fa fa-download"></i></a>
              <Link to="/viewer"><i className="fa fa-eye"></i></Link>
              {note.notes && <a href="#" onClick={() => HandleBookmark(note.notes[0].id)}><i className="fa fa-bookmark"></i></a>}
            </div>
          </div>
        )}
        </React.Fragment>
        : 
        <div> Loading ..  </div> 
        }
      </div>
    
    </div>
  )
}

export default Note;