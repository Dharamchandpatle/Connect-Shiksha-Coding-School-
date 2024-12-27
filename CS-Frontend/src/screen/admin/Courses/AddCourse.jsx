import React, { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { postRequest } from "../../../services/requests";
const MySwal = withReactContent(Swal);

const AddCourses = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [introVideo, setIntroVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errors, setErrors] = useState({});
  const baseurl = "your_base_url_here";

  const handleFileChange = (setter) => (e) => {
    setter(e.target.files[0]);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!price.trim()) {
      newErrors.price = "Price is required";
    }
    if (!description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!duration.trim()) {
      newErrors.duration = "Duration is required";
    }
    if (!title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!image) {
      newErrors.image = "Image is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();

    formData.append("description", description);
    formData.append("price", price);
    formData.append("duration", duration);
    formData.append("title", title);
    formData.append("introVideo", introVideo);
    if (image) {
      formData.append("file", image);
    }

    try {
      setUploading(true);

      const res = await postRequest(
        "/admin/createCourse",
        formData,
        "admin",
        true
      ).then((response) => {
        if (response.status) {
          Swal.fire({ icon: "success", title: "Course added successfully" });
          setName("");
          setPrice("");
          setDescription("");
          setCategory("");
          setDuration("");
          setTitle("");
          setImage(null);
          setIntroVideo("");
        } else {
          Swal.fire({ icon: "error", title: response.message });
        }
      });
    } catch (error) {
      toast.error("An error occurred while adding the course.");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="bg-white shadow-sm shadow-color-red p-10 md:w-1/2 lg:w-full mx-auto rounded">
        <h1 className="text-2xl font-bold mb-10 text-center font-hobo text-color-red">
          Add Course
        </h1>
        <form className="w-full mx-auto" onSubmit={SubmitHandler}>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="price"
                className={`block mb-2 text-sm font-medium ${
                  errors.price ? "text-red-500" : ""
                }`}
              >
                Price <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                name="price"
                className={`block w-full p-2 text-gray-900 border-2 border-gray-700 rounded-lg bg-gray-50 text-base focus:ring-color-red focus:border-color-red ${
                  errors.price ? "border-red-500" : ""
                }`}
                placeholder=""
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                required
              />
              {errors.price && (
                <p className="text-red-500 mt-1">{errors.price}</p>
              )}
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="description"
              className={`block mb-2 text-sm font-medium ${
                errors.description ? "text-red-500" : ""
              }`}
            >
              Description <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              name="description"
              className={`block w-full p-2 text-gray-900 border-2 border-gray-700 rounded-lg bg-gray-50 text-base focus:ring-color-red focus:border-color-red ${
                errors.description ? "border-red-500" : ""
              }`}
              placeholder=""
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
            {errors.description && (
              <p className="text-red-500 mt-1">{errors.description}</p>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="duration"
              className={`block mb-2 text-sm font-medium ${
                errors.duration ? "text-red-500" : ""
              }`}
            >
              Duration (months) <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="duration"
              className={`block w-full p-2 text-gray-900 border-2 border-gray-700 rounded-lg bg-gray-50 text-base focus:ring-color-red focus:border-color-red ${
                errors.duration ? "border-red-500" : ""
              }`}
              placeholder=""
              onChange={(e) => setDuration(e.target.value)}
              value={duration}
              required
            />
            {errors.duration && (
              <p className="text-red-500 mt-1">{errors.duration}</p>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="title"
              className={`block mb-2 text-sm font-medium ${
                errors.title ? "text-red-500" : ""
              }`}
            >
              Title <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="title"
              className={`block w-full p-2 text-gray-900 border-2 border-gray-700 rounded-lg bg-gray-50 text-base focus:ring-color-red focus:border-color-red ${
                errors.title ? "border-red-500" : ""
              }`}
              placeholder=""
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
            {errors.title && (
              <p className="text-red-500 mt-1">{errors.title}</p>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="introVideo"
              className={`block mb-2 text-sm font-medium ${
                errors.introVideo ? "text-red-500" : ""
              }`}
            >
              Intro Video <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              name="introVideo"
              className={`block w-full text-sm text-gray-900 border-2 border-gray-700 rounded-lg cursor-pointer bg-gray-50 ${
                errors.introVideo ? "border-red-500" : ""
              }`}
              onChange={(e) => setIntroVideo(e.target.value)}
              value={introVideo}
            />
            {errors.introVideo && (
              <p className="text-red-500 mt-1">{errors.introVideo}</p>
            )}
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <label
              htmlFor="courseImage"
              className={`block mb-2 text-sm font-medium ${
                errors.image ? "text-red-500" : ""
              }`}
            >
              Course Image <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="file"
              name="courseImage"
              className={`block w-full text-sm text-gray-900 border-2 border-gray-700 rounded-lg cursor-pointer bg-gray-50 ${
                errors.image ? "border-red-500" : ""
              }`}
              aria-describedby="courseImage_help"
              id="courseImage"
              onChange={handleFileChange(setImage)}
              accept="image/*"
              required
            />
            {errors.image && (
              <p className="text-red-500 mt-1">{errors.image}</p>
            )}
          </div>
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-red-500 text-white px-10 py-2 rounded-full font-hobo hover:shadow-sm"
            >
              {uploading ? "Uploading..." : "Add Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourses;
