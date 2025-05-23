import React from "react";
import Footer from "@/components/_App/Footer";
import Link from "next/link";
import CourseCreateForm from "@/components/Instructor/CourseCreateForm";
import AdminCourseCreate from "@/components/Admin/MyCourses/AdminCourseCreate";
import AdminNav from "@/components/_App/AdminNav";

const CreateCourse = ({ user }) => {
	return (
		<>
			<AdminNav />

			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Create the Course</h2>

					{/* <ul className="nav-style1">
						<li>
							<Link href="/instructor/courses/">
								<a>Courses</a>
							</Link>
						</li>
						<li>
							<Link href="/instructor/course/create/">
								<a className="active">Create a Course</a>
							</Link>
						</li>
						<li>
							<Link href="/instructor/course/create-class/">
								<a>Create Class Room</a>
							</Link>
						</li>
					</ul> */}

					<div className="create-course-form">
						<AdminCourseCreate/>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default CreateCourse;
