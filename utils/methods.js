"use server";
import Handlebars from "handlebars";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

import { db, transporter, mailOptions, storage } from "@/services";

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

export const getBlogFilters = async () => {
  const blogsCollection = collection(db, "blogFilters");
  const blogSnapshot = await getDocs(blogsCollection);
  const filters = blogSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return filters;
};

export const getBlog = async (blogId) => {
  const blogCollection = doc(db, "blogs", blogId);
  const blogSnapshot = await getDoc(blogCollection);

  return blogSnapshot.data();
};

export const getAllCareers = async () => {
  const careersCollection = collection(db, "careers");
  const careersSnapshot = await getDocs(careersCollection);
  const careersList = careersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return careersList;
};

export const getCareer = async (careersId) => {
  const careersCollection = doc(db, "careers", careersId);
  const careersSnapshot = await getDoc(careersCollection);

  return careersSnapshot.data();
};

export const uploadCV = async (file) => {
  const storageRef = ref(storage, `cvs/${file.name}`);

  uploadBytes(storageRef, file)
    .then(() => {
      const downloadURL = getDownloadURL(storageRef);

      return downloadURL;
    })
    .catch((error) => {
      console.error("Error uploading file", error);
    });
};
