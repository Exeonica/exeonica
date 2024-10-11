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
          <Link href={"./"} className="cusor-pointer">
            <Logo />
          </Link>
        </SheetHeader>
        <SheetDescription>
          <div className="mx-7 mt-12">
            <div className="mt-12 space-y-9 py-2">
              {navLinks.map((link) => (
                <div key={link.name} className="group flex cursor-pointer items-center justify-between">
                  <Link href={link.path} className="flex text-[28px] font-medium text-text group-hover:text-primary">
                    <SheetClose>{link.name}</SheetClose>
                  </Link>

                  <div className="">
                    <ArrowUp />
                  </div>
                </div>
              ))}
              <div className="flex flex-col items-center justify-center pt-[48px]">
                {/* <SheetClose>
                  <Button variant="outline" classes="!w-full mb-3 items-center justify-center">
                    {strings["calculateCost"]}
                  </Button>
                </SheetClose> */}
                <Link href="./contact">
                  <SheetClose>
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
