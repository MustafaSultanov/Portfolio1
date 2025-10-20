"use client";
import React, { useEffect, useRef } from "react";
import ProfileShape from "../ProfileShape";
import TechRotator from "@/components/ui/TechRotator/TechRotator";
import { gsap } from "gsap";

export default function HomePages() {
	const textRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		if (textRef.current) {
			const letters = textRef.current.querySelectorAll("span");
			gsap.fromTo(
				letters,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					ease: "power3.out",
					stagger: 0.05,
				}
			);
		}
	}, []);

	const wrapLetters = (text: string) => {
		return text.split("").map((char, i) => (
			<span key={i} className="inline-block">
				{char === " " ? "\u00A0" : char}
			</span>
		));
	};

	return (
		<div className="bg-gradient-to-br from-white via-slate-100 to-slate-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 text-slate-900 dark:text-white overflow-hidden transition-colors duration-500">
			<div className="relative">
				{/* Light blur gradient background */}
				<div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-br from-white/60 via-white/40 to-slate-200/50 dark:from-zinc-900/70 dark:via-zinc-800/60 dark:to-zinc-900/70 pointer-events-none"></div>

				{/* Subtle glowing orbs */}
				<div className="absolute top-20 right-20 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl pointer-events-none"></div>
				<div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-900/40 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

				<main className="relative z-10 container mx-auto h-[89.3vh] flex items-center">
					<div
						data-aos="fade-right"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						className="w-full px-8 grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							<div className="space-y-4">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-12 h-px bg-gradient-to-r from-blue-600/70 to-blue-400/40"></div>
									<span className="text-blue-600/80 dark:text-blue-300/80 text-sm font-mono tracking-wider uppercase">
										Portfolio 2024
									</span>
								</div>

								<h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-none">
									<span className="block text-slate-900 dark:text-white">
										Mustafa
									</span>
									<span className="block text-transparent bg-gradient-to-r from-blue-700 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text mt-2">
										Sultanov
									</span>
								</h1>
							</div>

							<div className="space-y-2">
								<div className="flex items-center gap-3">
									<p className="text-xl text-blue-700 dark:text-blue-200 font-light">
										Frontend Developer
									</p>

									<TechRotator />
								</div>

								<div className="w-24 h-px bg-gradient-to-r from-blue-500/70 via-blue-400/40 to-transparent"></div>
							</div>

							<div className="max-w-md space-y-6">
								<p
									ref={textRef}
									className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg max-w-xl">
									{wrapLetters(
										"Here you will find my projects and experience in frontend development. I invite you to explore my work and learn more about my professional journey."
									)}
								</p>

								<div className="flex items-center gap-6 pt-4">
									{/* iOS-style Glass Button */}
									<button className="group relative overflow-hidden rounded-full">
										<div className="absolute inset-0 bg-white/40 dark:bg-white/10 backdrop-blur-md rounded-full border border-white/30 dark:border-white/10 transition-all duration-300 group-hover:bg-white/60 dark:group-hover:bg-white/20"></div>
										<div className="relative px-8 py-3 text-slate-800 dark:text-white text-sm font-medium">
											View Projects
										</div>
									</button>

									{/* Minimal Text Button */}
									<button className="text-blue-700 hover:text-blue-900 dark:text-blue-300 dark:hover:text-white text-sm font-medium transition-colors duration-300 border-b border-blue-500/40 hover:border-blue-700 dark:hover:border-blue-300 pb-1">
										Download CV
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute bottom-0 left-0 right-0">
						<ProfileShape />
					</div>
				</main>
			</div>

			<style jsx>{`
				@keyframes spin-slow {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}
				.animate-spin-slow {
					animation: spin-slow 20s linear infinite;
				}
			`}</style>
		</div>
	);
}
