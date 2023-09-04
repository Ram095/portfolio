import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAngular, FaReact } from "react-icons/fa";
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
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer",
    location: "Wipro Technologies, Bangalore, IN",
    description:
      "I worked here as a full stack developer for confluence application. I was responsible for development of new modules while maintaining and improving the existing ones.",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - 2017",
  },
  {
    title: "Angular Developer",
    location: "Bravura Technologies, Bangalore, IN",
    description:
      "Worked as a Front-end Developer responsible for building responsive UI for new applications as per customer needs and also enhancing the existing applications focussing on cutting edge technologies like Angular + and supporting the team with UI development.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2018",
  },
  {
    title: "UI/UX Designer & Developer",
    location: "UrbanGround GmBH, Bengaluru, IN",
    description:
      "I was part of the founding team where I worked on the product from scratch designing the wireframes, prototyping, analysing user data and building the entire application from ground up using Angular.",
    icon: React.createElement(FaAngular),
    date: "2018 - 2022",
  },
  {
    title: "Product Designer & Developer",
    location: "DevOn Global, Bengaluru, IN",
    description:
      "I have lead multiple design projects single handedly and worked in React.",
    icon: React.createElement(FaAngular),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AuxoInvest",
    description:
      "I worked as a UI/UX Designer and a frontend developer on this startup project for 1 year where users can invest in startups",
    tags: ["React", "Next.js", "SQL Server", "React-bootstrap", "Razorpay", "SendGrid", "AWS"],
    imageUrl: corpcommentImg,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "RxJS",
  "Jest",
  "Jasmine",
  "Next.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Angular Material",
  "SQL Server",
  "Framer Motion",
  "Node.js"
] as const;
