import React, { useState, useEffect } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Link from "next/link";
import { parseCookies } from "nookies";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import CourseCard from "@/components/Courses/CourseCard";
import { toast } from "react-hot-toast";

const Index = ({ user }) => {
	const { elarniv_users_token } = parseCookies();

	// const [courses, setCourses] = useState([]);

	// const fetchEnrol = async () => {
	// 	const payload = { headers: { Authorization: elarniv_users_token } };
	// 	const url = `${baseUrl}/api/wishlist`;
	// 	const response = await axios.get(url, payload);
	// 	setCourses(response.data.courses);
	// };

	// useEffect(() => {
	// 	fetchEnrol();
	// }, []);

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
					border: "1px solid #bb2124",
					padding: "16px",
					color: "#bb2124",
				},
				iconTheme: {
					primary: "#bb2124",
					secondary: "#ffffff",
				},
			});
			fetchEnrol();
		} catch (err) {
			console.log(err.response);
		}
	};

	const courses = [
		{
			id: 1,
			course: {
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
			}
		},
		{
			id: 2,
			course: {
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

		}
	];

	return (
		<>
			<Navbar user={user} />

			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">My Learning</h2>

					<ul className="nav-style1">
						<li>
							<Link href="/learning/my-courses/">
								<a>All Courses</a>
							</Link>
						</li>
						<li>
							<Link href="/learning/wishlist/">
								<a className="active">Wishlist</a>
							</Link>
						</li>
					</ul>

					<div className="row">
						{courses.length > 0 ? (
							courses.map((cr) => (
								<CourseCard
									key={cr.id}
									{...cr.course}
									onFav={() => handleFav(cr.course.id, true)}
									onUnFav={() =>
										handleFav(cr.course.id, false)
									}
									userId={user && user.id}
								/>
							))
						) : (
							<h3>Empty</h3>
						)}
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Index;
