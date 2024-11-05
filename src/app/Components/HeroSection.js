import React, { useState } from "react";
import Image from "next/image";


const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch('/api/subscribe', { 
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
  
        if (response.ok) {
          setSubmitted(true);
        } else {
         
          const errorText = await response.text(); 
          console.error('Error response:', errorText); 
          throw new Error('Failed to subscribe');
        }
      } catch (error) {
        console.error('Error submitting email:', error);
       
        setErrorMessage('There was an issue submitting your email. Please try again later.');
      }
    }
  };
  
  
  

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background relative ">
        <Image
          src="/assets/img/hero-bg.jpg"
          alt=" Bg image"
          data-aos="fade-in"
          fill
          style={{ objectFit: "cover" }}
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
                {!submitted ? (
                <form onSubmit={handleSubmit} className="php-email-form">
                  <div className="sign-up-form">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      className=" text-gray-950"
                    />
                    <input type="submit" value="Subscribe" />
                  </div>
                </form>
              ) : (
                <div className="sent-message font-bold py-5 uppercase text-center">
                  Your subscription request has been sent. We will contact you shortly<br />  Thank you!
                </div>
                
              )}
              {errorMessage && <div className="error-message text-red-500">{errorMessage}</div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
