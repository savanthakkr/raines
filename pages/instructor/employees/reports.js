import React, { useState } from "react";
import Footer from "@/components/_App/Footer";
import { parseCookies } from "nookies";
import { useRouter } from 'next/router';
import InstructorNav from "@/components/_App/InstructorNav";
import ManageEmployeesTab from "@/components/Instructor/ManageEmployees/ManageEmployeesTab";

const Reports = ({ user }) => {
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
            <div className="ptb-100">
                <div className="container">
                    {/* <h2 className="fw-bold mb-4">Manage Employees</h2> */}

                    {/* <ul className="nav-style1">
                        <li>
                            <Link href="/profile/basic-information">
                                <a className="active">Add Users</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile/photo">
                                <a>Manage</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile/photo">
                                <a>Reports</a>
                            </Link>
                        </li>
                    </ul> */}

                  
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Reports;




