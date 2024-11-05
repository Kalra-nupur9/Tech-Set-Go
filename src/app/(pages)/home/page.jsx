"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Login from "../../Components/Login";
import AboutUs from "../../Components/AboutUs";
import Services from "../../Components/Services";
import ContactUs from "../../Components/ContactUs";
import HeroSection from "../../Components/HeroSection";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <>
      <main className="main">
      
      <Header/>

        <HeroSection />

        {/* <Login/> */}
        <Services />

        <AboutUs />

       

        <ContactUs />

        <Footer/>

      </main>
    </>
  );
}
