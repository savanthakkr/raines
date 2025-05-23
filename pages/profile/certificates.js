import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import CertificateCard from "@/components/Certificate/CertificateCard";

const certificateDetails = [
    {
        id: 1,
        image: "/images/img/certificate.svg",
        title: "CPCWHS1001 - Prepare to Work Safely in the Construction Industry.",
        issued_date: "01/05/2025",
    },
    {
        id: 2,
        image: "/images/img/certificate.svg",
        title: "CPCWHS1001 - Prepare to Work Safely in the Construction Industry.",
        issued_date: "01/05/2025",
    },
    {
        id: 3,
        image: "/images/img/certificate.svg",
        title: "CPCWHS1001 - Prepare to Work Safely in the Construction Industry.",
        issued_date: "01/05/2025",
    },
    {
        id: 4,
        image: "/images/img/certificate.svg",
        title: "CPCWHS1001 - Prepare to Work Safely in the Construction Industry.",
        issued_date: "01/05/2025",
    },
];

const Certificates = ({ user }) => {
    const hasCertificates = certificateDetails.length > 0;
    return (
        <>
            <Navbar user={user} />
            <div className="ptb-100 certificates-area">
                <div className="container">
                    <h2 className="fw-bold mb-4">My Certificates</h2>
                    {!hasCertificates ? (
                        <div className="text-center">
                            <img src="/images/img/no-certificates-badge.svg" className="my-3" />
                            <h4>No Certificates yet</h4>
                            <p>You can see all your certificates here, <a href="/courses" className="start-course">start a course</a> to get one.</p>
                        </div>
                    ) : (
                        <div className="courses-area courses-section pt-3 pb-100">
                            <div className="row">
                                <>
                                    {certificateDetails &&
                                        certificateDetails.map((certificate) => (
                                            <CertificateCard
                                                key={certificate.id}
                                                {...certificate}
                                                userId={user && user.id}
                                            />
                                        ))}
                                    {certificateDetails.length > 9 && (
                                        <div className="col-lg-12 col-md-12">
                                            <div className="pagination-area text-center">
                                                <Pagination
                                                    sizes={[1]}
                                                    total={pages}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Certificates;
