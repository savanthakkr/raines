import React from "react";
import Link from "next/link";

const Features = () => {
	return (
		<>
			<div className="features-area pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">
							Education for everyone
						</span>
						<h2>
							Affordable Online Courses and Learning
							Opportunities​
						</h2>
						<p>
							Finding your own space and utilize better learning
							options can result in faster than the traditional
							ways. Enjoy the beauty of eLearning!
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-3 col-sm-6 col-md-6 d-flex">
							<div className="single-features-box h-70">
								<div className="icon">
									<i className="flaticon-brain-process"></i>
								</div>
								<h3>Big picture learning</h3>
								<p>
									Poorly trained operators drain resources. Our big-picture approach ensures your team runs machines with precision—less downtime, less wear and tear, and more BCM.
								</p>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6 col-md-6 d-flex">
							<div className="single-features-box h-70">
								<div className="icon">
									<i className="flaticon-brain-process"></i>
								</div>
								<h3>Onsite training</h3>
								<p>
									We bring the training to you, right on site. No offsite downtime, no wasted resources. Your team gets real-world experience in the actual conditions they’ll work in, so they’re ready to hit the ground running.
								</p>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6 col-md-6 d-flex">
							<div className="single-features-box h-70">
								<div className="icon">
									<i className="flaticon-computer"></i>
								</div>
								<h3>Proven expertise</h3>
								<p>
									With 30+ years of hands-on operational experience in mining companies, we understand the challenges your site faces and how to deliver training that impacts the bottom line.
								</p>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6 col-md-6 d-flex">
							<div className="single-features-box h-70">
								<div className="icon">
									<i className="flaticon-shield-1"></i>
								</div>
								<h3>Certified and knowledgeable</h3>
								<p>
									With 40+ licenses under our belt, we cover all bases, with equipment expertise ranging from the smallest to the largest. . This expertise ensures your operators are certified to the highest standards.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
