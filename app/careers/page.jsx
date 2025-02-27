import { ComHeader, Footer } from "@/components/index";
import { CareersCards } from "@/components/careerPage";
import { getAllCareers } from "@/utils";

export const revalidate = 1;

const Careers = async () => {
  const careers = await getAllCareers();

  return (
    <div>
      <ComHeader title={"joinUs"} />
      {careers.length > 0 ? (
        <CareersCards cardsData={careers} />
      ) : (
        <div className="flex items-center justify-center">
          {" "}
          <p className="my-10 items-center justify-center text-xl font-semibold text-card-foreground">No Job Found.</p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Careers;
