import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <Link href="/">
                  <a className="logo">
                    <img src="/images/rainesLogo.png" alt="logo" />
                  </a>
                </Link>

                <p>
                  Working to bring significant changes in online-based learning by
                  doing extensive research for course curriculum preparation,
                  student engagements, and looking forward to the flexible
                  education!
                </p>

                <ul className="social-link">
                  <li>
                    <a href="https://www.facebook.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" className="d-block" target="_blank" rel="noreferrer">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 col-sm-6"></div>

            <div className="col-lg-2 col-md-6 col-sm-6 d-xl-flex justify-content-xl-end">
              <div className="single-footer-widget">
                <h3>Explore</h3>
                <ul className="footer-links-list">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/courses">
                      <a>Courses</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-lg-flex justify-content-lg-end">
              <div className="single-footer-widget">
                <h3>Address</h3>
                <ul className="footer-contact-info">
                  <li>
                    <i className="bx bx-map"></i>
                    Western Australia
                  </li>
                  <li>
                    <i className="bx bx-phone-call"></i>
                    <a href="tel:+0419655525">0419 655 525</a>
                  </li>
                  <li>
                    <i class='bx bx-time-five'></i>
                    Mon - Sun: 7:00 am - 9:00 pm
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-area">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  <i className="bx bx-copyright"></i>
                  {currentYear} Raines Resources
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div> */}
      </footer>
    </>
  )
}

export default Footer
