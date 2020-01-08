import React from "react";
import ReactDOM from "react-dom";

const FlashCards = () =>{
    return(
         <div className="tab-pane container fade" id="flash">
            <div className="chapter-title">
              <span>01</span>Measurement
          </div>
            <div className="top-content">
              <div className="container-fluid">
                <div id="carousel-one" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner row w-100 mx-auto" role="listbox">
                    <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                      <div className="carousel-box">
                        <div className="question"> What is Measurement? </div>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carousel-one" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carousel-one" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="chapter-title">
              <span>02</span>Force
          </div>
            <div className="top-content">
              <div className="container-fluid">
                <div id="carousel-two" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner row w-100 mx-auto" role="listbox">
                    <div className="carousel-item col-12 col-sm-6 col-md-4 col-lg-3 active">
                      <div className="carousel-box">
                        <a href="" className="question" data-toggle="modal" data-target="#carouselModalTwo"> What is Force? </a>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carousel-two" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carousel-two" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="modal" id="carouselModalTwo">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <strong>What is Force?</strong>
                    <p style={{ fontWeight: "lighter" }}> Himal Ma Hiu </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    )
}

export default FlashCards;