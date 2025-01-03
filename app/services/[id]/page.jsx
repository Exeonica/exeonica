import { notFound } from "next/navigation";

import { services } from "@/utils";
import { ServiceDetailsHeader, Footer, AboutComponent, OfferedServices, AchievementCards, TechnologySection } from "@/components/index";

export default function ServicesDetails({ params }) {
  const service = services.find((service) => service.id.toString() === params.id);

  if (!service) {
    return notFound();
  }

  delete service.icon;

  return (
    <div>
      <ServiceDetailsHeader service={service} />
      <AboutComponent btnLabel={service.title} title={service.subTitle} description={service.subDesc} classes={"bg-white"} />
      <OfferedServices service={service} />
      <TechnologySection service={service} />
      <AchievementCards cardclass={"!bg-border"} btnTitle={"achievementTitle"} heading={"achievementHeading"} classes={"py-[80px]"} />
      <Footer />
    </div>
  );
}
