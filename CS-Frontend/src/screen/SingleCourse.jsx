import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseHeader from "../components/CourseComponents/CourseHeader";
import CourseIncludes from "../components/CourseComponents/CourseIncludes";

const SingleCourse = () => {
  return (
    <div>
      <Navbar />
      <CourseHeader />
      <CourseIncludes />
      <Footer />
    </div>
  );
};

export default SingleCourse;
