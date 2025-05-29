import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import InstructorCourseList from "@/components/Business/Courses/BusinessCourseList";
import BusinessNav from "@/components/_App/BusinessNav";

const BusinessMyCourses = ({ user }) => {
	return (
		<>
			<BusinessNav />

            <PageBanner
				pageTitle="My Courses"
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

export default BusinessMyCourses;
