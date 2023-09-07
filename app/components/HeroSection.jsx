"use client";

// HeroSection.jsx

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <h1 className="px=6 py-6 text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 ">
          Hello! I&apos;m Curtis, and
        </span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <div></div>
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
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
        <p>This will be some text</p>
      </div>
      <div>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 hover:bg-slate-200 text-white">
          More Info
        </button>
        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 hover:bg-slate-800 text-white mt-3 ">
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
            New Thing
          </span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
