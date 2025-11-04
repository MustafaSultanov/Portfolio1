"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import aksoft from "../../../public/assets/projects/aksoft.dev.png";
import akylman from "../../../public/assets/projects/akulman.edu.kg.png";
import { motion } from "framer-motion";

interface Project {
	title: string;
	description: string;
	techStack: string[];
	githubUrl: string;
	liveDemoUrl: string;
	imageSrc: any;
	number: string;
}

const projects: Project[] = [
	{
		title: "Akylman",
		description:
			"LMS is a learning management system for ",
		techStack: [
			"TypeScript",
			"Redux",
			"RTQ",
			"React Router",
			"Sass",
			"RestApi",
		],
		githubUrl: "https://github.com/SultanovMusa/lms",
		liveDemoUrl: "https://lms-eta-black.vercel.app/courses",
		imageSrc: aksoft,
		number: "01",
	},
	{
		title: "Aksoft.dev",
		description:
			"Aksoft provides services for creating high-tech web apps, websites and mobile apps.",
		techStack: [
			"TypeScript",
			"Next.js",
			"RTQ",
			"Pages Router",
			"Sass",
			"RestApi",
		],
		githubUrl: "https://github.com/SultanovMusa/nextAksoft",
		liveDemoUrl: "https://aksoft.dev/",
		imageSrc: akylman,
		number: "02",
	},
	{
		title: "Peak-Space",
		description:
			"A social platform simplifying the process of connecting with friends and discovering new content.",
		techStack: [
			"TypeScript",
			"Redux",
			"RTQ",
			"React Router",
			"Sass",
			"RestApi",
		],
		githubUrl: "https://github.com/SultanovMusa/Peak-Space",
		liveDemoUrl: "https://lms-eta-black.vercel.app/courses",
		imageSrc: "/assets/peakSpace.png",
		number: "03",
	},
];

export default function Projects() {
	return (
		<section className="relative bg-white dark:bg-slate-950 py-32 px-6 overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-tr from-purple-300 to-blue-400 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
				<div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-pink-300 to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto space-y-48">
				<div className="text-center mb-24">
					<h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-4">
						Projects
					</h1>
					<p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
						Exploring my work through interactive, creative, and modern web
						applications.
					</p>
				</div>

				<div className="flex flex-col gap-40">
					{projects.map((project, idx) => (
						<div
							key={project.number}
							className={`relative flex flex-col md:flex-row ${
								idx % 2 === 1 ? "md:flex-row-reverse" : ""
							} items-center gap-12`}>
							<div className="absolute -top-12 left-1/2 transform -translate-x-1/2 md:-translate-x-0 md:top-0 md:left-0 text-8xl font-black text-slate-200 dark:text-slate-800 opacity-20">
								{project.number}
							</div>

							<div className="relative w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl transition-shadow duration-700 group">
								<motion.div
									className="relative w-full h-[300px] overflow-hidden"
									whileHover={{ y: -200 }} // px менен жазуу жакшы
									transition={{ duration: 2, ease: "easeInOut" }}>
									<Image
										src={project.imageSrc}
										alt={project.title}
										fill // fill колдонсоңуз, object-cover менен автоматтык туура болот
										className="object-cover object-top min-h-screen"
										sizes="(max-width: 768px) 100vw, 50vw"
									/>
								</motion.div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none"></div>
							</div>

							<div className="w-full md:w-1/2 flex flex-col gap-6 p-8 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50 rounded-3xl">
								<h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
									{project.title}
								</h2>
								<p className="text-slate-600 dark:text-slate-400 leading-relaxed">
									{project.description}
								</p>

								<div className="grid grid-cols-2 md:grid-cols-3 gap-2">
									{project.techStack.map((tech, i) => (
										<div
											key={i}
											className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
											<div className="w-2 h-2 rounded-full bg-blue-500"></div>
											{tech}
										</div>
									))}
								</div>

								<div className="flex justify-between items-center mt-4">
									<div className="flex gap-4">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
											<FaGithub size={20} />{" "}
											<span className="underline text-sm">View Code</span>
										</a>
										<a
											href={project.liveDemoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors">
											<span className="underline text-sm">Live Demo</span>{" "}
											<FaArrowUpRightFromSquare size={16} />
										</a>
									</div>
									<div className="text-xs text-slate-400 dark:text-slate-600 font-mono">
										{project.number} / 03
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<style jsx>{`
				@keyframes pulse-slow {
					0%,
					100% {
						transform: scale(1);
						opacity: 0.3;
					}
					50% {
						transform: scale(1.05);
						opacity: 0.5;
					}
				}
				.animate-pulse-slow {
					animation: pulse-slow 6s infinite;
				}
			`}</style>
		</section>
	);
}
