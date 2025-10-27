"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import aksoft from "../../../public/assets/projects/aksoft.dev.png";
import akylman from "../../../public/assets/projects/akulman.edu.kg.png";

interface Project {
	title: string;
	description: string;
	techStack: string[];
	githubUrl: string;
	liveDemoUrl: string;
	imageSrc: any;
	emoji: string;
	number: string;
}

const projects: Project[] = [
	{
		title: "Akylman",
		description:
			"LMS is a learning management system for managing online and offline training courses.",
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
		emoji: "📚",
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
		emoji: "🚀",
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
		emoji: "🌟",
		number: "03",
	},
];

export default function Projects() {
	return (
		<section className="relative bg-white dark:bg-slate-950 py-32 px-6 overflow-hidden">
			{/* Background Shapes */}
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

							<div className="relative w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl group hover:shadow-blue-500/30 transition-shadow duration-700">
								<div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
									<Image
										src={project.imageSrc}
										alt={project.title}
										width={1200}
										height={1200}
										className="w-full h-auto min-h-full object-cover object-top 
               transition-transform duration-[2000ms] ease-linear 
               group-hover:-translate-y-[calc(100%-400px)] md:group-hover:-translate-y-[calc(100%-500px)]"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none"></div>
								<div className="absolute bottom-6 left-6 text-6xl z-10">
									{project.emoji}
								</div>
								<div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/90 hover:scale-110 shadow-lg transition-transform">
										<FaGithub size={20} className="text-slate-900" />
									</a>
									<a
										href={project.liveDemoUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 hover:scale-110 shadow-lg transition-transform">
										<FaArrowUpRightFromSquare
											size={18}
											className="text-white"
										/>
									</a>
								</div>
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
						</divww>
					))}
				</div>

				<div className="mt-40 text-center">
					<div className="inline-flex flex-col items-center gap-6 p-12 rounded-3xl bg-gradient-to-br from-purple-100 via-blue-100 to-white dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700">
						<div className="text-5xl">🎯</div>
						<h3 className="text-3xl font-bold text-slate-900 dark:text-white">
							Interested in collaboration?
						</h3>
						<p className="text-slate-600 dark:text-slate-400 max-w-md">
							Let s create something extraordinary together
						</p>
						<a
							href="https://github.com/SultanovMusa"
							target="_blank"
							rel="noopener noreferrer"
							className="relative group inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl font-semibold overflow-hidden">
							<span className="relative z-10">Explore More Projects</span>
							<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-2xl"></div>
						</a>
					</div>
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
