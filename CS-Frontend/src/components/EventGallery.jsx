import React, { useState, useEffect } from "react";

const imageData = [
  {
    src: "https://ik.imagekit.io/lna8p52h8/Event%20Gallery/IMG_20240301_173153.jpg?updatedAt=1715972610120",
    label: "#Meetup",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/Event%20Gallery/IMG_20240301_174518%20(1).jpg?updatedAt=1715972611113",
    label: "#Meetup",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/Event%20Gallery/IMG20240301185545.jpg?updatedAt=1715972613504",
    label: "#Meetup",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/Event%20Gallery/808f3471-d947-408b-a650-7acb7da31cf0.jpg?updatedAt=1715974004359",
    label: "#Meetup",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/Event%20Gallery/IMG_20240301_175310%20(1).jpg?updatedAt=1715972611937",
    label: "#Meetup",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/Event%20Gallery/IMG20240301181546.jpg?updatedAt=1715972612599",
    label: "#Meetup",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/Event%20Gallery/IMG_20240301_174131.jpg?updatedAt=1715972611314",
    label: "#Meetup",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/Event%20Gallery/IMG_20240301_180453.jpg?updatedAt=1715972611207",
    label: "#Meetup",
  },
  {
    src: "https://ik.imagekit.io/lna8p52h8/Event%20Gallery/IMG_20240301_174421.jpg?updatedAt=1715972610629",
    label: "#Meetup",
  },
];

const EventGallery = () => {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const handleImageLoad = (src) => {
      setLoadedImages((prev) => ({ ...prev, [src]: true }));
    };

    imageData.forEach((image) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => handleImageLoad(image.src);
    });
  }, []);

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Our Events Gallery 🚀
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            We have the best events for you to learn and grow your skills.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {imageData.map((image, index) => (
            <a
              key={index}
              href="#"
              className="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96"
            >
              {!loadedImages[image.src] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <div className="loader">Loading...</div>
                </div>
              )}
              <img
                src={image.src}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110 ${
                  loadedImages[image.src] ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <span className="relative mr-3 mb-3 inline-block rounded-lg border border-gray-500 px-2 py-1 text-xs text-gray-200 backdrop-blur md:px-3 md:text-sm">
                {image.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
