import React, { useState } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import FlashModal from "./FlashModal";
const FlashCards = ({ FlashcardResponse }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true
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
	const [modalId, setModalId] = useState();
	return (
		<div className="tab-pane container fade" id="flash">
			{FlashcardResponse.data ? (
				<React.Fragment>
					{FlashcardResponse.data.map((Flash, index) => (
						<React.Fragment>
							<div className="chapter-title" key={index}>
								<span>{index + 1}</span>
								{Flash.name}
							</div>
							<div className="top-content" key={index}>
								<div className="container-fluid ">
									{Flash.flashCards ? (
										<Slider {...settings}>
											{Flash.flashCards.map((Content) => (
												<div className="carousel-inner" key={Content.id}>
													<div className="carousel-box">
														<a
															href=""
															className="question"
															data-toggle="modal"
															data-target={"#flash-modal"}
															onClick={() => setModalId(Content.id)}
														>
															{" "}
															{Content.title}{" "}
														</a>
													</div>
												</div>
											))}
										</Slider>
									) : (
										<div>Loading</div>
									)}
								</div>
							</div>
						</React.Fragment>
					))}
						<FlashModal id={modalId} />
				</React.Fragment>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};
export default FlashCards;
