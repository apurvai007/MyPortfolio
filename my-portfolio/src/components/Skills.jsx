import React from "react";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiCsharp,
} from "react-icons/si";
import { DiDotnet, DiGithub } from "react-icons/di";
import styles from "@/styles/Skills.module.css"; // Import CSS module for styling

export default function Skills() {
  return (
    <div className={`relative`}>
      <div className={`grid grid-cols-4 place-content-center place-items-center gap-3 md:gap-8 p-4 md:p-8 bg-[#ff8e329c] dark:bg-[#ffad7756] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm text-lg md:text-xl lg:text-5xl text-center text-[#ffffffde]`}>
        <div className={styles.skill}>
          <DiDotnet className={styles.icon} />
          <span className={styles.name}>ASP.NET</span>
        </div>
        <div className={styles.skill}>
          <SiCsharp className={styles.icon} />
          <span className={styles.name}>C#</span>
        </div>
        <div className={styles.skill}>
          <SiHtml5 className={styles.icon} />
          <span className={styles.name}>HTML5</span>
        </div>
        <div className={styles.skill}>
          <SiCss3 className={styles.icon} />
          <span className={styles.name}>CSS3</span>
        </div>
        <div className={styles.skill}>
          <SiJavascript className={styles.icon} />
          <span className={styles.name}>JavaScript</span>
        </div>
        <div className={styles.skill}>
          <SiReact className={styles.icon} />
          <span className={styles.name}>React</span>
        </div>
        <div className={styles.skill}>
          <SiGit className={styles.icon} />
          <span className={styles.name}>Git</span>
        </div>
        <div className={styles.skill}>
          <DiGithub className={styles.icon} />
          <span className={styles.name}>GitHub</span>
        </div>
      </div>
      <span className={`absolute top-0 left-1/2 transform -translate-x-1/2 text-xs md:text-xl uppercase font-semibold text-center text-white ${styles.skills}`}>
        SKILLS
      </span>
    </div>
  );
}
