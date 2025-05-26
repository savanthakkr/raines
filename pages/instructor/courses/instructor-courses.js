import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import InstructorCourseList from "@/components/Instructor/Courses/InstructorCourseList";
import InstructorNav from "@/components/_App/InstructorNav";

const InstructorCourses = ({ user }) => {
	return (
		<>
			<InstructorNav />

            <PageBanner
				pageTitle="All Courses"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses"
				imageUrl='/images/breadcrumb/coursesBreadcrumb.jpg'
			/>

			<div className="ptb-100">
				<div className="container text-center">
					<InstructorCourseList user={user} />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default InstructorCourses;
