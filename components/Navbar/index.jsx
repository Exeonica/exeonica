import { Logo } from "@/public/Icons";
import { strings } from "@/utils";
import Image from "next/image";

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
      <Image
        src="/images/Test.svg"
        alt="Next.js logo"
        width={500}
        height={200}
        priority
      />
      <Image
        src="/images/Test2.png"
        alt="Next.js logo"
        width={500}
        height={200}
        priority
      />
      <span>{strings["home"]}</span>
    </div>
  );
};

export default Navbar;
