import React from "react";
import {
  FaGlobe,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
// import "./tab.css";
import axios from "../utils/axios";
import { useEffect, useState } from "react";
import UpdateUserDetail from "../screen/user/UpdateUserDetails";
const students = [
  {
    id: 1,
    name: "John Doe",
    role: "Full Stack Developer",
    imgSrc: "https://bootdey.com/img/Content/avatar/avatar7.png",
    website: "https://bootdey.com",
    github: "bootdey",
    linkedin: "bootdey",
    twitter: "@bootdey",
    instagram: "chandu",
    facebook: "chandu",
  },
];

const StudentCards = () => {
  const [user, setUser] = React.useState({});
  const [userId, setUserId] = React.useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUserId(userId);

    if (!userId) {
      window.location.href = "/";
    }
  }, []);

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/user/${userId}`);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/userLogin";
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const UpdateProfile = () => {
    setIsOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div className="container mx-auto p-6">
      <div className="main-body">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {students.map((student) => (
            <div key={student.id} className="mb-4">
              <div className="card bg-white shadow-md rounded-md p-4">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={student.imgSrc}
                    alt="Admin"
                    className="rounded-full w-36 h-36"
                  />
                  <div className="mt-3">
                    <h4 className="text-lg font-semibold">{user?.name}</h4>
                    <p className="text-gray-500 mb-2">{student.role}</p>
                    <button
                      className="btn btn-primary bg-red-600 text-white py-2 px-4 rounded-md mr-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              <div className="card bg-white shadow-md rounded-md p-4 mt-4">
                <ul className="list-group">
                  <li className="flex justify-between items-center py-2">
                    <h6 className="text-gray-700 font-semibold flex items-center">
                      <FaGlobe className="mr-2 text-gray-600" />
                      Website
                    </h6>
                    <span className="text-gray-500">{student.website}</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <h6 className="text-gray-700 font-semibold flex items-center">
                      <FaGithub className="mr-2 text-gray-600" />
                      Github
                    </h6>
                    <span className="text-gray-500">{student.github}</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <h6 className="text-gray-700 font-semibold flex items-center">
                      <FaLinkedinIn className="mr-2 text-blue-500" />
                      LinkedIn
                    </h6>
                    <span className="text-gray-500">{student.linkedin}</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <h6 className="text-gray-700 font-semibold flex items-center">
                      <FaTwitter className="mr-2 text-blue-500" />
                      Twitter
                    </h6>
                    <span className="text-gray-500">{student.twitter}</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <h6 className="text-gray-700 font-semibold flex items-center">
                      <FaInstagram className="mr-2 text-red-500" />
                      Instagram
                    </h6>
                    <span className="text-gray-500">{student.instagram}</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <h6 className="text-gray-700 font-semibold flex items-center">
                      <FaFacebook className="mr-2 text-blue-600" />
                      Facebook
                    </h6>
                    <span className="text-gray-500">{student.facebook}</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
          <div className="col-span-1 md:col-span-3">
            <div className="card bg-white shadow-md rounded-md p-4 mb-4">
              <div className="card-body">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/4">
                    <h6 className="text-gray-700 font-semibold">Full Name</h6>
                  </div>
                  <div className="w-full md:w-3/4 text-gray-500">
                    {user?.name}
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/4">
                    <h6 className="text-gray-700 font-semibold">Email</h6>
                  </div>
                  <div className="w-full md:w-3/4 text-gray-500">
                    {user?.email}
                  </div>
                </div>
                <hr className="my-4" />
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/4">
                    <h6 className="text-gray-700 font-semibold">Whatsapp</h6>
                  </div>
                  <div className="w-full md:w-3/4 text-gray-500">
                    {user?.phone}
                  </div>
                </div>

                <hr className="my-4" />
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/4">
                    <h6 className="text-gray-700 font-semibold">Address</h6>
                  </div>
                  <div className="w-full md:w-3/4 text-gray-500">
                    {user?.address}
                  </div>
                </div>
                <hr className="my-3" />
                <div className="flex">
                  <a
                    className="btn bg-blue-500 text-white py-2 px-4 rounded-md"
                    onClick={UpdateProfile}
                  >
                    Update Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card bg-white shadow-md rounded-md p-4 h-full">
                <div className="card-body">
                  <h6 className="flex items-center mb-3">
                    <i className="material-icons text-blue-500 mr-2">
                      assignment
                    </i>
                    Project Status
                  </h6>
                  <div className="mb-3">
                    <small>Web Design</small>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <small>Website Markup</small>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "72%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <small>One Page</small>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "89%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <small>Mobile Template</small>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "55%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <small>Backend API</small>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "66%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card bg-white shadow-md rounded-md p-4 h-full">
                <div className="card-body">
                  <h6 className="flex items-center mb-3">
                    <i className="material-icons text-blue-500 mr-2">
                      assignment
                    </i>
                    Project Status
                  </h6>
                  <div className="mb-3">
                    <small>Web Design</small>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <small>Website Markup</small>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "72%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <small>One Page</small>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "89%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <small>Mobile Template</small>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "55%" }}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <small>Backend API</small>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: "66%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UpdateUserDetail
        isOpen={isOpen}
        toggleModal={toggleModal}
        user={user}
        setUser={setUser}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default StudentCards;
