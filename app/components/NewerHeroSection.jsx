"use client";

// NewerHeroSection.jsx

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const NewerHeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 ">
              Hello! I&apos;m Curtis, and
            </span>
          </h1>
          <div>
            <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold">
              <TypeAnimation
                sequence={[
                  "I'm an aficionado of all things tech,",
                  1000,
                  "Scrum.org certified (PSM I and PSPO I),",
                  1000,
                  "a Level 2 Desktop support consultant,",
                  1000,
                  "an AWS Certified Cloud Practitioner,",
                  1000,
                  "a fan of Python,",
                  1000,
                  "Linux Professional Institute certified,",
                  1000,
                  "having fun learning JavaScript,",
                  250,
                  "and HTML,",
                  250,
                  "and CSS,",
                  1000,
                  "an aspiring Full Stack engineer,",
                  1000,
                  "gaining experience with the MERN stack.",
                  1000,
                ]}
                wrapper="span"
                speed={40}
                cursor={false}
                style={{ display: "inline-block" }}
                omitDeletionAnimation={true}
                repeat={Infinity}
              />
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewerHeroSection;
