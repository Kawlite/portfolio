"use client";

import Image from "next/image";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title:
    "Whats am I more than a Front-end developer?  — I’m a storyteller who brings technology to life through design",
  description:
    "My philosophy? Every pixel has a purpose, and every interface should feel like a conversation.If you aren't able to find me in front of my PC, come find me at the gym refreshing my mind.",
  info: [
    { fieldName: "Name", fieldValue: "Kaushik Balakesavalu" },
    { fieldName: "Phone", fieldValue: "(+1) 571 373 6466" },
    { fieldName: "Experience", fieldValue: "2.5+ Years" },
    { fieldName: "Discord", fieldValue: "leonide_7" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "kaushik.2000r7@gmail.com" },
    {
      fieldName: "Current Company",
      fieldValue: "Activley looking for Web Developer roles",
    },
    {
      fieldName: "Languages",
      fieldValue:
        "English, Regional( Indian- Tamil, Telugu, Hindi, Kannada )",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Front-End Developer with full-stack capabality. Experinced in building responsive and user-friendly applications using Angular, HTML/CSS/JS/TS, Figma, Adobe Photoshop/Illustartor and modern Web technologies. Skilled in UI/UX design, Web Development , Cloud Deployment, and CI/CD pipelines, with a keen eye for detail and usability.",
  items: [
    {
      company: "Resilience Inc. – Tampa, FL",
      position: "Web Developer",
      duration: "May 2024 – Aug 2024",
    },
    {
      company: "Yourbackers Inc",
      position: "Software Developer-FrontEnd",
      duration: "September 2020 – Nov 2022",
    },
    {
      company: "George Mason University - Computing College",
      position: "Graduate Teaching Assistant",
      duration: "Dec 2023 - Dec 2024",
    },
    {
      company: "GrowProIn - Startup",
      position: "Founding Member/Partner",
      duration: "2023 - Present",
    },
    {
      company: "Gyrus ",
      position: "Freelance Developer",
      duration: "Summer 2022",
    },
    {
      company: "Amazon Academy",
      position: "Certified Cloud Solutions Architect",
      duration: "Summer 2024",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Graduate-level and Undergraduate education in Computer Science with a focus on Web development, UI/UX design, cloud computing, and modern software engineering practices.",
  items: [
    {
      institution: "George Mason University",
      degree: "M.S. in Computer Science ",
      duration: "2-years",
    },
    {
      institution: "Anna University - LICET",
      degree: "Bachelors in Computer Science",
      duration: "4-years",
    },
    {
      institution: "AWS academy",
      degree: "Certified Cloud Solutions Architect ",
      duration: "4-Mos",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: "/assets/resume/icons/typescript.svg", name: "TypeScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
    { icon: <SiAdobeillustrator />, name: "Adobe Illustrator" },
    { icon: "/assets/resume/icons/aws.svg", name: "AWS" },
    { icon: "/assets/resume/icons/docker.svg", name: "Docker" },
    { icon: "/assets/resume/icons/kubernetes.svg", name: "Kubernetes" },
    
    { icon: "/assets/resume/icons/jenkins.svg", name: "Jenkins" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            {typeof skill.icon === "string" ? (
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={60}
                                height={60}
                                className="group-hover:scale-110 transition-all duration-300"
                              />
                            ) : skill.icon ? (
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            ) : (
                              <div className="text-xl font-bold text-white group-hover:text-accent transition-all duration-300">
                                {skill.name}
                              </div>
                            )}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
