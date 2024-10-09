// pages/index.js
import Image from "next/image";

import { BlogPost } from "@/public";

const BlogPosts = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: BlogPost,
      title: "Card Title 1",
      description: "This is a brief description for card 1.",
      userImage: BlogPost,
      userName: "John Doe",
      time: "2 hours ago",
    },
    {
      id: 2,
      imageSrc: "/path/to/image2.jpg", // Replace with your image path
      title: "Card Title 2",
      description: "This is a brief description for card 2.",
      userImage: "/path/to/user2.jpg", // Replace with user image path
      userName: "Jane Smith",
      time: "1 hour ago",
    },
    {
      id: 3,
      imageSrc: "/path/to/image3.jpg", // Replace with your image path
      title: "Card Title 3",
      description: "This is a brief description for card 3.",
      userImage: "/path/to/user3.jpg", // Replace with user image path
      userName: "Alice Brown",
      time: "5 hours ago",
    },
    {
      id: 4,
      imageSrc: "/path/to/image4.jpg", // Replace with your image path
      title: "Card Title 4",
      description: "This is a brief description for card 4.",
      userImage: "/path/to/user4.jpg", // Replace with user image path
      userName: "Bob Johnson",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cardsData.map((card) => (
          <div key={card.id} className="max-w-sm overflow-hidden rounded bg-white shadow-lg">
            {/* Image at the top */}
            <div className="relative h-48">
              <Image src={card.imageSrc} alt={card.title} layout="fill" objectFit="cover" className="rounded-t-lg" />
            </div>

            <div className="p-4">
              {/* Title */}
              <h2 className="mb-2 text-xl font-bold">{card.title}</h2>
              {/* Description */}
              <p className="mb-4 text-base text-gray-700">{card.description}</p>
            </div>

            {/* User info at the bottom */}
            <div className="flex items-center p-4">
              <div className="relative mr-3 h-10 w-10">
                <Image src={card.userImage} alt={card.userName} layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <div>
                <p className="font-bold">{card.userName}</p>
                <p className="text-sm text-gray-600">{card.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
