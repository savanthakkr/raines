import React, { useState } from "react";
import Footer from "@/components/_App/Footer";
import { parseCookies } from "nookies";
import { useRouter } from 'next/router';
import InstructorNav from "@/components/_App/InstructorNav";
import ManageEmployeesTab from "@/components/Instructor/ManageEmployees/ManageEmployeesTab";

const ManageEmployeeUsers = ({ user }) => {
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

export default ManageEmployeeUsers;




