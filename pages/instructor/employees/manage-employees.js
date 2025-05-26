import React, { useState } from "react";
import toast from "react-hot-toast";
import Footer from "@/components/_App/Footer";
import axios from "axios";
import { parseCookies } from "nookies";
import LoadingSpinner from "@/utils/LoadingSpinner";
import baseUrl from "@/utils/baseUrl";
import { useRouter } from 'next/router';
import Link from "next/link";
import InstructorNav from "@/components/_App/InstructorNav";
import ManageEmployeesTab from "@/components/Instructor/ManageEmployees/ManageEmployeesTab";

const ManageEmployees = ({ user }) => {
    const router = useRouter();
    const { role } = router.query;

    const { elarniv_users_token } = parseCookies();
    const [userUpdate, setUserUpdate] = useState(user);
    const [loading, setLoading] = React.useState(false);

    return (
        <>
            <InstructorNav />

            <div className="container">
                <ManageEmployeesTab/>
            </div>

            <Footer />
        </>
    );
};

export default ManageEmployees;




