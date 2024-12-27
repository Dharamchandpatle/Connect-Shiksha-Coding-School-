import React, { useState } from "react";

const OtpVerificationForm = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    // Basic validation
    if (!otp) {
      setError("Please fill out all fields.");
      return;
    }

    // Mock API call to verify OTP
    try {
      await fakeApiCall({ otp });
      setMessage("OTP verified successfully.");
    } catch (err) {
      setError("OTP verification failed. Please try again.");
    }
  };

  // Mock API call function
  const fakeApiCall = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock response based on provided OTP and email
        if (data.otp === "8273") {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Verify OTP
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
                htmlFor="otp"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                OTP
              </label>
              <input
                type="text"
                name="otp"
                id="otp"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerificationForm;
