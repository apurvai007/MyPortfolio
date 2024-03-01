"use client";
import Image from "next/image";
import Head from "next/head";

import { motion } from "framer-motion";
import { AboutCard, BirthdayCard, EmailCard ,GithubCard } from "@/components";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -2000 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100, duration: 1 }}
        transition={{ duration: 2.5, delay: 0.5, type: "spring" }}
        className="flex flex-col m-5"
      >
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-4 my-5 container mx-auto xl:px-20">
          <AboutCard />
          <BirthdayCard />
          <EmailCard/>
          <GithubCard />
          {/* <ThemeCard />
          <BirthdayCard />
          <LinkedinCard />
          <ProjectsCard />
          <ExpCard />
          
          <Skills />
  
          <EmailCard />
          <TwitterCard /> */}
        </div>
      </motion.div>
    </>
  );
}
