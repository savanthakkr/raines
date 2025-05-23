import AdminNav from "@/components/_App/AdminNav";
import Footer from "@/components/_App/Footer";
import UserCourseList from "@/components/Admin/UserProfile/UserCoursesList";
import Link from "next/link";

const UserCourses = () => {
    return (
        <>
            <AdminNav />

            <div className="ptb-100">
                <div className="container">
                    <h2 className="fw-bold mb-4">User Profile</h2>

                    <ul className="nav-style1">
                        <li>
                            <Link href="/admin/user/user-profile">
                                <a>Personal Details</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/user/user-courses">
                                <a className="active">User Courses</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/user/course-report">
                                <a>Course Report</a>
                            </Link>
                        </li>
                    </ul>

                    <UserCourseList/>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default UserCourses;