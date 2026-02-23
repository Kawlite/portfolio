"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";

// Assuming you have these components set up
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="h-full relative">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Developerr</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Kaushik</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
             Turning complex business requirements into scalable, secure, and high-performance applications.
Bringing ideas to life through modern full-stack development and cloud-native architecture.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Resume button triggers modal */}
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={() => setShowModal(true)}
              >
                <span>My Resume</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white w-[95%] max-w-5xl rounded-lg shadow-lg overflow-hidden relative">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-1 text-black text-l hover:text-red-600"
            >
              ✕
            </button>

            {/* Embedded PDF */}
            <iframe
              src="/resume.pdf"
              width="100%"
              height="900px"
              className="rounded-b-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
