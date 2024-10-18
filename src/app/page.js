"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Login from "./Login";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";



export default function Home() {
 

  return (
    <>
       
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background relative ">
          <Image
            src="/assets/img/hero-bg.jpg"
            alt=" Bg image"
            data-aos="fade-in"
            fill
            style={{ objectFit: 'cover' }}
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
       {/* <Login/> */}
        <AboutUs/>
        <Services/>
        <ContactUs/>
        
      </main>
    </>
  );
}
