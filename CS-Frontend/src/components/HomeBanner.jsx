import React from "react";
import { FaSearch, FaUserGraduate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="h-auto w-full bg-blue-600">
      <div className="mx-auto max-w-7xl py-16 max-sm:py-12">
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <span className="rounded-full uppercase bg-red-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                    Hey Guys
                  </span>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                    <span className="sm:text-6xl"></span> Welcome To The{" "}
                    <span className="font-extrabold  bg-clip-text bg-gradient-to-r from-white-700 to-red-700">
                      Connect Shiksha
                    </span>
                  </h1>
                </div>
                <form className="flex items-center max-w-lg ">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <FaUserGraduate className="text-red" />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                      placeholder="Search The Courses..."
                      required
                    />
                  </div>
                  <button
                    onClick={() => {
                      navigate("/courses");
                    }}
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-red-500 rounded-lg border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    <FaSearch />
                    <span className="sr-only">Search</span>
                  </button>
                </form>
              </div>

              {/* <div className="border-t border-gray-700"></div> */}
              <p class="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-justify">
                One Stop Solution for Student Study Problem. We are the
                fastest-growing community of coders in tier 3 cities.
              </p>
              <div class="mt-8 flex  gap-4">
                <a
                  class="block w-full rounded border bg-red-500 lg:px-8 px-3 py-2 text-center text-base font-semibold text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="https://forms.gle/W4Yobiizf5Hw8rcQ8"
                >
                  Register Now
                </a>

                <a
                  class="block w-full rounded border  lg:px-8 px-3 py-2 text-center text-base font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-600 sm:w-auto "
                  href="/about"
                >
                  More Details
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full col-span-6">
            <div className="px-6 lg:h-96 h-56 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
              <div className="w-full h-full rounded-lg shadow-lg overflow-hidden">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  width="100%"
                  height="100%"
                  className="w-full h-full object-cover object-center"
                  src="https://www.youtube.com/embed/KV1D_xvYiGQ?autoplay=1"
                  id="widget2"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
