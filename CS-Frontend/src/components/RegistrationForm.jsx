import React, { useState } from "react";
// importing http requests
import { registerRequest } from "../services/requests";
import requestsEndpoint from "../services/requestsEndpoint";
import sweetAlert from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    // Basic validation
    if (!name || !phone || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      // Mock API call
      const data = { name, phone, email, password };
      await registerRequest(requestsEndpoint.studentRegistration, data).then((response) => {
        if (response.status) {
          sweetAlert.fire({
            icon: 'success',
            title: 'Registration successful',
            text: 'You have been successfully registered',
          }).then(() => {
            navigate("/login");
          });
          setEmail("");
          setName("");
          setPhone("");
          setPassword("");
        } else {
          setError("Registration failed. Please try again.");
        }

      });

      console.log("Registration successful");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };



  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
          Register
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-lg rounded-lg border"
        >
          <div className="flex flex-col gap-4 p-4 md:p-8">
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div>
              <label
                htmlFor="name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
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
            <div>
              <label
                htmlFor="password"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-blue-300 transition duration-100 focus:ring"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
            >
              Register
            </button>
            <div className="relative flex items-center justify-center">
              <span className="absolute inset-x-0 h-px bg-gray-300"></span>
              <span className="relative bg-white px-4 text-sm text-gray-400">
                Or register with Google
              </span>
            </div>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
            >
              <svg
                className="h-5 w-5 shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                  fill="#34A853"
                />
                <path
                  d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
          </div>
          <div className="flex items-center justify-center bg-gray-100 p-4">
            <p className="text-center text-gray-500">
              Already have an account?{" "}
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

export default RegistrationForm;