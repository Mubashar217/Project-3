"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../components/button/Button";

const images = ["/land1.jpg", "/land2.jpg", "/land2.jpg"];

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });

  const [currentImage, setCurrentImage] = useState(2);

  const handleSignup = () => {
    if (typeof window !== "undefined") {
      // Ensure the terms & conditions are agreed upon
      if (form.agree) {
        if (form.email && form.password) {
          const newUser = {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            password: form.password,
          };

          let users = JSON.parse(localStorage.getItem("users") || "[]");
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));

          alert("Account created successfully. You can now log in.");
        } else {
          alert("Please fill out all the required fields.");
        }
      } else {
        alert("Please agree to the terms and conditions.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-[#2a253a] rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-96 md:h-auto">
          <Image
            src={images[currentImage]}
            alt="Background"
            fill
            className="object-cover opacity-90 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-white text-2xl font-bold">Online Quran Academy</h1>
              <button className="text-white text-sm bg-white/20 px-3 py-1 rounded-full">
                <a href="/">Back to website →</a>
              </button>
            </div>
            <div className="text-white text-xl font-light mb-10">
              Capturing Moments,
              <br /> Creating Memories
            </div>
            <div className="flex space-x-2 justify-center pb-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all ${currentImage === index ? "bg-white" : "bg-white/30"}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-white text-3xl font-semibold mb-2">Admin Portal</h2>
          <p className="text-sm text-gray-400 mb-6">
            Already have an account?{" "}
            <a href="/login" className="text-white underline">
              Log in
            </a>
          </p>

          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              placeholder="First name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="w-1/2 bg-gray-800 text-white px-4 py-2 rounded-md outline-none"
            />
            <input
              type="text"
              placeholder="Last name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="w-1/2 bg-gray-800 text-white px-4 py-2 rounded-md outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full mb-4 bg-gray-800 text-white px-4 py-2 rounded-md outline-none"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full mb-4 bg-gray-800 text-white px-4 py-2 rounded-md outline-none"
          />

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="agree"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
              className="mr-2"
            />
            <label htmlFor="agree" className="text-sm text-white">
              I agree to the{" "}
              <a href="#" className="underline">
                Terms & Conditions
              </a>
            </label>
          </div>

          <Button
            onClick={handleSignup}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md mb-4"
          >
            Create account
          </Button>

          <div className="text-center text-white mb-4">Or register with</div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-white text-black py-2 rounded-md flex items-center justify-center">
              <Image
                src="/google2.png"
                width={40}
                height={40}
                alt="Google"
                className="mr-2"
              />{" "}
              Google
            </button>
            <button className="flex-1 bg-white text-black py-2 rounded-md flex items-center justify-center">
              <Image
                src="/apple.png"
                width={50}
                height={50}
                alt="Apple"
                className="mr-2"
              />{" "}
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
