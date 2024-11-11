import Link from "next/link";

import { Button } from "../index";

import { BlogsCards } from "./index";

const Blogs = ({ blogs, filters, params }) => {
  return (
    <div className="space-y-9 p-4 pt-[80px] lg:mx-[112px]">
      <div className="flex space-x-4 overflow-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Link href={"/blogs/all"} scroll={false}>
          <Button variant={params.filter === "all" ? "bgRounded" : "outlineRounded"}>All</Button>
        </Link>

        {filters.map((v, i) => (
          <Link key={i} href={`/blogs/${v.title}`} scroll={false}>
            <Button variant={params.filter.replaceAll("%20", " ") === v.title ? "bgRounded" : "outlineRounded"}>{v.title}</Button>
          </Link>
        ))}
      </div>
      <p className="text-[36px] font-semibold leading-[53.64px] text-card-foreground">Recent Blogs.</p>

      <BlogsCards cardsData={blogs} params={params} />
    </div>
  );
};

export default Blogs;
