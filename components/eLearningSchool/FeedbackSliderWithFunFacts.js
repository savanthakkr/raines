import React, { useState, useEffect } from "react";
import FunFacts from "./FunFacts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import { motion } from "framer-motion";
import BannerCourses from "./BannerCourses";
import Link from "next/link";

const FeedbackSliderWithFunFacts = ({ user }) => {
	// const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		const fetchTests = async () => {
			const url = `${baseUrl}/api/testimonials`;
			const response = await axios.get(url);
			setTestimonials(response.data.testimonials);
		};
		fetchTests();
	}, []);

	const courseDetails = [
		{
			id: 1,
			image: "/images/courses/courseImage2.png",
			before_price: 0,
			latest_price: 120,
			user: {
				first_name: 'Alan',
				last_name: 'Raines'
			},
			title: "CPCWHS1001",
			slug: "/CPCWHS1001",
			short_desc: "Work safely in the construction industry"
		},
		{
			id: 2,
			image: "/images/courses/courseImage2.png",
			before_price: 0,
			latest_price: 120,
			user: {
				first_name: 'Alan',
				last_name: 'Raines'
			},
			title: "BSBWHS411",
			slug: "/BSBWHS411",
			short_desc: "Implement and monitor WHS policies, procedures and programs"
		}
	];

	const testimonials = [
		{
			description: 'My trainer Alan was very helpful and explained things well.',
			image_url: "",
			name: 'Jhon Doe',
			designation: "Student"
		}
	]

	return (
		<>
			<div className="main-testimonial">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
							<div className="main-testimonial-content">
								<span className="sub-title">Flexible learning</span>
								<h1>
									Flexible Study at Your Own Pace,
									According to Your Own Needs
								</h1>
								<p>
									With Raines Resouces you can study whenever, wherever you choose. We have clients acrossall states and Teritories of Australia
								</p>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<Swiper
								pagination={{
									dynamicBullets: true,
									clickable: true,
								}}
								modules={[Pagination]}
								className="mySwiper feedback-slides"
							>
								{testimonials.length > 0 &&
									testimonials.map((teste) => (
										<SwiperSlide key={teste.id}>
											<div className="single-feedback-item">
												<p>{teste.description}</p>

												<div className="client-info d-flex align-items-center">
													<img
														src={
															teste.image_url
																? teste.image_url
																: "/images/user6.jpg"
														}
														className="rounded-circle"
														alt="image"
													/>
													<div className="title">
														<h3>
															{teste.name}
														</h3>
														<span>
															{
																teste.designation
															}
														</span>
													</div>
												</div>
											</div>
										</SwiperSlide>
									))}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="funfacts-and-feedback-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="feedback-content">
								<span className="sub-title">
									Distance learning
								</span>
								<h2>
									Flexible Study at Your Own Pace, According
									to Your Own Needs
								</h2>
								<p>
									With the eLearniv, you can study whenever
									and wherever you choose. We have students in
									over 175 countries and a global reputation
									as a pioneer in the field.
								</p>

								<Swiper
									pagination={{
										dynamicBullets: true,
										clickable: true,
									}}
									modules={[Pagination]}
									className="mySwiper feedback-slides"
								>
									{testimonials.length > 0 &&
										testimonials.map((teste) => (
											<SwiperSlide key={teste.id}>
												<div className="single-feedback-item">
													<p>{teste.description}</p>

													<div className="client-info d-flex align-items-center">
														<img
															src={
																teste.image_url
															}
															className="rounded-circle"
															alt="image"
														/>
														<div className="title">
															<h3>
																{teste.name}
															</h3>
															<span>
																{
																	teste.designation
																}
															</span>
														</div>
													</div>
												</div>
											</SwiperSlide>
										))}
								</Swiper>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<FunFacts />
						</div>
					</div>
				</div>

				<div className="shape2">
					<img src="/images/shape2.png" alt="image" />
				</div>
				<div className="shape3">
					<img src="/images/shape3.png" alt="image" />
				</div>
				<div className="shape4">
					<img src="/images/shape4.png" alt="image" />
				</div>
				<div className="shape9">
					<img src="/images/shape8.svg" alt="image" />
				</div>
			</div> */}
		</>
	);
};

export default FeedbackSliderWithFunFacts;
