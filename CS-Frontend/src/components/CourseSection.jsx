import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CourseSection = () => {
  return (

    <div>
      <Navbar />

      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/*text - start*/}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Explore Our Course Catalog 🚀</h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Choose from a variety of courses that suits your needs</p>
          </div>
          {/*text - end*/}

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
            {/*article - start*/}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a href="#" className="group  h-48 overflow-hidden bg-gray-100 md:h-64">
                <img src="https://ik.imagekit.io/lna8p52h8/2151005751.jpg?updatedAt=1718912543945" loading="lazy" alt="Photo by Minh Pham" className="inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Front-End Domination : Create anything with code </a>
                </h2>

                <p className="mb-8 text-gray-500">Domin& the web game with 'Front-End Domination."! Nail HTML, CSS, US,
                  and Solve real problems, dive into fun projects, and be interview-ready!🚀💻</p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex w-full lg:gap-12 gap-6 sm:flex-row  lg:justify-start">
                    <a
                      href="#"
                      className="inline-block rounded-lg bg-red-500 px-8 py-3  text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                    >
                      ₹4999/- Only
                    </a>
                    <a
                      href="/cd"
                      className="inline-block rounded-lg bg-indigo-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                    >
                      Start Learning
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-[99px] h-[99px] overflow-hidden absolute top-[312px] right-[1030px]">
                <span className='absolute block w-[225px] py-2.5 shadow-md  leading-none text-center text-sm font-semibold tracking-wide text-white top-0 right-0  rotate-45 translate-x-[33%] translate-y-[63%] bg-red-600'>NEW</span>
              </div>
            </div>
            {/*article - end*/}

            {/*article - start*/}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a href="#" className="group  h-48 overflow-hidden bg-gray-100 md:h-64">
                <img src="https://ik.imagekit.io/lna8p52h8/2151005751.jpg?updatedAt=1718912543945" loading="lazy" alt="Photo by Minh Pham" className="inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Backend Domination - Create
                    Scalable & Secured Backend. </a>
                </h2>

                <p className="mb-8 text-gray-500">Ready to rule the digital world? Learn to build powerful back-ends that drive
                  websites and apps smoothly. From databases to security, we cover it all.🚀💻</p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex w-full lg:gap-12 gap-6  sm:flex-row  lg:justify-start">
                    <a
                      href="#"
                      className="inline-block rounded-lg bg-red-500 px-8 py-3  text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                    >
                      ₹5999/- Only
                    </a>
                    <a
                      href="/cd"
                      className="inline-block rounded-lg bg-indigo-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                    >
                      Start Learning
                    </a>
                  </div>
                </div>
              </div>

            </div>
            {/*article - end*/}

            {/*article - start*/}
            <div className="flex flex-col overflow-hidden rounded-lg border bg-white">
              <a href="#" className="group  h-48 overflow-hidden bg-gray-100 md:h-64">
                <img src="https://ik.imagekit.io/lna8p52h8/2151005751.jpg?updatedAt=1718912543945" loading="lazy" alt="Photo by Minh Pham" className="inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h2 className="mb-2 text-lg font-semibold text-gray-800">
                  <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Data Structures & Algorithms BootCamp @Supreme-3.0 </a>
                </h2>

                <p className="mb-8 text-gray-500">This course is suitable for beginners and experienced programmers and aims to prepare students for technical interviews and placement exams.💻</p>

                <div className="mt-auto flex items-end justify-between">
                  <div className="flex w-full lg:gap-12 gap-6  sm:flex-row  lg:justify-start">
                    <a
                      href="#"
                      className="inline-block rounded-lg bg-red-500 px-8 py-3  text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                    >
                      ₹4999/- Only
                    </a>
                    <a
                      href="/cd"
                      className="inline-block rounded-lg bg-indigo-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                    >
                      Start Learning
                    </a>
                  </div>
                </div>

              </div>

            </div>
            {/*article - end*/}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CourseSection