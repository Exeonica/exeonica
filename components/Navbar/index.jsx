import Link from "next/link";
import Image from "next/image";

import Button from "../button";

import NavMenu from "./navItems";

import { navLinks, strings } from "@/utils";
import { Logo } from "@/public";

const Navbar = () => {
  return (
    <nav className="mx-[27px] my-[15px] flex items-center justify-between bg-white md:my-6 lg:mx-[110px]">
      <div className="flex w-full items-center justify-between align-middle">
        <Image src={Logo} alt="Logo" height={"auto"} width={"auto"} className="h-[42px] w-[36.75px] md:h-12 md:w-[42px]" />
        <div className="md:hidden">
          <NavMenu />
        </div>
      </div>

      <div className="mx-0 my-0 hidden items-center md:flex">
        <div className="flex w-max md:space-x-9 md:text-lg md:font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="border-primary text-text hover:text-primary">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="ml-10 flex gap-[10px] md:hidden xl:flex">
          <Button variant={"outline"} className="">
            {strings["calculateCost"]}
          </Button>
          <Button variant={"default"} className="">
            {strings["getInTouch"]}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
