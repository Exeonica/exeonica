import React from "react";
import Link from "next/link";

import Button from "../button";

import { strings, services } from "@/utils";

const ServiceComponent = () => {
  return (
    <div className="my-[80px] flex flex-col items-center justify-center px-[16px] lg:mx-[126px]">
      <Button variant={"outlineRounded"} classes="text-xs md:text-base md:font-normal cursor-default">
        {strings["serviceBtn"]}
      </Button>

      <div className="mt-2">
        <p className="text-[28px] font-semibold lg:text-[40px] lg:leading-[80px]">{strings["serviceTitle"]}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-y-6 md:mt-9 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {services.map((service, index) => {
          return (
            <div className={`flex w-full`} key={index}>
              <Link href={`/services/${service.id}`}>
                <div className="flex flex-col rounded-2xl border border-border p-6 shadow-sm hover:border-primary hover:shadow-md">
                  <service.icon className="h-12 w-12 text-primary" />
                  <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-base font-normal text-color-1">{service.desc}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceComponent;
