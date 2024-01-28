import SocialIcon from "@/components/shared/SocialIcon";
import React from "react";
import { MdOutlinePhoneCallback, MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const HomeAdress = () => {
  return (
    <div className="md:flex justify-around text-black bg-[#ffd863] font-semibold items-center p-2 hidden">
      <div className="flex items-center gap-2">
        <MdOutlineMailOutline className="text-2xl"/>
        <a href="mailto:instantservices26@gmail.com">instantservices26@gmail.com</a>
      </div>
      <div className="flex items-center gap-2">
        <CiLocationOn className="text-2xl"/>
        <p>Agrabad, Chittagong, Bangladesh</p>
      </div>
      <div>
        <SocialIcon />
      </div>
    </div>
  );
};

export default HomeAdress;
