import React from "react";
import Footer from "@/components/_App/Footer";
import InstructorNav from "@/components/_App/InstructorNav";
import ManageEmployeesTab from "@/components/Instructor/Employees/ManageEmployeesTab";

const ManageEmployeeUsers = () => {
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




