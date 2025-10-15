"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
  imageSrc: string;
}

const projects: Project[] = [
  {
    title: "LMS",
    description:
      "LMS is a learning management system for managing online and offline training courses.",
    techStack: ["TypeScript", "Redux", "RTQ", "React Router", "Sass", "RestApi"],
    githubUrl: "https://github.com/SultanovMusa/lms",
    liveDemoUrl: "https://lms-eta-black.vercel.app/courses",
    imageSrc: "/assets/i.webp",
  },
  {
    title: "Aksoft.dev",
    description:
      "Aksoft provides services for creating high-tech web apps, websites and mobile apps, focusing on solving business challenges at scale.",
    techStack: ["TypeScript", "Next.js", "RTQ", "Pages Router", "Sass", "RestApi"],
    githubUrl: "https://github.com/SultanovMusa/nextAksoft",
    liveDemoUrl: "https://aksoft.dev/",
    imageSrc: "/assets/aksoft.webp",
  },
  {
    title: "Peak-Space",
    description:
      "A social platform simplifying the process of connecting with friends and discovering new content through real-time updates.",
    techStack: ["TypeScript", "Redux", "RTQ", "React Router", "Sass", "RestApi"],
    githubUrl: "https://github.com/SultanovMusa/Peak-Space",
    liveDemoUrl: "https://lms-eta-black.vercel.app/courses",
    imageSrc: "/assets/peakSpace.png",
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-white dark:bg-zinc-900 text-zinc-100 overflow-hidden">
      {/* === GRID FON === */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* === DARK GRADIENT LAYER === */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/40 to-black/70 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        {/* === TITLE === */}
        <div className="text-center mb-24 space-y-4">
          <div className="flex justify-center items-center gap-3">
            <div className="w-12 h-px bg-zinc-700"></div>
            <span className="text-zinc-400 text-sm tracking-widest uppercase">
              Portfolio Work
            </span>
            <div className="w-12 h-px bg-zinc-700"></div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-light tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
        </div>

        {/* === PROJECT LIST === */}
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent opacity-30"></div>

          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center gap-16 mb-32 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30"></div>

              <div className="w-full md:w-1/2 group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all duration-500 shadow-xl">
                <div className="relative">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={700}
                    height={400}
                    className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-md hover:bg-blue-500/30 hover:border-blue-400 transition-all"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      className="flex items-center gap-2 px-5 py-2 bg-white/10 border border-white/20 rounded-md hover:bg-purple-500/30 hover:border-purple-400 transition-all"
                    >
                      <FaArrowUpRightFromSquare /> Live
                    </a>
                  </div>
                </div>

                {/* Text */}
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <p className="text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-md bg-blue-500/20 border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* empty side */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
