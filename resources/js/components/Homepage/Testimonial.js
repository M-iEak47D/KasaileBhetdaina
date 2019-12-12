import React from "react";
import ReactDOM from "react-dom";

function Testimonial(){
    return(
 <div className="testimonial-container">
        <div className="title">
            What Student's Say About Us?
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div id="testimonial-slider" className="owl-carousel">
                        <div className="testimonial">
                            <div className="content">
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit elit porttitor erat rutrum, ac.elit porttitor erat rutrum, ac.
                                </p>
                            </div>
                            <div className="testimonial-pic">
                                <img src={require('../../pages/images/testimonial-1.jpg')} alt="" className="img-fluid" />
                            </div>
                            <div className="testimonial-review">
                                <h3 className="testimonial-title">williamson</h3>
                                <span>Teacher</span>
                               
                            </div>
                        </div>
         
                        <div className="testimonial">
                            <div className="content">
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit elit porttitor erat rutrum, ac.elit porttitor erat rutrum, ac.
                                </p>
                            </div>
                            <div className="testimonial-pic">
                                <img src={require('../../pages/images/testimonial-1.jpg')} alt="" className="img-fluid" />
                            </div>
                            <div className="testimonial-review">
                                <h3 className="testimonial-title">miranda joy</h3>
                                <span>Student</span>
                               
                            </div>
                        </div>
         
                        <div className="testimonial">
                            <div className="content">
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit elit porttitor erat rutrum, ac.elit porttitor erat rutrum, ac.
                                </p>
                            </div>
                            <div className="testimonial-pic">
                                <img src={require('../../pages/images/testimonial-1.jpg')} alt="" className="img-fluid" />
                            </div>
                            <div className="testimonial-review">
                                <h3 className="testimonial-title">steve thomas</h3>
                                <span>Parent</span>
                                
                            </div>
                        </div>
                            <div className="testimonial">
                            <div className="content">
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit elit porttitor erat rutrum, ac.elit porttitor erat rutrum, ac.
                                </p>
                            </div>
                            <div className="testimonial-pic">
                                <img src={require('../../pages/images/testimonial-1.jpg')} alt="" />
                            </div>
                            <div className="testimonial-review">
                                <h3 className="testimonial-title">miranda joy</h3>
                                <span>Teacher</span>
                               
                            </div>
                        </div>
                        <div className="testimonial">
                            <div className="content">
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit elit porttitor erat rutrum, ac.elit porttitor erat rutrum, ac.
                                </p>
                            </div>
                            <div className="testimonial-pic">
                                <img src={require('../../pages/images/testimonial-1.jpg')} alt="" />
                            </div>
                            <div className="testimonial-review">
                                <h3 className="testimonial-title">williamson</h3>
                                <span>Student</span>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
</div>
    )
}

export default Testimonial;