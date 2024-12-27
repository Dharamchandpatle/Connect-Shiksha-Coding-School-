import React from "react";

const batches = [
  {
    title: "MERN Batch 1",
    imageUrl:
      "https://ik.imagekit.io/lna8p52h8/IMG_20240301_174518.jpg?updatedAt=1715970947456",
  },
  {
    title: "MERN Batch 2",
    imageUrl:
      "https://ik.imagekit.io/lna8p52h8/IMG20240301174909.jpg?updatedAt=1715970947536",
  },
  {
    title: "MERN Batch 3",
    imageUrl:
      "https://ik.imagekit.io/lna8p52h8/IMG_20240301_174737.jpg?updatedAt=1715970947047",
  },
];

const BatchesGallery = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Our Students Batches 🚀
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            We have the best batches for you to learn and grow your skills.
          </p>
        </div>
        {/* text - end */}

        <div className="grid gap-6 sm:grid-cols-3">
          {batches.map((batch, index) => (
            <a
              key={index}
              href="#"
              className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
            >
              <img
                src={batch.imageUrl}
                loading="lazy"
                alt={batch.title}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
              <div className="relative flex flex-col">
                <span className="text-lg font-semibold text-white lg:text-xl">
                  {batch.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BatchesGallery;
