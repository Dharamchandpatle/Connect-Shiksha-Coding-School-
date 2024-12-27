import React, { useEffect, useState } from "react";
import { FaPlus, FaYoutube } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
0;
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { YTvideos } from "../data/YoutubeVideos";
const YoutubeVideoSlider = () => {
  return (
    <>
      <section className="py-10  lg:h-full ">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Our Youtube Videos
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
            {YTvideos.map((video) => (
              <SwiperSlide key={video.id}>
                <VideoCard video={video} />
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

const VideoCard = ({ video }) => {
  return (
    <div className="max-w-sm m-auto overflow-hidden h-80  border-0 rounded-lg shadow-md  border-gray-700">
      <iframe
        width="100%"
        height="200"
        src={video.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-semibold  uppercase tracking-tight ">
            {video.name}
          </h5>
        </a>
        <div className="flex justify-between items-center">
          <div class="flex gap-1">
            {video.tags.map((tag) => (
              <span class="whitespace-nowrap rounded-full bg-blue-600 text-white  py-1 px-3">
                #{tag}
              </span>
            ))}
          </div>
          <div>
            <a href={video.watchNowLink} target="fsd">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full flex items-center transition duration-300 ease-in-out">
                <FaYoutube className="mr-2" />
                Youtube
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideoSlider;
