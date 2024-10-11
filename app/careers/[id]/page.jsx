import { notFound } from "next/navigation";

import { jobs } from "@/utils";
import { ComHeader, Footer, CareersDetailPage } from "@/components/index";

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id.toString(),
  }));
}

export default function CareerDetails({ params }) {
  const job = jobs.find((job) => job.id.toString() === params.id);

  if (!job) {
    return notFound();
  }

  return (
    <div>
      <ComHeader title={job.title} showButton={true} />
      <CareersDetailPage />
      <Footer />
    </div>
  );
}
