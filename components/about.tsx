"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  I am currently pursuing my B.Tech in{" "}
  <span className="font-medium">Computer Science (HCIGT)</span> at IIIT Nagpur. I have a strong passion for{" "}
  <span className="font-medium">Software development</span> and problem-solving. I have worked on multiple projects, including{" "}
  <span className="font-medium">an Ai call Analysis</span> and a{" "} blog App. {" "}
  <span className="font-medium">My favorite part of programming</span> is tackling challenging problems and optimizing solutions. I{" "}
  <span className="underline">enjoy</span> the thrill of debugging and making efficient, scalable applications. My core stack is{" "}
  <span className="font-medium">
    MERN (MongoDB, Express, React, Node.js)
  </span>, and I am also exploring in{" "}
  <span className="font-medium">Next and Django</span>. I am currently looking for{" "}
  <span className="font-medium">internship opportunities</span> to further enhance my skills.
</p>

<p>
  <span className="font-medium">When I'm not coding</span>, I like to make Music.{" "}
</p>
    </motion.section>
  );
}
