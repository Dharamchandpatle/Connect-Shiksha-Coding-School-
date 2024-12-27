import React from "react";
import RoadmapBox from "./subcomponets/RoadmapBox";
import pdflink from "../assets/coursecontent.pdf";
const CourseFeatures = () => {
  return (
    <>
      <div className="flex justify-between h-full items-center lg:gap-5 gap-0 lg:px-14 max-sm:flex-col">
        <div className="lg:w-1/3 w-full overflow-hidden  p-5 text-center ">
          <img
            src="https://ik.imagekit.io/lna8p52h8/WhatsApp%20Image%202024-05-14%20at%201.45.24%20PM.jpeg?updatedAt=1716034529312"
            className="w-full rounded-lg border-2 border-gray-200 shadow-lg"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5">
            <a href={pdflink} target="_blank" rel="noreferrer">
              Download Course Content
            </a>
          </button>
        </div>
        <div className="lg:w-2/3 flex max-sm:flex-col items-center justify-center lg:p-0 p-5 lg:pt-14">
          <RoadmapBox start={0} end={3} />
          <RoadmapBox start={3} end={6} />
        </div>
      </div>
      <div className="text-center pb-16 -mt-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <a
            href="https://chat.whatsapp.com/J25mwTHQvKIAWHgSieXMRA"
            target="_blank"
            rel="noreferrer"
          >
            Join Our Community Now 🚀
          </a>
        </button>
      </div>
    </>
  );
};

export default CourseFeatures;
