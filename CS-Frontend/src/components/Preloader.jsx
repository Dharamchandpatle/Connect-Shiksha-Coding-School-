import React from "react";

const Preloader = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="relative flex justify-center items-center">
        <div className="absolute w-40 h-40 bg-blue-300 rounded-full animate-ping "></div>
        <div className="w-40 h-40 border-8 border-t-8 border-gray-200 rounded-full animate-spin"></div>
        <img
          src="https://ik.imagekit.io/lna8p52h8/new%20logo.jpg?updatedAt=1718970382986"
          alt="logo"
          className="absolute w-40 h-40 rounded-full  z-10"
        />
      </div>
    </div>
  );
};

export default Preloader;
