import Link from "next/link";

import Button from "../button";

import NavMenu from "./navItems";

import { navLinks, strings } from "@/utils";
import { Logo } from "@/public";

const Navbar = () => {
  return (
    <nav className="mx-[27px] my-[15px] flex items-center justify-between bg-white md:my-6 lg:mx-[110px]">
      <div className="flex w-full items-center justify-between align-middle">
        <Logo />
        <div className="md:hidden">
          <NavMenu />
        </div>
      </div>

      <div className="mx-0 my-0 hidden items-center md:flex">
        <div className="flex w-max md:space-x-9 md:text-lg md:font-medium">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="border-b-2 border-transparent text-text hover:border-primary hover:text-primary">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="ml-10 flex gap-[10px] md:hidden xl:flex">
          <Button variant={"outline"}>{strings["calculateCost"]}</Button>
          <Button variant={"default"}>{strings["getInTouch"]}</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
