import { termAndConditions } from "@/public";

const TermAndConditions = () => {
  return (
    <div className="px-4 py-20 md:px-[110px]">
      <div dangerouslySetInnerHTML={{ __html: termAndConditions }} />
    </div>
  );
};

export default TermAndConditions;
