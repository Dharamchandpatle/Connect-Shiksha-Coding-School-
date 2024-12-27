import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Contact Us 🚀
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Feel free to contact us for any queries or feedback.
            </p>
          </div>
          {/* text - end */}
          <section className="lg:p-20 pb-10 rounded border-2 mx-auto  max-w-6xl bg-gray-50  text-gray-900">
            <div className="grid  grid-cols-1 px-6 md:grid-cols-2 ">
              <div className="py-6 md:py-0 md:px-6">
                <h1 className="text-4xl font-bold">Get in touch</h1>
                <p className="pt-2 pb-4">
                  Fill in the form to start a conversation
                </p>
                <div className="space-y-8 font-medium">
                  <p className="flex items-center">
                    <FaLocationArrow className="w-5 h-5 mr-2 sm:mr-6" />
                    <span>
                      In Front of Bajaj Showroom, <br /> Narbada Nagar, Balaghat
                    </span>
                  </p>
                  <p className="flex items-center">
                    <FaPhoneAlt className="w-5 h-5 mr-2 sm:mr-6" />
                    <span>9131782103, 7748893097</span>
                  </p>
                  <p className="flex items-center">
                    <FaEnvelope className="w-5 h-5 mr-2 sm:mr-6" />
                    <span>connectsikshaofficial@email.com</span>
                  </p>
                  <div className="flex items-center text-2xl  mt-7">
                    <a
                      href="https://www.youtube.com/@ConnectShiksha"
                      className="mr-4"
                    >
                      <FaYoutube />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/connect-shiksha/"
                      className="mr-4"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/connectshiksha/"
                      className="mr-4"
                    >
                      <FaInstagram />
                    </a>
                    <a href="https://chat.whatsapp.com/J25mwTHQvKIAWHgSieXMRA">
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
              <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                  >
                    First name*
                  </label>
                  <input
                    name="first-name"
                    className="w-full rounded border-2 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                  >
                    Last name*
                  </label>
                  <input
                    name="last-name"
                    className="w-full rounded border-2 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                  >
                    Phone Number*
                  </label>
                  <input
                    name="phone"
                    className="w-full rounded border-2 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                  >
                    Email*
                  </label>
                  <input
                    name="email"
                    className="w-full rounded border-2 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    className="h-20 w-full rounded border-2 bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
                    defaultValue={""}
                  />
                </div>
                <div className="flex items-center justify-between sm:col-span-2">
                  <button className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-blue-300 transition duration-100 hover:bg-blue-600 focus-visible:ring active:bg-blue-700 md:text-base">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
