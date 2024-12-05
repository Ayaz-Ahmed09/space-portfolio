"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import ContactUs from "@/components/main/ContactUs";
import { MdClose } from "react-icons/md"; // Import ContactUs component

const HeroContent = () => {
  const [isClient, setIsClient] = useState(false);
  const [isContactUsOpen, setIsContactUsOpen] = useState(false); // State for modal

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Render nothing until client-side to prevent hydration issues
  if (!isClient) {
    return null;
  }

  const openContactUs = () => {
    setIsContactUsOpen(true); // Show ContactUs modal
  };

  const closeContactUs = () => {
    setIsContactUsOpen(false); // Hide ContactUs modal
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start p-4">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Front-end developer portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m passionate and experienced front-end developer dedicated to
          crafting visually stunning and highly functional web experiences. With
          a strong foundation, I bring a blend of technical skill and creative
          vision to every project.
        </motion.p>
        <div className="gap-6 flex ">
          {/* <motion.a
            {/* variants={slideInFromLeft(1)} */}
          {/* className="px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]" */}
          {/* > */}
          {/* Learn More!! */}
          {/* </motion.a> */} */
          <motion.a
            href="/IMG_2786[1].pdf"
            variants={slideInFromLeft(0.8)}
            className="px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            My Resume.
          </motion.a>
          {/* Button to open Contact Us modal */}
          <motion.a
            onClick={openContactUs}
            variants={slideInFromLeft(1.3)}
            className="px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work-icons"
          height={650}
          width={650}
          priority
        />
      </motion.div>

      {/* Modal for Contact Us */}
      {isContactUsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ">
          <div
            className=" bg-gradient-to-t p-10 rounded-md w-[500px] max-w-[90%] 
            "
            style={{
              backgroundImage:
                "linear-gradient(to top, rgba(60, 8, 126, 0) 0%, rgba(60, 8, 126, 0.32) 100%), rgba(113, 47, 255, 0.12)",
            }}
          >
            <ContactUs /> {/* Render the ContactUs component */}
            <div className="flex justify-center mt-4">
              <button
                onClick={closeContactUs}
                className="flex items-center justify-center text-md font-bold text-gray-600 hover:text-[#f44336] p-2 rounded-full transition-colors"
              >
                <MdClose className="text-md" /> {/* Render the MdClose icon */}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Blur effect on the page when modal is open */}
      {isContactUsOpen && (
        <div className="fixed inset-0 backdrop-blur-xl opacity-69 z-20" />
      )}
    </motion.div>
  );
};

export default HeroContent;
