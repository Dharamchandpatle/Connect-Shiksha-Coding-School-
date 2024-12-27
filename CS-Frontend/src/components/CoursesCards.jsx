import React, { useEffect, useState } from "react";
import { FaBook, FaGraduationCap } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { getRequest } from "../services/requests";

const courses = [
  {
    id: 1,
    author: "CONNECT SHIKSHA",
    title: "MERN STACK DEVELOPMENT",
    level: "Beginner",
  },
  {
    id: 1,
    author: "CONNECT SHIKSHA",
    title: "C PROGRAMMING",
    level: "Beginner",
  },
  {
    id: 2,
    author: "CONNECT SHIKSHA",
    title: "C++ PROGRAMMING",
    level: "Beginner",
  },
  {
    id: 3,
    author: "CONNECT SHIKSHA",
    title: "JAVA PROGRAMMING",
    level: "Beginner",
  },
  {
    id: 4,
    author: "CONNECT SHIKSHA",
    title: "PYTHON PROGRAMMING",
    level: "Beginner",
  },
  {
    id: 5,
    author: "CONNECT SHIKSHA",
    title: "ADVANCED PYTHON",
    level: "Beginner",
  },
];

const CourseCard = ({ course }) => (
  <div className="relative">
    <div
      className="rounded-t-md group relative block h-84 overflow-hidden  pointer-events-none"
      style={{
        backgroundColor: "#21D4FD",
        backgroundImage: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
      }}
    >
      <div className="text-3xl text-center py-24">
        <span className="font-bold pt-2 text-white">{course.title}</span>
      </div>
    </div>
    <div className="justify-between bg-white lg:p-5 p-3 shadow-2xl space-y-3 rounded-br-md">
      <div className="flex gap-1 text-sm lg:text-base">
        <span className="whitespace-nowrap flex justify-between lg:gap-2 gap-1 items-center rounded-md border-2 border-blue-600 text-blue-600 py-1 lg:px-3 px-1">
          <FaGraduationCap className="w-5 h-5" /> Beginner
        </span>
        <span className="whitespace-nowrap flex justify-between lg:gap-2 gap-1 items-center rounded-md border-2 border-blue-600 text-blue-600 py-1 lg:px-3 px-1">
          <FaBook className="w-4 h-4" />
          In Hindi
        </span>
        <span className="whitespace-nowrap flex justify-between lg:gap-2 gap-1 items-center rounded-md border-2 border-red-600 text-red-600 py-1 lg:px-3 px-1">
          <RiLiveFill className="w-5 h-5" />
          Live Classes
        </span>
      </div>
      <hr className="text-black" />
      <div className="flex justify-between items-center h-full lg:text-base text-sm">
        <div className="flex gap-1 py-1">
          <span>By</span>
          <span className="font-bold underline">Connect Shiksha</span>
        </div>
        <div>
          <span className="whitespace-nowrap flex justify-between gap-2 items-center rounded-md bg-gray-500 text-white py-1 px-3">
            Coming Soon
          </span>
        </div>
      </div>
    </div>
    {/* <div className="absolute inset-0 bg-gray-900 bg-opacity-65 flex items-center justify-center text-white text-2xl font-bold">
      Coming Soon
    </div> */}
  </div>
);

const CoursesList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await getRequest("/public/allCourses");
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-white py-6 sm:py-8 lg:p-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
            Our Courses 🚀
          </h2>
          <p className="text-center text-lg text-gray-800">
            Choose from a variety of courses that suits your needs
          </p>
        </div>
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">
          {data.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
