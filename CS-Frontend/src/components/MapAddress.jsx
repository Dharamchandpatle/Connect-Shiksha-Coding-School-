import React from "react";

const MapAddress = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Our Location 📌
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            We are located at the heart of the city. Visit us today!
          </p>
        </div>
        <div>
          <div className="container mx-auto px-4 py-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783020.8639273825!2d76.16840052610075!3d22.188561318787425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a5b88784dc7fd%3A0xbbb259fc0909875b!2sConnect%20Shiksha!5e0!3m2!1sen!2sin!4v1715977687628!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapAddress;
