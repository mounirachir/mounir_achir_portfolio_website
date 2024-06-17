import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Community</div>
            <p className="flex flex-col items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px] m-2">Youtube</span>
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]  m-2">Github</span>
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]  m-2">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">Social Media</div>
            <p className="flex flex-col items-center my-[15px] cursor-pointer">
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]  m-2">Instagram</span>
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]  m-2">Twitter</span>
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]  m-2">LinkedIn</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px] ">About</div>
            <p className="flex flex-col items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]  m-2">
                Become a sponsor
              </span>

              <span className="text-[15px] ml-[6px]  m-2">Learn about me</span>

              <span className="text-[15px] ml-[6px]  m-2">
                mistamounir02@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-center text-[15px]">
          &copy; MounirAchir 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
