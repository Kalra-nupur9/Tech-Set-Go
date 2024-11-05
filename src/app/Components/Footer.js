import React from 'react';
import { EmailId, contactNumber } from '../constent';

const Footer = () => {
  return (
    <>
        <footer
          id="footer"
          className="footer position-relative light-background"
        >
          <div className="container footer-top">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-about">
                <a
                  href="#hero"
                  className="logo_footer d-flex align-items-center "
                >
                  <img src="/assets/img/logo_nav_Footer.jpg" alt="" />
                </a>
                <div className="social-links d-flex mt-2 ms-5 ps-2">
                  {/* <a href="#" aria-label="Twitter" target="_blank">
                    <i className="bi bi-twitter-x"></i>
                  </a> */}
                  
                  <a href="https://instagram.com/tech_set_go" target="_blank" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tech-set-go-890381329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  {/* <a href="#" aria-label="Facebook" target="_blank">
                    <i className="bi bi-facebook"></i>
                  </a> */}
                </div>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4 className="text-uppercase">Useful Links</h4>
                <ul>
                  <li>
                    <a href="#hero">Home</a>
                  </li>

                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  {/* <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li> */}
                </ul>
              </div>

              <div className="col-lg-2 col-6 footer-links">
                <h4 className="text-uppercase">Our Services</h4>
                <ul>
                  <li>
                    <a href="#">Software Developer Training</a>
                  </li>
                  <li>
                    <a href="#">Placement Preparation</a>
                  </li>
                  <li>
                    <a href="#"> Application Development</a>
                  </li>
                  <li>
                    <a href="#"> Bug Fixing</a>
                  </li>
                  <li>
                    <a href="#"> Feature Enhancements</a>
                  </li>
                  
                  <li>
                    <a href="#">Career Mentorship</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4 className="text-uppercase"  >Contact Us</h4>

                <p className="mt-4">
                  <strong>Phone:</strong>
                  <a href="tel:+918130601013" target="_blank">
                    <span className="Contact_details"> {" "}{contactNumber}</span>
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>
                  <a href="mailto:contact.techsetgo@gmail.com">
                    <span className="Contact_details" target="_blank">
                      {" "}
                      {EmailId}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="container copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="sitename">Append</strong>
              <span>All Rights Reserved</span>
            </p>
            {/* <div className="credits">Designed by Nupur Kalra</div> */}
          </div>
        </footer>
    </>
  )
}

export default Footer
