import React, { useState } from "react";
import {
  FaVideo,
  FaGlobe,
  FaStar,
  FaCheck,
  FaHome,
  FaChevronRight,
} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const dummyData = {
  courseDetails: {
    title: "Data Structures & Algorithms BootCamp @Supreme-3.0",
    subtitle: "Welcome to @Connect-siksha Family",
    lectures: 100,
    language: "Hindi",
    price: 3499,
    originalPrice: 7000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHec4U3Tkacp-3MgHrhpTQnymkpygLoKQ-tLKpFGzRw&s",
    includes: ["No Pre-requisite Required", "170+ hours Video Content"],
  },
  aboutCourse:
    "A comprehensive program that covers the fundamentals of data structures and algorithms. It includes lectures and exercises to help students design and implement efficient solutions. This course is suitable for beginners and experienced programmers and aims to prepare students for technical interviews and placement exams.",
  courseFeatures: [
    {
      icon: "https://www.codehelp.in/_next/image?url=%2Fassets%2FcourseIcon%2Ficon_2.svg&w=32&q=75",
      text: "Mode of the Course LIVE + Recordings",
    },
    {
      icon: "https://www.codehelp.in/_next/image?url=%2Fassets%2FcourseIcon%2Ficon_2.svg&w=32&q=75",
      text: "No. Of Lectures 60 LIVE lectures + Recordings [HomeWork Solutions]",
    },
    {
      icon: "https://www.codehelp.in/_next/image?url=%2Fassets%2FcourseIcon%2Ficon_2.svg&w=32&q=75",
      text: "Class Recording Provided Yes [HD Quality]",
    },
    {
      icon: "https://www.codehelp.in/_next/image?url=%2Fassets%2FcourseIcon%2Ficon_2.svg&w=32&q=75",
      text: "Doubt Classes 20 Doubt Sessions",
    },
  ],
  courseIncludes: [
    "FlowChart & PseudoCode",
    "Time & Space Complexity of Recursive Algorithms",
    "Variables & DataTypes in C++",
    "Object Oriented Programming Concepts",
    "Operators, Conditionals & Loops",
  ],
  instructor: {
    name: "Kuldeep Kawre",
    title: "Founder - Code-Help, Ex-Amazon, Ex-Microsoft",
    description:
      "I am a Freelance Web Designer. I work with small business owners, startups, and individuals who want to get more online visibility. I’m focused on building a leading Online personalized learning remediation/tutoring tool Connect-siksha.",
    image:
      "https://www.codehelp.in/_next/image?url=%2Fassets%2FHome%2FPlusFrame.svg&w=256&q=75",
  },
};

const CourseDetails = () => {
  const [course, setCourse] = useState(dummyData);

  return (
    <div className="bg-[#eeeef8] p-0 m-0 overflow-x-hidden">
      <Navbar />
      <Header course={course.courseDetails} />
      <AboutCourse
        about={course.aboutCourse}
        features={course.courseFeatures}
      />
      <Instructor instructor={course.instructor} />
      <Footer />
    </div>
  );
};

const Header = ({ course }) => (
  <section className="py-16 px-14 w-full max-sm:py-10 max-sm:px-4 flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex-wrap lg:bg-white lg:bg-opacity-50 lg:h-[25rem] lg:relative">
    <article className="lg:w-[60vw] w-full lg:pr-12">
      <p className="mt-8 font-bold text-xl max-sm:text-lg text-gray-600">
        Welcome to <span className="text-[#1f2937]">@Connect-Siksha</span> Team
      </p>
      <p className="mt-8 font-bold max-sm:text-3xl text-4xl text-gray-800 leading-tight">
        {course.title}
      </p>
      <section className="flex gap-6 flex-wrap">
        <InfoBlock
          icon={<FaVideo />}
          text={`${course.lectures}+ Lectures`}
          color="text-[#2563eb]"
        />
        <InfoBlock
          icon={<FaGlobe />}
          text={course.language}
          color="text-green-500"
        />
        <InfoBlock
          icon={<FaStar />}
          text={course.rating}
          color="text-yellow-500"
        />
      </section>
    </article>
  </section>
);

const Breadcrumb = () => (
  <nav className="flex" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
      <li className="inline-flex items-center">
        <a
          href="/"
          className="inline-flex items-center text-[17px] font-medium text-gray-400 hover:text-blue-600"
        >
          <FaHome className="w-3 h-3 me-2.5" />
          Home
        </a>
      </li>
      <li>
        <div className="flex items-center">
          <FaChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-500 mx-1" />
          <a
            href="/Courses"
            className="ms-1 text-[16px] font-medium text-gray-400 hover:text-blue-600 md:ms-2"
          >
            Courses
          </a>
        </div>
      </li>
      <li aria-current="page">
        <div className="flex items-center">
          <FaChevronRight className="rtl:rotate-180 w-3 h-3 text-gray-500 mx-1" />
          <span className="ms-1 text-[16px] font-medium text-blue-500 md:ms-2">
            MERN
          </span>
        </div>
      </li>
    </ol>
  </nav>
);

const InfoBlock = ({ icon, text, color }) => (
  <div className={`mt-6 ${color} flex gap-2 items-baseline`}>
    {icon}
    <p className="text-lg max-sm:text-base font-medium border-r-2 border-gray-300 pr-6 h-4 flex items-center">
      {text}
    </p>
  </div>
);

const BuyNow = () => (
  // This will print the course object in the console

  <article className="lg:w-[30vw] w-full max-sm:ml-[-1rem] max-sm:mt-8 h-auto p-8 bg-white bg-opacity-60 lg:absolute lg:right-14 rounded-xl border-[1px] border-white-100">
    <div className="w-full">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOHec4U3Tkacp-3MgHrhpTQnymkpygLoKQ-tLKpFGzRw&s"
        alt=""
        className="w-full h-full rounded-xl"
      />
    </div>
    <p className="mt-7 font-semibold text-3xl text-[#1d4ed8]">
      ₹4999 &nbsp;
      <del className="text-gray-400 text-2xl">₹7000</del>
    </p>
    <p className="mt-4 mb-5 font-semibold text-[24px] text-gray-800">
      This Course Includes :
    </p>
  </article>
);

const BuyNowButton = () => (
  <button className="mt-5 w-full bg-[#4f46e5] text-white hover:bg-blue-700 rounded-xl text-lg py-4 font-bold">
    Buy Now
  </button>
);

const AboutCourse = ({ about, features }) => (
  <section className="pt-10 max-sm:py-8 w-full flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex-wrap px-16 lg:bg-white lg:bg-opacity-50 lg:h-[40rem] lg:relative">
    <article className="lg:w-[60vw] w-full lg:pr-12">
      <p className="text-gray-800 text-4xl max-sm:text-3xl font-bold">
        About This Course
      </p>
      <p className="mt-4 text-gray-600 font-medium max-sm:text-base text-lg">
        {about}
      </p>
    </article>
    <FeaturesList features={features} />
  </section>
);

const FeaturesList = ({ features }) => (
  <article className="lg:w-[30vw] w-full max-sm:ml-[-1rem] max-sm:mt-8 h-auto p-8 bg-white bg-opacity-60 lg:absolute lg:right-14 rounded-xl border-[1px] border-white-100">
    {features.map((feature, index) => (
      <Feature key={index} icon={feature.icon} text={feature.text} />
    ))}
  </article>
);

const Feature = ({ icon, text }) => (
  <div className="mt-5 flex gap-2 items-center">
    <img src={icon} alt="feature icon" className="h-6 w-6" />
    <p className="font-medium text-lg text-gray-600">{text}</p>
  </div>
);

const CourseIncludes = ({ includes }) => (
  <section className="pt-16 pb-10 px-16 max-sm:py-8 w-full flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex-wrap bg-[#e2e8f0]">
    <article className="lg:w-[60vw] w-full lg:pr-12">
      <p className="text-gray-800 text-4xl max-sm:text-3xl font-bold">
        Course Includes
      </p>
      <ul className="mt-4 list-disc list-inside">
        {includes.map((include, index) => (
          <li
            key={index}
            className="text-gray-600 font-medium max-sm:text-base text-lg"
          >
            {include}
          </li>
        ))}
      </ul>
    </article>
  </section>
);

const Instructor = ({ instructor }) => (
  <section className="pt-16 pb-10 px-16 max-sm:py-8 w-full flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex-wrap bg-[#f3f4f6]">
    <article className="lg:w-[60vw] w-full lg:pr-12">
      <p className="text-gray-800 text-4xl max-sm:text-3xl font-bold">
        Instructor
      </p>
      <div className="mt-4 flex items-center">
        <img
          src={instructor.image}
          alt="Instructor"
          className="w-24 h-24 rounded-full"
        />
        <div className="ml-4">
          <p className="text-gray-800 text-2xl font-bold">{instructor.name}</p>
          <p className="text-gray-600 text-lg">{instructor.title}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600 font-medium max-sm:text-base text-lg">
        {instructor.description}
      </p>
    </article>
  </section>
);

export default CourseDetails;
