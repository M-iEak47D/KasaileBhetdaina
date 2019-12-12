import React from "react";
import ReactDOM from "react-dom";

function Question(){
    return(
        <div className="hit-question">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <img src={require('../../pages/images/Untitled.png')} alt="" className="img-fluid" style={{height: "80%"}} />
                </div>
                <div className="col-md-7">
                    <div className="title">
                        Need any Assistance with a question?
                    </div>
                    <div className="subtitle">
                        Feel Free to Ask 1 Question a day
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="button-container">
                        <a href="" className="btn ask-button">Hit a Question</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Question;