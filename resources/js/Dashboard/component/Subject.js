import React from 'react';

export default function Subject(){

    return(
        <React.Fragment>
            <div className="main-subject-containter">
            <div className="subject-navbar d-flex justify-content-between">
                <span><i className="fa fa-arrow-left"></i></span>
                <div className="top-subject-navbar">
                    <div className="icon-box">
                        <i className="fa fa-atom"></i>
                        </div>
                    <div className="title-box">
                    <h2>Physics</h2>
                    <div className="chapter-number">10 Chapters</div>
                </div>
                

                </div>
                <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="pill" href="#note">Notes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#flash">Flash Cards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="pill" href="#past-question">Question Set</a>
                        </li>
                    </ul>

                   


               
            </div>
            <div className="tab-content">
  <div className="tab-pane container active" id="note">
      <div className="subject-content">
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>01</span>Measurement
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
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
  <div className="tab-pane container fade" id="flash">...</div>
  <div className="tab-pane container fade" id="past-question">
  <div className="subject-content">
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>2063</span>Old Exam Questions
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
                
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>2073</span>Old Exam Questions
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
               
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>01</span>Model Question Set
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
               
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>02</span>Model Question Set
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
               
            </div>
          </div>
          <div className="chapter-wrapper d-flex justify-content-between">
           <div className="chapter-title">
           <span>03</span>Model Question Set
            </div>
            <div className="option">
                <a href="#"><i className="fa fa-download"></i></a>
                <a href="#"><i className="fa fa-eye"></i></a>
               
            </div>
          </div>
      </div>
  </div>
</div>
</div>
        </React.Fragment>
    )
}