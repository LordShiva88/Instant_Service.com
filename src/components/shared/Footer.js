import React from "react";
import {
  FaHome,
  FaEnvelope,
  FaBook,
  FaInfo,
  FaShoppingCart,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <div
      className="hero lg:h-[450px] h-[700px] mt-20 text-white"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/hmYmxqf/white-air-conditioner-bed-pastel-blue-background-control-air-conditioner-3d-render-576429-347.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="container mx-auto absolute">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
          <div>
            <span className="text-3xl block mb-4">About Instant Service</span>
            <p className="mb-4">
              Our company is reliable, and our work is trusted. We provide
              worry-free service you can always count on.
            </p>
            <SocialIcon />
          </div>

          <div>
            <span className="text-3xl block mb-4">Quick Links</span>
            <ul className="list-disc list-inside flex gap-10 text-xl">
              <div>
                <li className="flex items-center mb-2">
                  <FaHome className="mr-2" />
                  Home
                </li>
                <li className="flex items-center mb-2">
                  <FiMail className="mr-2" />
                  Contact
                </li>
                <li className="flex items-center mb-2">
                  <FaBook className="mr-2" />
                  Blogs
                </li>
              </div>
              <div>
                <li className="flex items-center mb-2">
                  <FaInfo className="mr-2" />
                  About
                </li>
                <li className="flex items-center mb-2">
                  <FaShoppingCart className="mr-2" />
                  Shop
                </li>
              </div>
            </ul>
          </div>

          <div>
            <span className="text-3xl block mb-4">Newsletter</span>
            <div className="relative flex bg-white px-4 py-2 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full outline-none bg-none"
              />
              <button className="btn btn-outline btn-sm">Subscribe Now</button>
            </div>
          </div>
        </div>
        <hr className="my-10 border-white" />
        <div className="text-center">
          <span>
            &copy; Instant Service {new Date().getFullYear()}. All Rights
            Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
