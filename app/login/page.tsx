"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../components/button/Button";

const images = ["/land2.jpg", "/land1.jpg", "/land2.jpg"];

interface User {
  email: string;
  password: string;
}

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [currentImage, setCurrentImage] = useState(0);
  const router = useRouter();

  const handleLogin = () => {
    if (typeof window !== "undefined") {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

      const isValid = users.some(
        (cred) => cred.email === form.email && cred.password === form.password
      );

      if (isValid) {
        router.push("/student");
      } else {
        alert("Invalid email or password");
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
              <h1 className="text-white text-2xl font-bold">Quran Academy</h1>
              <button className="text-white text-sm bg-white/20 px-3 py-1 rounded-full">
                <a href="/"> Back to website →</a>
              </button>
            </div>
            <div className="text-white text-xl font-light mb-10">
              Welcome Back,
              <br /> Continue Your Journey
            </div>
            <div className="flex space-x-2 justify-center pb-2">
              {images.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                    index === currentImage ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-white text-3xl font-semibold mb-2">
            Log in to your account
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Don't have an account?{" "}
            <a href="/" className="text-white underline">
              Contact us
            </a>
          </p>

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            autoComplete="off"
            className="w-full mb-4 bg-gray-800 text-white px-4 py-2 rounded-md outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            autoComplete="off"
            className="w-full mb-4 bg-gray-800 text-white px-4 py-2 rounded-md outline-none"
          />

          <Button
            onClick={handleLogin}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md mb-4"
          >
            Log in
          </Button>

          <div className="text-center text-white mb-4">Or log in with</div>

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
