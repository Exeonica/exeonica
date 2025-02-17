"use server";
import Handlebars from "handlebars";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

import { db, transporter, mailOptions, storage } from "@/services";

export const sendMail = async (templateData, temp) => {
  const template = Handlebars.compile(temp);
  const html = template(templateData);

  const info = await transporter.sendMail({
    ...mailOptions,
    ...templateData,
    to: ["ahsan@exeonica.com, sumeera.sehar@exeonica.com, bilal.akram@exeonica.com, hello@exeonica.com"],
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

export const applicants = async (emailData) => {
  try {
    const applicantsCollection = collection(db, "applicants");
    const docRef = await addDoc(applicantsCollection, emailData);

    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const contactedUS = async (emailData) => {
  try {
    const contactedCollection = collection(db, "contactedUsers");
    const docRef = await addDoc(contactedCollection, emailData);

    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

export const getCareer = async (careersId) => {
  const careersCollection = doc(db, "careers", careersId);
  const careersSnapshot = await getDoc(careersCollection);

  return careersSnapshot.data();
};

export const uploadCV = async (formData) => {
  try {
    const file = formData.get("file");
    const email = formData.get("email");

    const storageRef = ref(storage, `cvs/${email}_${file.name}`);
    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("File upload failed");
  }
};
