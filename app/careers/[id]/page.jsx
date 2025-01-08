import { notFound } from "next/navigation";

import { CareersDetailPage, Footer } from "@/components/index";
import { getCareer } from "@/utils";

const CareerDetails = async ({ params }) => {
  const job = await getCareer(params.id);

  if (!job) {
    return notFound();
  }

  return (
    <div>
      <CareersDetailPage job={job} />
      <Footer />
    </div>
  );
};

export default CareerDetails;
