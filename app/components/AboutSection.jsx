"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Git / GitHub</li>
        <li>Python</li>    
        <li>HTML, CSS</li>
        <li>JavaScript</li>
        <li>MongoDB</li>
        <li>Express</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Platforms",
    id: "platforms",
    content: (
      <ul className="list-disc pl-2">
        <li>Linux (Ubuntu)</li>
        <li>MacOS</li>
        <li>Microsoft: DOS 6.22 through Windows 11</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Scrum.org PSM I (Scrum Master)</li>
        <li>Scrum.org PSPO I (Product Owner)</li>
        <li>Linux Professional Institute (LPIC)</li>
        <li>CompTIA A+, Network+</li>
        <li>Microsoft Certified Solutions Associate (MCSA)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Laser Optics Technology</li>
        <li>Luna Vocational Institute, Las Vegas, NM</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/desk.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("platforms")}
              active={tab === "platforms"}
            >
              {" "}
              Platforms{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
             </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;