import React from "react";
import ReactDOM from "react-dom";
import './Homepage.css'



import Navbar from '../components/Allpage/Navbar'
import Banner from '../components/Homepage/Banner'
import Footer from '../components/Homepage/Footer'
import Interactive from '../components/Homepage/Interactive'
import Testimonial from '../components/Homepage/Testimonial'
import Question from '../components/Homepage/Question'



function Homepage(){
    return(
        <React.Fragment>
         <Navbar />
         <Banner />
         <Interactive />
         <Testimonial />
         <Question />

         <Footer />
        </React.Fragment>
    )
}



export default Homepage;