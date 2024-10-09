import { collection, getDocs } from "firebase/firestore";

import { db } from "@/services";

export const getAllBlogs = async () => {
  const blogsCollection = collection(db, "blogs");
  const blogSnapshot = await getDocs(blogsCollection);
  const blogList = blogSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return blogList;
};
