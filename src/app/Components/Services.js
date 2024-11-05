import React from "react";

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section
        id="services"
        className="about section light-background full-width-section conta"
      >
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2 className="text-uppercase">Our Services</h2>
          <div className="mx-3">
            <h4 className="text-uppercase">
              Supporting Growth and Success in Software Development
            </h4>
            <p className="text-center">
              Founded with the vision of creating a community of capable and
              confident developers, Tech Set Go offers a full suite of
              services—from software training to application development—to help
              you reach new heights in your tech career.
            </p>
          </div>
        </div>

        {/* Icon Boxes - Full Width */}
        <div className="container">
          <div
            className="row gy-4 icon-boxes  justify-content-center "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <i className="bi bi-code"></i>
                <h3>Software Developer Training</h3>
                <p className="justify">
                  Comprehensive training programs designed to build strong
                  foundations in coding, algorithms, and problem-solving for
                  aspiring software developers. Our expert-led sessions ensure
                  you're industry-ready.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <i className="bi bi-buildings"></i>
                <h3>Placement Preparation</h3>
                <p className="justify">
                  Specialized placement guidance with mock interviews, resume
                  building, and coding tests tailored to help developers secure
                  top roles in leading tech companies.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <i className="bi bi-command"></i>
                <h3>Application Development</h3>
                <p className="justify">
                  End-to-end application development services for web, mobile,
                  and enterprise solutions. We bring your ideas to life with
                  cutting-edge technology and agile methodologies.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="icon-box">
                <i className="bi bi-bug-fill"></i>
                <h3>Bug Fixing</h3>
                <p className="justify">
                  Quick and efficient bug fixing, performance optimizations, and
                  feature updates for existing software applications. Keep your
                  software running smoothly with our expert support.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="icon-box">
              <i class="bi bi-list-stars"></i>
                <h3>Feature Enhancements</h3>
                <p className="justify">
                  Streamlined feature updates and enhancements for your software
                  applications. Our expert team ensures that your applications
                  remain competitive and user-friendly by integrating the latest
                  functionalities and improvements efficiently.
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="icon-box">
                <i className="bi bi-clipboard-pulse"></i>
                <h3>Career Mentorship</h3>
                <p className="justify">
                  Personalized mentorship from industry veterans to help you
                  navigate career transitions, skill upgrades, and long-term
                  growth in software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
