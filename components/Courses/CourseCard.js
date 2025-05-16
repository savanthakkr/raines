import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";

const CourseCard = ({
	id,
	title,
	slug,
	short_desc,
	latest_price,
	before_price,
	lessons,
	image,
	user,
	enrolments = [],
	onFav,
	onUnFav,
	userId,
}) => {
	const [fav, setfavs] = useState(false);

	useEffect(() => {
		if (userId) {
			const payload = {
				params: {
					userId: userId,
					courseId: id,
				},
			};

			const url = `${baseUrl}/api/favourites/new`;
			axios.get(url, payload).then((result) => {
				setfavs(result.data);
				// console.log(result.data);
			});
		}
	}, []);
	return (
		<div className="col-lg-3 col-md-6 d-flex">
			<div className="single-courses-box h-80">
				<div className="courses-image">
					<Link href={`/course/${slug}`}>
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
				</div>
				<div className="courses-content">
					<div className="course-author d-flex align-items-center">
						<img
							src={
								user.profile_photo
									? user.profile_photo
									: "/images/user6.jpg"
							}
							className="rounded-circle"
							alt="image"
						/>
						<span>{`${user.first_name} ${user.last_name}`}</span>
					</div>

					<h3>
						<Link href={`/course/${slug}`}>
							<a title={title}>{title.slice(0, 40)}...</a>
						</Link>
					</h3>

					<p>{short_desc.slice(0, 108)}</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
