import { ContactUs, DigitalTransformation, FacebookIcon, LinkedinIcon, OnlineReview, TeamWork, TwitterIcon } from "@/public";
import { ACD, MAC, MAD, NAD, NID, UDS, WDS, Dev, Software } from "@/public/ServiceImages";

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
    card: "h-[2380px] w-full",
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

export const services = [
  {
    icon: ACD,
    title: "AI Chatbot Development",
    desc: "Elevate your customer experience with AI-powered chatbots. Our experts will design and develop a custom chatbot tailored to your specific needs.",
    image: Software,
    subTitle: "IOS App Development: Empowering Your Digital Presence",
    subDesc:
      "At Exeonic, we craft mobile applications that are not only functional but also transformative. Our approach focuses on delivering seamless, intuitive user experiences that drive engagement and keep your business at the forefront of the mobile-first world. From concept to deployment, we ensure that your app is scalable, secure, and designed to make a lasting impact.",
    subImage: Dev,
    offers: [
      {
        title: "Custom IOS Development",
        image: Dev,
      },
      {
        title: "Cross-platform app development",
        image: Dev,
      },
      {
        title: "UI/UX design",
        image: Dev,
      },
      {
        title: "iOS development consulting",
        image: Dev,
      },
      {
        title: "Maintenance & Support",
        image: Dev,
      },
    ],
  },
  {
    icon: MAD,
    title: "Mobile App Development",
    desc: "Leveraging the power of JS/TS with React and React Native for efficient cross-platform app development. Single codebase for multiple platforms.",
    image: Software,
    subTitle: "IOS App Development: Empowering Your Digital Presence",
    subDesc:
      "At Exeonic, we craft mobile applications that are not only functional but also transformative. Our approach focuses on delivering seamless, intuitive user experiences that drive engagement and keep your business at the forefront of the mobile-first world. From concept to deployment, we ensure that your app is scalable, secure, and designed to make a lasting impact.",
    subImage: Dev,
    offers: [
      {
        title: "Custom IOS Development",
        image: Dev,
      },
      {
        title: "Cross-platform app development",
        image: Dev,
      },
      {
        title: "UI/UX design",
        image: Dev,
      },
      {
        title: "iOS development consulting",
        image: Dev,
      },
      {
        title: "Maintenance & Support",
        image: Dev,
      },
    ],
  },
  {
    icon: MAC,
    title: "Mobile App Consulting",
    desc: "We help finalize app concepts, advise on platform compatibility, plan project tasks, and optimize development costs.",
    image: Software,
    subTitle: "IOS App Development: Empowering Your Digital Presence",
    subDesc:
      "At Exeonic, we craft mobile applications that are not only functional but also transformative. Our approach focuses on delivering seamless, intuitive user experiences that drive engagement and keep your business at the forefront of the mobile-first world. From concept to deployment, we ensure that your app is scalable, secure, and designed to make a lasting impact.",
    subImage: Dev,
    offers: [
      {
        title: "Custom IOS Development",
        image: Dev,
      },
      {
        title: "Cross-platform app development",
        image: Dev,
      },
      {
        title: "UI/UX design",
        image: Dev,
      },
      {
        title: "iOS development consulting",
        image: Dev,
      },
      {
        title: "Maintenance & Support",
        image: Dev,
      },
    ],
  },
  {
    icon: WDS,
    title: "Web Development Services​",
    desc: "Leveraging the power of JS/TS with React, NextJS, Expo & Remix for efficient & responsive Web App development.",
    image: Software,
    subTitle: "IOS App Development: Empowering Your Digital Presence",
    subDesc:
      "At Exeonic, we craft mobile applications that are not only functional but also transformative. Our approach focuses on delivering seamless, intuitive user experiences that drive engagement and keep your business at the forefront of the mobile-first world. From concept to deployment, we ensure that your app is scalable, secure, and designed to make a lasting impact.",
    subImage: Dev,
    offers: [
      {
        title: "Custom IOS Development",
        image: Dev,
      },
      {
        title: "Cross-platform app development",
        image: Dev,
      },
      {
        title: "UI/UX design",
        image: Dev,
      },
      {
        title: "iOS development consulting",
        image: Dev,
      },
      {
        title: "Maintenance & Support",
        image: Dev,
      },
    ],
  },
  {
    icon: UDS,
    title: "UI/UX Design Services",
    desc: "Our designers create easy-to-use UX and visually attractive UI that drive engagement, user acceptance and conversions.",
    image: Software,
    subTitle: "IOS App Development: Empowering Your Digital Presence",
    subDesc:
      "At Exeonic, we craft mobile applications that are not only functional but also transformative. Our approach focuses on delivering seamless, intuitive user experiences that drive engagement and keep your business at the forefront of the mobile-first world. From concept to deployment, we ensure that your app is scalable, secure, and designed to make a lasting impact.",
    subImage: Dev,
    offers: [
      {
        title: "Custom IOS Development",
        image: Dev,
      },
      {
        title: "Cross-platform app development",
        image: Dev,
      },
      {
        title: "UI/UX design",
        image: Dev,
      },
      {
        title: "iOS development consulting",
        image: Dev,
      },
      {
        title: "Maintenance & Support",
        image: Dev,
      },
    ],
  },
  {
    icon: NID,
    title: "Native iOS Development",
    desc: "Our team of iOS developers has significant experience in custom iOS app development services and will help your iOS app run smoothly",
    image: Software,
    subTitle: "IOS App Development: Empowering Your Digital Presence",
    subDesc:
      "At Exeonic, we craft mobile applications that are not only functional but also transformative. Our approach focuses on delivering seamless, intuitive user experiences that drive engagement and keep your business at the forefront of the mobile-first world. From concept to deployment, we ensure that your app is scalable, secure, and designed to make a lasting impact.",
    subImage: Dev,
    offers: [
      {
        title: "Custom IOS Development",
        image: Dev,
      },
      {
        title: "Cross-platform app development",
        image: Dev,
      },
      {
        title: "UI/UX design",
        image: Dev,
      },
      {
        title: "iOS development consulting",
        image: Dev,
      },
      {
        title: "Maintenance & Support",
        image: Dev,
      },
    ],
  },
  {
    icon: NAD,
    title: "Native Android Development",
    desc: "Our team of iOS developers has significant experience in custom iOS app development services and will help your iOS app run smoothly",
    image: Software,
    subTitle: "IOS App Development: Empowering Your Digital Presence",
    subDesc:
      "At Exeonic, we craft mobile applications that are not only functional but also transformative. Our approach focuses on delivering seamless, intuitive user experiences that drive engagement and keep your business at the forefront of the mobile-first world. From concept to deployment, we ensure that your app is scalable, secure, and designed to make a lasting impact.",
    subImage: Dev,
    offers: [
      {
        title: "Custom IOS Development",
        image: Dev,
      },
      {
        title: "Cross-platform app development",
        image: Dev,
      },
      {
        title: "UI/UX design",
        image: Dev,
      },
      {
        title: "iOS development consulting",
        image: Dev,
      },
      {
        title: "Maintenance & Support",
        image: Dev,
      },
    ],
  },
];
