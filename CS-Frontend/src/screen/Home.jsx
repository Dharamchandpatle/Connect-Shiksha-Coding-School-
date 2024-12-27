import React from "react";
import Navbar from "../components/Navbar";
import YoutubeVideoSlider from "../components/YoutubeSlider";
import CourseFeatures from "../components/CourseFeatures";
import StatsSection from "../components/StatsSection";
import CertificateBanner from "../components/CertificateBanner";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import HomeBanner from "../components/HomeBanner";
import Social_media from "../components/SocialMedia";
const Home = () => {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <CourseFeatures />
      <CertificateBanner />
      <YoutubeVideoSlider />
      <StatsSection />
      <Reviews />
      <Social_media />
      <Footer />
    </>
  );
};

export default Home;
