import React from "react";

import { BlogsCards } from "@/components/index";

const blogDetails = ({ cardsData }) => {
  return (
    <div>
      <div>
        <div className="mx-[16px] p-4 pt-[80px] lg:mx-[112px]">
          <div>
            <p className="mb-[36px] text-[32px] font-semibold leading-[47.52px] text-card-foreground">Related Articles</p>
          </div>
          <BlogsCards cardsData={cardsData} />
        </div>
      </div>
    </div>
  );
};

export default blogDetails;
