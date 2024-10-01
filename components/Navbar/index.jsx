import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";

import NavMenu from "@/components/Navbar/navmenu";
import { navLinks, strings } from "@/utils";
import { Logo } from "@/public";

const Navbar = () => {
  return (
    <nav className="ml-[27px] flex items-center justify-between bg-white">
      <div className="flex w-full items-center justify-between md:w-auto">
        <div className="">
          <Image
            src={Logo}
            alt="Logo"
            width={36.75}
            height={42}
            // className="sm:w-[36.75px] sm:h-[42px]"
          />
        </div>
        <div className="md:hidden">
          <NavMenu />
        </div>
      </div>

      <div className="hidden space-x-8 md:flex">
        {navLinks.map((link) => (
          <Link key={link.name} href={link.path} className="my-3 border-primary text-lg text-text hover:border-b-2 hover:text-primary">
            {link.name}
          </Link>
        ))}
        <Button variant="outline" size="lg" className="py-5">
          {strings["calculateCost"]}
        </Button>
        <Button variant="default" size="lg" className="py-5">
          {strings["getInTouch"]}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
