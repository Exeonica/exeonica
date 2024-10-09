import { strings, launchCards } from "@/utils";

const Launch = () => {
  return (
    <div className="flex flex-col px-[16px] py-[80px] text-center lg:px-[110px]">
      <div className="pb-9">
        <p className="mx-auto w-max rounded-[60px] border border-primary px-[16px] py-[10px] text-xs font-normal text-primary md:text-base">{strings["launchTitle"]}</p>
        <p className="my-2 text-[28px] font-semibold md:text-[40px]">{strings["launchHeading"]}</p>
        <p className="text-lg font-normal text-color-3">{strings["launchDesc"]}</p>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {launchCards.map((card, index) => (
            <div key={index} className={`rounded-2xl border border-border bg-color-2 px-6 py-[42px] text-start lg:py-[18px]`}>
              <p className="pb-3 text-lg font-medium italic text-color-1">{card.duration}</p>
              <card.icon />
              <h3 className="py-3 text-[22px] font-semibold">{card.title}</h3>
              <p className="text-sm text-color-6">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Launch;
