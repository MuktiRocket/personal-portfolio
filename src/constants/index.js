import { FrontSide } from "three";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  codelogicx,
  bluwebmedia,
  postgresql,
  mysql,
  php,
  laravel,
  smartrealtor,
  netflixgpt,
  dalos,
  geeky,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Node JS Developer",
    icon: backend,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Git",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Codelogics Technologies Private Limited",
    icon: codelogicx,
    iconBg: "#383E56",
    date: "June 2021 - June 2023",
    points: [
      "A Full-Stack Web Developer in Node.js, React.js, SQL, and Git is responsible for developing, testing, and deploying web applications that meet customer requirements and industry standards.",
      "Developed and implemented multiple connectors for the dalos website, enabling seamless integration with various external APIs such as Microsoft Graph API, Management API, Zoom API, AWS API, etc.",
      "Built a Jira-like web application for a client in the Middle East (Riyadh) using Hapi.js and React, with a role-based login and approval mechanism and REST APIs. Led the development effort and collaborated with a team of designers and developers to deliver a high-quality product on time and within budget.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Developer Associate",
    company_name: "Tesla",
    icon: bluwebmedia,
    iconBg: "#E6DEDD",
    date: "July 2021 - Present",
    points: [
      "A Senior Full-Stack Web Developer specializing in Node.js, React.js, SQL, and Git, is entrusted with the development, testing, and deployment of web applications, ensuring they align with customer requirements and industry standards.",
      "An enterprise-level web application for the management of agents and agencies, encompassing features such as agent administration, analytical tools, payment and subscription processing, website generation, and other relevant functionalities.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SmartRealtor 360",
    description:
      "In today's dynamic and competitive business landscape, managing a team of agents efficiently and effectively is crucial for the success of any agency or organization. The Comprehensive Agents and Agency Management Web Application is a sophisticated solution designed to streamline the myriad aspects of agent management, analytics, payment and subscription handling, and even website generation. This professional web application empowers agencies with the tools they need to excel in a rapidly evolving industry.",
    tags: [
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: smartrealtor,
    source_code_link: "https://control-sr360.smartrealtor-demo.com/",
  },
  {
    name: "Kcasp",
    description:
      "Built a Jira-like web application for a client in the Middle East (Riyadh) using Hapi.js and React, with a role-based login and approval mechanism and REST APIs. Led the development effort and collaborated with a team of designers and developers to deliver a high-quality product on time and within budget.Worked closely with the client to understand their requirements and ensure that the application met their needs.Implemented best practices for code quality, scalability, and maintainability, including automated testing, continuous integration, and code reviews.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "hapijs",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MuktiRocket/kasp",
  },
  {
    name: "Dalos",
    description:
      "The Dalos Website Integration Hub is a dynamic solution designed to enhance the capabilities of the Dalos website by seamlessly integrating it with a variety of external APIs. This project has successfully implemented multiple connectors, allowing the website to interact with key services like the Microsoft Graph API, Management API, Zoom API, AWS API, and more. The result is a versatile and powerful platform that leverages external data and functionalities to provide an enriched user experience.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
      {
        name: "hapijs",
        color: "orange-text-gradient",
      },
      {
        name: "restapis",
        color: "green-text-gradient",
      },
    ],
    image: dalos,
    source_code_link: "https://dalos.co/",
  },
  {
    name: "Geeky",
    description:
      "Geeky is an innovative e-commerce platform that combines the power of technology with the convenience of online shopping and service bookings. Built using Nest.js and Next.js for the frontend, and powered by a MySQL database, this project not only offers a wide range of products for purchase but also provides users with the unique ability to schedule appointments for electrical repair services. Additionally, Geeky integrates two popular payment gateways, Stripe and Razorpay, to ensure a seamless and secure transaction experience for customers.",
    tags: [
      {
        name: "nestjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient",
      },
      {
        name: "razorpay",
        color: "green-text-gradient",
      },
    ],
    image: geeky,
    source_code_link: "https://geekyservices.in/",
  },
  {
    name: "Kutchina",
    description:
      "The Kutchina Homemakers Pvt. Ltd. BSS (Business Support System) Claim Management System is a custom web application designed to streamline the process of managing expense claims from Kutchina salespersons. This user-friendly platform allows salespersons to create claims for their expenditures, which are then subject to review and approval by their respective managers and accountants. By automating and centralizing this process, the system enhances efficiency, transparency, and financial control within the organization.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "sql server",
        color: "pink-text-gradient",
      },
      {
        name: "blade template",
        color: "orange-text-gradient",
      },
      {
        name: "jquery",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MuktiRocket/kutchina",
  },
  {
    name: "Netflix GPT (Clone)",
    description:
      "The Netflix Clone with GPT-Based Movie Search is a web application developed using React.js, Firebase Authentication, Tailwind CSS, and Redux Toolkit. It emulates the look and feel of the popular Netflix streaming platform and adds an innovative twist with a GPT-based search feature. Users can sign up, log in, and explore a vast library of movies while enjoying the convenience of intelligent search powered by GPT technology.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "orange-text-gradient",
      },
    ],
    image: netflixgpt,
    source_code_link:
      "https://github.com/MuktiRocket/Netflix-Clone-with-ChatGPT",
  },
];

export { services, technologies, experiences, testimonials, projects };
