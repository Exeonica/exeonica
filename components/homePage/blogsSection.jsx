import Image from "next/image";
import Link from "next/link";

import Button from "../button";

import { strings } from "@/utils";
import { ClockIcon, CalenderIcon } from "@/public";

const BlogsSection = ({ blogsData }) => {
  const displayedBlogs = blogsData.length > 4 ? blogsData.slice(0, 4) : blogsData;

  return (
    <div className="px-4 py-[80px] md:px-[200px] lg:px-[110px]">
      <Button variant={"outlineRounded"} classes="text-xs md:text-base md:font-normal cursor-default">
        {strings["blogsTitle"]}
      </Button>
      <p className="mt-2 pb-9 text-[28px] font-semibold md:text-[40px]">{strings["blogsHeading"]}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[35px] xl:gap-x-[50px]">
        <div className="flex flex-col rounded-2xl border border-border drop-shadow-sm">
          <Link href={`/blogs/${displayedBlogs[0]?.id}`}>
            <Image
              priority
              className="h-[268px] w-full rounded-t-2xl object-cover lg:h-[350px] lg:w-full"
              src={displayedBlogs[0]?.bloggerImage}
              alt={displayedBlogs[0]?.title}
              width={700}
              height={350}
            />
            <div className="px-[10px] py-[30px]">
              <p className="text-2xl font-semibold hover:underline">{displayedBlogs[0]?.title}</p>
              <p className="mt-3 text-base font-normal text-color-6 hover:underline">{displayedBlogs[0]?.desc}</p>
            </div>
            <div className="flex space-x-4 px-4 pb-[30px]">
              <div className="flex items-center space-x-2">
                <CalenderIcon />
                <p className="text-sm font-medium text-color-1">3 April 2002</p>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon />
                <p className="text-sm font-medium text-color-1">9 min read</p>
              </div>
            </div>
          </Link>
        </div>

        {displayedBlogs.length > 1 ? (
          <div className="space-y-5">
            {displayedBlogs.slice(1, 3).map((blog) => (
              <div key={blog.id} className="mt-9 flex flex-col rounded-2xl border border-border drop-shadow-sm lg:mt-0 lg:flex-row lg:items-center">
                <Link href={`/blogs/${blog.id}`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
                    <div className="w-full lg:w-auto">
                      <Image
                        className="h-[268px] w-full rounded-t-2xl object-cover lg:h-[160px] lg:w-[170px] lg:rounded-l-2xl lg:rounded-r-none lg:object-cover"
                        src={blog.bloggerImage}
                        alt={blog.title}
                        width={170}
                        height={160}
                      />
                    </div>
                    <div>
                      <div className="px-4 py-[30px] lg:py-0">
                        <p className="text-2xl font-semibold hover:underline">{blog.title}</p>
                        <p className="mt-3 text-base font-normal text-color-6 hover:underline lg:hidden">{blog.desc}</p>
                      </div>
                      <div className="flex space-x-4 px-4 pb-[30px] lg:pb-0 lg:pt-4 xl:pt-8">
                        <div className="flex items-center space-x-2">
                          <CalenderIcon />
                          <p className="text-sm font-medium text-color-1">12 Jan 2024</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ClockIcon />
                          <p className="text-sm font-medium text-color-1">10 min read</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 lg:hidden"></div>
        )}
      </div>

      {blogsData.length > 4 && (
        <div className="flex justify-center">
          <Link href="/blogs">
            <Button variant="outline" classes="mt-9">
              {strings["blogsBtn"]}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogsSection;
