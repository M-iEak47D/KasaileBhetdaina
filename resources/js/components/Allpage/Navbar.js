import React,{useState} from "react";
import ReactDOM from "react-dom";

import ClassNavbarsub from "./ClassNavbarsub";
import PreparationNavbarsub from "./PreparationNavbarsub"


function Navbar(){
    return(
<div>
     <div id="navbar" className="d-flex justify-content-between sticky  ">
        <div className="logo-container">
            <img src={require('../../pages/images/logo.png')} className="img-fluid" />
        </div>
        <div className="nav d-none d-sm-block">
            <a href="index.html" className="active">Home</a>
           <div className="dropdown">
              <a className=" dropdown-toggle" data-toggle="dropdown">
                Classes
              </a>
              <div className="dropdown-menu">
                <ClassNavbarsub />
              </div>
            </div>
           <div className="dropdown">
              <a className=" dropdown-toggle" data-toggle="dropdown">
                Preparation
              </a>
              <div className="dropdown-menu">
                  <PreparationNavbarsub />
              </div>
            </div>
            
            <a href="#features">Features</a>
            <a href="#blog">Blogs</a>
        </div>
        <div className="button-container">
            <div className="join-now">
                <a href="" data-toggle="modal" data-target="#myModal">Join Now</a>
            </div>
            <div className="login">
                <a href="" data-toggle="modal" data-target="#myModal2">Login</a>
            </div>
        </div>
        <span  className="d-block d-sm-none"><i className="fa fa-bars"></i></span>
    </div>

    {/* // <!-- The overlay --> */}
    <div id="myNav" className="overlay">
        {/* <!-- Button to close the overlay navigation --> */}
        <a href="javascript:void(0)" className="closebtn" >&times;</a>
        {/* <!-- Overlay content --> */}
        <div className="overlay-content">
            <a href="index.html">Home</a>
           <div className="dropdown">
              <a className=" dropdown-toggle" data-toggle="dropdown">
                Classes
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="class.html">SEE</a>
                <a className="dropdown-item" href="#">11</a>
                <a className="dropdown-item" href="#">12</a>
              </div>
            </div>
           <div className="dropdown">
              <a className=" dropdown-toggle" data-toggle="dropdown">
                Preparation
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="preparation.html">Bridge Course</a>
                <a className="dropdown-item" href="#">11</a>
                <a className="dropdown-item" href="#">12</a>
              </div>
            </div>
            <a href="dashboard.html">Features</a>
            <a href="quiz.html">Blog</a>
        </div>
    </div>
</div>
    )
}

export default Navbar;