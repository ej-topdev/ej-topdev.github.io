import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import haven from "@/public/projects/haven.png";
import MarshMcLennan from "@/public/projects/MarshMcLennan.png";
import the_good_exchange from "@/public/projects/the_good_exchange.png";
import therapeutic_frontiers from "@/public/projects/therapeutic_frontiers.png";
import woodfry from "@/public/Projects/woodfry.jpg";
import palmers from "@/public/Projects/palmers.png";

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
      "The Good Exchange, initially designed to administer Greenham Trust's charitable grants, evolved into a charity funding matchmaking portal to connect funders with suitable causes. I migrated the platform to Azure, enhancing its functionality and scalability, and updated the fee-charging model to ensure transparency and that 100% of funds and donations reach the intended causes. This project involved consolidating databases, transforming the donor journey and user experience, and integrating external systems for deeper partnerships across the charitable sector.",
    tags: [],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:angular-icon",
      "logos:spring-icon",
      "logos:azure-icon",
      "logos:bootstrap",
    ],
    imageUrl: the_good_exchange,
    urlLink: "https://thegoodexchange.com/",
  },
  {
    title: "Haven",
    description:
      "To enhance web performance and user experience, I overhauled Haven’s outdated legacy systems to handle high volumes of enquiries and improve search and sales. By migrating the platform to modern cloud infrastructure and optimizing search functionality with technologies like Elasticsearch and Next.js, response times improved by up to 50 times, and system reliability transformed from regular critical outages to none. These improvements have significantly increased revenue, enhanced customer experience, and provided the ability to experiment with and fine-tune product offerings.",
    tags: [],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:react",
      "logos:spring-icon",
      "logos:aws",
      "logos:tailwindcss-icon",
    ],
    imageUrl: haven,
    urlLink: "https://www.haven.com/",
  },
  {
    title: "Marsh & McLennan",
    description:
      "I developed a new client-facing application for Marsh Real Estate to boost efficiency by replacing obsolete legacy systems with a modern, microservices architecture. The application communicates with Marsh Eurosys applications using RabbitMQ and Spazio file transfer tools, facilitating real estate movement management and improving user experience. This has led to increased revenues and client retention for Marsh Real Estate.",
    tags: [],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:react",
      "logos:mongodb-icon",
      "logos:docker-icon",
    ],
    imageUrl: MarshMcLennan,
    urlLink: "https://www.marshmclennan.com/",
  },
  {
    title: "Therapeutic Frontiers",
    description:
      "I developed a bespoke Laboratory Information Management System (LIMS) for Therapeutic Frontiers to improve efficiency in capturing and storing respiratory test data. The system, deployed in AWS, ensures data adherence to regulatory requirements, with perpetual, timestamped, and traceable storage, and searchable records exportable into client formats. This solution replaces the inefficient paper-based process and supports ongoing business growth with future-proofing and continuous support.",
    tags: [],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:react",
      "logos:mongodb-icon",
      "logos:aws",
    ],
    imageUrl: therapeutic_frontiers,
  },
  {
    title: "IV Commerce Sass Platform",
    description:
      "IV Commerce is a SaaS ecommerce platform in Bangladesh, enabling small businesses to easily run their online stores without the need for technical expertise or server management. The platform, built using ReactJs, NextJs, and NodeJs with MongoDB, offers customizable themes and features for both single and multivendor structures, focusing on user and seller experience. Key functionalities include site customization, product and stock management, vendor permissions, order handling, special event management, and real-time customer messaging, allowing business owners to focus solely on growth.",
    tags: [],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:angular-icon",
      "logos:mongodb-icon",
      "logos:docker-icon",
    ],
    imageUrl: woodfry,
    urlLink: "https://woodfry.com.bd/",
  },
  {
    title: "Pentaho and microstrategy",
    description:
      "We conducted a comprehensive audit of Palmers Textil AG's Pentaho and MicroStrategy ETL processes, identifying critical issues and providing actionable improvement suggestions. Our team reviewed and optimized data integration, reporting systems, and documentation to enhance operational efficiency. Implementing these recommendations will streamline ETL processes, improve data reliability, and align reporting with departmental goals.",
    tags: [],
    icons: [
      "logos:javascript",
      "logos:nodejs-icon",
      "logos:react",
      "logos:spring-icon",
      "logos:mongodb-icon",
      "logos:docker-icon",
    ],
    imageUrl: palmers,
    urlLink: "https://www.palmers.at/",
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
