import React from "react";
import { reviewData } from "../data/ReviewData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
0;
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const Reviews = () => {
  return (
    <>
      <section className="py-10  lg:h-full ">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Our Student Reviews
        </h2>

        <div className="lg:px-20 flex justify-center items-center w-full">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={28}
            slidesPerView={3}
            autoplay={{ delay: 2000 }}
            className="mySwiper w-full p-5 "
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {reviewData.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewSlide {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* view all videos button */}

        {/* <div className="flex justify-center mt-8">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300 ease-in-out">
            View All videos
          </button>
        </div> */}
      </section>
    </>
  );
};

export default Reviews;

const ReviewSlide = ({ name, date, stars, content }) => {
  return (
    <div className="flex flex-col gap-3 h-72 border-0 rounded-lg shadow-md bg-white  border-gray-700 p-4 md:p-6">
      <div>
        <span className="block text-sm font-bold md:text-base">{name}</span>
        <span className="block text-sm text-gray-500">{date}</span>
      </div>

      <div className="-ml-1 flex gap-0.5">
        {Array.from({ length: stars }, (_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-600">{content}</p>
    </div>
  );
};
