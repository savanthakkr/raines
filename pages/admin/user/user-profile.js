import React, { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import { parseCookies } from "nookies";
import LoadingSpinner from "@/utils/LoadingSpinner";
import baseUrl from "@/utils/baseUrl";
import { useRouter } from 'next/router';
import AdminNav from "@/components/_App/AdminNav";
import PersonalDetails from "@/components/Admin/UserProfile/PersonalDetails";

const UserProfile = ({ user }) => {
    const router = useRouter();
    const { role } = router.query;

    const { elarniv_users_token } = parseCookies();
    const [userUpdate, setUserUpdate] = useState(user);
    return (
        <>
            <AdminNav />

            <div className="ptb-100">
                <div className="container">
                    <h2 className="fw-bold mb-4">User Profile</h2>

                    <ul className="nav-style1">
                        <li>
                            <Link href="/admin/user/user-profile">
                                <a className="active">Personal Details</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/user/user-courses">
                                <a>User Courses</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/user/course-report">
                                <a>Course Report</a>
                            </Link>
                        </li>
                    </ul>

                    <PersonalDetails />
                </div>
            </div>

            <Footer />
        </>
    );
};

export default UserProfile;
