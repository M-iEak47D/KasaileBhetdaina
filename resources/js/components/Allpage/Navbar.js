import React, { Component, useState, setState, useEffect } from "react";
import Dropdown from "./Dropdown";
import LoginModal from "../Login/LoginModal";
import RegisterModal from "../Register/RegisterModal";
import OTPModal from "../Register/OTPModal";
import { Switch, Route } from "react-router-dom";
import PageNotFound from "../../pages/PageNotFound";

export default function Navbar() {
    function openNav() {
        document.getElementById("myNav").style.height = "100%";
        document.getElementById("myNav").style.width = "100%";
    }

    /* Close */
    function closeNav() {
        document.getElementById("myNav").style.height = "0%";
    }

    return (
        <React.Fragment>
            <div
                id="navbar"
                className="d-flex justify-content-between sticky  "
            >
                <div className="logo-container">
                    <img
                        src={require("../../pages/images/logo1.png")}
                        className="img-fluid"
                    />
                </div>
                <div className="nav d-none d-sm-block">
                    <a href="index.html" className="active">
                        Home
                    </a>
                    {/* {navbarItems.map((data,id) => 
              <Dropdown data={data} loading={loading}/>
            )} */}
                    {/* <div className="dropdown">
              <a className=" dropdown-toggle" data-toggle="dropdown">
                Classs
              </a>
              <div className="dropdown-menu">
                
              </div>
            </div>
           <div className="dropdown">
              <a className=" dropdown-toggle" data-toggle="dropdown">
                Prepartion
              </a>
              <div className="dropdown-menu">
                  
              </div>
            </div> */}

                    <a href="#features">Features</a>
                    <a href="#blog">Blogs</a>
                </div>
                <div className="button-container">
                    <div className="join-now">
                        <a href="" data-toggle="modal" data-target="#join">
                            Join Now
                        </a>
                    </div>
                    <div className="login">
                        <a href="" data-toggle="modal" data-target="#login">
                            Login
                        </a>
                    </div>
                </div>
                <span className="d-block d-sm-none" onClick={openNav}>
                    <i className="fa fa-bars"></i>
                </span>
            </div>

            <div id="myNav" className="overlay">
                <span className="closebtn" onClick={closeNav}>
                    &times;
                </span>

                <div className="overlay-content">
                    <a href="index.html">Home</a>
                    <div className="dropdown">
                        <a className=" dropdown-toggle" data-toggle="dropdown">
                            Classes
                        </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="class.html">
                                SEE
                            </a>
                            <a className="dropdown-item" href="#">
                                11
                            </a>
                            <a className="dropdown-item" href="#">
                                12
                            </a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a className=" dropdown-toggle" data-toggle="dropdown">
                            Preparation
                        </a>
                        <div className="dropdown-menu">
                            <a
                                className="dropdown-item"
                                href="preparation.html"
                            >
                                Bridge Course
                            </a>
                            <a className="dropdown-item" href="#">
                                11
                            </a>
                            <a className="dropdown-item" href="#">
                                12
                            </a>
                        </div>
                    </div>
                    <a href="dashboard.html">Features</a>
                    <a href="quiz.html">Blog</a>
                </div>
            </div>
            <LoginModal />
            <RegisterModal />
        </React.Fragment>
    );
}
