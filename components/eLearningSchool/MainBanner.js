import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BannerCourses from "./BannerCourses";

const MainBanner = ({ user, courses }) => {

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
	]
	return (
		<>
			<div className="main-banner">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="main-banner-content">
								<h1>
									The World’s Leading Distance Learning
									Provider
								</h1>
								<p>
									Raines Resources innovative and proactive training system i s born of 45+ years of hands-on interaction with over 30 different learning disciplines. From High Risk Work to Mining and Construction machinery as well as basic machine/hand tool learnings.
								</p>

								<motion.div whileTap={{ scale: 0.9 }}>
									{user ? (
										<Link href="/courses">
											<a className="default-btn">
												{/* <i className="flaticon-user"></i>{" "} */}
												Browse Courses <span></span>
											</a>
										</Link>
									) : (
										<Link href="/authentication">
											<a className="default-btn">
												{/* <i className="flaticon-user"></i>{" "} */}
												Explore Online Courses <span></span>
											</a>
										</Link>
									)}
								</motion.div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="main-banner-courses-list">
								<div className="row">
									{courseDetails &&
										courseDetails.map((course) => (
											<BannerCourses
												key={course.id}
												{...course}
											/>
										))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainBanner;
