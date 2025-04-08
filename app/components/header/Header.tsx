import Image from "next/image";
import { Button } from "../button/Button";

export default function Header() {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-12 bg-white text-gray-800"
      style={{
        backgroundImage: "url('/10997.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "-60px",

      }}
    >
      <div className="lg:w-1/2 w-full space-y-6 text-center lg:text-left">
        <div className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">
          Learn Quran with Clarity and Discipline
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Connect with the Quran{" "}
          <span className="text-orange-600">Anytime</span> Anywhere
        </h1>
        <p className="text-white text-base md:text-lg">
          With the Right Teacher and Structure, Learning Quran Becomes Easy and
          Rewarding — Join Our Trusted Online Platform Today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button className="bg-orange-600 hover:bg-blue-100 cursor-pointer text-white px-6 py-3">
            Join Now
          </Button>
        </div>
        <div className="flex items-center gap-6 pt-6 justify-center lg:justify-start text-gray-400"></div>
      </div>

      <div className="lg:w-1/2 w-full flex justify-center mb-10 lg:mb-0">
        <Image
          src="/main1.png"
          alt="Smiling woman"
          width={500}
          height={500}
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
}
