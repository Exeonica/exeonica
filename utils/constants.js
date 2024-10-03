import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/public";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About Us", path: "/about" },
  { name: "Blogs", path: "/blogs" },
  { name: "Careers", path: "/careers" },
];
export const socialLinks = [
  { Icon: { FacebookIcon }, path: "/" },
  { Icon: { TwitterIcon }, path: "/services" },
  { Icon: { LinkedinIcon }, path: "/portfolio" },
];

export const others = [
  { label: "Privacy Policy", path: "/" },
  { label: "Where to Find Us?", path: "/services" },
  { label: "Conditions Policy", path: "/portfolio" },
];
