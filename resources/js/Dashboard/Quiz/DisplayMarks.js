import React from "react";
import ReactDOM from "react-dom";

export default function DisplayMark(props){
    // console.log(props)
    return(
        <div className="timer-container">
            <div className="timer-wrapper">
                <div className="time">
                    <span className="hour"> {props.total} / {props.fullMark}</span>
                </div>
            </div>
        </div>
    )
}