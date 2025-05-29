import React from "react";
import Footer from "@/components/_App/Footer";
import ManageEmployeesTab from "@/components/Business/Employees/ManageEmployeesTab";
import BusinessNav from "@/components/_App/BusinessNav";

const ManageEmployeeUsers = () => {
    return (
        <>
            <BusinessNav />

            <div className="container">
                <ManageEmployeesTab/>
            </div>

            <Footer />
        </>
    );
};

export default ManageEmployeeUsers;




