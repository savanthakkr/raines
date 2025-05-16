import React from "react";
import Link from "next/link";

const ViewAllCourses = () => {
	return (
		<>
			<div className="view-all-courses-area">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-12">
							<div className="view-all-courses-content">
								<span className="sub-title">
									Distance learning
								</span>
								<h2>Feel like you want more with a hands-on feel?</h2>
								<p>
									Not only do we have online learning activities we also have a comprehensive onsite training program
								</p>

								<Link href="/learning/wishlist/">
									<a className="default-btn">
										{/* <i className="flaticon-agenda"></i>{" "} */}
										Review My Wishlist <span></span>
									</a>
								</Link>
							</div>
						</div>

						<div className="col-lg-7 col-md-12">
							<div className="view-all-courses-image">
								<img
									src="/images/allCoursesImage.png"
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="shape1">
					<img src="/images/shape1.png" alt="image" />
				</div>
				<div className="shape9">
					<img src="/images/shape8.svg" alt="image" />
				</div>
			</div>
		</>
	);
};

export default ViewAllCourses;
