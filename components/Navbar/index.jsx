
import Link from 'next/link';
import NavMenu from '@/components/Navbar/navmenu';
import { navLinks } from '@/utils';
import { Button } from '../ui/button';

import { Logo, ArrowIcon, MenuIcon } from "@/public";
import Image from 'next/image';






const Navbar = () => {
  return (
    <nav className="bg-white">
        <div className="ml-[27px] flex justify-between align-items-center my-[15px] ">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="">
              <Image
                src={Logo}
                alt="Logo"
                width={40}
                height={40}
                // className="sm:w-[36.75px] sm:h-[42px]"
              />
            </div>
            <div className="md:hidden">
              <NavMenu />
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-lg my-3 text-text hover:text-primary hover:border-b-2 border-primary"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="outline" size="lg" className="py-5">
              Calculate Project Cost
            </Button>
            <Button variant="default" size="lg" className="py-5">
              Get in Touch
            </Button>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
