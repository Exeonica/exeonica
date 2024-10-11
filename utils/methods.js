"use server";
import Handlebars from "handlebars";
import { collection, getDocs } from "firebase/firestore";

import { db, transporter, mailOptions } from "@/services";

export const sendMail = async (templateData, temp) => {
  const template = Handlebars.compile(temp);
  const html = template(templateData);

  const info = await transporter.sendMail({
    ...mailOptions,
    ...templateData,
    to: ["ahsan@exeonic.com, sumeera.sehar@exeonic.com, bilal.akram@exeonic.com, ahmad.jamil@exeonic.com, hello@exeonic"],
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
