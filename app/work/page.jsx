"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Resilience Web Application -  SEL for K-12 students",
    title: "project 1",
    description:
      "Redesigned 'Resilience' web application UI for simplicity and elegance, focusing on intuitive navigation, clear visuals, and user-friendly experience.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }, { name: "Typescript" }, { name: "Figma" }],
    image: "/assets/work/Sel.png",
    live: "https://www.mylearningtools.org/",
    github: "",
  },
 {
    num: "02",
    category: "Gyrus – NEET Preparation Platform",
    title: "project 2",
    description:
      "Developed a comprehensive online platform for UG-NEET preparation, offering organized content across Physics, Chemistry, Botany, and Zoology. The application emphasizes fun-based learning, AI-powered analytics, and provides a vast question bank covering over 6 years of NEET questions with detailed explanations.",
    stack: [{ name: "Angular13" }, { name: "Javascript" }, { name: "Typescript" }, { name: "Adobe Photoshop/Illustrator" }],
    image: "/assets/work/gyru.png",
    live: "https://www.gyrusneet.com/",
    github: "",
  },

  {
    num: "03",
    category: "FiscalSenseAI – AI-Powered Financial Chat Assistant",
    title: "project 3",
    description:
      "Developed a responsive web application featuring an AI-driven chat assistant designed to provide users with real-time financial insights and guidance. The platform emphasizes intuitive user interaction and seamless access to fiscal information.",
    stack: [{ name: "HTML5" }, { name: "CSS" }, { name: "Angular13" }, { name: "Tailwind.css" }, { name: "Vue.js" }],
    image: "/assets/work/fai.png",
    live: "https://fsai-frontend.onrender.com/login",
    github: "",
  },

  { 
    num: "04",
    category: "CS Survey App – Full-Stack Student Feedback System",
    title: "project 4",
    description:
      "Developed a full-stack web application to gather and manage prospective student feedback, leveraging Angular, HTML, CSS and bootstarp for a dynamic UI. Utilized Spring Boot with API's for robust backend data handling, contributing to improved university engagement insights.",
    stack: [{ name: "Angular10" }, { name: "Typescript" }, { name: "Bootstrap" }, { name: "springboot" }, { name: "SQL" }],
    image: "/assets/work/CS.png",
    live: "https://growproin.com/",
    github: "https://github.com/Kawlite/Surveyproj",
},

  { 
    num: "05",
    category: "GrowProin – Easy Online Education Across All Ages",
    title: "project 5",
    description:
      "Revolutionizing the online learning platform aimed at delivering accessible, high-quality education for learners of all ages.",
    stack: [{ name: "HTML5" }, { name: "CSS" }, { name: "Angular13" }, { name: "Tailwind.css" }, { name: "Vue.js" }],
    image: "/assets/work/gp.png",
    live: "https://growproin.com/",
    github: "",
},
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} 
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                   <div className="h-[460px] group flex justify-center items-center bg-background border border-white/10 rounded-xl p-4">
  <div className="relative w-full h-full">
    <Image
      src={project.image}
      layout="responsive"
      width={700}
      height={460}
      className="object-contain"
      alt="Project screenshot"
    />
  </div>
</div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
