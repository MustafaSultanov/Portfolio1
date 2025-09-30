"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import photo1 from '../../../public/assets/peakSpace.png'
import photo2 from '../../../public/assets/aksoft.webp'
import photo3 from '../../../public/assets/i.webp'

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "LMS Platform",
    imageSrc:photo3,
    description:
      "Modern LMS platform with interactive learning modules, user authentication, and instructor dashboards. Optimized for speed and accessibility.",
    techStack: ["TypeScript", "Next.js (App Router)", "Redux Toolkit (RTQ)", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/SultanovMusa/lms",
    liveDemoUrl: "https://lms-eta-black.vercel.app/courses",
    color: "cyan",
  },
  {
    title: "Aksoft.dev Web Agency",
    imageSrc:photo2,
    description:
      "High-tech web solutions portfolio with a focus on scalable architecture and elegant, responsive UI/UX. Includes blog and contact forms.",
    techStack: ["TypeScript", "Next.js (Pages Router)", "Prisma", "Sass/SCSS", "GSAP"],
    githubUrl: "https://github.com/SultanovMusa/nextAksoft",
    liveDemoUrl: "https://aksoft.dev/",
    color: "pink",
  },
  {
    title: "Peak-Space Social Network",
    imageSrc:photo1,
    description:
      "A real-time social platform featuring connection management, content posting, and feed discovery. Built for high concurrency.",
    techStack: ["TypeScript", "React", "Redux", "RTQ", "Node.js/Express", "MongoDB"],
    githubUrl: "https://github.com/SultanovMusa/Peak-Space",
    liveDemoUrl: "https://lms-eta-black.vercel.app/courses",
    color: "green",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "cyan":
      return {
        gradient: "from-cyan-500 to-blue-500",
        shadow: "shadow-cyan-500/30",
        border: "border-cyan-500/50",
      };
    case "pink":
      return {
        gradient: "from-pink-500 to-purple-500",
        shadow: "shadow-pink-500/30",
        border: "border-pink-500/50",
      };
    case "green":
      return {
        gradient: "from-lime-400 to-green-500",
        shadow: "shadow-green-500/30",
        border: "border-green-500/50",
      };
    default:
      return {
        gradient: "from-zinc-500 to-gray-500",
        shadow: "shadow-zinc-500/30",
        border: "border-zinc-500/50",
      };
  }
};

const ProjectItem = ({ p, idx }: { p: typeof projects[0]; idx: number }) => {
  const itemRef = useRef(null);
  const colors = getColorClasses(p.color);
  const isOdd = idx % 2 !== 0;

  // GSAP/ScrollTrigger for entrance animation (subtle slide-up)
  useEffect(() => {
    gsap.fromTo(
      itemRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 85%", // Анимация экрандын 85% жеткенде башталат
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative flex flex-col lg:flex-row items-center gap-10 py-16 border-b border-zinc-700/50 last:border-b-0 ${
        isOdd ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Card */}
      <motion.div
        className={`relative w-full lg:w-3/5 p-2 rounded-xl border border-zinc-700/50 transition-all duration-500 group`}
        whileHover={{
          scale: 1.01,
          boxShadow: `0 0 25px -5px rgba(100, 100, 100, 0.5)`, // Жөнөкөй көлөкө
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src={p.imageSrc}
          alt={p.title}
          width={900}
          height={500}
          className="w-full h-[320px] object-cover rounded-lg"
        />
        
        {/* Links Overlay */}
        <div className="absolute inset-2 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-zinc-900/80 rounded-lg backdrop-blur-sm">
          <a
            href={p.githubUrl}
            target="_blank"
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-zinc-100 text-sm font-medium border border-zinc-600 hover:border-white transition-all duration-300 bg-zinc-800 hover:bg-zinc-700/80`}
          >
            <FaGithub className={`text-xl bg-clip-text text-transparent bg-gradient-to-r ${colors.gradient}`} />
            Code
          </a>
          <a
            href={p.liveDemoUrl}
            target="_blank"
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-zinc-100 text-sm font-medium border border-zinc-600 hover:border-white transition-all duration-300 bg-zinc-800 hover:bg-zinc-700/80`}
          >
            <FaArrowUpRightFromSquare className={`text-xl bg-clip-text text-transparent bg-gradient-to-r ${colors.gradient}`} />
            Live Demo
          </a>
        </div>
      </motion.div>

      {/* Text Content */}
      <div className="w-full lg:w-2/5 space-y-6">
        <h2
          className={`text-4xl lg:text-5xl font-light tracking-tight leading-snug`}
        >
          <span className={`bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
            {p.title}
          </span>
        </h2>
        
        <p className="text-zinc-400 text-lg font-light leading-relaxed">
          {p.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {p.techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
              viewport={{ once: true }}
              className={`px-3 py-1 text-xs rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 font-mono`}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  // Parallax cursor effect алынып салынды, себеби ал "скромный" стилге туура келбейт.

  return (
    <section className="relative min-h-screen bg-zinc-900 text-white py-24 overflow-hidden">
      
      {/* Subtle Background Grid (HomePages компонентине окшоштурулду) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-8 relative z-10">
        <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-center mb-20">
          <span className="bg-gradient-to-r from-zinc-400 to-zinc-200 bg-clip-text text-transparent">
            Featured Projects
          </span>
          <p className="text-xl font-normal text-zinc-500 pt-2">— Professional Work & Case Studies —</p>
        </h1>

        <div className="space-y-4">
          {projects.map((p, idx) => (
            <ProjectItem key={p.title} p={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}