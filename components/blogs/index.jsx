// pages/index.js
import Image from "next/image";
import Link from "next/link";

import { BlogPost } from "@/public";

const BlogPosts = ({ cardsData }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-[100px]">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((card) => (
          <Link key={card.id} href={`blogs/${card.id}`}>
            <div className="max-w-sm cursor-pointer overflow-hidden rounded bg-white shadow-lg">
              {/* Image at the top */}
              <div className="relative h-48">
                <Image src={card.profileImage} alt={card.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
              </div>

              <div className="p-4">
                {/* Title */}
                <h2 className="mb-2 text-xl font-bold">{card.title}</h2>
                {/* Description */}
                <p className="mb-4 text-base text-gray-700">{card.desc}</p>
              </div>

              {/* User info at the bottom */}
              <div className="flex items-center p-4">
                <div className="relative mr-3 h-10 w-10">
                  <Image src={BlogPost} alt={card.profileName} layout="fill" objectFit="cover" className="rounded-full" />
                </div>
                <div>
                  <p className="font-bold">{card.profileName}</p>
                  <p className="text-sm text-gray-600">{"new Date(card.createdAt).getDate()"}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
