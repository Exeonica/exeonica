import Image from "next/image";

import { ContactUsImage } from "@/public";
import { Button } from "@/components/index";
import { strings } from "@/utils";

const LocationsPage = () => {
  return (
    <div>
      <div className="flex flex-1 flex-col items-center justify-center lg:my-[64px]">
        <Button variant={"outlineRounded"} classes="text-xs md:text-base md:font-normal">
          {strings["locations"]}
        </Button>

        <div className="mt-2">
          <p className="text-[28px] font-semibold lg:text-[40px] lg:leading-[80px]">{strings["findUs"]}</p>
        </div>
      </div>
      <Image src={ContactUsImage} priority alt="map" />
    </div>
  );
};

export default LocationsPage;
