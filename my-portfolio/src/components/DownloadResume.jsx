import React from "react";
import { MdOpenInNew } from "react-icons/md";
import { FaGoogleDrive } from "react-icons/fa";

//import Resume from "@/assets/Resume3.pdf";

export default function DownloadResume() {
  return (
    <a
      href="https://drive.google.com/file/d/16mal2QpH9j8wqFbUPZoIwLl91LM9PEyJ/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Resume"
      className="flex flex-col justify-center items-center bg-[#4032ff9c] dark:bg-[#7785ff56] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm cursor-pointer hover:scale-[103%] transition duration-300 ease-in-out"
    >
      <MdOpenInNew className="absolute right-4 bottom-4 top-auto md:right-8 md:top-8 text-xl text-white dark:text-[#ffffffaa]" />
      <FaGoogleDrive className="text-4xl md:text-7xl lg:text-9xl text-white dark:text-[#ffffffaa]" />
      <h2 className="text-white text-sm md:text-xl lg:text-3xl font-bold">
        Resume
      </h2>
    </a>
  );
}
