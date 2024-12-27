import React from "react";
import { roadmapData } from "../../data/RoadmapData";
import { TiInputChecked } from "react-icons/ti";

const RoadmapBox = ({ start, end }) => {
  let data = roadmapData.slice(start, end);

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-2 sm:px-6 sm:py-12 lg:px-8 ">
        <div className="grid grid-cols-1 gap-y-8  lg:items-center lg:gap-x-16">
          {/* Timeline */}
          <ol className="relative ">
            {data.map((item, index) => (
              <li
                key={index}
                className={`pb-10 ps-6 ${
                  index === data.length - 1 ? "" : "border-s border-blue-500"
                }`}
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-green-600 rounded-full -left-3 ring-8 ring-white">
                  <TiInputChecked className="text-xl text-white" />
                </span>
                <h3 className="flex lg:items-center max-sm:flex-col mb-1 text-lg font-semibold text-gray-900">
                  {item.title}{" "}
                  {item.version && (
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded lg:ms-3 w-fit">
                      {item.version}
                    </span>
                  )}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default RoadmapBox;
