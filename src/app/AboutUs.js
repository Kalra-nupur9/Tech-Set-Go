import { useState } from "react";

const AboutUs = () => {
 
  return (
   <>
    {/* About Section */}
    <section id="services" className="about section light-background">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row  gy-5 ">
              <div className="col-xl-5 content">
                <h3 className="text-uppercase">Our Services</h3>
                <h2 className="text-uppercase">Supporting Growth and Success in Software Development</h2>
                <p className="justify">
                  Founded with the vision of creating a community of capable and
                  confident developers, Tech Set Go offers a full suite of
                  services—from software training to application development—to
                  help you reach new heights in your tech career.
                </p>
                {/* <a href="#" className="read-more">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a> */}
              </div>

              <div className="col-xl-7">
                <div className="row gy-4 icon-boxes">
                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon-box">
                      <i className="bi bi-buildings"></i>
                      <h3>Software Developer Training</h3>
                      <p className="justify">
                        Comprehensive training programs designed to build strong
                        foundations in coding, algorithms, and problem-solving
                        for aspiring software developers. Our expert-led
                        sessions ensure you're industry-ready.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon-box">
                      <i className="bi bi-clipboard-pulse"></i>
                      <h3>Placement Preparation</h3>
                      <p className="justify">
                        Specialized placement guidance with mock interviews,
                        resume building, and coding tests tailored to help
                        developers secure top roles in leading tech companies.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="icon-box">
                      <i className="bi bi-command"></i>
                      <h3>Application Development</h3>
                      <p className="justify">
                        End-to-end application development services for web,
                        mobile, and enterprise solutions. We bring your ideas to
                        life with cutting-edge technology and agile
                        methodologies.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}

                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="icon-box">
                      <i className="bi bi-graph-up-arrow"></i>
                      <h3> Bug Fixing & Feature Enhancements</h3>
                      <p className="justify">
                        Quick and efficient bug fixing, performance
                        optimizations, and feature updates for existing software
                        applications. Keep your software running smoothly with
                        our expert support.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div
                    className="col-md-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon-box">
                      <i className="bi bi-buildings"></i>
                      <h3>Career Mentorship</h3>
                      <p className="justify">
                        Personalized mentorship from industry veterans to help
                        you navigate career transitions, skill upgrades, and
                        long-term growth in software development.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                </div>
              </div>
            </div>
          </div>
        </section>
   </>
  );
};

export default AboutUs;
