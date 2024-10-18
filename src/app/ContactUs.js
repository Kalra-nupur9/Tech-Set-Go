import { useEffect } from "react";
import React, { useState } from "react";

const ContactUs = () => {
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
    {/* Contact Us */}
      <section id="contact" className="contact section">
        {/* Blob Background */}
        <div className="blob">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
          </svg>
        </div>
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2 className="text-uppercase">Contact</h2>
          <p className="">
            We are here at your service. <br /> Share your conatct details and
            our team will get back to you withing 24 hours.
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
                    <p>contact.techsetgo@gmail.com</p>
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
                    <p>+91 81306 01013</p>
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
    </>
  );
};

export default ContactUs;
