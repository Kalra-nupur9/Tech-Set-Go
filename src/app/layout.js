import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tech Set Go",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <link
          href="/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="/assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="/assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link href="/assets/css/main.css" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased index-page`}
      >
        <header
          id="header" 
          className="header d-flex align-items-center fixed-top z-10"
        >
          <div className="container-fluid position-relative d-flex align-items-center justify-content-between">
            <a href="#hero" className="logo d-flex align-items-center ">
              <img src="/assets/img/logo_nav_Footer.jpg" alt="" />
              <h1 className="sitename">Tech Set Go</h1>
            </a>

            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <a href="#hero" className="active">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#services">Services</a>
                </li>

                <li>
                  <a href="#about">About</a>
                </li>

                {/* <li className="dropdown">
                  <a href="#">
                    <span>Guides</span>
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Dropdown 1</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        <span>Deep Dropdown</span>
                        <i className="bi bi-chevron-down toggle-dropdown"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Deep Dropdown 1</a>
                        </li>
                        <li>
                          <a href="#">Deep Dropdown 2</a>
                        </li>
                        <li>
                          <a href="#">Deep Dropdown 3</a>
                        </li>
                        <li>
                          <a href="#">Deep Dropdown 4</a>
                        </li>
                        <li>
                          <a href="#">Deep Dropdown 5</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Dropdown 2</a>
                    </li>
                    <li>
                      <a href="#">Dropdown 3</a>
                    </li>
                    <li>
                      <a href="#">Dropdown 4</a>
                    </li>
                  </ul>
                </li> */}
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            {/* <a className="btn-getstarted" href="#about">
              Get Started
            </a> */}
          </div>
        </header>

        {children}
        

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
                    <a href="#"> Bug Fixing & Feature Enhancements</a>
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
                    <span className="Contact_details"> {" "}+91 81306 01013</span>
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>
                  <a href="mailto:contact.techsetgo@gmail.com">
                    <span className="Contact_details" target="_blank">
                      {" "}
                      contact.techsetgo@gmail.com
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
            <div className="credits">Designed by Nupur Kalra</div>
          </div>
        </footer>

        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
        <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

        <script src="assets/js/main.js"></script>
      </body>
    </html>
  );
}
