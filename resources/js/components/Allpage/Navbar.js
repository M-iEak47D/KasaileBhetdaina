import React, { Component, useState, setState, useEffect } from 'react'
import Dropdown from './Dropdown'
<<<<<<< HEAD

export default function Nav(){
    const [navbarItems, setNavbarItems] = useState([]);
    const [loading,setLoading] = useState(true);
     console.log(loading);
        // console.log('http://192.168.1.67')   
        useEffect(()=>{
            axios.get('http://192.168.1.86/api/navs')
            .then(response=>{
                setNavbarItems(response.data.data);
                setLoading(false)
            })  
        }, []);
=======




export default function Navbar(){

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("myNav").style.width = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}



>>>>>>> 788be5ea29cbdcd4a1c58fdd21e2198c01fa3bd5
    return(
        <React.Fragment>
     <div id="navbar" className="d-flex justify-content-between sticky  ">
        <div className="logo-container">
            <img src={require('../../pages/images/logo.png')} className="img-fluid" />
        </div>
        <div className="nav d-none d-sm-block">
            <a href="index.html" className="active">Home</a>
<<<<<<< HEAD
            {navbarItems.map((data,id) => 
              <Dropdown data={data} loading={loading}/>
            )}
=======
            {/* {navbarItems.map((data,id) => 
              <Dropdown data={data} loading={loading}/>
            )} */}
>>>>>>> 788be5ea29cbdcd4a1c58fdd21e2198c01fa3bd5
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
                <a href="" data-toggle="modal" data-target="#myModal">Join Now</a>
            </div>
            <div className="login">
                <a href="" data-toggle="modal" data-target="#myModal2">Login</a>
            </div>
        </div>
        <span  className="d-block d-sm-none" onClick={openNav}><i className="fa fa-bars"></i></span>
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
</React.Fragment>

    );
}
