import React, { useEffect, useState } from "react";
import "./assets/css/userStyle.css";
import Practise from "./Practise/Practise";
import Test from "./MockTest/Test";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
    NavLink
} from "react-router-dom";
import Bookmark from "./Bookmark/Bookmark";
import Doubts from "./Doubts/Doubts";
import Profile from "./Profile/Profile";
import PageNotFound from "../pages/PageNotFound";
import Learn from "./Subject/Learn";
import ClassSelect from "./Profile/ClassSelect";

const routes = [
    {
        path: "/learn",
        main: () => <Learn />
    },
    {
        path: "/practise",
        main: () => <Practise />
    },
    {
        path: "/test",
        main: () => <Test />
    },
    {
        path: "/doubts",
        main: () => <Doubts />
    },
    {
        path: "/bookmark",
        main: () => <Bookmark />
    },
    {
        path: "/profile",
        main: () => <Profile />
    },
    {
        path: "*",
        main: () => <PageNotFound />
    }
];
const Dashboard = () => {
    function closeNav() {
        function myFunction(x) {
            let userSideNav = document.getElementById("userSideNav");
            let main = document.getElementById("main");
            if (x.matches) {
                userSideNav.style.width = "0";
            } else {
                userSideNav.style.width = "80px";
                userSideNav.style.left = "-170px";
                userSideNav.style.marginLeft = "170px";
                document.querySelectorAll(".title-name")[1].style.height = "0";
                main.style.marginLeft = "80px";
                document.getElementById("view").style.display = "block";
                document.getElementsByClassName(
                    "company-container"
                )[0].style.width = "80px";
                document.getElementsByClassName("navbar")[0].style.width =
                    "calc(100% - 80px)";
                document.getElementById("hide").style.display = "none";

                var elems = document.getElementsByClassName("sideTab");

                for (var i = 0; i < elems.length; i++) {
                    // elems[i].style.display = "none";
                    elems[i].style.visibility = "hidden";
                    elems[i].style.opacity = "0";
                }
            }
        }
        var x = window.matchMedia("(max-width: 756px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction);
    }
    function openNav() {
        function myFunction(x) {
            let userSideNav = document.getElementById("userSideNav");
            let main = document.getElementById("main");
            if (x.matches) {
                userSideNav.style.width = "240px";
                main.style.marginLeft = "0px";
            } else {
                userSideNav.style.left = "0px";
                userSideNav.style.width = "250px";
                userSideNav.style.marginLeft = "0px";
                document.querySelectorAll(".title-name")[1].style.height =
                    "50px";
                main.style.marginLeft = "250px";
                document.getElementById("view").style.display = "none";
                document.getElementsByClassName("navbar")[0].style.width =
                    "calc(100% - 250px)";
                document.getElementsByClassName(
                    "company-container"
                )[0].style.width = "250px";
                document.getElementById("hide").style.display = "block";
                var elems = document.getElementsByClassName("sideTab");

                // document.getElementsByClassName("title-name")[1].style.display =
                //     "block";

                setTimeout(function() {
                    for (let i = 0; i < elems.length; i++) {
                        // elems[i].style.display = "inline-block";
                        elems[i].style.opacity = "1";
                        elems[i].style.visibility = "visible";
                    }
                }, 350);
            }
        }
        var x = window.matchMedia("(max-width: 700px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction);
    }

    let { path, url } = useRouteMatch();

    return (
        <React.Fragment>
            <div id="userSideNav" className="userSidenav">
                <div className="company-container">
                    <div className="img-container">
                        <img
                            src={require("./assets/images/logo1.png")}
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
                <div className="profile-container">
                    <div className="img-container">
                        <img
                            src={require("./assets/images/testimonial-1.jpg")}
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="title-name sideTab" style={{ width: "100%" }}>
                    Hot Babe
                    <div className="grade">| Class 10</div>
                    <NavLink to="/class-select">Change ></NavLink>
                </div>
                <div className="d-sm-block d-none">
                    <NavLink to="/learn" className="test-class">
                        <i className="fa fa-graduation-cap"></i>{" "}
                        <span className="sideTab"> Learn</span>
                    </NavLink>
                    <NavLink to="/practise" className="test-class">
                        <i className="fa fa-user-md"></i>{" "}
                        <span className="sideTab"> Practise</span>
                    </NavLink>
                    <NavLink to="/test" className="test-class">
                        <i className="fa fa-file-alt"></i>
                        <span className="sideTab"> Test</span>
                    </NavLink>
                    <NavLink to="/doubts" className="test-class">
                        <i className="fa fa-comment"></i>{" "}
                        <span className="sideTab"> Doubts</span>
                    </NavLink>
                    <NavLink to="/bookmark" className="test-class">
                        <i className="fa fa-bookmark"></i>{" "}
                        <span className="sideTab"> Bookmarks</span>
                    </NavLink>

                    <hr />
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
                <a href="#">
                    <i className="fab fa-facebook"></i>{" "}
                    <span className="sideTab"> Share on Facebook</span>
                </a>
                <hr />
                <div className="sideTab d-sm-block d-none">
                    <div className="download-title">Download App</div>
                    <div className="download-app d-flex justify-content-between ">
                        <div className="play-store">
                            <a href="">
                                <img
                                    src={require("./assets/images/play-store.png")}
                                    alt=""
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                        <div className="app-store">
                            <a href="">
                                <img
                                    src={require("./assets/images/brand-apple.png")}
                                    alt=""
                                    className="img-fluid"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copywrite text-center mt-2">
                    &copy; Copywrite EduNepal
                </div>
                <div className="footer-nav">
                    <NavLink to="/learn" className="active">
                        <i className="fa fa-graduation-cap"></i>{" "}
                        <span className="sideTab"> Learn</span>
                    </NavLink>
                    <NavLink to="/practise">
                        <i className="fa fa-user-md"></i>{" "}
                        <span className="sideTab"> Practise</span>
                    </NavLink>
                    <NavLink to="/test">
                        <i className="fa fa-file-alt"></i>
                        <span> Test</span>
                    </NavLink>
                    <NavLink to="doubts">
                        <i className="fa fa-comment"></i> <span> Doubts</span>
                    </NavLink>
                    <NavLink to="/bookmark">
                        <i className="fa fa-bookmark"></i>{" "}
                        <span> Bookmarks</span>
                    </NavLink>
                </div>
            </div>
            <div id="main">
                <div className="navbar d-flex ">
                    <div className="bars">
                        <span onClick={openNav} id="view">
                            <i className="fa fa-bars"></i>
                        </span>
                        <span onClick={closeNav} id="hide">
                            <i className="fa fa-bars"></i>
                        </span>
                    </div>
                    <div className="d-flex justify-content-end">
                        <div className="invite">
                            <a href="">
                                <i className="fa fa-gift"></i>{" "}
                                <span>Invite & Earn</span>
                            </a>
                        </div>
                        <div className="logout">
                            <a href="">
                                <i className="fa fa-power-off"></i>{" "}
                                <span>Logout</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/learn" />
                        </Route>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;
