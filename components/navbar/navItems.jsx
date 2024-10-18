import Link from "next/link";

import Button from "../button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger, SheetClose } from "../ui/sheet";

import { navLinks, strings } from "@/utils";
import { Logo, MenuIcon, ArrowUp } from "@/public";

const NavMenu = () => {
  return (
    <Sheet className="items-center">
      <SheetTrigger>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="border-b border-border py-[15px] pb-[15px] pl-[27px]">
          <Link href={"./"} className="cursor-pointer">
            <Logo />
          </Link>
        </SheetHeader>
        <SheetDescription>
          <div className="mx-7">
            <div className="mt-12 flex h-[calc(100vh-200px)] flex-col justify-between py-2">
              <div>
                {navLinks.map((link) => (
                  <SheetClose key={link.name} asChild>
                    <Link href={link.path} className="group flex h-[79px] cursor-pointer items-center justify-between space-x-9">
                      <span className="text-[28px] font-medium text-text group-hover:text-primary">{link.name}</span>
                      <ArrowUp />
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="flex flex-col pt-[48px]">
                <Link href="/projectEstimation" className="!w-full">
                  <SheetClose asChild>
                    <Button variant="outline" classes="!w-full mb-3 items-center justify-center">
                      {strings["calculateCost"]}
                    </Button>
                  </SheetClose>
                </Link>

                <Link href="/contact" className="!w-full">
                  <SheetClose asChild>
                    <Button variant="default" classes="!w-full items-center justify-center">
                      {strings["getInTouch"]}
                    </Button>
                  </SheetClose>
                </Link>
              </div>
            </div>
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default NavMenu;
