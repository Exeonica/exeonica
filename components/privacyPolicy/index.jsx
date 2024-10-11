import { privacyPolicy } from "@/public";

const Policy = () => {
  return (
    <div>
      <iframe srcDoc={privacyPolicy} className="min-h-screen w-full" />
    </div>
  );
};

export default Policy;
