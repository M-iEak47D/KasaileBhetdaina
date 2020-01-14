import React from 'react';
import {Link, Switch, Route, useRouteMatch, useHistory} from 'react-router-dom';


export default function Bookmark(){
   let {path, url} = useRouteMatch();
    let History = useHistory();
    return(
        <React.Fragment>
        <div className="main-subject-containter">
            <div className="subject-navbar d-flex justify-content-between">
                <a onClick={History.goBack} className="back">
                  <i className="fa fa-arrow-left"></i>
                  </a>
                <div className="top-subject-navbar">
                    <div className="icon-box">
                        <i className="fa fa-atom"></i>
                        </div>
                    <div className="title-box">
                    <h2>Bookmark</h2>
                    <div className="chapter-number">Quick access for your requirement</div>
                </div>
                

                </div>     
            </div>
            <div className="subject-content">
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>01</span>Measurement
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <Link to={`/viewer/measure`}><i className="fa fa-eye"></i></Link>
                <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>02</span>Force
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
                <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>03</span>Power
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
                <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>04</span>Heat
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
                <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>05</span>Work
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
                <a href="#"><i className="fa fa-bookmark"></i></a>
            </div>
          </div>
      </div>
           
        </div>
         
         
      
        </React.Fragment> 
       
        
    )
}