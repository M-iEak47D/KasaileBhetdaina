import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import ViewAsset from "./ViewAsset";
import "../../assets/css/userStyle.css";
export default function ViewNote() {
    function closeNav() {
        function myFunction(x) {
            if (x.matches) {
                document.getElementById("viewerSideNav").style.width = "0";
            } else {
                document.getElementById("viewerSideNav").style.width = "0px";
                document.getElementById("main").style.marginLeft = "0px";
                document.getElementById("view").style.display = "block";
                document.getElementsByClassName(
                    "company-container"
                )[0].style.width = "0px";
                document.getElementsByClassName("viewerNavbar")[0].style.width =
                    "100%";
                document.getElementById("hide").style.display = "none";
                var elems = document.getElementsByClassName("sideTab");
                for (var i = 0; i < elems.length; i++) {
                    elems[i].style.display = "none";
                }
            }
        }
        var x = window.matchMedia("(max-width: 756px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction);
    }
    function openNav() {
        function myFunction(x) {
            if (x.matches) {
                document.getElementById("viewerSideNav").style.width = "240px";
                document.getElementById("main").style.marginLeft = "0px";
            } else {
                document.getElementById("viewerSideNav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
                document.getElementById("view").style.display = "none";
                document.getElementsByClassName("viewerNavbar")[0].style.width =
                    "calc(100% - 250px)";
                document.getElementsByClassName(
                    "company-container"
                )[0].style.width = "250px";
                document.getElementById("hide").style.display = "block";
                var elems = document.getElementsByClassName("sideTab");
                for (var i = 0; i < elems.length; i++) {
                    elems[i].style.display = "inline-block";
                }
                document.getElementsByClassName("title-name")[1].style.display =
                    "block";
            }
        }
        var x = window.matchMedia("(max-width: 700px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction);
    }
    const handleActive = event => {
        $("#userSideNav a").removeClass("active");
        event.target.classList.add("active");
    };

    return (
        <React.Fragment>
            <div id="viewerSideNav" className="viewerSideNav">
                <div className="company-container">
                    <div className="img-container">
                        <img
                            src={require("../../assets/images/logo1.png")}
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                    <div className="title-name sideTab">
                        Educate Nepal
                        <span onClick={closeNav}>
                            <i className="fa fa-times"></i>
                        </span>
                    </div>
                </div>

                <NavLink to="/profile">
                    <i className="fa fa-user"></i>
                    <span className="sideTab"> Profile</span>
                </NavLink>
                <NavLink to="/quiz">
                    <i className="fa fa-folder-open"></i>{" "}
                    <span className="sideTab"> Syllabus</span>
                </NavLink>
                <NavLink to="/class-select">
                    <i className="fa fa-cogs"></i>{" "}
                    <span className="sideTab"> Setting</span>
                </NavLink>
            </div>

            <div id="main">
                <div className="viewerNavbar d-flex justify-content-between">
                    <div className="bars">
                        <span onClick={openNav} id="view">
                            <i className="fa fa-bars"></i>
                        </span>
                        <span onClick={closeNav} id="hide">
                            <i className="fa fa-bars"></i>
                        </span>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="close">
                            <a href="">
                                <i className="fa fa-times"></i> <span></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="main-content viewer">
                    <ViewAsset />
                </div>
            </div>
        </React.Fragment>
    );
}
