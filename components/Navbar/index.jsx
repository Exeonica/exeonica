import { Logo } from "@/public/Icons";
import { strings } from "@/utils";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="flex space-x-10 items-center">
      <Logo />
      <Image
        src="/images/Logo.png"
        alt="Next.js logo"
        width={42}
        height={48}
        priority
      />
      <Button>Button</Button>
      <span>{strings["home"]}</span>
    </div>
  );
};

export default Navbar;
