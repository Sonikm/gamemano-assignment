"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(username, email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen mt-10   ">
      <div className="bg-[#231F16] p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium  text-gray-300"
            >
              Username
            </label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
              className="mt-1 block w-full px-4 text-black py-2 border  rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium  text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
              className="mt-1 block w-full px-4 text-black py-2 border  rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300  "
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border text-black  rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-sm ">
          Already have an account?
          <Link href="/login" className="text-primary hover:underline">
            {" "}
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
