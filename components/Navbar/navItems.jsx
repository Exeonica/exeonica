import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "../ui/sheet";

import { navLinks, strings } from "@/utils";
import { Logo, ArrowIcon, MenuIcon } from "@/public";

const NavMenu = () => {
  return (
    <Sheet className="items-center">
      <SheetTrigger>
        <Image src={MenuIcon} alt="Menu" className="" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b border-border">
          <Image src={Logo} alt="Logo" width={"auto"} height={"auto"} className="my-[15px] ml-[27px] h-[42px] w-[36.75px]" />
        </SheetHeader>
        <SheetDescription>
          <div className="mx-7 mt-12">
            <div className="mt-12 space-y-9 py-2">
              {navLinks.map((link) => (
                <div key={link.name} className="group flex cursor-pointer items-center justify-between">
                  <Link href={link.path} className="flex text-[28px] font-medium text-text group-hover:text-primary">
                    {link.name}
                  </Link>

                  <div className="">
                    <Image src={ArrowIcon} alt="arrowup" width={"auto"} height={"auto"} className="h-6 w-6" />
                  </div>
                </div>
              ))}
              <div className="flex flex-col items-center justify-center">
                <Button variant="outline" classes="!w-full mb-3 mt-[48px]">
                  {strings["calculateCost"]}
                </Button>
                <Button variant="default" classes="!w-full">
                  {strings["getInTouch"]}
                </Button>
              </div>
            </div>
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
