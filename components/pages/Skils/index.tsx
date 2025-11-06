"use client";

import React, { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import {
	FaReact,
	FaJs,
	FaSass,
	FaGitAlt,
	FaHtml5,
	FaNodeJs,
	FaNpm,
	FaGithub,
} from "react-icons/fa";
import {
	SiTypescript,
	SiNextdotjs,
	SiTailwindcss,
	SiRedux,
	SiVite,
	SiWebpack,
	SiStyledcomponents,
	SiPostman,
	SiYarn,
	SiVercel,
	SiFirebase,
	SiSupabase,
	SiDocker,
	SiFramer,
	SiBun,
	SiMui,
	SiBootstrap,
	SiAxios,
	SiFigma,
	SiExpress,
	SiSwagger,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";

const TechStack = [
	{
		name: "HTML5",
		icon: FaHtml5,
		color: "text-orange-600 dark:text-orange-400",
	},
	{ name: "CSS3", icon: DiCss3, color: "text-blue-600 dark:text-blue-400" },
	{
		name: "JavaScript",
		icon: FaJs,
		color: "text-yellow-500 dark:text-yellow-300",
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
		color: "text-blue-700 dark:text-blue-300",
	},
	{ name: "React", icon: FaReact, color: "text-blue-500 dark:text-blue-400" },
	{
		name: "Next.js",
		icon: SiNextdotjs,
		color: "text-gray-800 dark:text-gray-200",
	},
	{
		name: "Redux",
		icon: SiRedux,
		color: "text-purple-600 dark:text-purple-400",
	},
	{
		name: "Framer Motion",
		icon: SiFramer,
		color: "text-pink-500 dark:text-pink-400",
	},
	{ name: "Figma", icon: SiFigma, color: "text-pink-500 dark:text-pink-400" },
	{
		name: "Material UI",
		icon: SiMui,
		color: "text-blue-700 dark:text-blue-300",
	},
	{
		name: "Bootstrap",
		icon: SiBootstrap,
		color: "text-purple-700 dark:text-purple-400",
	},
	{
		name: "Tailwind CSS",
		icon: SiTailwindcss,
		color: "text-cyan-600 dark:text-cyan-400",
	},
	{
		name: "SCSS / SASS",
		icon: FaSass,
		color: "text-pink-600 dark:text-pink-400",
	},
	{
		name: "Styled Components",
		icon: SiStyledcomponents,
		color: "text-pink-500 dark:text-pink-400",
	},
	{ name: "Vite", icon: SiVite, color: "text-purple-500 dark:text-purple-300" },
	{
		name: "Webpack",
		icon: SiWebpack,
		color: "text-blue-500 dark:text-blue-300",
	},
	{
		name: "Express.js",
		icon: SiExpress,
		color: "text-pink-400 dark:text-pink-300",
	},
	{
		name: "Node.js",
		icon: FaNodeJs,
		color: "text-green-600 dark:text-green-400",
	},
	{ name: "Axios", icon: SiAxios, color: "text-sky-500 dark:text-sky-400" },
	{
		name: "Git",
		icon: FaGitAlt,
		color: "text-orange-600 dark:text-orange-400",
	},
	{ name: "GitHub", icon: FaGithub, color: "text-gray-800 dark:text-gray-200" },
	{
		name: "Postman",
		icon: SiPostman,
		color: "text-orange-500 dark:text-orange-300",
	},
	{
		name: "Swagger",
		icon: SiSwagger,
		color: "text-green-600 dark:text-green-400",
	},
	{ name: "Vercel", icon: SiVercel, color: "text-gray-900 dark:text-white" },
	{
		name: "Firebase",
		icon: SiFirebase,
		color: "text-amber-500 dark:text-amber-300",
	},
	{
		name: "Supabase",
		icon: SiSupabase,
		color: "text-emerald-600 dark:text-emerald-400",
	},
	{ name: "Docker", icon: SiDocker, color: "text-blue-600 dark:text-blue-400" },
	{ name: "Bun", icon: SiBun, color: "text-indigo-500 dark:text-indigo-300" },
	{ name: "NPM", icon: FaNpm, color: "text-red-600 dark:text-red-400" },
	{ name: "Yarn", icon: SiYarn, color: "text-blue-500 dark:text-blue-300" },
];

const ModernSkillsPortfolio = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		let stars = Array.from({ length: 120 }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			size: Math.random() * 1.2,
			speed: 0.3 + Math.random() * 0.7,
		}));

		function animate() {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = "white";

			stars.forEach((star) => {
				ctx.beginPath();
				ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
				ctx.fill();
				star.y += star.speed;
				if (star.y > canvas.height) {
					star.y = 0;
					star.x = Math.random() * canvas.width;
				}
			});

			requestAnimationFrame(animate);
		}

		animate();

		const handleResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#f6f8fb] to-[#eef1f6] dark:from-[#0e1116] dark:via-[#0d1218] dark:to-[#10151c] transition-colors duration-500">
			{/* 🌠 Жылдыздар фон */}
			<canvas
				ref={canvasRef}
				className="absolute inset-0 w-full h-full pointer-events-none"
			/>

			{/* Background blur effects */}
			<div className="absolute top-32 right-32 w-[420px] h-[420px] bg-blue-900/40 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
			<div className="absolute bottom-32 left-32 w-[420px] h-[420px] bg-blue-900/40 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

			<div className="relative z-10 flex items-center min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6">
				<div className="container mx-auto max-w-7xl">
					{/* Header */}
					<div className="mb-12 sm:mb-16 md:mb-20">
						<div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
							<div className="w-8 sm:w-10 md:w-12 h-px bg-gradient-to-r from-blue-500 to-blue-400"></div>
							<span className="text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-mono tracking-wider uppercase">
								Professional Skills
							</span>
						</div>

						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none mb-4">
							<span className="block bg-gradient-to-r from-[#1a1a1a] to-[#3a3a3a] dark:from-white dark:to-gray-300 bg-clip-text text-transparent font-normal">
								Technical Expertise
							</span>
						</h1>

						<p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
							Frontend иштеп чыгуучу катары колдонгон заманбап технологиялар
							жана инструменттер.
						</p>
					</div>

					{/* Grid */}
					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20">
						{TechStack.map((tech, i) => {
							const Icon = tech.icon;
							return (
								<div
									key={i}
									className="group backdrop-blur-xl bg-transparent border border-white/40 dark:border-white/10 rounded-xl p-3 sm:p-4 hover:border-blue-500/60 dark:hover:border-blue-400/40 transition-all duration-300 hover:scale-105 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
									<Icon
										className={`w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-2 ${tech.color} transition-colors`}
									/>
									<p className="text-xs sm:text-sm font-semibold text-center text-slate-700 dark:text-slate-300">
										{tech.name}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModernSkillsPortfolio;
