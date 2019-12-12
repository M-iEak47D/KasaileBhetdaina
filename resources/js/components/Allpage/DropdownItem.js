import React from "react";
import ReactDOM from "react-dom";
import {withRouter} from "react-router-dom"

function DropdownItem({courses, name}){
    if( name == "Class"){
        return(
        <div>
            {courses.map(course =>(
                <a className="dropdown-item" key={course.id} href="#">{course.name}</a>
            ))}
        </div>
               )
     }
     else{
        return(
             null
        )
    }
}

export default withRouter(DropdownItem);