import React from "react";
import Footer from "@/components/_App/Footer";
import AdminCourseCreate from "@/components/Admin/MyCourses/AdminCourseCreate";
import AdminNav from "@/components/_App/AdminNav";
import PageBanner from "@/components/Common/PageBanner";
import AdminCreateAssessment from "@/components/Admin/Assessment/AdminCreateAssessment";

const CreateAssessment = ({ user }) => {
    return (
        <>
            <AdminNav />

            <PageBanner
                pageTitle="RIIRIS402E"
                homePageUrl="/"
                homePageText="Home"
                middlePageText="Courses"
                activePageText="RIIRIS402E"
                imageUrl='/images/breadcrumb/coursesBreadcrumb.jpg'
            />

            <div className="ptb-100">
                <div className="container">
                    <div className="d-flex flex-row justify-content-between">
                        <h5 className="fw-bold mb-4">Create Assessment for RIIRIS402E</h5>
                        <button className="default-btn">Preview & Publish</button>
                    </div>

                    <div className="create-course-form">
                        <AdminCreateAssessment />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default CreateAssessment;
