"use client";

import React from "react";

import Hero from "../../Hero";
import Profiles from "../../Profiles";
import Footer from "../../Footer";

const AboutCardDesktop = () => {
  return (
    <>
      <Hero />
      
      <div className="md:block lg:hidden">
        <Profiles />
      </div>

      <Footer />
    </>
  );
};

export default AboutCardDesktop;
