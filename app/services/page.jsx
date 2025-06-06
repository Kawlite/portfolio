"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build responsive, high-performance websites using modern frameworks like Angular, React, Vue.js and Next.js. From interactive dashboards to user-friendly platforms, I focus on clean code, seamless navigation, and engaging experiences across all devices.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I create intuitive, accessible, and visually appealing interfaces that enhance user engagement. With tools like Figma, Adobe Photoshop/XD, and Illustrator, I turn complex ideas into user-centered designs that tell a story and drive interaction",
    href: "",
  },
  {
    num: "03",
    title: "Cloud Development/Deployment",
    description:
      "Certified and Skilled in deploying scalable applications using AWS (EC2, S3, RDS) and automating CI/CD pipelines with Jenkins and Docker. I ensure secure, reliable, and fault-tolerant systems — optimized for real-world performance and availability",
    href: "",
  },
  {
    num: "04",
    title: "LOGO Design",
    description:
      "Not an expert, but definitely passionate. I enjoy creating clean, eye-catching logos that reflect a brand’s vibe — whether it’s for a t-shirt graphic or company's logo. Oh! I designed logo for the RenaultNissan's EV lineup during my bachelor's , though they decided not to use it at the end, haha",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
