import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    // Basic validation
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      // Mock API call
      await fakeApiCall({ email });
      setMessage(
        "If this email is registered, you will receive a password reset link."
      );
      navigate("/verify-otp");
    } catch (err) {
      setError("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Forget Password
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg rounded-lg border"
        >
          <div className="flex flex-col gap-4 p-4 md:p-8">
            {error && <p className="text-red-500 text-center">{error}</p>}
            {message && <p className="text-green-500 text-center">{message}</p>}
            <div>
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
            >
              Send OTP Code
            </button>
          </div>
          <div className="flex items-center justify-center bg-gray-100 p-4">
            <p className="text-center  text-gray-500">
              Remember your password?{" "}
              <a
                href="/login"
                className="text-blue-500 transition duration-100 hover:text-blue-600 active:text-blue-700"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
