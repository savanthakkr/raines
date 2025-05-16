import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import CoursesList from "@/components/Courses/CoursesList";
import Footer from "@/components/_App/Footer";

export default function CoursesPage({ user }) {
	return (
		<>
			<Navbar user={user} />

			<PageBanner
				pageTitle="All Courses"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses"
				imageUrl='/images/breadcrumb/coursesBreadcrumb.jpg'
			/>

			<CoursesList user={user} />

			<Footer />
		</>
	);
}
