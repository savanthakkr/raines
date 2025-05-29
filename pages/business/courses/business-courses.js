import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import BusinessCourseList from "@/components/Business/Courses/BusinessCourseList";
import BusinessNav from "@/components/_App/BusinessNav";

const BusinessCourses = ({ user }) => {
	return (
		<>
			<BusinessNav />

            <PageBanner
				pageTitle="All Courses"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses"
				imageUrl='/images/breadcrumb/coursesBreadcrumb.jpg'
			/>

			<div className="ptb-100">
				<div className="container text-center">
					<BusinessCourseList user={user} />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default BusinessCourses;
