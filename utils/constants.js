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
  Fazle,
  reactIcon,
  pythonIcon,
  flutterIcon,
  javaScriptIcon,
  iosIcon,
  xdIcon,
  xcodeIcon,
  typescriptIcon,
  tensorflowIcon,
  primereProIcon,
  nodeJsIcon,
  nextJsIcon,
  kotlinIcon,
  firebaseIcon,
  figmaIcon,
  dialogflowIcon,
  androidStudioIcon,
  BlogsImage,
  BlogPost,
  BlogImage1,
  blogImage2,
  mongoDbIcon,
  photoshopIcon,
  jiraIcon,
} from "@/public";
import { ACD, MAC, MAD, NAD, NID, UDS, WDS, Dev, Software } from "@/public/ServiceImages";
import { Deepmove, Dukan, Dukan1, Deepmove1, Mathani, Mathani1 } from "@/public/PortfolioImages";
import { Android, AppleLogo, Chat, CreditCard, Guarantee, Map, Notification, SocialMedia } from "@/public/ProjectEstimation/index";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  // { name: "Portfolio", path: "/portfolio/all" },
  { name: "About Us", path: "/about" },
  { name: "Blogs", path: "/blogs/all" },
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
      "I worked with Exeonic on the Simfee project, involving web, mobile, and backend development. They impressed me with his speed and efficiency, delivering a first prototype in just four weeks. His handling of complex integrations, like stripe and crypto payments, was exceptional. With this team's expertise, we launched on web, Playstore, and Appstore seamlessly. I highly recommend these guys for any development project.",
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
    subTitle: "AI Chatbot Development: Transforming Customer Interaction",
    subDesc:
      "Our AI Chatbot Development service focuses on creating intelligent chatbots that enhance customer interaction and streamline business processes. We ensure that your chatbot is intuitive, responsive, and capable of handling complex queries.",
    subImage: Dev,
    offers: [
      {
        title: "Custom Chatbot Solutions",
        image: Dev,
      },
      {
        title: "Natural Language Processing",
        image: BlogImage1,
      },
      {
        title: "Integration with Existing Systems",
        image: blogImage2,
      },
      {
        title: "Chatbot Analytics",
        image: BlogPost,
      },
      {
        title: "Maintenance & Support",
        image: BlogsImage,
      },
    ],
    technologies: [
      {
        title: "TensorFlow",
        image: tensorflowIcon,
      },
      {
        title: "Dialogflow",
        image: dialogflowIcon,
      },
      {
        title: "Python",
        image: pythonIcon,
      },
      {
        title: "Node.js",
        image: nodeJsIcon,
      },
      {
        title: "JavaScript",
        image: javaScriptIcon,
      },
    ],
  },
  {
    id: 2,
    icon: MAD,
    title: "Mobile App Development",
    desc: "Leveraging the power of JS/TS with React and React Native for efficient cross-platform app development. Single codebase for multiple platforms.",
    image: Software,
    subTitle: "Mobile App Development: Crafting Seamless Experiences",
    subDesc:
      "Our Mobile App Development service is dedicated to building high-performance apps that provide seamless user experiences across all devices. We focus on scalability, security, and user-centric design.",
    subImage: Dev,
    offers: [
      {
        title: "Custom Mobile App Development",
        image: Dev,
      },
      {
        title: "Cross-platform Solutions",
        image: BlogImage1,
      },
      {
        title: "UI/UX Design",
        image: BlogsImage,
      },
      {
        title: "App Testing & QA",
        image: blogImage2,
      },
      {
        title: "Maintenance & Support",
        image: BlogPost,
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
        title: "Typescript",
        image: typescriptIcon,
      },
      {
        title: "Kotlin",
        image: kotlinIcon,
      },
      {
        title: "JavaScript",
        image: javaScriptIcon,
      },
    ],
  },
  {
    id: 3,
    icon: MAC,
    title: "Mobile App Consulting",
    desc: "We help finalize app concepts, advise on platform compatibility, plan project tasks, and optimize development costs.",
    image: Software,
    subTitle: "Mobile App Consulting: Strategic Guidance for Success",
    subDesc: "Our Mobile App Consulting service provides expert guidance to ensure your app's success. We offer strategic advice on app development, platform selection, and cost optimization.",
    subImage: Dev,
    offers: [
      {
        title: "App Concept Finalization",
        image: Dev,
      },
      {
        title: "Platform Compatibility Analysis",
        image: BlogImage1,
      },
      {
        title: "Project Planning",
        image: blogImage2,
      },
      {
        title: "Cost Optimization",
        image: BlogsImage,
      },
      {
        title: "Market Strategy",
        image: BlogPost,
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
        title: "JavaScript",
        image: javaScriptIcon,
      },
    ],
  },
  {
    id: 4,
    icon: WDS,
    title: "Web Development Services​",
    desc: "Leveraging the power of JS/TS with React, NextJS, Expo & Remix for efficient & responsive Web App development.",
    image: Software,
    subTitle: "Web Development Services: Building the Future of Web",
    subDesc: "Our Web Development Services focus on creating responsive, high-performance web applications that meet the demands of modern users. We prioritize speed, security, and scalability.",
    subImage: Dev,
    offers: [
      {
        title: "Custom Web Development",
        image: Dev,
      },
      {
        title: "E-commerce Solutions",
        image: BlogImage1,
      },
      {
        title: "Progressive Web Apps",
        image: blogImage2,
      },
      {
        title: "Web App Maintenance",
        image: BlogsImage,
      },
      {
        title: "SEO Optimization",
        image: BlogPost,
      },
    ],
    technologies: [
      {
        title: "React",
        image: reactIcon,
      },
      {
        title: "Next.js",
        image: nextJsIcon,
      },
      {
        title: "Node.js",
        image: nodeJsIcon,
      },
      {
        title: "TypeScript",
        image: typescriptIcon,
      },
      {
        title: "JavaScript",
        image: javaScriptIcon,
      },
      {
        title: "Mongodb",
        image: mongoDbIcon,
      },
      {
        title: "Firebase",
        image: firebaseIcon,
      },
    ],
  },
  {
    id: 5,
    icon: UDS,
    title: "UI/UX Design Services",
    desc: "Our designers create easy-to-use UX and visually attractive UI that drive engagement, user acceptance and conversions.",
    image: Software,
    subTitle: "UI/UX Design Services: Crafting Engaging Interfaces",
    subDesc: "Our UI/UX Design Services focus on creating intuitive and visually appealing interfaces that enhance user engagement and satisfaction. We prioritize user-centric design principles.",
    subImage: Dev,
    offers: [
      {
        title: "User Research & Analysis",
        image: Dev,
      },
      {
        title: "Wireframing & Prototyping",
        image: BlogImage1,
      },
      {
        title: "Visual Design",
        image: blogImage2,
      },
      {
        title: "Usability Testing",
        image: BlogPost,
      },
      {
        title: "Design System Development",
        image: BlogsImage,
      },
    ],
    technologies: [
      {
        title: "Figma",
        image: figmaIcon,
      },
      {
        title: "Adobe XD",
        image: xdIcon,
      },
      {
        title: "Primere Pro",
        image: primereProIcon,
      },
      {
        title: "Adobe Photoshop",
        image: photoshopIcon,
      },
      {
        title: "Jira",
        image: jiraIcon,
      },
    ],
  },
  {
    id: 6,
    icon: NID,
    title: "Native iOS Development",
    desc: "Our team of iOS developers has significant experience in custom iOS app development services and will help your iOS app run smoothly",
    image: Software,
    subTitle: "Native iOS Development: Excellence in iOS Apps",
    subDesc:
      "Our Native iOS Development service delivers high-quality iOS applications that are optimized for performance and user experience. We ensure seamless integration with the latest iOS features.",
    subImage: Dev,
    offers: [
      {
        title: "Custom iOS App Development",
        image: Dev,
      },
      {
        title: "Swift Development",
        image: BlogImage1,
      },
      {
        title: "App Store Deployment",
        image: blogImage2,
      },
      {
        title: "iOS App Testing",
        image: BlogPost,
      },
      {
        title: "Maintenance & Support",
        image: BlogsImage,
      },
    ],
    technologies: [
      {
        title: "Javascript",
        image: javaScriptIcon,
      },
      {
        title: "Typescript",
        image: typescriptIcon,
      },
      {
        title: "Xcode",
        image: xcodeIcon,
      },
      {
        title: "iOS",
        image: iosIcon,
      },
      {
        title: "React Native",
        image: reactIcon,
      },
      // {
      //   title: "Firebase",
      //   image: firebaseIcon,
      // },
    ],
  },
  {
    id: 7,
    icon: NAD,
    title: "Native Android Development",
    desc: "Our team of Android developers has significant experience in custom Android app development services and will help your Android app run smoothly",
    image: Software,
    subTitle: "Native Android Development: Excellence in Android Apps",
    subDesc:
      "Our Native Android Development service delivers high-quality Android applications that are optimized for performance and user experience. We ensure seamless integration with the latest Android features.",
    subImage: Dev,
    offers: [
      {
        title: "Custom Android App Development",
        image: Dev,
      },
      {
        title: "Kotlin Development",
        image: BlogImage1,
      },
      {
        title: "Google Play Deployment",
        image: blogImage2,
      },
      {
        title: "Android App Testing",
        image: BlogsImage,
      },
      {
        title: "Maintenance & Support",
        image: BlogPost,
      },
    ],
    technologies: [
      {
        title: "React Native",
        image: reactIcon,
      },
      {
        title: "Javascript",
        image: javaScriptIcon,
      },
      {
        title: "Android Studio",
        image: androidStudioIcon,
      },
      {
        title: "Typescript",
        image: typescriptIcon,
      },
      {
        title: "Firebase",
        image: firebaseIcon,
      },
    ],
  },
];

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

export const portfolioFilters = ["Web App", "Mobile App"];

export const portfolioData = [
  {
    title: "Mathani",
    images: [Mathani, Mathani1],
    link: "https://play.google.com/store/apps/details?id=com.mathani",
    tags: ["Mobile App"],
    details:
      "The Quran Learning & Recitation App helps Muslims improve their Quran recitation and understanding by providing the full Quran in Arabic with translations in multiple languages. It features a user-friendly index for easy navigation through Surahs and Ayahs, and integrated references and Tafsir for deeper context. Designed for both beginners and experienced readers, the app offers an intuitive interface to enhance the learning experience.",

    tools: [
      { icon: reactIcon, name: "React Native" },
      { icon: firebaseIcon, name: "Firebase" },
      { icon: androidStudioIcon, name: "Android Studio" },
    ],
  },
];

export const options = [
  {
    id: 1,
    title: "What describes your needs best?",
    type: "radio",
    choices: ["Build an app from Scratch", "Outsource a development team", "Something else"],
  },
  {
    id: 2,
    title: "What kind of services are you looking for to support your project?",
    type: "checkbox",
    choices: ["Mobile Development", "Web Development"],
  },
  {
    id: 3,
    title: "What is the primary focus of the app you want to build?",
    type: "radio",
    choices: ["Ecommerce App", "Health App", "Social Media App", "Something else"],
  },
  {
    id: 4,
    type: "radioWithIcon",
    title: "What is the primary focus of the app you want to build?",
    choices: [
      { label: "IOS", icon: AppleLogo },
      { label: "Android", icon: Android },
      { label: "Both", icon: AppleLogo },
    ],
  },
  {
    id: 5,
    title: "What is your planned monetization strategy?",
    type: "radioWithTwoValues",
    choices: ["Subscription", "Ads", "Paid installation", "Freemium", "Percent from transaction cost", "I don't plan to monetize my app"],
  },
  {
    id: 6,
    title: "Do you need additional services?",
    type: "radioWithTwoValues",
    choices: ["UI/UX Design", "SEO/ASO", "Maintenance", "Consulting", "No Additional Services", "Other"],
  },
  {
    id: 7,
    type: "checkBoxWithIcon",
    title: "What features are essential for your app?",
    choices: [
      { label: "In App Purchase", icon: CreditCard },
      { label: "Push Notification", icon: Notification },
      { label: "Social media", icon: SocialMedia },
      { label: "User Authentcation", icon: Guarantee },
      { label: "Geolocation", icon: Map },
      { label: "Chat/Messaging", icon: Chat },
      { label: "Others", icon: Android },
    ],
  },
  {
    id: 8,
    title: "What is your preferred timeline for development?",
    type: "radio",
    choices: ["1 to 3 months", "2 to 6 months", "6 to 12 months", "Flexible"],
  },

  {
    id: 9,
    title: "How much money are you willing to invest in your project? (optional)",
    type: "radio",
    choices: ["10,000$", "20,000$", "0,000$", "30,000$"],
  },
  {
    id: 10,
    title: "Please provide the following details so we can send you a cost estimate.",
    type: "contact",
    placeholders: [
      { label: "Name", inputKey: "name", type: "text", placeholder: "Name" },
      { label: "Email", inputKey: "email", type: "email", placeholder: "Email   (Ex.example@gmail.com)" },
      { label: "WhatsApp Number", inputKey: "whatsappNumber", type: "tel", placeholder: "WhatsApp Number  (Ex. +923000000000 or 03000000000)" },
    ],
  },
];

export const articles = [
  "Exploring Generative AI in Content Creation",
  "Steering Clear of Common AI Writing Pitfalls",
  "Understanding ChatGPT Capabilities - Define Your Style",
  "Understand Your Readers",
  "Creating Quality AI-powered Blogs that Stand Out",
  "Conclusion: Embracing AI in Blog Creation",
  "Afterword: The AI Behind This Article",
];
