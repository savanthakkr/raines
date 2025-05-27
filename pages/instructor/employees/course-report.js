import React from "react";
import Footer from "@/components/_App/Footer";
import InstructorNav from "@/components/_App/InstructorNav";
import EmployeeProfileTab from "@/components/Instructor/Employees/EmployeeProfileTab";

const Report = () => {
    return (
        <>
            <InstructorNav />

            <div className="container">
                <EmployeeProfileTab/>
            </div>

            <Footer />
        </>
    );
};

export default Report;




