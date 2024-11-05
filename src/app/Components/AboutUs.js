import { useState } from "react";

const AboutUs = () => {
 
  return (
    <>
         {/* About us section */}
         <section id="about" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2 className="text-uppercase">About Us</h2>
            {/* <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p> */}
          </div>

          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <div>
                    {/* <h4 className="title">
                      <a
                        href="services-details.html"
                        className="stretched-link"
                      >
                        Software Developer Training
                      </a>
                    </h4> */}
                    <p className="description justify">
                      At Tech Set Go, we believe in nurturing talent and
                      empowering developers to achieve their career aspirations.
                      Through our expert-led training programs, hands-on
                      application development, and personalized career
                      mentorship, we help individuals grow and thrive in the
                      fast-paced world of technology.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-code"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a
                        href="services-details.html"
                        className="stretched-link"
                      >
                        Our Mission
                      </a>
                    </h4>
                    <p className="description justify">
                      At Tech Set Go, we empower aspiring developers through
                      comprehensive training and mentorship, bridging the gap
                      between education and industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a
                        href="services-details.html"
                        className="stretched-link"
                      >
                        Our Vision for the Future
                      </a>
                    </h4>
                    <p className="description justify">
                      We envision a future where technology is accessible to
                      all, nurturing innovation and creativity in a supportive
                      community of developers.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="service-item d-flex">
                  <div className="icon flex-shrink-0">
                    <i className="bi bi-binoculars"></i>
                  </div>
                  <div>
                    <h4 className="title">
                      <a
                        href="services-details.html"
                        className="stretched-link"
                      >
                        Benefits of Connecting with Us
                      </a>
                    </h4>
                    <p className="description justify">
                      By joining us, you gain expert-led training, personalized
                      career support, and hands-on experience that equip you
                      with the skills and confidence to thrive in the tech
                      industry.
                    </p>
                  </div>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
    </>
  );
};

export default AboutUs;
