import React from "react";
import ReactDOM from "react-dom";
import Classbanner from "../components/Class/ClassBanner"
import Classcontent from "../components/Class/ClassContent"
import Navbar from '../components/Allpage/Navbar';
import './Homepage.css';
import Question from "../components/Homepage/Question";
import Footer from "../components/Allpage/Footer";


export default function Class(){
    return(
        <React.Fragment>
            <Classbanner />
            <Classcontent />
            <Question />
            <Footer />
        </React.Fragment>
    )
}