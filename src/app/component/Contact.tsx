import React from 'react';

import { MdMail} from 'react-icons/md'; // Importing icons
import { FaSquareBehance } from 'react-icons/fa6'; // Importing icons
import { FaLinkedin } from "react-icons/fa6"; // Importing icons

const Contact = () => {
  return (
    <div className="container mx-auto pt-32 px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-start justify-between">
      
      {/* Left Section: Text Content and Social Media */}
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h3 className="text-xl mb-4 font-medium">Contact</h3>
        <h1 className="text-4xl font-medium mb-6">
          Get in <span className="text-yellow-400">touch</span>
        </h1>


        {/* Social Media Links */}

        {/* Email Icons */}
        <div className="flex space-x-4 mt-4">
          <MdMail size={24}/>
          <span>laibaashfaqahmed232@gmail.com</span>
          </div>


          {/* LinkedIn Icon */}
          <div className="flex space-x-4 mt-4">
          <FaLinkedin size={24}/>
          <span>Laiba Ashfaq Ahmed</span>
          </div>


          {/* Behance Icon */}
          <div className="flex space-x-4 mt-4">
          <FaSquareBehance size={24}/>
          <span>laibaashfaq22</span>

        
        </div>
      </div>

      {/* Right Section: Form */}
      <form className="space-y-6 lg:w-1/2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="h-[40px] bg-gray-100 border border-accent px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="h-[40px] bg-gray-100 border border-accent px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="msg" className="text-sm font-medium">Message</label>
          <textarea
            id="msg"
            name="message"
            rows={8}
            className="bg-gray-100 border border-accent px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div className="flex">
          <button
            type="submit"
            className="h-[40px] w-full bg-yellow-400 text-white font-medium rounded-md hover:bg-yellow-500 transition"
          >
            Send
          </button>
        </div>
      </form>

    </div>
  );
};

export default Contact;

