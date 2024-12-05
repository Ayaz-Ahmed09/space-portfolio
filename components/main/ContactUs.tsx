"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoClose } from "react-icons/io5";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+923096194974", "_blank");
  };

  const handleGmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=ayazag960@gmail.com",
      "_blank"
    );
  };
  const handleLinkedIn = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=ayazag960@gmail.com",
      "_blank"
    );
  };

  return (
    <div>
      <div className="flex flex-row gap-2 space-x-2">
        <button
          onClick={handleOpenModal}
          className="bg-black text-white p-2 shadow-xl rounded hover:bg-blue-600 transition duration-300"
        >
          Want to Hire me
        </button>
        <button
          onClick={handleLinkedIn}
          className=" p-2 rounded bg-black text-white  shadow-xl hover:text-gray-600 transition duration-300"
        >
          No Just ask?
        </button>
      </div>
      {/* Modal with background blur */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg flex flex-col items-center shadow-lg relative">
            <button
              onClick={handleCloseModal}
              className="absolute ml-2 bg-black text-white  hover:text-gray-600"
            >
              <IoClose size={20} />
            </button>
            {/* <h2 className="text-2xl font-semibold mb-4">Contact Us</h2> */}
            <div className="flex space-x-6 bg-transparent">
              {/* WhatsApp icon */}
              <button
                onClick={handleWhatsAppClick}
                className="p-4 bg-green-500 rounded-full text-white hover:bg-green-600 transition duration-300"
              >
                <FaWhatsapp size={32} />
              </button>
              {/* Gmail icon */}
              <button
                onClick={handleGmailClick}
                className="p-4 bg-red-500 rounded-full text-white hover:bg-red-600 transition duration-300"
              >
                <SiGmail size={32} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
