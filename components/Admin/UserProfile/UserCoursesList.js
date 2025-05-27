import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Pagination from "@etchteam/next-pagination";
import CourseSkeletonLoader from "@/utils/CourseSkeletonLoader";
import UserCourseCard from "./UserCoursesCard";

const UserCourseList = ({ user }) => {
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	const [pages, setPages] = useState(0);
	const [coursesCount, setCoursesCount] = useState(0);
	const router = useRouter();
	const page = router.query.page ? router.query.page : "1";
	const size = router.query.size ? router.query.size : "9";
	const short = router.query.short ? router.query.short : "";
	const search = router.query.search ? router.query.search : "";

	const fetchCourses = async () => {
		setLoading(true);

		const payload = {
			params: {
				page,
				limit: size,
				short: short,
				search: search,
			},
		};
		const response = await axios.get(`${baseUrl}/api/all-courses`, payload);
		setCourses(response.data.courses);
		setPages(response.data.totalPages);
		setCoursesCount(response.data.coursesCount);
		// console.log(response.data);
		setLoading(false);
	};

	useEffect(() => {
		// fetchCourses();
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, [page, size, short, search]);

	const handleFav = async (courseId, fav) => {
		if (!user) {
			toast.error("Need to login first.", {
				style: {
					border: "1px solid #ff0033",
					padding: "16px",
					color: "#ff0033",
				},
				iconTheme: {
					primary: "#ff0033",
					secondary: "#FFFAEE",
				},
			});
			return;
		}
		try {
			const payload = {
				userId: user.id,
				courseId: courseId,
				fav: fav,
			};
			const url = `${baseUrl}/api/favourites/new`;
			const response = await axios.post(url, payload);

			toast.success(response.data.message, {
				style: {
					border: "1px solid #42ba96",
					padding: "16px",
					color: "#42ba96",
				},
				iconTheme: {
					primary: "#42ba96",
					secondary: "#ffffff",
				},
			});
		} catch (err) {
			console.log(err.response);
		}
	};


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
		},
		{
			id: 3,
			image: "/images/courses/courseImage2.png",
			before_price: 0,
			latest_price: 120,
			user: {
				first_name: 'Alan',
				last_name: 'Raines'
			},
			title: "RIIRES402E",
			slug: "/RIIRES402E",
			short_desc: "Carry out the risk management process"
		},
		{
			id: 4,
			image: "/images/courses/courseImage2.png",
			before_price: 0,
			latest_price: 120,
			user: {
				first_name: 'Alan',
				last_name: 'Raines'
			},
			title: "RIIRIS501E",
			slug: "/RIIRIS501E",
			short_desc: "Implement and maintain management systems to control risks"
		},
		{
			id: 5,
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
			id: 6,
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
		},
		{
			id: 7,
			image: "/images/courses/courseImage2.png",
			before_price: 0,
			latest_price: 120,
			user: {
				first_name: 'Alan',
				last_name: 'Raines'
			},
			title: "RIIRES402E",
			slug: "/RIIRES402E",
			short_desc: "Carry out the risk management process"
		},
		{
			id: 8,
			image: "/images/courses/courseImage2.png",
			before_price: 0,
			latest_price: 120,
			user: {
				first_name: 'Alan',
				last_name: 'Raines'
			},
			title: "RIIRIS501E",
			slug: "/RIIRIS501E",
			short_desc: "Implement and maintain management systems to control risks"
		}
	];

	return (
		<>
			<div className="courses-area courses-section pt-2 pb-100">
				<div className="container">
					{/* <ShortingDropdown /> */}
					<div className="row">
						{loading ? (
							<CourseSkeletonLoader />
						) : (
							<>
								{courseDetails &&
									courseDetails.map((course) => (
										<UserCourseCard
											key={course.id}
											{...course}
										/>
									))}
								{courseDetails.length > 9 && (
									<div className="col-lg-12 col-md-12">
										<div className="pagination-area text-center">
											<Pagination
												sizes={[1]}
												total={pages}
											/>
										</div>
									</div>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default UserCourseList;
