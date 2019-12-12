import React from "react";
import ReactDOM from "react-dom";

function Interactive(){
    return(
<React.Fragment>
        <div className="syllabus-feature">
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-5">
                    <img src={require('../../pages/images/syllabus.jpg')}alt="" className="img-fluid" />
                </div>
                <div className="col-md-7">
                    <div className="feature-container">
                        <div className="title">
                            Mapped to the Syllabus
                        </div>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex reiciendis, incidunt quos voluptatem mollitia et iusto delectus distinctio placeat voluptatibus repudiandae esse, vel magnam, quis quaerat aperiam totam eaque. Corporis.
                        </div>
                        <div className="button-container">
                            <a className="mybtn">Start Learning</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="analysis-feature">
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-7">
                    <div className="feature-container">
                        <div className="title">
                            Unlimited Practice and In-depth Analysis
                        </div>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex reiciendis, incidunt quos voluptatem mollitia et iusto delectus distinctio placeat voluptatibus repudiandae esse, vel magnam, quis quaerat aperiam totam eaque. Corporis.
                        </div>
                        <div className="button-container">
                            <a className="mybtn">Explore Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={require('../../pages/images/analysis.jpg')} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
    <div className="question-feature">
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-5">
                    <img src={require('../../pages/images/question.jpg')} alt="" className="img-fluid" />
                </div>
                <div className="col-md-7">
                    <div className="feature-container">
                        <div className="title">
                            Engaging Interactive Question
                        </div>
                        <div className="description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex reiciendis, incidunt quos voluptatem mollitia et iusto delectus distinctio placeat voluptatibus repudiandae esse, vel magnam, quis quaerat aperiam totam eaque. Corporis.
                        </div>
                        <div className="button-container">
                            <a className="mybtn">Start Learning</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="app-container">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img src={require('../../pages/images/computer-screen.png')} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <div className="title">
                        Download the app for Free
                    </div>
                    <div className="subtitle">
                        No Fee For Education
                    </div>
                    <div className="app-download d-flex justify-content-center">
                        <div className="play-store">
                            <a href=""><img src={require('../../pages/images/play-store.png')} className="img-fluid" /></a>
                        </div>
                        <div className="app-store">
                            <a href=""><img src={require('../../pages/images/brand-apple.png')} className="img-fluid" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</React.Fragment>

    )
}

export default Interactive;