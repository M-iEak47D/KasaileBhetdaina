import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

const FlashCards = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="tab-pane container fade" id="flash">
            <div className="chapter-title">
                <span>01</span>Measurement
            </div>
            <div className="top-content">
                <div className="container-fluid ">
                    <Slider {...settings}>
                        <div className="carousel-inner">
                            <div className="carousel-box">
                                <a
                                    href=""
                                    className="question"
                                    data-toggle="modal"
                                    data-target="#carouselModalTwo"
                                >
                                    {" "}
                                    What is Force?{" "}
                                </a>
                            </div>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-box">
                                <a
                                    href=""
                                    className="question"
                                    data-toggle="modal"
                                    data-target="#carouselModalTwo"
                                >
                                    {" "}
                                    What is Force?{" "}
                                </a>
                            </div>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-box">
                                <a
                                    href=""
                                    className="question"
                                    data-toggle="modal"
                                    data-target="#carouselModalTwo"
                                >
                                    {" "}
                                    What is Force?{" "}
                                </a>
                            </div>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-box">
                                <a
                                    href=""
                                    className="question"
                                    data-toggle="modal"
                                    data-target="#carouselModalTwo"
                                >
                                    {" "}
                                    What is Force?{" "}
                                </a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="chapter-title">
                <span>02</span>Force
            </div>
            <div className="top-content">
                <div className="container-fluid ">
                    <Slider {...settings}>
                        <div className="carousel-inner">
                            <div className="carousel-box">
                                <a
                                    href=""
                                    className="question"
                                    data-toggle="modal"
                                    data-target="#carouselModalTwo"
                                >
                                    {" "}
                                    What is Force?{" "}
                                </a>
                            </div>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-box">
                                <a
                                    href=""
                                    className="question"
                                    data-toggle="modal"
                                    data-target="#carouselModalTwo"
                                >
                                    {" "}
                                    What is Force?{" "}
                                </a>
                            </div>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-box">
                                <a
                                    href=""
                                    className="question"
                                    data-toggle="modal"
                                    data-target="#carouselModalTwo"
                                >
                                    {" "}
                                    What is Force?{" "}
                                </a>
                            </div>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-box">
                                <a
                                    href=""
                                    className="question"
                                    data-toggle="modal"
                                    data-target="#carouselModalTwo"
                                >
                                    {" "}
                                    What is Force?{" "}
                                </a>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="modal" id="carouselModalTwo">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                            <strong>What is Force?</strong>
                            <p style={{ fontWeight: "lighter" }}>
                                {" "}
                                Himal Ma Hiu{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashCards;
