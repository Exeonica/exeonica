import { privacyPolicy } from "@/public";

const Policy = () => {
  return (
    <div className="px-4 py-20 md:px-[110px]">
      <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
    </div>
  );
};

export default Policy;
