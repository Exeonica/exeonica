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
  Phillip,
  Kiersten,
  Fazle,
  reactIcon,
  pythonIcon,
  gatsByIcon,
  flutterIcon,
  csharpIcon,
  javaScriptIcon,
  iosIcon,
} from "@/public";
import { ACD, MAC, MAD, NAD, NID, UDS, WDS, Dev, Software } from "@/public/ServiceImages";
import { FileManagerApp, GiftShopWeb, ToDoListApp, WallpaperDownloader, C, GatsBy, React, Ex, TechIcon } from "@/public/PortfolioImages";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  // { name: "Portfolio", path: "/portfolio" },
  { name: "About Us", path: "/about" },
  { name: "Blogs", path: "/blogs" },
  { name: "Careers", path: "/careers" },
];

export const socialLinks = [
  { Icon: FacebookIcon, link: "https://www.facebook.com/exeonicdotcom" },
  { Icon: LinkedinIcon, link: "https://www.linkedin.com/company/exeonic" },
];

export const others = [
  { label: "Privacy Policy", path: "/privacyPolicy" },
  { label: "Term & Conditions", path: "/termAndConditions" },
  { label: "Where to Find Us?", path: "/contact" },
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
    description:
      "I worked with the Exeonic team to help develop a mobile and web app in the health and wellness space. We had a large codebase and quite a lot of legacy code for Ahsan to familiarize himself with. Ahsan was incredibly quick to not only master the code, but also make suggestions for greater efficiencies, fewer packages, and better design, all of which improved our app’s performance and ease of use within the first few months of his hire. Exeonic's immediately proved to be a key contributor to our team, not only with his vast knowledge, deep expertise, and reliable work, but also with his clear, kind, and thorough mode of communication. I highly recommend a team for any project and any team, big or small.  Thank you! ",
    imageSrc: Kiersten,
    developerName: "Kiersten Jakobsen",
    developerTitle: "Founder of Yoga & Fitness",
  },
  {
    description:
      "I worked with Exeonic on the Simfee project, involving web, mobile, and backend development. They impressed me with his speed and efficiency, delivering a first prototype in just four weeks. His handling of complex integrations, like stripe and crypto payments, was exceptional. With Ahsan's and his team's expertise, we launched on web, Playstore, and Appstore seamlessly. I highly recommend these guys for any development project.",
    imageSrc: Fazle,
    developerName: "Muhammad Fazle",
    developerTitle: "Serial Entrepreneur",
  },
  {
    description:
      "Exeonic team was patient and was an absolute pleasure to work with. His work is impeccable and I would recommend it to anyone. I look forward to working with him in the near future.",
    imageSrc: Phillip,
    developerName: "Phillip Mostert",
    developerTitle: "Founder of RoadRunner",
  },
];

export const services = [
  {
    id: 1,
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
    technologies: [
      {
        title: "React Native",
        image: reactIcon,
      },
      {
        title: "Flutter",
        image: flutterIcon,
      },
      {
        title: "Python",
        image: pythonIcon,
      },
      {
        title: "IOS",
        image: iosIcon,
      },
      {
        title: "Javascript",
        image: javaScriptIcon,
      },
      {
        title: "C#",
        image: csharpIcon,
      },
      {
        title: "Gats By",
        image: gatsByIcon,
      },
    ],
  },
  {
    id: 2,
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
    technologies: [
      {
        title: "React Native",
        image: reactIcon,
      },
      {
        title: "Flutter",
        image: flutterIcon,
      },
      {
        title: "Python",
        image: pythonIcon,
      },
      {
        title: "IOS",
        image: iosIcon,
      },
      {
        title: "Javascript",
        image: javaScriptIcon,
      },
      {
        title: "C#",
        image: csharpIcon,
      },
      {
        title: "Gats By",
        image: gatsByIcon,
      },
    ],
  },
  {
    id: 3,
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
    technologies: [
      {
        title: "React Native",
        image: reactIcon,
      },
      {
        title: "Flutter",
        image: flutterIcon,
      },
      {
        title: "Python",
        image: pythonIcon,
      },
      {
        title: "IOS",
        image: iosIcon,
      },
      {
        title: "Javascript",
        image: javaScriptIcon,
      },
      {
        title: "C#",
        image: csharpIcon,
      },
      {
        title: "Gats By",
        image: gatsByIcon,
      },
    ],
  },
  {
    id: 4,
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
    technologies: [
      {
        title: "React Native",
        image: reactIcon,
      },
      {
        title: "Flutter",
        image: flutterIcon,
      },
      {
        title: "Python",
        image: pythonIcon,
      },
      {
        title: "IOS",
        image: iosIcon,
      },
      {
        title: "Javascript",
        image: javaScriptIcon,
      },
      {
        title: "C#",
        image: csharpIcon,
      },
      {
        title: "Gats By",
        image: gatsByIcon,
      },
    ],
  },
  {
    id: 5,
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
    technologies: [
      {
        title: "React Native",
        image: reactIcon,
      },
      {
        title: "Flutter",
        image: flutterIcon,
      },
      {
        title: "Python",
        image: pythonIcon,
      },
      {
        title: "IOS",
        image: iosIcon,
      },
      {
        title: "Javascript",
        image: javaScriptIcon,
      },
      {
        title: "C#",
        image: csharpIcon,
      },
      {
        title: "Gats By",
        image: gatsByIcon,
      },
    ],
  },
  {
    id: 6,
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
    technologies: [
      {
        title: "React Native",
        image: reactIcon,
      },
      {
        title: "Flutter",
        image: flutterIcon,
      },
      {
        title: "Python",
        image: pythonIcon,
      },
      {
        title: "IOS",
        image: iosIcon,
      },
      {
        title: "Javascript",
        image: javaScriptIcon,
      },
      {
        title: "C#",
        image: csharpIcon,
      },
      {
        title: "Gats By",
        image: gatsByIcon,
      },
    ],
  },
  {
    id: 7,
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
    technologies: [
      {
        title: "React Native",
        image: reactIcon,
      },
      {
        title: "Flutter",
        image: flutterIcon,
      },
      {
        title: "Python",
        image: pythonIcon,
      },
      {
        title: "IOS",
        image: iosIcon,
      },
      {
        title: "Javascript",
        image: javaScriptIcon,
      },
      {
        title: "C#",
        image: csharpIcon,
      },
      {
        title: "Gats By",
        image: gatsByIcon,
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

export const jobs = [
  {
    id: 1,
    time: "24 hours ago",
    title: "React Developer",
    tags: ["Full-time"],
    location: "Faisalabad, Pakistan",
    applyText: "Apply Now",
    jobDetails: [
      {
        title: "Who Are We Looking For",
        descriptions: [
          "Passionate and driven individuals",
          "0.5-1 years of experience in software development or related fields",
          "Excellent problem-solving skills and attention to detail.",
          "Ability to work in a fast-paced environment.",
          "Strong communication and teamwork abilities.",
          "Eagerness to learn and adapt to new technologies.",
          "Must be a graduate.",
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
    ],
  },
  {
    id: 2,
    time: "20 hours ago",
    title: "React Native Developer",
    tags: ["Full-time"],
    location: "Faisalabad, Pakistan",
    applyText: "Apply Now",
    jobDetails: [
      {
        title: "Who Are We Looking For",
        descriptions: [
          "Passionate and driven individuals",
          "0.5-1 years of experience in software development or related fields",
          "Excellent problem-solving skills and attention to detail.",
          "Ability to work in a fast-paced environment.",
          "Strong communication and teamwork abilities.",
          "Eagerness to learn and adapt to new technologies.",
          "Must be a graduate.",
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
    ],
  },
  {
    id: 3,
    time: "20 hours ago",
    title: "React Intern",
    tags: ["Full-time"],
    location: "Faisalabad, Pakistan",
    applyText: "Apply Now",
    jobDetails: [
      {
        title: "Who Are We Looking For",
        descriptions: [
          "Passionate and driven individuals",
          "Knowledge of basic concepts of OOP and DSA",
          "Excellent problem-solving skills and attention to detail.",
          "Ability to work in a fast-paced environment.",
          "Strong communication and teamwork abilities.",
          "Eagerness to learn and adapt to new technologies.",
          "Must be a graduate.",
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
    ],
  },
  {
    id: 4,
    time: "25 hours ago",
    title: "React Native Intern",
    tags: ["Full-time"],
    location: "Faisalabad, Pakistan",
    applyText: "Apply Now",
    jobDetails: [
      {
        title: "Who Are We Looking For",
        descriptions: [
          "Passionate and driven individuals",
          "Knowledge of basic concepts of OOP and DSA",
          "Excellent problem-solving skills and attention to detail.",
          "Ability to work in a fast-paced environment.",
          "Strong communication and teamwork abilities.",
          "Eagerness to learn and adapt to new technologies.",
          "Must be a graduate.",
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
    ],
  },
  {
    id: 5,
    time: "20 hours ago",
    title: "UI/UX Designer Intern",
    tags: ["Full-time"],
    location: "Faisalabad, Pakistan",
    applyText: "Apply Now",
    jobDetails: [
      {
        title: "Who Are We Looking For",
        descriptions: [
          "Passionate and driven individuals",
          "Knowledge of basic concepts of OOP and DSA",
          "Excellent problem-solving skills and attention to detail.",
          "Ability to work in a fast-paced environment.",
          "Strong communication and teamwork abilities.",
          "Eagerness to learn and adapt to new technologies.",
          "Must be a graduate.",
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
    ],
  },
];

export const jobInfo = [
  { title: "Industry", result: "IT Services" },
  { title: "Work experience", result: "0.5+ Years" },
  { title: "Location", result: "Faisalabad, Pakistan" },
  { title: "Role", result: "On-Site" },
];

export const frequentlyAskedQuestions = [
  { question: "How often will we communicate throughout the project?", answer: "We'll maintain regular communication through weekly meetings, as-needed contact, and a project management tool." },
  { question: "Who will be my primary point of contact?", answer: "A dedicated project manager will be your primary point of contact." },
  { question: "What kind of post-launch support do you offer?", answer: "We offer ongoing maintenance, bug fixes, and updates." },
  { question: "How will you handle updates and maintenance?", answer: "We'll work with you on a maintenance plan and prioritize addressing issues promptly." },
  { question: "What is your policy for bug fixes and technical issues?", answer: "We'll prioritize bug fixes and technical issues to minimize downtime and ensure your software operates reliably." },
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
