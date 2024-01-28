import Link from "next/link";
import React from "react";
import { FaCalendarDays } from "react-icons/fa6";
import { ImMobile2 } from "react-icons/im";
import video from "@/assets/vedio.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="w-full md:h-[800px] h-[600px] bg-no-repeat bg-cover relative md:p-0 p-2"
      style={{
        backgroundImage: "url(https://i.ibb.co/yN1RdWV/banner-m-1.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-[#4AB7C3] bg-opacity-40"></div>
      <div className="absolute flex items-center w-full h-full">
        <div className="flex flex-col justify-between items-center md:flex-row container mx-auto">
          <div className="md:w-1/2 space-y-10 md:text-left text-center">
            <span className="font-semibold text-[#ffd863] bg-[#4AB7C3] px-4 py-1">
              WELCOME TO INSTANT SERVICE
            </span>
            <div className="text-white mt-4 md:mt-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                The temperature of cooling is in your hand.
              </h1>
              <p className="mt-2 text-black md:text-lg">
                Providing best-in-class air conditioning services to make your
                home cooler, more energy-efficient, and optimized for your
                comfort
              </p>
            </div>

            <div className="flex gap-6 items-center mt-6 justify-center md:justify-start">
              <button
                href="#_"
                className="relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 md:py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#f35748] rounded-lg group text-sm sm:text-base md:text-lg"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#4AB7C3] rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700 "></span>
                <span className="relative uppercase">Discover More</span>
              </button>

              <span className="relative flex h-10 w-10 mt-4 md:mt-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <Image src={video} alt="Picture of the author" />
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 text-white mt-6">
            <div className="flex gap-2 items-center bg-[#4AB7C3] px-4 py-2 rounded-lg h-20 w-[250px]">
              <FaCalendarDays className="text-3xl" />
              <div className="text-sm sm:text-base md:text-lg">
                <p>Get an Appointment</p>
                <h2 className="font-bold">Book Now</h2>
              </div>
            </div>
            <div className="flex gap-2 items-center bg-[#f35748] px-4 py-2 rounded-lg h-20 w-[250px]">
              <ImMobile2 className="text-3xl" />
              <div className="text-sm sm:text-base md:text-lg text-center">
                <p>Need Help? Call Us</p>
                <a href="tel:+8801835480233" className="font-bold">
                  +880 1835-480233
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
