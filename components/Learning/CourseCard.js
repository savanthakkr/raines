import React, {useState} from "react";
import Link from "next/link";

const CourseCard = ({ course: { user, image, title, slug, is_class, completed, short_desc } }) => {
	const [fav, setfavs] = useState(false);
	const containerStyles = {
		height: 16,
		width: '100%',
		backgroundColor: "#dcffec",
		borderRadius: 50,
		// margin: 50,
	}

	const fillerStyles = {
		height: '100%',
		width: completed > 0 ?`${completed}%` : '5%',
		backgroundColor: '#1AAF5D',
		borderRadius: 'inherit',
		textAlign: 'center',
		transition: 'width 1s ease-in-out',

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}

	const labelStyles = {
		color: 'white',
		fontWeight: 'bold',
		fontSize: '14px'
	}

	return (
		<div className="col-lg-3 col-md-6">
			<div className="single-courses-box style-2">
				<div className="courses-image">
					{is_class ? (
						<>
						<Link href={`/learning/course/class/${slug}`}>
							<a className="d-block image">
								<img src={image} alt={title} />
							</a>
						</Link>
						{fav ? (
						<button
							className="heart-btn btn fav"
							onClick={() => {
								onUnFav(id);
								setfavs(!fav);
							}}
						>
							<i className="bx bxs-heart"></i>
						</button>
					) : (
						<button
							className="heart-btn btn fav"
							onClick={() => {
								onFav(id);
								setfavs(!fav);
							}}
						>
							<i className="bx bx-heart"></i>
						</button>
					)}
						</>
					) : (
						<>
						<Link href={`/learning/course/${slug}`}>
							<a className="d-block image">
								<img src={image} alt={title} />
							</a>
						</Link>
						{fav ? (
							<button
								className="heart-btn btn fav"
								onClick={() => {
									onUnFav(id);
									setfavs(!fav);
								}}
							>
								<i className="bx bxs-heart"></i>
							</button>
						) : (
							<button
								className="heart-btn btn fav"
								onClick={() => {
									onFav(id);
									setfavs(!fav);
								}}
							>
								<i className="bx bx-heart"></i>
							</button>
						)}
						</>
					)}

					{/* <div className="video_box">
						<div className="d-table">
							<div className="d-table-cell">
								{is_class ? (
									<Link
										href={`/learning/course/class/${slug}`}
									>
										<a>
											<i className="bx bx-play"></i>
										</a>
									</Link>
								) : (
									<Link href={`/learning/course/${slug}`}>
										<a>
											<i className="bx bx-play"></i>
										</a>
									</Link>
								)}
							</div>
						</div>
					</div> */}
				</div>
				<div className="courses-content">
					<h3>
						{is_class ? (
							<Link href={`/learning/course/class/${slug}`}>
								<a>{title}</a>
							</Link>
						) : (
							<Link href={`/learning/course/${slug}`}>
								<a>{title}</a>
							</Link>
						)}
					</h3>

					<div className="course-author d-flex align-items-center">
						<span>{`${user.first_name} ${user.last_name}`}</span>
					</div>

					{/* <p>Start Course</p> */}

					<p>{short_desc.slice(0, 108)}</p>

					<div style={containerStyles}>
						<div style={fillerStyles}>
							<span style={labelStyles}>{completed > 0 ?`${completed}%` : ""}</span>
						</div>
					</div>

					<div className="course-author d-flex align-items-center mb-0 mt-3">
						<span>{completed > 0 ? "Continue Course" : "Start Course"}</span>
					</div>

				</div>
			</div>
		</div>
	);
};

export default CourseCard;