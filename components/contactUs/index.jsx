import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/index";
import { strings } from "@/utils";
import { PKFlag, PhoneIcon, Marker } from "@/public";

const locations = [
  {
    id: 1,
    name: "Faisalabad, PAK",
    position: { lat: 31.4504, lng: 73.135 },
    address: "P-176 (First Floor), Block A Behind Wasa Tanky Near Gourmet Chenone Road, People Colony No. 1, FSD",
    contact: "+88017 000 555 15",
    countryCode: "PK",
    flag: PKFlag,
  },
  // {
  //   id: 2,
  //   name: "New York, USA",
  //   position: { lat: 40.7128, lng: -74.006 },
  //   address: "P-176 (First Floor), Block A, NY",
  //   contact: "+88017 000 555 15",
  //   countryCode: "US",
  //   flag: UKFlag,
  // },
];

const LocationCard = ({ location }) => (
  <div className="h-{190px} mx-[22px] w-[340px] rounded-lg bg-white p-6 shadow-lg md:w-[400px]">
    <div className="mb-4 flex flex-col items-center">
      <Image src={location.flag} alt="icon" className="h-[32px] w-[32px]" />
      <h3 className="mt-[16px] text-[18px] font-semibold leading-[18px] text-text">{location.name}</h3>
      <p className="mt-[8px] text-center text-[12px] font-normal leading-[17.82px] text-color-1">{location.address}</p>
    </div>

    <div className="flex flex-1 flex-row">
      <PhoneIcon />
      <div className="flex flex-col pl-[8px]">
        <p className="text-[12px] font-medium leading-[17.82px] text-text">Contact us: </p>
        <p className="mr-[16px] text-[12px] font-normal leading-[17.82px] text-color-6">{location.contact}</p>
      </div>

      <Button variant={"default"} classes="text-xs md:text-base md:font-normal">
        <Link href={"https://shorturl.at/qdwje"} target="_blank">
          {strings["getDirection"]}
        </Link>
      </Button>
    </div>
  </div>
);

const Location = () => {
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

      <div className="relative">
        <div className="mapBg relative flex h-screen w-full flex-col items-center justify-center bg-cover bg-center">
          <Image src={Marker} alt="icon" className="absolute bottom-[38%] left-[70%] z-20 h-[50px] w-[50px] sm:left-[57%] md:left-[55%]" />
          <div className="absolute bottom-[42%] z-20 flex max-h-[100%] w-full flex-col items-center gap-4 overflow-y-auto bg-white bg-opacity-0 p-4">
            {locations.map((location, index) => (
              <LocationCard key={index} location={location} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
