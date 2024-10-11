"use server";
import Handlebars from "handlebars";
import { collection, getDocs } from "firebase/firestore";

import { db, transporter, mailOptions } from "@/services";
import { contactUs } from "@/public";

export const sendMail = async (templateData) => {
  const template = Handlebars.compile(contactUs);
  const html = template(templateData);

  const info = await transporter.sendMail({
    ...mailOptions,
    ...templateData,
    to: templateData.email || "bilal.akram@exeonic.com",
    html: html,
  });

  return info;
};

export const getAllBlogs = async () => {
  const blogsCollection = collection(db, "blogs");
  const blogSnapshot = await getDocs(blogsCollection);
  const blogList = blogSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return blogList;
};
