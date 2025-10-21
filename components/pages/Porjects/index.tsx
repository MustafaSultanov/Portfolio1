"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import foto from '../../../public/assets/projects/Orange2.jpeg'

interface Project {
	title: string;
	description: string;
	techStack: string[];
	githubUrl: string;
	liveDemoUrl: string;
	imageSrc: any;
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
		imageSrc: foto,
	},
	{
		title: "Aksoft.dev",
		description:
			"Aksoft provides services for creating high-tech web apps, websites and mobile apps, focusing on solving business challenges at scale.",
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
		imageSrc: "/assets/aksoft.webp",
	},
	{
		title: "Peak-Space",
		description:
			"A social platform simplifying the process of connecting with friends and discovering new content through real-time updates.",
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
	},
];

export default function Projects() {
	return (
		<section className="relative min-h-screen bg-gradient-to-b from-white via-zinc-100 to-zinc-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-black overflow-hidden">
			<div className="absolute inset-0 backdrop-blur-3xl bg-white/10 dark:bg-zinc-950/30 pointer-events-none"></div>

			<div className="absolute top-32 left-1/3 w-[700px] h-[700px] bg-white/10 dark:bg-blue-900/20 blur-[160px] rounded-full opacity-40"></div>

			<div className="relative z-10 container mx-auto px-6 py-24">
				<div className="text-center mb-24 space-y-4">
					<div className="flex justify-center items-center gap-3">
						<div className="w-12 h-px bg-zinc-300/40 dark:bg-zinc-600/50"></div>
						<span className="text-zinc-500 dark:text-zinc-400 text-sm tracking-widest uppercase">
							Portfolio Work
						</span>
						<div className="w-12 h-px bg-zinc-300/40 dark:bg-zinc-600/50"></div>
					</div>

					<h1 className="text-5xl lg:text-6xl font-light tracking-tight">
						<span className="text-zinc-500 dark:text-zinc-400 text-transparent">
							Projects
						</span>
					</h1>
				</div>

				<div className="relative">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent"></div>

					{projects.map((project, index) => (
						<div
							key={index}
							className={`relative flex flex-col md:flex-row items-center gap-16 mb-32 ${
								index % 2 === 0 ? "md:flex-row-reverse" : ""
							}`}>
							<div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30"></div>

							<div className="w-full md:w-1/2 group relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-white/40 dark:bg-zinc-800/30 border border-white/20 dark:border-white/10 hover:border-blue-400/40 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)]">
								<div className="relative">
									<Image
										src={project.imageSrc}
										alt={project.title}
										width={700}
										height={400}
										className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
									/>

									<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
										<a
											href={project.githubUrl}
											target="_blank"
											className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
											<FaGithub /> Code
										</a>
										<a
											href={project.liveDemoUrl}
											target="_blank"
											className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all">
											<FaArrowUpRightFromSquare /> Live
										</a>
									</div>
								</div>

								{/* --- Text --- */}
								<div className="p-6 space-y-4">
									<h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
										{project.title}
									</h2>
									<p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-3 pt-2">
										{project.techStack.map((tech, i) => (
											<span
												key={i}
												className="px-3 py-1 text-sm rounded-full bg-white/40 dark:bg-zinc-700/40 border border-white/20 dark:border-zinc-600/40 backdrop-blur-md">
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>

							<div className="hidden md:block md:w-1/2"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
