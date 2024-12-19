import React from "react";
import { notFound } from "next/navigation";

import { CareersDetailPage, Footer } from "@/components/index";
import { getCareer, getAllCareers } from "@/utils";

export async function generateStaticParams() {
  const allJobs = await getAllCareers();

  return allJobs.map((job) => ({
    id: job.id.toString(),
  }));
}

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
