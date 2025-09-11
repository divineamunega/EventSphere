import React from "react";
import { PartyPopper } from "lucide-react";
import Button from "../ui/Button";
import LiquidEther from "../ui/LiquidEther";
const HeroSection = function () {
  return (
    <>
      <section className="text-white bg-transparent flex flex-col pt-20 md:flex-row px-4 md:px-20 justify-between items-center">
        <div className="flex flex-col gap-5 py-10 md:py-30 w-full md:w-1/2">
          <div className="flex items-center">
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
          </div>{" "}
          <h1 className="text-4xl md:text-7xl font-bold">
            Engage in <br />
            <span className="bg-gray-500 bg-clip-text text-transparent">
              Campus Life.
            </span>
          </h1>
          <p className="text-white font-medium w-full md:w-2/3 text-base md:text-lg">
            The central hub for all things campus. Find events, register, and
            get your certificates—seamlessly.
          </p>
          <Button>Create your first event</Button>
        </div>
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden pt-6 md:pt-10 mt-8 md:mt-0">
          <video
            src="/landing.webm"
            className="w-full h-48 md:h-full object-cover"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
