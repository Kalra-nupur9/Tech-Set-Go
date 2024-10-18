"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Login from "./Login";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <main className="main">
      
      <Header/>

        <HeroSection />

        {/* <Login/> */}

        <AboutUs />

        <Services />

        <ContactUs />

        <Footer/>

      </main>
    </>
  );
}
