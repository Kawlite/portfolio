"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "Enterprise Financial Management System",
    title: "Financial Services Platform",
    description:
      "Designed and developed scalable full-stack financial applications using Java, Spring Boot, and React. Implemented secure REST APIs, optimized database queries, and improved application performance for enterprise-grade transaction systems.",
    stack: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "React.js" },
      { name: "Hibernate" },
      { name: "Oracle" },
      { name: "AWS" },
    ],
    image: "/assets/work/finance.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Microservices-Based Order Processing System",
    title: "Microservices Architecture",
    description:
      "Built distributed microservices using Spring Boot and Spring Cloud, enabling secure inter-service communication and scalable deployment. Containerized services with Docker and orchestrated using Kubernetes.",
    stack: [
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "Microservices" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Jenkins" },
    ],
    image: "/assets/work/microservices.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Cloud-Native CI/CD Deployment Pipeline",
    title: "DevOps Automation",
    description:
      "Implemented automated CI/CD pipelines using Jenkins, Git, and Docker to streamline build, test, and deployment workflows. Deployed cloud-native applications on AWS (EC2, S3, RDS) ensuring high availability and reliability.",
    stack: [
      { name: "AWS" },
      { name: "Jenkins" },
      { name: "Docker" },
      { name: "Git" },
      { name: "Spring Boot" },
    ],
    image: "/assets/work/devops.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Student Feedback & Analytics System",
    title: "Full-Stack Survey Application",
    description:
      "Developed a full-stack web application using Angular and Spring Boot to manage student feedback and analytics. Integrated REST APIs, implemented authentication, and optimized database queries for improved performance.",
    stack: [
      { name: "Angular" },
      { name: "Spring Boot" },
      { name: "MySQL" },
      { name: "REST API" },
      { name: "JWT" },
    ],
    image: "/assets/work/survey.png",
    live: "",
    github: "https://github.com/Kawlite/Surveyproj",
  },
  {
    num: "05",
    category: "Database Optimization & Performance Tuning",
    title: "High-Performance Data Management",
    description:
      "Enhanced application performance by optimizing SQL queries, indexing strategies, ORM mappings, and caching mechanisms. Improved response times and reduced latency for high-volume enterprise data systems.",
    stack: [
      { name: "PostgreSQL" },
      { name: "Oracle" },
      { name: "MongoDB" },
      { name: "JPA" },
      { name: "Caching" },
    ],
    image: "/assets/work/database.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  return (
    <motion.div
      className="min-h-screen py-12 px-6 bg-[#1b1b1f]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
    >
      <h1 className="text-5xl font-bold text-center text-white mb-12">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-[#232329] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-full h-[200px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 flex flex-col gap-3 flex-1">
              <span className="text-accent font-bold">{project.num}</span>
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-white/70 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-accent/20 text-accent text-xs px-2 py-1 rounded"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;