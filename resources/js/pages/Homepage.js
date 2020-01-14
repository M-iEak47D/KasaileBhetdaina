import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router-dom"
import './Homepage.css';



import Navbar from '../Components/Allpage/Navbar';
import Banner from '../components/Homepage/Banner';
import Footer from '../components/Allpage/Footer';
import Interactive from '../components/Homepage/Interactive';
import Testimonial from '../components/Homepage/Testimonial';
import Question from '../components/Homepage/Question';
import Class from "./Class";
import Preparation from "./Preparation";
import PageNotFound from "./PageNotFound";



function Homepage(){
    return(
        <React.Fragment>
         <Navbar />
         <Switch>
         <Route path="/class" component={Class} />
         <Route path="/preparation" component={Preparation} />
         <Route exact path="/">
                    <Banner />
                    <Interactive />
                    <Testimonial />
                    <Question />
        </Route>
        <Route path="*" component={PageNotFound} />
        </Switch>
         <Footer />
        </React.Fragment>
    )
}



export default Homepage;