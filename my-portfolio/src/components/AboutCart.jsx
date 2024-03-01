import React from "react";
import styles from "@/styles/AboutCard.module.css"
import Image from "next/image";
import me from "@/assets/images/me3.png";

export default function AboutCard() {
  return (
    <div className="relative col-span-3 aspect-square md:aspect-auto md:row-span-2 bg-[#1c053a9c] dark:bg-[#af72ff56] rounded-3xl overflow-hidden">
      <div className={styles.water}></div>
      <Image
        src={me}
        alt="Apurva Mathur"
        className="absolute bottom-0 -right-1/4 w-8/12 md:h-full md:auto object-cover -z-0 hidden md:flex"
        width="512"
        height="512"
        draggable="false"
        placeholder="blur"
        loading="eager"
        priority
      />
      <div className="h-full md:w-8/12 absolute top-0 left-0 p-4 md:p-8 flex flex-col justify-start  md:justify-end">
        <h1 className="text-3xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5">
          👋 {"Hi, I'm"} Apurva Mathur
        </h1>
        <p className="text-md md:text-lg lg:text-2xl text-white">
            I am a <b>Software Engineer </b> with experience in <b>Dotnet/C#</b>
            . I&apos;m good at <b>Backend developent with C#</b> and{" "}
            <b>Web APIs</b>, as well as <b>JavaScript</b>. I love learning new
            things and experimenting with new technologies. I have a good eye
            for details and I always put my all into my work.
        </p>
      </div>
    </div>
  );
}
