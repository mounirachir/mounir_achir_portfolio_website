import React from "react";
import { FaYoutube } from "react-icons/fa";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div
      id="footer"
      className=" w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]"
    >
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <div className="flex flex-col items-center my-[15px]">
              <a
                href="https://www.youtube.com/channel/UC1hVGE69n1a4aCXEzDYYyuA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center my-2 cursor-pointer"
              >
                <FaYoutube />
                <span className="text-[15px] ml-[6px]">Youtube</span>
              </a>
              <a
                href="https://github.com/mounirachir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center my-2 cursor-pointer"
              >
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </a>
            </div>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <div className="flex flex-col items-center my-[15px]">
              <a
                href="https://www.instagram.com/mounir___achir/"
                target="_blank"
                className="flex items-center my-2"
                style={{ cursor: "pointer" }}
              >
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mounir-achir-7375a7317/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center my-2 cursor-pointer"
              >
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </a>
            </div>
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
