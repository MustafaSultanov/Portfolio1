"use client"
import React from "react";
import ProfileShape from "../ProfileShape";

export default function HomePages() {
	return (
		<div className="min-h-screen bg-black text-white overflow-hidden">
			<div className="relative">
				{/* Background grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

				{/* Subtle gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900"></div>

				<main className="relative z-10 min-h-screen flex items-center">
					<div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
						{/* Left Content */}
						<div className="space-y-8">
							{/* Name with elegant typography */}
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

							{/* Role */}
							<div className="space-y-2">
								<p className="text-xl text-zinc-300 font-light">
									Frontend Developer
								</p>
								<div className="w-24 h-px bg-gradient-to-r from-zinc-700 to-transparent"></div>
							</div>

							{/* Description */}
							<div className="max-w-md space-y-6">
								<p className="text-zinc-400 leading-relaxed">
									Here you will find my projects and experience in frontend
									development. I invite you to explore my work and learn more
									about my professional journey.
								</p>

								{/* CTA Buttons */}
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

						{/* Right Content */}
						<div className="relative flex justify-center lg:justify-end">
							{/* Decorative elements */}
							<div className="absolute top-20 right-20 w-32 h-32 border border-zinc-800 rounded-full opacity-30"></div>
							<div className="absolute bottom-20 left-20 w-20 h-20 border border-zinc-800 rounded-full opacity-20"></div>
						</div>
					</div>

					{/* Bottom decorative element */}
					<div className="absolute bottom-0 left-0 right-0">
						<ProfileShape />
					</div>

					{/* Scroll indicator */}
					<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
						<div className="flex flex-col items-center gap-2 text-zinc-500">
							<span className="text-xs font-mono tracking-wider">SCROLL</span>
							<div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent animate-pulse"></div>
						</div>
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
