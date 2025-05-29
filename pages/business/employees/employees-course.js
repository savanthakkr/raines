import React from "react";
import Footer from "@/components/_App/Footer";
import EmployeeProfileTab from "@/components/Business/Employees/EmployeeProfileTab";
import BusinessNav from "@/components/_App/BusinessNav";

const EmployeesCourseReport = () => {
    return (
        <>
            <BusinessNav />

            <div className="container">
                <EmployeeProfileTab />
            </div>

            <Footer />
        </>
    );
};

export default EmployeesCourseReport;




