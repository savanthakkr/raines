import AdminNav from "@/components/_App/AdminNav";
import Footer from "@/components/_App/Footer";
import AdminCourseList from "@/components/Admin/MyCourses/AdminCourseList";
import Link from "next/link";

const AdminCourses = ({ user }) => {
	return (
		<>
			<AdminNav />

			<div className="ptb-100">
				<div className="container text-center">
					<div className="jump-course-creation">
						<h3 className="mb-0">Jump Into Course Creation</h3>
						<Link href="/admin/courses/create-course">
							<a className="default-btn mt-3 mt-lg-0">
								Create Your Course <span></span>
							</a>
						</Link>
					</div>
					<h2 className="fw-bold my-4">My Course</h2>
					<AdminCourseList user={user} />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default AdminCourses;
