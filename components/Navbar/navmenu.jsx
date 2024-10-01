
import React from 'react';
import Image from 'next/image';
import logo from "@/public/Images/logo.svg"
import Link from 'next/link';
import { navLinks } from '@/utils';
import { Button } from '../ui/button';
import menu_icon from "@/public/Icons/menu.svg"
import arrowup_icon from "@/public/Icons/arrowup.svg"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

const NavMenu = () => {

  return (
    <div className="md:hidden">
      <div className="relative">

        <Sheet className="align-items-center">
        <SheetTrigger><Image src={menu_icon} alt="Menu" className='mr-[28px] my-[24px]'/></SheetTrigger>
          <SheetContent>
            <SheetHeader>
            <div className="my-[15px] ml-[27px]">  
              <Image
                src={logo}
                alt="Logo"
                width={36.75}
                height={42}
              />
            </div>
                  </SheetHeader>
            <SheetDescription>
                  <div className="mt-[48]">
                    <div className="py-2">
                      {navLinks.map((link) => (
                        <div className='flex justify-between items-center'>
                          <Link
                          key={link.name}
                          href={link.path}
                          className="flex  block mx-[27px] my-[36px] text-[28px] font-weight: 500 text text-text hover:text-primary "
                          >
                          {link.name}
                          </Link>
                        
                          <div className="mx-[27px] my-[36px]">
                            <Image
                              src={arrowup_icon}
                              alt="arrowup"
                              width={24}
                              height={24}
                            />
                          </div>
                        </div>
                      ))}
                      <div className='flex flex-col mt-[48px] items-center justify-center'>
                        <Button variant="outline" size= "full" className="mb-[12px] mr-[27px]">Calculate Project Cost</Button>
                        <Button size="full" className="mr-[27px]">Get in Touch</Button>
                      </div>
                    </div>
                  </div>
                  </SheetDescription>
          </SheetContent>
        </Sheet>

        
        
      </div>
    </div>
  );
};

export default NavMenu;
