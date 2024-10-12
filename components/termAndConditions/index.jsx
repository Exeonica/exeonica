import { termAndConditions } from "@/public";

// app/termAndConditions/page.js
const TermAndConditions = () => {
  return (
    <div>
      <iframe srcDoc={termAndConditions} className="min-h-screen w-full" />
    </div>
  );
};

export default TermAndConditions;
