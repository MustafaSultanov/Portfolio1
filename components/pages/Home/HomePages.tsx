"use client";
import React from "react";
import ProfileShape from "../ProfileShape";
import TechRotator from "@/components/ui/TechRotator/TechRotator";
import { useEffect, useRef } from "react";
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
					stagger: 0.05, // ар бир тамга кечигүү менен чыгат
				}
			);
		}
	}, []);

	// текстти ар бир тамга span менен бөлүп чыгаруучу функция
	const wrapLetters = (text: string) => {
		return text.split("").map((char, i) => (
			<span key={i} className="inline-block">
				{char === " " ? "\u00A0" : char}
			</span>
		));
	};
	return (
		<div className="  bg-white dark:bg-zinc-900 text-white overflow-hidden">
			<div className="relative">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

				{/* Dark gradient for depth */}
				<div className="absolute inset-0  bg-gradient-to-br from-white via-white to-white dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dakr:to-zinc-800 opacity-90 pointer-events-none"></div>

				<main className="relative z-10  h-[89.3vh]  flex items-center">
					<div
						data-aos="fade-right"
						data-aos-offset="300"
						data-aos-easing="ease-in-sine"
						className="container mx-auto  w-full  px-8   grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							<div className="space-y-4">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-12 h-px bg-zinc-700"></div>
									<span className="text-zinc-400 text-sm font-mono tracking-wider uppercase">
										Portfolio 2024
									</span>
								</div>

								<h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-none">
									<span className="block text-white">Mustafa</span>
									<span className="block text-zinc-400 mt-2">Sultanov</span>
								</h1>
							</div>

							<div className="space-y-2">
								<div className="flex items-center gap-3">
									<p className="text-xl text-zinc-300 font-light">
										Frontend Developer
									</p>

									<TechRotator />
								</div>

								<div className="w-24 h-px bg-gradient-to-r from-zinc-700 to-transparent"></div>
							</div>

							<div className="max-w-md space-y-6">
								<p
									ref={textRef}
									className="text-zinc-400 leading-relaxed text-lg max-w-xl">
									{wrapLetters(
										"Here you will find my projects and experience in frontend development. I invite you to explore my work and learn more about my professional journey."
									)}
								</p>

								<div className="flex items-center gap-6 pt-4">
									<button className="group relative">
										<div className="absolute -inset-0.5 bg-gradient-to-r from-zinc-700 to-zinc-600 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
										<div className="relative px-8 py-3 bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-colors duration-300 rounded">
											View Projects
										</div>
									</button>

									<button className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-300 border-b border-transparent hover:border-zinc-600 pb-1">
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
