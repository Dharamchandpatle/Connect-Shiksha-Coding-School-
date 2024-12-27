import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import AboutBanner from "../components/AboutBanner";
import FoundersCard from "../components/FoundersCard";
import VisionCards from "../components/VisionCards";
import BatchesGallery from "../components/BatchesGallery";
import Social_media from "../components/SocialMedia";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutBanner />
      <VisionCards />
      <FoundersCard />
      <BatchesGallery />
      <StatsSection />
      <Social_media />
      <Footer />
    </>
  );
};

export default About;
