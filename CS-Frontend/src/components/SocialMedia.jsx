import React from "react";

const Social_media = () => {
  return (
    <div>
      <section className="py-6  ">
        <h1 className="text-center text-4xl font-bold ">Follow Us 🚀</h1>
        <div className="flex flex-row lg:gap-40 gap-4 lg:py-12 py-10 flex-wrap-reverse justify-center">
          <a
            href="https://www.youtube.com/@ConnectShiksha"
            className="group flex justify-center p-2 drop-shadow-xl  text-white font-semibold hover:translate-y-3 rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
          >
            <img
              src="https://ik.imagekit.io/lna8p52h8/social_youtube_2756.png?updatedAt=1716040675221"
              className=" h-16 w-16"
              alt=""
            />
          </a>

          <a
            href="https://www.linkedin.com/in/connect-shiksha/"
            className="group flex justify-center p-2 r drop-shadow-xl    text-white font-semibold hover:translate-y-3 rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
          >
            <img
              src="https://ik.imagekit.io/lna8p52h8/linkedin_socialnetwork_17441.png?updatedAt=1716040675295"
              className=" h-16 w-16"
              alt=""
            />
          </a>

          <a
            href="https://www.instagram.com/connectshiksha/"
            className="group flex justify-center p-2  drop-shadow-xl    text-white font-semibold hover:translate-y-3 rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
          >
            <img
              src="https://ik.imagekit.io/lna8p52h8/3721672-instagram_108066.png?updatedAt=1716040432973"
              className=" h-16 w-16"
              alt=""
            />
          </a>

          <a
            href="https://chat.whatsapp.com/J25mwTHQvKIAWHgSieXMRA"
            className="group flex justify-center p-2  drop-shadow-xl    text-white font-semibold hover:translate-y-3 rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
          >
            <img
              src="https://ik.imagekit.io/lna8p52h8/whatsapp_socialnetwork_17360.png?updatedAt=1716040513520"
              className=" h-16 w-16"
              alt=""
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Social_media;
