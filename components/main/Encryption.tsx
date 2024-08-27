"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div id="about-me" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        variants={slideInFromTop}
        className="text-center font-medium text-gray-200 mb-12 md:mb-36"
      >
        <div className="text-[24px] md:text-[40px] font-bold cursive bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          About Me
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          My Expertise
        </div>
      </motion.div>
      
      <div className="relative w-auto mb-12">
        <div className="flex flex-col items-center group">
          <Image
            src="/LockTop.png"
            alt="lock-top"
            width={50}
            height={50}
            className="transition-transform duration-200 group-hover:translate-y-4"
          />
          <Image
            src="/LockMain.png"
            alt="lock-main"
            width={50}
            height={50}
            className="z-10 mt-[-25px]"
          />
        </div>
        <div className="px-4 py-2 border border-[#7042f88b] opacity-90 bg-gray-800 text-gray-300 rounded-md mt-6">
          <h1 className="text-sm md:text-base font-bold">Experience & Expertise</h1>
        </div>
      </div>
      
      <div className="text-center font-medium text-gray-300 px-4 md:px-8 w-full max-w-3xl">
        <div className="text-[16px] md:text-[18px] font-bold cursive bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Welcome to my corner of the web!
        </div>
        <p className="mt-4">
          I am a passionate Front-End Developer with a knack for turning creative ideas into visually
          stunning and user-friendly digital experiences. With years of hands-on experience in the
          industry, I&apos;ve honed my skills to deliver exceptional web solutions that blend form and
          function seamlessly.
        </p>
        <p className="mt-4">
          Over the years, I&apos;ve collaborated with diverse clients—from startups to established
          enterprises—delivering bespoke web solutions that meet their unique needs. My experience
          includes:
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Project Management:</span>
            Leading front-end development projects from conception through deployment, ensuring timely and high-quality delivery.
          </li>
          <li>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Design Collaboration:</span>
            Working closely with designers to translate their vision into pixel-perfect reality while maintaining a focus on usability and performance.
          </li>
          <li>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Performance Optimization:</span>
            Enhancing web applications to load faster and run smoother, resulting in improved user satisfaction and engagement.
          </li>
          <li>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Accessibility:</span>
            Implementing best practices to make digital content accessible to all users, regardless of their abilities.
          </li>
        </ul>
      </div>

      <div className="absolute inset-0 z-[-1]">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="w-full h-full object-cover"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
