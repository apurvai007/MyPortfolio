// ExpCard.js
import React, { useState } from "react";
import moment from "moment";
import { CountUp } from "use-count-up";
import styles from "@/styles/ExpCard.module.css";
import cimpress from "../assets/images/cimpress.svg";
import Image from "next/image";
import { MdOpenInNew } from "react-icons/md";

export default function ExpCard() {
  const [isHovered, setIsHovered] = useState(false);
  const getExp = () => {
    let years = moment().diff(moment([2022, 1, 1]), "years");
    return years;
  };

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`${styles.expCard} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="flex justify-center items-center flex-col">
        {isHovered ? (
          <div className="w-32 md:w-32 relative">
            <a
              href="https://www.linkedin.com/company/cimpress-india"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 md:w-32 relative"
            >
              <Image
                src={cimpress}
                alt="Cimpress (company logo)"
                className="object-cover w-full h-auto transform scale-150"
              />
              <MdOpenInNew className="absolute top-0 right-0 mt-1 mr-4 md:mt-2 md:mr-4 text-xl text-white dark:text-[#ffffffaa]" />
            </a>
          </div>
        ) : (
          <p className="text-4xl md:text-8xl font-bold">
            <CountUp isCounting end={getExp()} duration={2} />+
          </p>
        )}
        <p className="text-xs md:text-xl uppercase font-semibold text-center">
          {isHovered ? "Worked here" : "Years of"}
        </p>
        <p className="text-xs md:text-xl uppercase font-semibold text-center">
          {isHovered ? "As a software Engineer" : "Work experience"}
        </p>
      </div>
    </div>
  );
}
