import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  PartyPopper,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1E1F2E] via-[#1A1B1B] to-[#2B2426] text-white py-16 px-4 md:px-20">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Background Blur and Border */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl z-0"></div>
        <div className="relative z-10 p-8 md:p-12 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <div className="font-bold text-2xl md:text-3xl text-gray-400">
                  eventsphere
                </div>
                <PartyPopper
                  size={16}
                  strokeWidth={2}
                  color="gray"
                  className="inline-block ml-2"
                  fill="grey"
                />
              </div>
              <p className="text-gray-300 mt-4">
                Revolutionizing campus life, one event at a time.
              </p>
            </div>
            {/* Change: The social icons now use less space on mobile (`space-x-4`)
              and more space on larger screens (`md:space-x-6`). 
            */}
            <div className="flex space-x-4 md:space-x-6">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-400 transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-purple-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="h-px bg-white/20 my-6"></div>
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2025 EventSphere. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
