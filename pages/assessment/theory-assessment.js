import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/_App/Footer";
import FinalTheoryAssessment from "@/components/Assessment/FinalTheoryAssessment";

export default function TheoryAssessment({ user }) {
    return (
        <>
            <Navbar user={user} />

            <PageBanner
                pageTitle="RIIRIS402E"
                homePageUrl="/"
                homePageText="Home"
                middlePageText="Courses"
                activePageText="RIIRIS402E"
                imageUrl='/images/breadcrumb/coursesBreadcrumb.jpg'
            />

            <FinalTheoryAssessment />

            <Footer />
        </>
    );
}