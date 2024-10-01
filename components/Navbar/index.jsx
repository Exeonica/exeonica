import Image from "next/image";

import { Button } from "../ui/button";

import { strings } from "@/utils";

const Navbar = () => {
  return (
    <div className="flex items-center space-x-10">
      <Image src="/images/Logo.png" alt="Next.js logo" width={42} height={48} priority />
      <Button>Button</Button>
      <span>{strings["home"]}</span>
      <span className="">HOME</span>
    </div>
  );
};

export default Navbar;
