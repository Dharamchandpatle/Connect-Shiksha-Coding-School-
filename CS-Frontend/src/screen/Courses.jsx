import React from "react";
import CoursesList from "../components/CoursesCards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <>
      <Navbar />
      <CoursesList />
      <Footer />
    </>
  );
};

export default Courses;
