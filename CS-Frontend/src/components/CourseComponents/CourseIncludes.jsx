import React from "react";

const LanguageLogos = [
  {
    src: "https://ik.imagekit.io/lna8p52h8/html-5.svg?updatedAt=1718914959708",
    name: "HTML5",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/css-3%20(1).svg?updatedAt=1718914959664",
    name: "CSS 3",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/js.svg?updatedAt=1718915440350",
    name: "JavaScript",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/tailwindcss.svg?updatedAt=1718915440299",
    name: "Tailwind CSS",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/react-2.svg?updatedAt=1718916239202",
    name: "React JS",
  },

  {
    src: "https://ik.imagekit.io/lna8p52h8/nodejs.svg?updatedAt=1718915440321",
    name: "Node JS",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/mongodb-icon-1.svg?updatedAt=1718915440345",
    name: "MongoDB",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/aws-2.svg?updatedAt=1718915440305",
    name: "AWS",
  },
];
const ToolsLogos = [
  {
    src: "https://ik.imagekit.io/lna8p52h8/visual-studio-code-1.svg?updatedAt=1718917505179",
    name: "VS Code",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/github-icon-1.svg?updatedAt=1718917505137",
    name: "GitHub",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/netlify.svg?updatedAt=1718917505093",
    name: "Frontend Deploy",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/Vercel_favicon.svg?updatedAt=1718917740237",
    name: "Backend Deploy",
  },
];

const CourseIncludes = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 lg:mb-12 lg:text-3xl">
            You will learn these programming languages in this course 🚀
          </h2>

          <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-4 lg:gap-6">
            {LanguageLogos.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col h-32 items-center justify-center rounded-lg bg-gray-100 p-5 text-gray-400"
              >
                <img className="h-14 w-auto" src={logo.src} />
                <span className="mt-3 text-gray-800 text-xl font-semibold">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 lg:mb-12 lg:text-3xl">
            You will learn these tools in this course 🚀
          </h2>

          <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-4 lg:gap-6">
            {ToolsLogos.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col h-32 items-center justify-center rounded-lg bg-white p-5 text-gray-400"
              >
                <img className="h-16 w-auto" src={logo.src} />
                <span className="mt-3 text-gray-800 text-xl font-semibold">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIncludes;
