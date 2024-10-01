import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";

import { navLinks, strings } from "@/utils";
import { Logo, ArrowIcon, MenuIcon } from "@/public";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

const NavMenu = () => {
  return (
    <div className="md:hidden">
      <Sheet className="align-items-center">
        <SheetTrigger>
          <Image src={MenuIcon} alt="Menu" className="my-[24px] mr-[28px]" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="border-b border-[#F7FAFC]">
            <div className="my-[15px] ml-[27px]">
              <Image src={Logo} alt="Logo" width={36.75} height={42} />
            </div>
          </SheetHeader>
          <SheetDescription>
            <div className="mx-7 mt-[48]">
              <div className="mt-12 space-y-9 py-2">
                {navLinks.map((link) => (
                  <div className="flex items-center justify-between">
                    <Link key={link.name} href={link.path} className="text flex space-y-[36px] text-[28px] font-medium text-text hover:text-primary">
                      {link.name}
                    </Link>

                    <div className="space-y-[36px]">
                      <Image src={ArrowIcon} alt="arrowup" width={24} height={24} />
                    </div>
                  </div>
                ))}
                <div className="flex flex-col items-center justify-center">
                  <Button variant="outline" size="full" className="mx-7 mb-[12px] mt-12">
                    {strings["calculateCost"]}
                  </Button>
                  <Button size="full" className="mx-7">
                    {strings["getInTouch"]}
                  </Button>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMenu;
