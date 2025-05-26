import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import CoursesDetailsSidebar from "./CoursesDetailsSidebar";
import CourseOverview from "../Learning/CourseOverview";
import CourseVideo from "../Course/CourseVideo";
import WhatYouWillLearn from "../Course/WhatYouWillLearn";
import Requirements from "../Course/Requirements";
import WhoIsThisCourseFor from "../Course/WhoIsThisCourseFor";
import InstructorProfile from "../Course/InstructorProfile";
import { formatDate } from "@/utils/helper";
import BuyCourseBtn from "./BuyCourseBtn";
import { useSelector } from "react-redux";

const CoursesDetailsContent = ({ user: current_user, course }) => {
	const router = useRouter();
	const { pathname } = router;
	const {
		slug,
		short_desc,
		image,
		overview,
		what_you_will_learn,
		who_is_this_course_for,
		requirements,
		latest_price,
		is_class,
		updated_at,
		category,
		user,
		enrolments,
		cancelation_desc,
		course_desc
	} = course;

	// const discount = useSelector((state) => state.cart.discount);

	const discount = 20;


	return (
		<>
			<div className="courses-details-area ptb-100">
				<div className="container">
					<div className="courses-details-header">
						<div className="row align-items-center">
							<div className="col-lg-8 col-md-12">
								<div className="courses-title">
									<p>{short_desc}</p>
								</div>
								<div className="courses-meta">
									<ul>
										<li>
											<i className="bx bx-folder-open"></i>
											<span>Category</span>
											{category && (
												<Link
													href={`/category/${category.slug}`}
												>
													<a>{category.name}</a>
												</Link>
											)}
										</li>
										{/* <li>
											<i className="bx bx-group"></i>
											<span>Students Enrolled</span>
											<Link href="#">
												<a>
													{enrolments &&
														enrolments.length}
												</a>
											</Link>
										</li> */}
										<li>
											<i className="bx bx-calendar"></i>
											<span>Last Updated</span>
											<Link href="#">
												{/* <a>{formatDate(updated_at)}</a> */}
												<a>27/02/2025</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-12">
								<div className="courses-price">
									{/* <div className="price">
										$
										{discount > 0 ? discount : latest_price}
									</div> */}



									{pathname.startsWith("/admin") ? (
										<button
											className="default-btn"
											onClick={() => router.push("/admin/courses/create-course/")}
										>
											{/* <i className="flaticon-shopping-cart"></i>  */}
											Edit Course
											<span></span>
										</button>
									) : (
										<BuyCourseBtn
											current_user={current_user}
											course={course}
										/>
									)}
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="courses-details-image-style-two text-center">
								<img src={image} alt="image" />
							</div>

							<div className="courses-details-desc-style-two">
								<CourseOverview overview={overview} />

								{!is_class && (
									<div className="mb-4">
										<h3>Courses Video</h3>
										{slug && (
											<CourseVideo
												current_user={current_user}
												course={course}
											/>
										)}
									</div>
								)}

								<WhatYouWillLearn
									what_you_will_learn={what_you_will_learn}
								/>

								<Requirements requirements={requirements} />

								<WhoIsThisCourseFor
									title='Assessment Components'
									content={who_is_this_course_for}
								/>

								<WhoIsThisCourseFor
									title='Cancelation / Refunds'
									content={cancelation_desc}
								/>

								<WhoIsThisCourseFor
									title='Course Fee'
									content={course_desc}
								/>

								{user && (
									<InstructorProfile instructor={user} />
								)}
							</div>
						</div>

						<div className="col-lg-4 col-md-12">
							<CoursesDetailsSidebar
								current_user={current_user}
								course={course}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesDetailsContent;
