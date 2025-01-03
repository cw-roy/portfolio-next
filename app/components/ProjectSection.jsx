"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js portfolio",
    description: "My current web project",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cw-roy/portfolio-next",
    previewUrl: "https://portfolio-next-np8m-git-main-cw-roy.vercel.app/",
  },
  {
    id: 2,
    title: "Python media converter v2.1",
    description: "Now with hot freshness...Python / FFMpeg video converter",
    image: "/images/projects/mediaconv.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/cw-roy/mediaconv_2.1",
    previewUrl: "/images/projects/mediaconv.png",
  },
  {
    id: 3,
    title: "Python media converter",
    description: "Uses Python and FFMpeg to convert video files",
    image: "/images/projects/mediaconv.png",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/cw-roy/mediaconv_CL/tree/main",
    previewUrl: "/images/projects/mediaconv.png",
  },
  {
    id: 4,
    title: "One of my first web projects",
    description: "A simple e-commerce site mockup",
    image: "/images/projects/fse_bootstrap.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cw-roy/fse_bootstrap",
    previewUrl: "https://cw-roy.github.io/fse_bootstrap/",
  },
  {
    id: 5,
    title: "A JavaScript class project",
    description: "This is a basic dice roller",
    image: "/images/projects/dice_roll.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cw-roy/fse_diceRoll",
    previewUrl: "https://cw-roy.github.io/fse_diceRoll/",
  },
  {
    id: 6,
    title: "Another JavaScript class project",
    description: "A sports game (with sound effects!)",
    image: "/images/projects/hatchet.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cw-roy/fse_jsSportsGame",
    previewUrl: "https://cw-roy.github.io/fse_jsSportsGame/",
  },
  {
    id: 7,
    title: "The Magic 8 Ball",
    description: "Silly, but sometimes useful",
    image: "/images/projects/eightball.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cw-roy/fse_magic8Ball",
    previewUrl: "https://cw-roy.github.io/fse_magic8Ball/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
