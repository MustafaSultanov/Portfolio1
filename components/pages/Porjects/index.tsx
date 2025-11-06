"use client";

import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";

// 💡 ЛОКАЛДЫК СҮРӨТТӨРДҮ ИМПОРТТОО (Сүрөттүн чыныгы бийиктиги дал келишин текшериңиз!)
import aksoft from "../../../public/assets/projects/aksoft.dev.png";
import akylman from "../../../public/assets/projects/akulman.edu.kg.png";
import nefashion from "../../../public/assets/projects/nefashion.png";
import astro from "../../../public/assets/projects/astro.png";

interface Project {
	title: string;
	description: string;
	techStack: string[];
	githubUrl: string;
	liveDemoUrl: string;
	imageSrc: any;
	number: string;
	fullHeight: number;
}

const projects: Project[] = [
	{
		title: "Akylman",
		description:
			"«Акылман» Президенттик лицейи 2023-жылдан бери интеллектуалдык, илимий жана чыгармачыл потенциалдуу таланттуу балдарды окутуп, XXI кылымдын чакырыктарына ылайыктуу кеңири билим берүү тажрыйбасын сунуштайт.",
		techStack: ["TypeScript", "Next.js", "Tailwind css", "i18n", "Sass"],
		githubUrl: "https://github.com/SultanovMusa/nextAksoft",
		liveDemoUrl: "https://akylman.edu.kg/",
		imageSrc: akylman,
		number: "02",
		// Мисалы, бул жерде 1200 болсун.
		fullHeight: 1500,
	},
	{
		title: "Aksoft",
		description:
			"Aksoft — бул IT компания, үч демилгечи тарабынан негизделген жана инновациялык веб жана мобилдик чечимдерди түзөт. Биз талантка жана практикалык жакындоого баа берип, көйгөйлөрдү мүмкүнчүлүктөргө айландырабыз жана бизнеске санариптешүүдө жардам беребиз.",
		techStack: ["TypeScript", "Next js", "Scss"],

		githubUrl: "https://github.com/SultanovMusa/lms",
		liveDemoUrl: "https://aksoft.dev/",
		imageSrc: aksoft,
		number: "01",
		fullHeight: 2180,
	},

	{
		title: "Nefashion",
		description:
			"NEFASHION — 2018-жылы негизделген профессионалдык тигүү компаниясы. Биз кыз-келиндердин кийимдерин нөлдөн тартып жасап, өндүрүштүн бардык этаптарын аткарабыз. Компания 3 өндүрүштүк цехке ээ жана ар бир буюм жогорку сапат стандарттарына жооп берет.",
		techStack: ["TypeScript", "Next js", "Scss"],
		githubUrl: "https://github.com/SultanovMusa/Peak-Space",
		liveDemoUrl: "https://nefashion.vercel.app/",
		imageSrc: nefashion,
		number: "03",
		fullHeight: 1800,
	},
	{
		title: "Sultanov",
		description:
			"Sultanov — көп жылдык тажрыйбасы бар эмерек өндүрүүчү жана сатуу компаниясы. Биз кардарларыбыз үчүн кооз, бышык жана функционалдык эмеректерди сунуштайбыз.",
		techStack: ["TypeScript", "Astro", "Css"],
		githubUrl: "https://github.com/SultanovMusa/Peak-Space",
		liveDemoUrl: "https://furniture-omega-seven.vercel.app/",
		imageSrc: astro,
		number: "03",
		fullHeight: 2200,
	},
];

// Контейнердин туруктуу бийиктиги
const CONTAINER_HEIGHT = 300;

export default function Projects() {
	return (
		<section className="relative bg-white dark:bg-slate-950 py-32 px-6 overflow-hidden">
			<div className="absolute inset-0 pointer-events-none">
				{/* ... (Animation background) */}
				<div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-tr from-purple-300 to-blue-400 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
				<div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-pink-300 to-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto space-y-48">
				<div className="mb-24">
					<div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
						<div className="w-8 sm:w-10 md:w-12 h-px bg-gradient-to-r from-blue-500 to-blue-400"></div>
						<span className="text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-mono tracking-wider uppercase">
							My Projects
						</span>
					</div>

					<div className="space-y-3 sm:space-y-4">
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none">
							<span className="block bg-gradient-to-r from-[#1a1a1a] to-[#3a3a3a] dark:from-white dark:to-gray-300 bg-clip-text text-transparent font-normal">
								Projects
							</span>
						</h1>
						<div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-blue-500 via-gray-300 to-transparent dark:via-gray-500"></div>
					</div>

					<p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
						Exploring my work through interactive, creative, and modern web
						applications.
					</p>
				</div>

				<div className="flex flex-col gap-40">
					{projects.map((project, idx) => {
						// 💡 АР БИР ПРОЕКТ ҮЧҮН ЖЫЛДЫРУУ МААНИЛЕРИН ЭСЕПТӨӨ
						// Баштапкы абалда сүрөттүн үстү көрүнөт (y: 0), hover'де асты көрүнөт (y: терс).
						const yInitial = 0;
						// Сүрөттүн толук бийиктиги менен контейнердин бийиктигинин айырмасы (терс маани)
						const yWhileHover = CONTAINER_HEIGHT - project.fullHeight; // Мисалы, 300 - 900 = -600

						return (
							<div
								key={project.number}
								className={`relative flex flex-col md:flex-row ${
									idx % 2 === 1 ? "md:flex-row-reverse" : ""
								} items-center gap-12`}>
								<div className="absolute -top-12 left-1/2 transform -translate-x-1/2 md:-translate-x-0 md:top-0 md:left-0 text-8xl font-black text-slate-200 dark:text-slate-800 opacity-20">
									{project.number}
								</div>

								<div className="relative w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl transition-shadow duration-700 group">
									{/* 1. Контейнер: Көрүнүп турган терезе */}
									<motion.div
										// CONTAINER_HEIGHT'ти Tailwind'ге киргизүү үчүн, аны динамикалык түрдө киргизебиз.
										className={`relative w-full h-[${CONTAINER_HEIGHT}px] overflow-hidden rounded-3xl`}>
										{/* 2. Жылдырылуучу элемент (Image wrapper) */}
										<motion.div
											// Сүрөттү ороочу элементтин бийиктиги "project.fullHeight" болушу керек.
											// 'h-[${project.fullHeight}px]' колдонуу үчүн CSS'ти пайдаланабыз же инлайн стиль.
											className="relative w-full rounded-3xl"
											style={{ height: `${project.fullHeight}px` }}
											initial={{ y: yInitial }}
											whileHover={{ y: yWhileHover }} // Сүрөт ЖОГОРУ жылат, ошондуктан АСТЫ көрүнөт.
											transition={{ duration: 3, ease: "easeInOut" }}>
											<Image
												src={project.imageSrc}
												alt={project.title}
												fill
												// Баштапкы абалда үстү көрсөтүлөт
												className="object-cover object-top"
												sizes="(max-width: 768px) 100vw, 50vw"
											/>
										</motion.div>
									</motion.div>

									<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none"></div>
								</div>

								<div className="w-full md:w-1/2 flex flex-col gap-6 p-8 bg-gradient-to-b from-transparent to-slate-50/50 dark:to-slate-900/50 rounded-3xl">
									{/* ... (Текст жана шилтемелер) */}
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
						);
					})}
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
