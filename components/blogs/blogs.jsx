import { BlogsCards } from "./index";

const Blogs = ({ cardsData }) => {
  return (
    <div className="mx-[16px] p-4 pt-[80px] lg:mx-[112px]">
      <div>
        <p className="mb-[36px] text-[36px] font-semibold leading-[53.64px] text-card-foreground">Recent Blogs.</p>
      </div>
      <BlogsCards cardsData={cardsData} />
    </div>
  );
};

export default Blogs;
