import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <div className="testimonial-container">
            <div className="container">
                <div className="title">What Student's Say About Us?</div>
                <div>
                    <Slider {...settings}>
                        <div>
                            <div className="testimonial">
                                <div className="content">
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam suscipit elit
                                        porttitor erat rutrum, ac.elit porttitor
                                        erat rutrum, ac.
                                    </p>
                                </div>
                                <div className="testimonial-pic">
                                    <img
                                        src={require("../../pages/images/testimonial-1.jpg")}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="testimonial-review">
                                    <h3 className="testimonial-title">
                                        williamson
                                    </h3>
                                    <span>Teacher</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial">
                                <div className="content">
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam suscipit elit
                                        porttitor erat rutrum, ac.elit porttitor
                                        erat rutrum, ac.
                                    </p>
                                </div>
                                <div className="testimonial-pic">
                                    <img
                                        src={require("../../pages/images/testimonial-1.jpg")}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="testimonial-review">
                                    <h3 className="testimonial-title">
                                        williamson
                                    </h3>
                                    <span>Teacher</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial">
                                <div className="content">
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam suscipit elit
                                        porttitor erat rutrum, ac.elit porttitor
                                        erat rutrum, ac.
                                    </p>
                                </div>
                                <div className="testimonial-pic">
                                    <img
                                        src={require("../../pages/images/testimonial-1.jpg")}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="testimonial-review">
                                    <h3 className="testimonial-title">
                                        miranda joy
                                    </h3>
                                    <span>Student</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial">
                                <div className="content">
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam suscipit elit
                                        porttitor erat rutrum, ac.elit porttitor
                                        erat rutrum, ac.
                                    </p>
                                </div>
                                <div className="testimonial-pic">
                                    <img
                                        src={require("../../pages/images/testimonial-1.jpg")}
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="testimonial-review">
                                    <h3 className="testimonial-title">
                                        steve thomas
                                    </h3>
                                    <span>Parent</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial">
                                <div className="content">
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam suscipit elit
                                        porttitor erat rutrum, ac.elit porttitor
                                        erat rutrum, ac.
                                    </p>
                                </div>
                                <div className="testimonial-pic">
                                    <img
                                        src={require("../../pages/images/testimonial-1.jpg")}
                                        alt=""
                                    />
                                </div>
                                <div className="testimonial-review">
                                    <h3 className="testimonial-title">
                                        miranda joy
                                    </h3>
                                    <span>Teacher</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="testimonial">
                                <div className="content">
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Aliquam suscipit elit
                                        porttitor erat rutrum, ac.elit porttitor
                                        erat rutrum, ac.
                                    </p>
                                </div>
                                <div className="testimonial-pic">
                                    <img
                                        src={require("../../pages/images/testimonial-1.jpg")}
                                        alt=""
                                    />
                                </div>
                                <div className="testimonial-review">
                                    <h3 className="testimonial-title">
                                        williamson
                                    </h3>
                                    <span>Student</span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
