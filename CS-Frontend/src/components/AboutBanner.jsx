import React from "react";

const AboutBanner = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt
                src="https://ik.imagekit.io/lna8p52h8/IMG_20240301_175310.jpg?updatedAt=1715947830548"
                className="absolute inset-0 h-full w-full object-cover rounded-md"
              />
            </div>
          </div>
          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100" />
            <div className="p-8 px-3  lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                About The <span className="text-blue-700">Connect Shiksha</span>
              </h2>
              <p className="mt-4 text-gray-600 text-justify">
                Connect Shiksha is a platform where you can learn and grow your
                skills. We provide the best courses for you to learn and grow.
                We have the best teachers and mentors who will help you to grow
                your skills. We have the best courses for you to learn and grow.
                We have the best teachers and mentors who will help you to grow
                your skills.
              </p>
              <a
                href="https://forms.gle/W4Yobiizf5Hw8rcQ8"
                className="mt-8 inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
