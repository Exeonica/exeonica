import { ContactUs, DigitalTransformation, FacebookIcon, LinkedinIcon, OnlineReview, TeamWork, TwitterIcon, } from "@/public";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About Us", path: "/about" },
  { name: "Blogs", path: "/blogs" },
  { name: "Careers", path: "/careers" },
];
export const socialLinks = [
  { Icon: FacebookIcon, path: "/" },
  { Icon: TwitterIcon, path: "/services" },
  { Icon: LinkedinIcon, path: "/portfolio" },
];

export const others = [
  { label: "Privacy Policy", path: "/" },
  { label: "Where to Find Us?", path: "/services" },
  { label: "Conditions Policy", path: "/portfolio" },
];
export const aboutInfo = [
  { title: "Total employees", noService: "10" },
  { title: "Projects Done", noService: "25+" },
  { title: "Total Clients", noService: "20+" },
  { title: "Years of excellence", noService: "3+" },
];

export const cardData = [
  {
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and tools to deliver innovative solutions that keep your business ahead of the competition.",
    imageSrc: OnlineReview,
    imageAlt: "Cutting-Edge Technology",
    classes: "w-[50px] h-[50px] lg:w-[280px] lg:h-[280px]",
    card: "h-[2380px] w-full"
  },
  {
    title: "Experienced Team",
    description: "Our team of seasoned developers and designers brings years of industry experience, ensuring that your project is in expert hands from start to finish.",
    imageSrc: TeamWork,
    imageAlt: "Experienced Team",
    classes: "h-[256px] w-[573px]",
  },
  {
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and tools to deliver innovative solutions that keep your business ahead of the competition.",
    imageSrc: DigitalTransformation,
    imageAlt: "Cutting-Edge Technology",
    classes: "h-[280px] w-[280px]",
  },
  {
    title: "Transparent Communication",
    description: "We believe in open, honest communication at every stage of the project, providing regular updates and ensuring you're always in the loop.",
    imageSrc: ContactUs,
    imageAlt: "Transparent Communication",
    classes: "h-[280px] w-[420px]",
  },
];
