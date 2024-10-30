import React from "react";
import Image from "next/image";
import Link from "next/link";

import TextInput from "../textInput";

import { Logo } from "@/public";
import { strings, socialLinks, navLinks, others } from "@/utils";

const Footer = () => {
  return (
    <footer className="bg-color-5 px-[16px] py-[60px] text-white md:px-[108px] md:py-[100px]">
      <div className="lg:px-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="flex items-center space-x-3 md:h-[60px] md:w-[60px]">
              <div className="rounded-[12px] bg-white px-[11.79px] py-[6px]">
                <Logo />
              </div>
            </div>
            <p className="mr-[50px] mt-[10px] text-[16px] text-border lg:text-base">{strings["footerDescription"]}</p>
            <div className="mt-[24px] flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.link} target="_blank">
                  <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white text-gray-400 hover:text-white">
                    <Image src={link.Icon} alt="icon" className="h-[20px] w-[20px]" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col xl:items-center">
            <h4 className="mb-[36px] mt-[48px] text-[20px] font-medium text-white">Quick Links</h4>
            <ul className="mt-4 flex flex-col gap-[24px] text-sm text-gray-400">
              {navLinks.map((link, index) => (
                <Link key={index} href={link.path} className="w-fit text-[16px] font-light text-white hover:text-primary">
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="mb-[36px] mt-[48px] text-[20px] font-medium text-white xl:items-center">Others</h4>
            <ul className="mt-4 flex flex-col gap-[24px] text-sm text-gray-400">
              {others.map((data, index) => (
                <Link key={index} href={data.path} className="w-fit text-[16px] font-light text-white hover:text-primary">
                  {data.label}
                </Link>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mt-[48px] text-[20px] font-medium leading-[24px] text-white">{strings["newsLetTitle"]}</h4>
            <p className="mt-[15px] text-[16px] font-normal leading-[24px] text-white lg:text-base">{strings["newsLetterDesc"]}</p>
            <div className="mt-[40px] flex flex-row items-center md:pr-[40px]">
              <TextInput classes="pl-[8px] py-[6px] text-black rounded-sm" type={"text"} inputKey={"name"} placeholder="Enter your email" />
              <button className="ml-2 rounded-sm bg-primary px-4 py-2 text-white">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="text-16px mt-[50px] border-t border-gray-700 pt-6 text-center text-sm lg:text-base">
          <p>{strings["copyRight"]}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
