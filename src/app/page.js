"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSentMessage(false);

    // Simulate form submission - you can replace this with your API call
    try {
      const formData = new FormData(event.target);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSentMessage(true);
      } else {
        setErrorMessage("There was an error sending your message.");
      }
    } catch (error) {
      setErrorMessage("There was an error sending your message.");
    }

    setLoading(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          <Image
            src="/assets/img/hero-bg.jpg"
            alt=" Bg image"
            data-aos="fade-in"
            layout="fill"
            objectFit="cover"
            priority={true}
          />

          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="hero_heading text-uppercase"
                >
                  Empowering your journey in technology
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="hero-Para justify"
                >
                  —at Tech Set Go, we provide tailored career advice,
                  comprehensive tech courses, and expert consultancy to help you
                  thrive in the digital world. Let's set you on the path to
                  success
                </p>
              </div>
              <div className="col-lg-5" data-aos="fade-up" data-aos-delay="300">
                <form
                  action="forms/newsletter.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="sign-up-form">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                    <input type="submit" value="Subscribe" />
                  </div>
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your subscription request has been sent. Thank you!
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        {/* <section id="clients" className="clients section">
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <Image
                    src="/assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt=""
                    width="100" height="100"
                  />
                </div>
                

                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <Image
                    src="/assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt=""
                    width="100" height="100"
                  />
                </div>
                
                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <Image
                    src="/assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt=""
                    width="100" height="100"
                  />
                </div>
              

                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <Image
                    src="/assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt=""
                    width="100" height="100"
                  />
                </div>
             

                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <Image
                    src="/assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt=""
                    width="100" height="100"
                  />
                </div>
                

                <div className="col-xl-2 col-md-3 col-6 client-logo">
                  <Image
                    src="/assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt=""
                    width="100" height="100"
                  />
                </div>
               
              </div>
            </div>
          </section> */}

        {/* About Section */}
        <section id="services" className="about section light-background">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row  gy-5 ">
              <div className="col-xl-5 content">
                <h3>Our Services</h3>
                <h2>Supporting Growth and Success in Software Development</h2>
                <p>
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

        {/* Stats Section */}
        {/* <section id="stats" className="stats section dark-background">
            <Image src="/assets/img/stats-bg.jpg" alt="" data-aos="fade-in" width="100" height="100"/>

            <div
              className="container position-relative"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="232"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Clients</p>
                  </div>
                </div>
                End Stats Item

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="521"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Projects</p>
                  </div>
                </div>
                End Stats Item

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="1453"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
                End Stats Item

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="32"
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>Workers</p>
                  </div>
                </div>
                End Stats Item
              </div>
            </div>
          </section> */}

        {/* Services Section */}
        <section id="about" className="services section">
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>About Us</h2>
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
                    <i className="bi bi-card-checklist"></i>
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
        
       

        {/* <!-- Features Section --> */}
        {/* <section id="features" className="features section">
           
            <div className="container section-title" data-aos="fade-up">
              <h2>Features</h2>
              <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
              </p>
            </div>
           

            <div className="container">
              <div className="row gy-4 align-items-center features-item">
                <div
                  className="col-lg-5 order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3>Corporis temporibus maiores provident</h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                  </p>
                  <a href="#" className="btn btn-get-started">
                    Get Started
                  </a>
                </div>
                <div
                  className="col-lg-7 order-1 order-lg-2 d-flex align-items-center"
                  data-aos="zoom-out"
                  data-aos-delay="100"
                >
                  <div className="image-stack">
                    <Image
                      src="/assets/img/features-light-1.jpg"
                      alt=""
                      className="stack-front" width={400} 
                      height={300}
                    />
                    <Image
                      src="/assets/img/features-light-2.jpg"
                      alt=""
                      className="stack-back" width={350} 
                      height={280}
                    />
                  </div>
                </div>
              </div>
            

              <div className="row gy-4 align-items-stretch justify-content-between features-item">
                <div
                  className="col-lg-6 d-flex align-items-center features-img-bg"
                  data-aos="zoom-out"
                >
                  <Image
                    src="/assets/img/features-light-3.jpg"
                    className="img-fluid"
                    alt="" width={300} 
                    height={200}  
                  />
                </div>
                <div
                  className="col-lg-5 d-flex justify-content-center flex-column"
                  data-aos="fade-up"
                >
                  <h3>Sunt consequatur ad ut est nulla</h3>
                  <p>
                    Cupiditate placeat cupiditate placeat est ipsam culpa.
                    Delectus quia minima quod. Sunt saepe odit aut quia
                    voluptatem hic voluptas dolor doloremque.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check"></i>
                      <span>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check"></i>
                      <span>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit.
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-check"></i>
                      <span>
                        Facilis ut et voluptatem aperiam. Autem soluta ad
                        fugiat.
                      </span>
                    </li>
                  </ul>
                  <a href="#" className="btn btn-get-started align-self-start">
                    Get Started
                  </a>
                </div>
              </div>
             
            </div>
          </section> */}

        {/* <!-- Faq Section --> */}
        {/* <section id="faq" className="faq section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className="content px-xl-5">
                  <h3>
                    <span>Frequently Asked </span>
                    <strong>Questions</strong>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>
              </div>

              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                <div className="faq-container">
                  <div className="faq-item faq-active">
                    <h3>
                      <span className="num">1.</span>
                      <span>
                        Non consectetur a erat nam at lectus urna duis?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  

                  <div className="faq-item">
                    <h3>
                      <span className="num">2.</span>
                      <span>
                        Feugiat scelerisque varius morbi enim nunc faucibus a
                        pellentesque?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                 

                  <div className="faq-item">
                    <h3>
                      <span className="num">3.</span>
                      <span>
                        Dolor sit amet consectetur adipiscing elit pellentesque?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  
                  <div className="faq-item">
                    <h3>
                      <span className="num">4.</span>
                      <span>
                        Ac odio tempor orci dapibus. Aliquam eleifend mi in
                        nulla?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  

                  <div className="faq-item">
                    <h3>
                      <span className="num">5.</span>
                      <span>
                        Tempus quam pellentesque nec nam aliquam sem et tortor
                        consequat?
                      </span>
                    </h3>
                    <div className="faq-content">
                      <p>
                        Molestie a iaculis at erat pellentesque adipiscing
                        commodo. Dignissim suspendisse in est ante in. Nunc vel
                        risus commodo viverra maecenas accumsan. Sit amet nisl
                        suscipit adipiscing bibendum est. Purus gravida quis
                        blandit turpis cursus in.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- Call To Action Section --> */}
        {/* <section
          id="call-to-action"
          className="call-to-action section dark-background"
        >
          <Image src="/assets/img/cta-bg.jpg" alt="" width="500" height="200" />

          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>Call To Action</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <a className="cta-btn" href="#">
                    Call To Action
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section id="contact" className="contact section">
          {/* Blob Background */}
          <div className="blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
              <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
            </svg>
          </div>
          {/* Section Title */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p className="">
              We are here at your service. <br /> Share your conatct details and our team will get back to you withing 24 hours.
            </p>
          </div>
          {/* End Section Title */}

          <div className="container z-3" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade"
                      data-aos-delay="400"
                    >
                      <i className="bi bi-envelope"></i>
                      <h3>Email Us</h3>
                      <p>info@example.com</p>
                      <p>contact@example.com</p>
                    </div>
                  </div>
                  {/* End Info Item */}

                  <div className="col-md-6">
                    <div
                      className="info-item"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <i className="bi bi-telephone"></i>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                      <p>+1 6678 254445 41</p>
                    </div>
                  </div>
                 
                </div>
              </div>

              <div className="col-lg-6">
                <form
                  onSubmit={handleSubmit}
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      {loading && <div className="loading">Loading</div>}
                      {errorMessage && (
                        <div className="error-message">{errorMessage}</div>
                      )}
                      {sentMessage && (
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      )}

                      <button type="submit" disabled={loading}>
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
