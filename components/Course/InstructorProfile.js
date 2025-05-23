import React from "react";

const InstructorProfile = ({ instructor }) => {
	const { first_name, last_name, profile_photo, bio } = instructor;
	// console.log(instructor);
	return (
		<>
			<h3>Meet Your Instructors</h3>
			<div className="courses-author">
				<div className="author-profile-header">
					<div className="courses-share">
						<div className="share-info">
							<ul className="social-link">
								<li>
									<a
										// href={`https://facebook.com/sharer/sharer.php?u=${baseUrl}/${slug}`}
										className="d-block"
										target="_blank"
									>
										<i className="bx bxl-facebook"></i>
									</a>
								</li>
								<li>
									<a
										// href={`https://twitter.com/intent/tweet?url=${baseUrl}/${slug}`}
										className="d-block"
										target="_blank"
									>
										<i className="bx bxl-twitter"></i>
									</a>
								</li>
								<li>
									<a
										// href={`https://pinterest.com/pin/create/button/?url=${baseUrl}/${slug}`}
										className="d-block"
										target="_blank"
									>
										<i className="bx bxl-pinterest"></i>
									</a>
								</li>
								<li>
									<a
										// href={`https://www.linkedin.com/shareArticle?mini=true&url=${baseUrl}/${slug}`}
										className="d-block"
										target="_blank"
									>
										<i className="bx bxl-linkedin"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="author-profile">
					<div className="author-profile-title">
						<img
							src={
								profile_photo
									? profile_photo
									: "/images/user6.jpg"
							}
							className="shadow-sm rounded-circle"
							alt={first_name}
						/>
						<div className="author-profile-title-details">
							<div className="author-profile-details">
								<h4>
									{first_name} {last_name}
								</h4>
								<span className="d-block">Instructor</span>
							</div>
						</div>
					</div>
					{bio}
				</div>
			</div>
		</>
	);
};

export default InstructorProfile;
