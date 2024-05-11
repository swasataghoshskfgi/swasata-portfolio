import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[430px] lgl:w-[470px] lgl:h-[680px] z-10 hover:cursor-pointer duration-1000"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[300px] h-[300px] lgl:w-[470px] lgl:h-[480px] bg-gradient-to-r from-[#0000FF] to-[#22cf0b] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner