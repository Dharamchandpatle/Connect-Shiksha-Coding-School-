import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Kuldeep Kaware",
    role: "Founder, CEO",
    image:
      "https://ik.imagekit.io/lna8p52h8/Core%20Team/1684163357331.jpg?updatedAt=1715951679875",
    email: "https://kuldeepkaware.com",
    linkedin: "https://kuldeepkaware.com",
    github: "https://kuldeepkaware.com",
    instagram: "https://kuldeepkaware.com",
  },
  {
    name: "Rohit Kewat",
    role: "Co-Founder, CTO",
    image:
      "https://ik.imagekit.io/lna8p52h8/Core%20Team/1676696955820.jpg?updatedAt=1715951679791",
    email: "https://kuldeepkaware.com",
    linkedin: "https://kuldeepkaware.com",
    github: "https://kuldeepkaware.com",
    instagram: "https://kuldeepkaware.com",
  },
  {
    name: "Rohit Bisen",
    role: "Co-Founder, CMO",
    image:
      "https://ik.imagekit.io/lna8p52h8/Core%20Team/1708427039236.jpg?updatedAt=1715951679877",
    email: "https://kuldeepkaware.com",
    linkedin: "https://kuldeepkaware.com",
    github: "https://kuldeepkaware.com",
    instagram: "https://kuldeepkaware.com",
  },
  {
    name: "Akshay Dangi",
    role: "Full-Stack Instructor",
    image:
      "https://ik.imagekit.io/lna8p52h8/Core%20Team/1710044532919.jpg?updatedAt=1715951679839",
    email: "https://kuldeepkaware.com",
    linkedin: "https://kuldeepkaware.com",
    github: "https://kuldeepkaware.com",
    instagram: "https://kuldeepkaware.com",
  },
];

const FoundersCard = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-800">
      <div className="my-8 max-sm:-mb-10 ">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Core Team Members 🚀
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          The talented people behind the scenes who runs Connect Shiksha.
        </p>
      </div>
      <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
        <div className="flex flex-row flex-wrap justify-center mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col justify-center w-full px-8 lg:mx-6 lg:mb-8 lg:mt-0 mt-16 text-center rounded-md  lg:w-80 xl:w-64 bg-blue-600 text-gray-100"
            >
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src={member.image}
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  {member.name}
                </p>
                <p>{member.role}</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a
                  rel="noopener noreferrer"
                  href={member.email}
                  title="Email"
                  className="text-gray-50 hover:text-blue-600"
                >
                  <FaEnvelope className="w-5 h-5" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href={member.linkedin}
                  title="LinkedIn"
                  className="text-gray-50 hover:text-blue-600"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href={member.github}
                  title="GitHub"
                  className="text-gray-50 hover:text-blue-600"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  rel="noopener noreferrer"
                  href={member.instagram}
                  title="Instagram"
                  className="text-gray-50 hover:text-blue-600"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersCard;
