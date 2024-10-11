import {
  ContactUs,
  DigitalTransformation,
  FacebookIcon,
  LinkedinIcon,
  OnlineReview,
  TeamWork,
  Award1,
  Award2,
  Award3,
  Award4,
  Award5,
  Award6,
  LaunchCardIcon1,
  LaunchCardIcon2,
  LaunchCardIcon3,
  LaunchCardIcon4,
} from "@/public";
import { ACD, MAC, MAD, NAD, NID, UDS, WDS, Dev, Software } from "@/public/ServiceImages";
import { FileManagerApp, GiftShopWeb, ToDoListApp, WallpaperDownloader, C, GatsBy, React, Ex, TechIcon } from "@/public/PortfolioImages";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  // { name: "Portfolio", path: "/portfolio" },
  { name: "About Us", path: "/about" },
  // { name: "Blogs", path: "/blogs" },
  { name: "Careers", path: "/careers" },
];

export const socialLinks = [
  { Icon: FacebookIcon, link: "https://www.facebook.com/exeonicdotcom" },
  { Icon: LinkedinIcon, link: "https://www.linkedin.com/company/exeonic" },
];

export const others = [
  { label: "Privacy Policy", path: "/privacyPolicy" },
  { label: "Where to Find Us?", path: "/contact" },
  { label: "Term & Conditions", path: "/termAndConditions" },
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

export const testimonialData = [
  {
    title: "What they says",
    description:
      "I hired Ahsan to help develop a mobile and web app in the health and wellness space. We had a large codebase and quite a lot of legacy code for Ahsan to familiarize himself with. Ahsan was incredibly quick to not only master the code, but also make suggestions for greater efficiencies, fewer packages, and better design, all of which improved our app’s performance and ease of use within the first few months of his hire. Ahsan immediately proved to be a key contributor to the team, not only with his vast knowledge, deep expertise, and reliable work, but also with his clear, kind, and thorough mode of communication. He is a true joy to work with. In short, Ahsan is the ideal team member. He is dedicated, hard working, tackles every challenge and task with friendly and effective gusto, and still has the bandwidth to troubleshoot, problem solve, and improve on aspects of our app that we haven’t even noted. I highly recommend him for any project and any team, big or small. His contributions are invaluable. Thank you, Ahsan!",
    imageSrc: OnlineReview,
    developerName: "Brooklyn Simmons",
    developerTitle: "Webflow Developer",
  },
  {
    title: "Our Thougts",
    description:
      "I brought Ahmad on board to help develop a mobile and web app in the health and wellness space, which involved a large, complex codebase with quite a bit of legacy code. Ahmad was quick to not only get up to speed but also make valuable recommendations for improving the app’s performance by reducing dependencies, optimizing code efficiency, and refining the overall design. In just a few months, his contributions had a significant impact. Ahmad quickly established himself as a key player on the team, combining his vast technical expertise with an outstanding work ethic. His communication was always clear, thoughtful, and thorough, making him an absolute pleasure to collaborate with. Ahmad approaches every task with enthusiasm and care, proactively solving issues and enhancing aspects of the app we hadn’t even considered. His dedication and ability to tackle challenges head-on make him an essential asset to any team. I highly recommend Ahmad for any project—his work speaks for itself, and his contributions are invaluable. Thank you, Ahmad!I hired Ahmad to assist in developing a mobile and web app in the health and wellness space. We had a substantial codebase with many legacy components, and Ahmad was impressively fast in not only mastering the code but also offering suggestions that enhanced efficiency, reduced dependencies, and improved the app's overall design. Within a few months of his hire, Ahmad's contributions led to noticeable improvements in performance and user experience. Ahmad quickly became a key member of the team, leveraging his deep expertise, wide knowledge base, and reliable work ethic. His communication was always clear, considerate, and detailed, making collaboration smooth and enjoyable. Ahmad tackles every challenge with enthusiasm and precision, while consistently finding time to troubleshoot, problem-solve, and refine areas of the app that we hadn’t even identified. His dedication, hard work, and insightful contributions make him an invaluable asset to any team or project. I highly recommend Ahmad for any role, large or small—his impact is truly remarkable. Thank you, Ahmad!",
    imageSrc: OnlineReview,
    developerName: "Muhammad Ahmad",
    developerTitle: "React Developer",
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
      "Create and enhance mobile applications using React Native",
      "Solid background in software development.",
      "Familiarity with RESTful APIs and integration.",
      "Knowledge of version control systems (Git, GitHub).",
      "Excellent communication and teamwork skills.",
      "Strong understanding of UI/UX principles.",
    ],
  },
];

export const jobs = [
  {
    id: 1,
    time: "24 hours ago",
    title: "React ",
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
    ],
  },
  {
    id: 2,
    time: "20 hours ago",
    title: "React Native",
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
    ],
  },
];

export const jobInfo = [
  { title: "Industry", result: "IT Services" },
  { title: "Work experience", result: "6+ Years" },
  { title: "Location", result: "Faisalabad, Pakistan" },
  { title: "Role", result: "On-Site" },
];

export const frequentlyAskedQuestions = [
  {
    question: "What services does Exeonic offer?",
    answer: ["Exeonic specializes in full-stack development using the MERN stack (MongoDB, Express, React, Node.js) and mobile app development with React Native."],
  },
  {
    question: "How experienced is Exeonic in MERN stack development?",
    answer: ["Our team at Exeonic has extensive experience in building scalable, robust applications using the MERN stack, delivering optimized solutions for web-based platforms."],
  },
  {
    question: "Can Exeonic develop cross-platform mobile apps?",
    answer: ["Yes, Exeonic develops cross-platform mobile applications using React Native, ensuring that your app works seamlessly on both Android and iOS devices."],
  },
  {
    question: "How does Exeonic ensure project success?",
    answer: ["Exeonic leverages agile methodologies, focusing on iterative development and frequent client feedback to ensure projects stay aligned with business goals."],
  },
];

export const launchCards = [
  {
    duration: "1 week",
    icon: LaunchCardIcon1,
    title: "Planning & Estimation",
    description: "Collaborate with our team to refine your idea and plan the prototype features.",
  },
  {
    duration: "Week 2",
    icon: LaunchCardIcon2,
    title: "Wireframes & Design",
    description: "Designs (UI/UX) Development to visualize your concept and gather valuable feedback from you.",
  },
  {
    duration: "Week 2-5",
    icon: LaunchCardIcon3,
    title: "Development & Testing",
    description: "Continuous cycles of development & testing to transform prototype into functional product.",
  },
  {
    duration: "Week 6",
    icon: LaunchCardIcon4,
    title: "Production Readiness & Launch",
    description: "Conduct thorough testing and launch your product on public stores, reaching your target audience quickly.",
  },
];

export const portfolioData = [
  {
    title: "WALLIFY",
    images: [FileManagerApp, GiftShopWeb, ToDoListApp],
    tags: ["Mobile App", "Web App", "Backend", "Backend", "Backend"],
    description: "Wallpaper downloader App for both iOS & Android.",
    details:
      "At Exonic, we believe in harnessing the power of technology to transform businesses. With over seven years of experience, we specialize in delivering innovative and customized software solutions. Our mission is to empower companies by offering them robust digital tools that streamline operations, boost efficiency, and foster growth.",
    tools: [
      { icon: Ex, name: "Express.js" },
      { icon: GatsBy, name: "GraphQL" },
      { icon: TechIcon, name: "Next.js" },
      { icon: C, name: "C#" },
      { icon: React, name: "React.js" },
    ],
  },
  {
    title: "Project Two",
    images: [WallpaperDownloader, ToDoListApp, FileManagerApp],
    tags: ["Mobile App", "Web App"],
    details:
      "At Exonic, we believe in harnessing the power of technology to transform businesses. With over seven years of experience, we specialize in delivering innovative and customized software solutions. Our mission is to empower companies by offering them robust digital tools that streamline operations, boost efficiency, and foster growth.",

    tools: [
      { icon: Ex, name: "Express.js" },
      { icon: GatsBy, name: "GraphQL" },
      { icon: TechIcon, name: "Next.js" },
      { icon: C, name: "C#" },
      { icon: React, name: "React.js" },
    ],
  },
  {
    title: "Project Three",
    images: [GiftShopWeb, WallpaperDownloader, ToDoListApp],
    tags: ["Web App"],
    details:
      "At Exonic, we believe in harnessing the power of technology to transform businesses. With over seven years of experience, we specialize in delivering innovative and customized software solutions. Our mission is to empower companies by offering them robust digital tools that streamline operations, boost efficiency, and foster growth.",

    tools: [
      { icon: Ex, name: "Express.js" },
      { icon: GatsBy, name: "GraphQL" },
      { icon: TechIcon, name: "Next.js" },
      { icon: C, name: "C#" },
      { icon: React, name: "React.js" },
    ],
  },
];
