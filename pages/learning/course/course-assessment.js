import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import CoursesList from "@/components/Courses/CoursesList";
import Footer from "@/components/_App/Footer";
import CourseAssessmentContent from "@/components/Learning/CourseAssessmentContent";

export default function CourseAssessment({ user }) {
	return (
		<>
			<Navbar user={user} />

			<PageBanner
				pageTitle="RIIRIS402E"
				homePageUrl="/"
				homePageText="Home"
                middlePageText="Courses"
				activePageText="RIIRIS402E"
				imageUrl='/images/breadcrumb/coursesBreadcrumb.jpg'
			/>

			<CourseAssessmentContent/>

			<Footer />
		</>
	);
}
