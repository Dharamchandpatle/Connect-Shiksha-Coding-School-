import React from "react";
import { FaBook, FaGraduationCap } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
const CourseHeader = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
          <section className="flex flex-col-reverse justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* content - start */}
            <div className="flex flex-col justify-between xl:w-6/12">
              <div className="sm:text-center lg:py-12 lg:text-left ">
                <p className="mb-4 font-semibold text-indigo-600 md:mb-6 md:text-lg xl:text-xl">
                  Let's Learn with Connect Shiksha 🚀
                </p>

                <h1 className="lg:mb-8 mb-4 text-4xl font-bold text-black sm:text-5xl  md:text-6xl">
                  Master Full Stack Web Development
                </h1>
                <div className="flex gap-3 text-sm lg:text-base lg:mb-8 mb-4">
                  <span className="whitespace-nowrap flex justify-between lg:gap-2 gap-1 items-center rounded-md border-2 border-blue-600 text-blue-600 py-1 lg:px-3 px-1">
                    <FaGraduationCap className="w-5 h-5" />
                    Beginner
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
                <p className="text-gray-600 font-medium max-sm:text-base text-justify text-lg lg:mb-8 mb-4">
                  Learn Full Stack Web Development from scratch and become a
                  professional web developer. This course will teach you
                  everything you need to know to get started with web
                  development.
                </p>

                <div className="flex w-full gap-2.5 sm:flex-row  lg:justify-start">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-red-500 px-8 py-3  text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                  >
                    ₹4999/- Only
                  </a>
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-indigo-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                  >
                    Start Learning
                  </a>
                </div>
              </div>
            </div>
            {/* content - end */}

            {/* image - start */}
            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src="https://ik.imagekit.io/lna8p52h8/2151005751.jpg?updatedAt=1718912543945"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* image - end */}
          </section>
        </div>
      </div>
    </>
  );
};

export default CourseHeader;
