import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer Intern, Fas10",
    location: "Mumbai, India",
    description:
      "Optimized software strategies to enhance system performance using React.js, JavaScript, and Appwrite, leading to a 25% increase in client satisfaction scores. Transitioned legacy Excel-based workflows to a modern web-based solution, improving scalability and achieving 80% adoption within a month.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
 
] as const;

export const projectsData = [
  {
    title: "Ai Call Analysis",
    description:
      "Call management platform that tracks and analyzes employee communication.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Flutter", "Node.js", "Express"],
    imageUrl: corpcommentImg,
    link:"https://github.com/imsoul11/Genathon"
  },
  {
    title: "Blog Web-App",
    description:
      "Responsive blog web application with comprehensive CRUD functionality.",
    tags: ["React", "JavaScript", "Appwrite", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    link: "https://github.com/imsoul11/blogApp",
  },
  {
    title: "Video Streaming App Backend",
    description:
      "Designed scalable RESTful APIs to manage videos, comments and likes.",
    tags: ["JWT", "MongoDb", "Node.js", "Postman", "Express", "Multer"],
    imageUrl: wordanalyticsImg,
    link: "https://github.com/imsoul11/majorbackend",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Mongoose",
  "MongoDB",
  "Redux",
  "Appwrite",
  "Express",
  "MySQL",
  "OOPS",
  "Data Structures",
  "DBMS"
] as const;
