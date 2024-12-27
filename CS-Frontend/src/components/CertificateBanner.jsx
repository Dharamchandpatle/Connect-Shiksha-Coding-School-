import React from "react";

import maincertificate from "../assets/cs.png";
import { FaAward } from "react-icons/fa";

const CertificateBanner = () => {
  return (
    <>
      <section className="relative flex flex-1 shrink-0 items-center justify-center overflow-hidden  bg-gray-100 py-10 shadow-lg ">
        <div className="absolute inset-0 bg-blue-800  mix-blend-multiply "></div>

        <div className="mx-auto relative  max-w-screen-2xl px-6 md:px-14">
          <section className="flex flex-col justify-between gap-4  sm:gap-10 md:gap-12 lg:flex-row items-center">
            {/*content - start*/}
            <div class="flex flex-col justify-center max-sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <p class="mb-4 font-semibold text-blue-400 md:mb-6 md:text-lg xl:text-xl">
                Get Certified Now
              </p>

              <h1 class="mb-8 text-3xl font-bold leading-10 text-white  md:mb-12 md:text-5xl">
                Official Certificate of Completion
              </h1>

              <p class="leading-relaxed text-gray-100 md:mb-12 max-sm:mb-8 lg:w-4/5 xl:text-lg text-sm">
                Get a certificate of completion from Connect Shiksha. Share your
                certificate your professional network on LinkedIn.
              </p>

              <div class="flex flex-col gap-2.5 sm:flex-row  max-sm:mb-8 sm:justify-center lg:justify-start">
                <a
                  href="https://forms.gle/W4Yobiizf5Hw8rcQ8"
                  class="inline-block rounded-lg bg-red-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base"
                >
                  Start now
                </a>
              </div>
            </div>
            {/*content - end*/}

            {/*image - start*/}
            <div className="  bg-transparent max-w-xl ">
              <img
                src={maincertificate}
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="lg:h-[25rem] lg:w-[37.5rem] sm:max-w-full sm:h-auto"
              />
            </div>
            {/*image - end*/}
          </section>
        </div>
      </section>
    </>
  );
};

export default CertificateBanner;
