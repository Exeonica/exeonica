import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../button/index.jsx";

import { navLinks, strings } from "@/utils";
import { Logo, ArrowIcon, MenuIcon } from "@/public";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

const NavMenu = () => {
  return (
    <Sheet className="items-center">
      <SheetTrigger>
        <Image src={MenuIcon} alt="Menu" className="my-[24px]" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b border-border">
          <div className="my-[15px] ml-[27px]">
            <Image src={Logo} alt="Logo" width={36.75} height={42} />
          </div>
        </SheetHeader>
        <SheetDescription>
          <div className="mx-7 mt-[48]">
            <div className="mt-12 space-y-9 py-2">
              {navLinks.map((link) => (
                <div className="group flex cursor-pointer items-center justify-between">
                  <Link key={link.name} href={link.path} className="flex space-y-[36px] text-[28px] font-medium text-text group-hover:text-primary">
                    {link.name}
                  </Link>

                  <div className="space-y-[36px]">
                    <Image src={ArrowIcon} alt="arrowup" width={24} height={24} />
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
