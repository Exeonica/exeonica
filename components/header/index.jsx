import React from "react";
// import Image from "next/image";

// import { HeaderTop, HeaderBottom } from "@/public";
import { strings } from "@/utils";

const Index = ({ title }) => {
  return (
    <div>
      {/* top section */}
      <div className="headerMobBg lg:headerBg relative mt-4 flex h-72 items-center justify-center">
        {/* <Image
          src={HeaderTop}
          alt="Top Left"
          className="absolute left-0 top-0"
          width={350}
          height={300}
          sizes="(max-width: 640px) 100px, (max-width: 768px) 200px, 350px" // Dynamic width based on viewport
        /> */}
        <h6 className="z-10 text-4xl font-medium text-text md:text-4xl lg:text-5xl">{strings[title]}</h6>
        {/* <Image
          src={HeaderBottom}
          alt="Bottom Right"
          className="absolute bottom-0 right-0"
          width={350}
          height={300}
          sizes="(max-width: 640px) 100px, (max-width: 768px) 200px, 350px" // Dynamic width based on viewport
        /> */}
      </div>
    </div>
  );
};

export default Index;
