import { ContactUs, DigitalTransformation, FacebookIcon, LinkedinIcon, OnlineReview, TeamWork, TwitterIcon, Award1, Award2, Award3, Award4, Award5, Award6 } from "@/public";
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
    card: "w-[30%]",
    classes: "w-[280px] h-[280px] m-0 p-0 justify-end items-end contain-cover",
  },
  {
    title: "Experienced Team",
    description: "Our team of seasoned developers and designers brings years of industry experience, ensuring that your project is in expert hands from start to finish.",
    imageSrc: TeamWork,
    imageAlt: "Experienced Team",
    card: "w-[60%]",
    classes: "h-[256px] w-[573px] justify-center items-center contain-cover",
  },
  {
    title: "Cutting-Edge Technology",
    description: "We leverage the latest technologies and tools to deliver innovative solutions that keep your business ahead of the competition.",
    imageSrc: DigitalTransformation,
    imageAlt: "Cutting-Edge Technology",
    card: "w-[60%]",
    classes: "w-[280px] h-[280px] m-0 p-0 justify-end items-end contain-cover",
  },
  {
    title: "Transparent Communication",
    description: "We believe in open, honest communication at every stage of the project, providing regular updates and ensuring you're always in the loop.",
    imageSrc: ContactUs,
    imageAlt: "Transparent Communication",
    card: "w-3/12 h-[280px]",
    classes: "h-[280px] w-[420px] contain-cover ",
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

export const buttonLabels = ["All", "Option 2", "Option 3", "Option 4"];

export const images = [
  { src: Award4, alt: "Picture of the author 1" },
  { src: Award1, alt: "Picture of the author 1" },
  { src: Award2, alt: "Picture of the author 2", classes: "h-[120px] w-[267.91px]" },
  { src: Award3, alt: "Picture of the author 3" },
  { src: Award5, alt: "Picture of the author 2" },
  { src: Award6, alt: "Picture of the author 3", classes: "h-[120px] w-[171.17px]" },
];

export const jobDetails = [
  {
    title: "Who Are We Looking For",
    descriptions: [
      "Passionate and driven individuals",
      "Experience in software development or related fields",
      "Excellent problem-solving skills and attention to detail.",
      "Ability to work in a fast-paced environment.",
      "Strong communication and teamwork abilities.",
      "Eagerness to learn and adapt to new technologies.",
    ],
  },
  {
    title: "What You Will Do",
    descriptions: [
      "Collaborate with cross-functional teams to define project requirements",
      "Write clean, scalable, and maintainable code",
      "Participate in code reviews and testing.",
      "Work closely with designers and product managers to create user-friendly applications.",
      "Troubleshoot and debug software issues.",
      "Stay up-to-date with industry trends and technologies.",
    ],
  },
  {
    title: "Required Skills",
    descriptions: [
      "Proficiency in JavaScript, React, and related technologies.",
      "Understanding of mobile development frameworks (React Native, Flutter).",
      "Familiarity with RESTful APIs and integration.",
      "Knowledge of version control systems (Git, GitHub).",
      "Experience with Agile development methodologies.",
      "Strong understanding of UI/UX principles.",
    ],
  },
];

export const jobs = [
  {
    id: 1,
    time: "24 hours ago",
    title: "UI/UX Designer",
    tags: ["Remote", "Full-time", "Senior level"],
    location: "Faisalabad, Pakistan",
    applyText: "Apply Now",
    jobDetails: [
      {
        title: "Who Are We Looking For",
        descriptions: [
          "Passionate and driven individuals",
          "Experience in software development or related fields",
          "Excellent problem-solving skills and attention to detail.",
          "Ability to work in a fast-paced environment.",
          "Strong communication and teamwork abilities.",
          "Eagerness to learn and adapt to new technologies.",
        ],
      },
      {
        title: "What You Will Do",
        descriptions: [
          "Collaborate with cross-functional teams to define project requirements",
          "Write clean, scalable, and maintainable code",
          "Participate in code reviews and testing.",
          "Work closely with designers and product managers to create user-friendly applications.",
          "Troubleshoot and debug software issues.",
          "Stay up-to-date with industry trends and technologies.",
        ],
      },
      {
        title: "Required Skills",
        descriptions: [
          "Proficiency in JavaScript, React, and related technologies.",
          "Understanding of mobile development frameworks (React Native, Flutter).",
          "Familiarity with RESTful APIs and integration.",
          "Knowledge of version control systems (Git, GitHub).",
          "Experience with Agile development methodologies.",
          "Strong understanding of UI/UX principles.",
        ],
      },
    ],
  },
  {
    id: 2,
    time: "48 hours ago",
    title: "Frontend Developer",
    tags: ["Remote", "Part-time", "Junior level"],
    location: "Lahore, Pakistan",
    applyText: "Apply Now",
    jobDetails: [
      {
        title: "Who Are We Looking For",
        descriptions: [
          "Passionate and driven individuals",
          "Experience in software development or related fields",
          "Excellent problem-solving skills and attention to detail.",
          "Ability to work in a fast-paced environment.",
          "Strong communication and teamwork abilities.",
          "Eagerness to learn and adapt to new technologies.",
        ],
      },
      {
        title: "What You Will Do",
        descriptions: [
          "Collaborate with cross-functional teams to define project requirements",
          "Write clean, scalable, and maintainable code",
          "Participate in code reviews and testing.",
          "Work closely with designers and product managers to create user-friendly applications.",
          "Troubleshoot and debug software issues.",
          "Stay up-to-date with industry trends and technologies.",
        ],
      },
    ],
  },
  {
    id: 3,
    time: "72 hours ago",
    title: "Backend Developer",
    tags: ["On-site", "Full-time", "Mid level"],
    location: "Karachi, Pakistan",
    applyText: "Apply Now",
    jobDetails: [
      {
        title: "Who Are We Looking For",
        descriptions: [
          "Passionate and driven individuals",
          "Experience in software development or related fields",
          "Excellent problem-solving skills and attention to detail.",
          "Ability to work in a fast-paced environment.",
          "Strong communication and teamwork abilities.",
          "Eagerness to learn and adapt to new technologies.",
        ],
      },
      {
        title: "What You Will Do",
        descriptions: [
          "Collaborate with cross-functional teams to define project requirements",
          "Write clean, scalable, and maintainable code",
          "Participate in code reviews and testing.",
          "Work closely with designers and product managers to create user-friendly applications.",
          "Troubleshoot and debug software issues.",
          "Stay up-to-date with industry trends and technologies.",
        ],
      },
      {
        title: "Required Skills",
        descriptions: [
          "Proficiency in JavaScript, React, and related technologies.",
          "Understanding of mobile development frameworks (React Native, Flutter).",
          "Familiarity with RESTful APIs and integration.",
          "Knowledge of version control systems (Git, GitHub).",
          "Experience with Agile development methodologies.",
          "Strong understanding of UI/UX principles.",
        ],
      },
    ],
  },
  {
    id: 4,
    time: "24 hours ago",
    title: "UI/UX Designer",
    tags: ["Remote", "Full-time", "Senior level"],
    location: "Faisalabad, Pakistan",
    applyText: "Apply Now",
    jobDetails: [
      {
        title: "Who Are We Looking For",
        descriptions: [
          "Passionate and driven individuals",
          "Experience in software development or related fields",
          "Excellent problem-solving skills and attention to detail.",
          "Ability to work in a fast-paced environment.",
          "Strong communication and teamwork abilities.",
          "Eagerness to learn and adapt to new technologies.",
        ],
      },
      {
        title: "What You Will Do",
        descriptions: [
          "Collaborate with cross-functional teams to define project requirements",
          "Write clean, scalable, and maintainable code",
          "Participate in code reviews and testing.",
          "Work closely with designers and product managers to create user-friendly applications.",
          "Troubleshoot and debug software issues.",
          "Stay up-to-date with industry trends and technologies.",
        ],
      },
    ],
  },
  {
    id: 5,
    time: "48 hours ago",
    title: "Frontend Developer",
    tags: ["Remote", "Part-time", "Junior level"],
    location: "Lahore, Pakistan",
    applyText: "Apply Now",
    jobDetails: [
      {
        title: "Who Are We Looking For",
        descriptions: [
          "Passionate and driven individuals",
          "Experience in software development or related fields",
          "Excellent problem-solving skills and attention to detail.",
          "Ability to work in a fast-paced environment.",
          "Strong communication and teamwork abilities.",
          "Eagerness to learn and adapt to new technologies.",
        ],
      },
      {
        title: "What You Will Do",
        descriptions: [
          "Collaborate with cross-functional teams to define project requirements",
          "Write clean, scalable, and maintainable code",
          "Participate in code reviews and testing.",
          "Work closely with designers and product managers to create user-friendly applications.",
          "Troubleshoot and debug software issues.",
          "Stay up-to-date with industry trends and technologies.",
        ],
      },
    ],
  },
  {
    id: 6,
    time: "72 hours ago",
    title: "Backend Developer",
    tags: ["On-site", "Full-time", "Mid level"],
    location: "Karachi, Pakistan",
    applyText: "Apply Now",
    jobDetails: [
      {
        title: "Who Are We Looking For",
        descriptions: [
          "Passionate and driven individuals",
          "Experience in software development or related fields",
          "Excellent problem-solving skills and attention to detail.",
          "Ability to work in a fast-paced environment.",
          "Strong communication and teamwork abilities.",
          "Eagerness to learn and adapt to new technologies.",
        ],
      },
      {
        title: "What You Will Do",
        descriptions: [
          "Collaborate with cross-functional teams to define project requirements",
          "Write clean, scalable, and maintainable code",
          "Participate in code reviews and testing.",
          "Work closely with designers and product managers to create user-friendly applications.",
          "Troubleshoot and debug software issues.",
          "Stay up-to-date with industry trends and technologies.",
        ],
      },
    ],
  },
];

export const jobInfo = [
  { title: "Industry", result: "IT Services" },
  { title: "Work experience", result: "6+ Years" },
  { title: "Location", result: "Faisalabad, Pakistan" },
  { title: "Role", result: "On-Site" },
];
