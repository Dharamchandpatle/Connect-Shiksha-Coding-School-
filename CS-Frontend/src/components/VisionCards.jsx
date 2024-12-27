import React from "react";
import { FaAward } from "react-icons/fa";

const cardData = [
  {
    title: "Our Vision",
    description:
      "Our vision is to provide the best education to the students and help them to grow their skills. We provide the best courses for you to learn and grow. We have the best teachers and mentors who will help you to grow your skills.",
    icon: <FaAward className="w-8 h-8 text-gray-500" />,
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to create a supportive and inclusive learning environment where students can thrive and achieve their full potential. We aim to inspire and empower students to become lifelong learners and leaders in their communities.",
    icon: <FaAward className="w-8 h-8 text-gray-500" />,
  },
  {
    title: "Our Goals",
    description:
      "Our goals include enhancing student engagement, improving educational outcomes, and fostering a culture of continuous improvement. We are committed to using innovative teaching methods and technologies to support student success.",
    icon: <FaAward className="w-8 h-8 text-gray-500" />,
  },
];

const VisionCards = () => {
  return (
    <>
      <div className="mb-5">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Our Vision & Mission 🚀
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          We aim to provide the best education to students worldwide.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1S p-10 gap-x-10 ">
        {cardData.map((card, index) => (
          <a
            key={index}
            href="#"
            className="relative block overflow-hidden rounded-lg border bg-white border-gray-100 p-4 sm:p-6 lg:p-8 mb-4"
          >
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="flex justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  {card.title}
                </h3>
              </div>

              <div className="shrink-0">{card.icon}</div>
            </div>

            <div className="mt-4">
              <p className="text-pretty text-sm text-gray-500 text-justify">
                {card.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default VisionCards;
