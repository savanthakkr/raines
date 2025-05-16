import React from 'react'
import Link from 'next/link'

const AffordableCertification = () => {
    return (
        <>
            <div className="premium-access-area ptb-100">
                <div className="container">
                    <div className='row align-items-center'>
                        <div className="col-lg-8 col-md-12 mb-5 mb-lg-0">
                            <div className="premium-access-content">
                                <span className="sub-title">Affordable Certification</span>
                                <h2>Get your ASQA certified VET Unit of Competency Certificate with us using our online portal</h2>
                                <p>
                                    If you need clarification on any course feel free to contact us during business hours and ask for help, one of our helpful staff will assist you.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-12"></div>
                        <div className="col-lg-2 col-md-12 mb-5 mb-lg-0 d-flex justify-content-lg-end">
                            <Link href="/authentication">
                                <a className="default-btn">
                                    {/* <i className="flaticon-user"></i>  */}
                                    Register Now <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* <div className="shape3">
          <img src="/images/shape3.png" alt="image" />
        </div>
        <div className="shape4">
          <img src="/images/shape4.png" alt="image" />
        </div>
        <div className="shape8">
          <img src="/images/shape7.png" alt="image" />
        </div> */}
            </div>
        </>
    )
}

export default AffordableCertification
