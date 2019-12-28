import React from 'react';
import './assets/css/userStyle.css';
import Learn from './component/Learn';
import Practise from './component/Practise';
import Test from './component/Test';
import { BrowserRouter as Router,Switch,Route, Link, useRouteMatch} from 'react-router-dom';
import Bookmark from './component/Bookmark';
import Doubts from './component/Doubts';
export default  function Dashboard (){
    function closeNav() {
        function myFunction(x) {
            if (x.matches) {
                document.getElementById("userSideNav").style.width = "0";

            } else {
                document.getElementById("userSideNav").style.width = "80px";
                document.getElementById("main").style.marginLeft = "80px";
                document.getElementById("view").style.display = "block";
                document.getElementsByClassName('company-container')[0].style.width = "80px";
                document.getElementsByClassName('navbar')[0].style.width = "calc(100% - 80px)";
                document.getElementById("hide").style.display = "none";
                var elems = document.getElementsByClassName('sideTab');
                for (var i = 0; i < elems.length; i++) {
                    elems[i].style.display = 'none';
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
                document.getElementById("userSideNav").style.width = "240px";
                document.getElementById("main").style.marginLeft = "0px";

            } else {
                document.getElementById("userSideNav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
                document.getElementById("view").style.display = "none";
                document.getElementsByClassName('navbar')[0].style.width = "calc(100% - 250px)";
                document.getElementsByClassName('company-container')[0].style.width = "250px";
                document.getElementById("hide").style.display = "block";
                var elems = document.getElementsByClassName('sideTab');
                for (var i = 0; i < elems.length; i++) {
                    elems[i].style.display = 'inline-block';
                }
                document.getElementsByClassName('title-name')[1].style.display = "block";
            }
        }
        var x = window.matchMedia("(max-width: 700px)");
        myFunction(x); // Call listener function at run time
        x.addListener(myFunction);
    }
    const handleActive = event => {
        $('#userSideNav a').removeClass('active');
        event.target.classList.add('active');
    }
    
    // let {path , url} = useRouteMatch();

    return(
        <React.Fragment>
    <div id="userSideNav" className="userSidenav">
         <div className="company-container">
             <div className="img-container">
                 <img src={require("./assets/images/logo1.png")} alt="" className="img-fluid" />
             </div>
             <div className="title-name sideTab">
                 Educate Nepal 
                  <span onClick={closeNav}><i className="fa fa-times"></i></span>
             </div>
         </div>
         <div className="profile-container">
             <div className="img-container">
                 <img src={require("./assets/images/testimonial-1.jpg")} alt="" className="img-fluid" />
             </div>
         </div>
         <div className="title-name sideTab" style={{ width: "100%"}}>
             Hot Babe
             <div className="grade">| Class 10</div>
             <a href="">Change ></a>
         </div>
         <div className="d-sm-block d-none">
            <Link to="/learn" className="active test-class"  onClick={(event) => {handleActive(event)}}> 
            <i className="fa fa-graduation-cap"></i> <span className="sideTab"> Learn</span>
            </Link>
            <Link to="/practise" className="test-class" onClick={handleActive} >
             <i className="fa fa-user-md"></i> <span className="sideTab"> Practise</span>
             </Link>
             <Link to="/test" className="test-class" onClick={handleActive}>
                 <i className="fa fa-file-alt"></i><span className="sideTab"> Test</span>
             </Link>
             <Link to={`${url}/doubts`} className="test-class" onClick={handleActive}>
             <i className="fa fa-comment"></i> <span className="sideTab"> Doubts</span>
             </Link>
             <Link to={`${url}/bookmark`} className="test-class" onClick={handleActive}>
                 <i className="fa fa-bookmark"></i> <span className="sideTab"> Bookmarks</span>
                </Link>
          
             <hr />
         </div>
         <a href="#"><i className="fa fa-user"></i><span className="sideTab"> Profile</span></a>
         <a href="#"><i className="fa fa-folder-open"></i> <span className="sideTab"> Syllabus</span></a>
         <a href="#"><i className="fa fa-cogs"></i> <span className="sideTab"> Setting</span></a>
         <a href="#"><i className="fab fa-facebook"></i> <span className="sideTab"> Share on Facebook</span></a>
         <hr />
         <div className="sideTab d-sm-block d-none">
             <div className="download-title">Download App</div>
             <div className="download-app d-flex justify-content-between ">
                 <div className="play-store">
                     <a href=""><img src={require("./assets/images/play-store.png")} alt="" className="img-fluid" /></a>
                 </div>
                 <div className="app-store">
                     <a href=""><img src={require("./assets/images/brand-apple.png")} alt="" className="img-fluid"/></a>
                 </div>
             </div>
         </div>
         <div className="copywrite text-center mt-2">
             &copy; Copywrite EduNepal
         </div>
         <div className="footer-nav">
         <Link to="/learn" className="active"  onClick={handleActive}> 
            <i className="fa fa-graduation-cap"></i> <span className="sideTab"> Learn</span>
        </Link>
            <Link to="/practise" onClick={handleActive}>
             <i className="fa fa-user-md"></i> <span className="sideTab"> Practise</span>
             </Link>
             <Link to="/test"  onClick={handleActive}>
       <i className="fa fa-file-alt"></i><span> Test</span>
       </Link>
             <Link to={`${url}/doubts`} onClick={handleActive}>
                 <i className="fa fa-comment"></i> <span> Doubts</span>
                 </Link>
             <Link to={`${url}/bookmark`} ><i className="fa fa-bookmark"></i> <span> Bookmarks</span></Link>
         </div>
     </div>
     <div id="main">
         <div className="navbar d-flex ">
             <div className="bars">
                 <span onClick={openNav} id="view"><i className="fa fa-bars"></i></span>
                 <span onClick={closeNav} id="hide"><i className="fa fa-bars"></i></span>
                 
             </div>
             <div className="d-flex justify-content-end">
                 <div className="invite">
                     <a href=""><i className="fa fa-gift"></i> <span>Invite & Earn</span></a>
                 </div>
                 <div className="logout">
                     <a href=""><i className="fa fa-power-off"></i> <span>Logout</span></a>
                 </div>
             </div>
         </div>
         <div className="main-content">
                 <Switch>
<<<<<<< HEAD

                 <Route  path="/practise" component={Practise} />
                 <Route  path="/learn" component={Learn}  /> 
                 <Route  path="/test" component={Test} />    
                 {/* <Route  path='/learn/subject' component={LearnSubject} />   */}

=======
                
                 <Route  path="/practise" component={Practise} />
                 <Route path="/learn" component={Learn}  /> 
                 <Route  path="/test" component={Test} />
                 <Route path="/bookmark" component={Bookmark} />  
                 <Route path="/doubts" component={Doubts} />  
                
                     
                
>>>>>>> 766a7f38cf30d7c744daf3e8046b97cce474e74f
                </Switch>
         </div>
    </div>  
        </React.Fragment>
     )
}

 