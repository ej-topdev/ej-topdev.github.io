import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Full Stack Developer",
    location: "One Beyond ♦ Manchester, UK",
    description:
      "Developed diverse services including SAP solutions, Cloud Engineering, and Web Development",
    icon: React.createElement(CgWorkAlt),
    date: "09/2022 – 05/2024",
  },
  {
    title: "Senior Full Stack Developer",
    location: "Amazon ♦ Copenhagen, DK",
    description:
      "Initiated a e-commerce platform from scratch using Node, Angular, Java, and Spring Boot",
    icon: React.createElement(CgWorkAlt),
    date: "03/2022 – 08/2022",
  },
  {
    title: "Software Developer",
    location: "Implevista ♦ Farum, DK",
    description:
      "Developed over 5 projects, spanning various sectors including e-commerce, real-estate, education, and healthcare",
    icon: React.createElement(CgWorkAlt),
    date: "07/2019 – 02/2022",
  },
  {
    title: "Full Stack Developer",
    location: "DICEUS ♦ Copenhagen, DK",
    description:
      "Developed over 5 projects, spanning various sectors including technology, e-commerce, insurance, banking, and healthcare",
    icon: React.createElement(CgWorkAlt),
    date: "08/2017 – 06/2019",
  },
] as const;

export const projectsData = [
  {
    title: "The Good Exchange",
    description:
      "The Good Exchange, initially a platform for administering Greenham Trust's charitable grants, was expanded to connect other funders with suitable causes. To enhance scalability and functionality, the platform was migrated to Azure cloud by One Beyond, along with implementing a new fee-charging model to ensure 100% of funds go to the intended causes. This migration included consolidating databases and transforming the user experience, ultimately enhancing the platform's capacity to channel over £13 million in funding to 1,800 UK-based charitable organizations.",
    tags: [],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:angular-icon",
      "logos:spring-icon",
      "logos:azure-icon",
      "logos:bootstrap",
    ],
    imageUrl: cryptoCrowdImg,
    urlLink: "https://thegoodexchange.com/",
  },
  {
    title: "Haven",
    description:
      "Haven, part of the Bourne Leisure group, undertook a significant overhaul of its legacy web systems to enhance performance and user experience, resulting in response times improving by up to 50 times and eliminating regular critical outages. The project, executed by One Beyond, involved migrating to a modern content management system, utilizing Elasticsearch for optimized search functionality, and leveraging Next.js for fast, user-friendly web applications. This transformation has not only resolved performance issues but also introduced new features that significantly boosted revenue by several million pounds annually.",
    tags: [],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:react",
      "logos:spring-icon",
      "logos:aws",
      "logos:tailwindcss-icon",
    ],
    imageUrl: cryptoCrowdImg,
    urlLink: "https://www.haven.com/",
  },
  {
    title: "Marsh & McLennan",
    description:
      "Developed a new client-facing application for Marsh & McLennan to enhance the efficiency of their real estate operations. Utilizing a microservices architecture with NodeJS, the application integrates with other Marsh Eurosys systems, replacing outdated legacy applications. This tool streamlines real estate management, boosts revenue, and improves client retention through a superior user experience.",
    tags: [],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:react",
      "logos:mongodb-icon",
      "logos:docker-icon",
    ],
    imageUrl: cryptoCrowdImg,
    urlLink: "https://www.haven.com/",
  },
  {
    title: "Therapeutic Frontiers",
    description:
      "Therapeutic Frontiers improved its data management by partnering with One Beyond to develop a bespoke Laboratory Information Management System (LIMS) deployed in AWS. This system ensures perpetual, traceable, and searchable data storage, adhering to regulatory requirements and client reporting formats.",
    tags: [],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:react",
      "logos:mongodb-icon",
      "logos:aws",
    ],
    imageUrl: cryptoCrowdImg,
    urlLink: "https://www.haven.com/",
  },
] as const;

export const skillsData = [
  {
    name: "Javascript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "Angular",
    icon: "logos:angular-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Express",
    icon: "simple-icons:express",
  },
  {
    name: "Spring Boot",
    icon: "logos:spring-icon",
  },
  {
    name: "Django",
    icon: "logos:django-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Redis",
    icon: "logos:redis",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
  },
  {
    name: "MongoDB",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Kubernetes",
    icon: "logos:kubernetes",
  },
  {
    name: "GraphQL",
    icon: "logos:graphql",
  },
  {
    name: "Jest",
    icon: "logos:jest",
  },
  {
    name: "Mocha",
    icon: "logos:mocha",
  },
  {
    name: "Jasmine",
    icon: "logos:jasmine",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Azure",
    icon: "logos:azure-icon",
  },
  {
    name: "GCP",
    icon: "logos:google-cloud",
  },
  {
    name: "Terraform",
    icon: "logos:terraform-icon",
  },
] as const;
