import Image from "next/image";
import React from "react";
import AboutPhoto from "../../../public/assets/webdev.svg";
import photo from "../../../public/assets/bulb.png";

const AboutPages = () => {
	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#f6f8fb] to-[#eef1f6] dark:from-[#0e1116] dark:via-[#0d1218] dark:to-[#10151c] transition-colors duration-500">
			<div className="absolute inset-0 backdrop-blur-2xl bg-white/30 dark:bg-[#1a1f25]/40"></div>

			<div className="absolute top-32 right-32 w-[420px] h-[420px] bg-white/50 dark:bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
			<div className="absolute bottom-32 left-32 w-[420px] h-[420px] bg-white/10 dark:bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>

			<div className="absolute inset-0 z-0 pointer-events-none">
				<div className="absolute bottom-8 md:block hidden left-0 sm:bottom-12 sm:left-8 md:bottom-16 md:left-12 lg:bottom-20 lg:left-16 rotate-[20deg] animate-pulse duration-[3000ms]">
					<Image
						src={photo}
						alt="bulb"
						priority={true}
						width={260}
						height={260}
						className="opacity-70 w-[120px] sm:w-[160px] md:w-[200px] lg:w-[260px]"
					/>
				</div>
				<div className="absolute md:hidden flex  top-[20px] right-4 sm:top-12 sm:right-8 md:top-16 md:left-12 lg:bottom-20 lg:right-16 -rotate-12 animate-pulse duration-[3000ms]">
					<Image
						src={photo}
						alt="bulb"
						priority={true}
						width={260}
						height={260}
						className="opacity-70 w-[120px] sm:w-[160px] md:w-[200px] lg:w-[260px]"
					/>
				</div>
			</div>

			<div className="relative z-10 flex items-center min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6">
				<div className="container mx-auto max-w-7xl">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-16">
						{/* Сол жак — текст */}
						<div className="flex-1 space-y-6 sm:space-y-8 max-w-2xl w-full">
							<div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
								<div className="w-8 sm:w-10 md:w-12 h-px bg-gradient-to-r from-blue-500 to-blue-400"></div>
								<span className="text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-mono tracking-wider uppercase">
									Frontend Developer
								</span>
							</div>

							<div className="space-y-3 sm:space-y-4">
								<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none">
									<span className="block bg-gradient-to-r from-[#1a1a1a] to-[#3a3a3a] dark:from-white dark:to-gray-300 bg-clip-text text-transparent font-normal">
										About
									</span>
								</h1>
								<div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-blue-500 via-gray-300 to-transparent dark:via-gray-500"></div>
							</div>

							<div className="max-w-full sm:max-w-md space-y-4 sm:space-y-6 backdrop-blur-md bg-white/40 dark:bg-[#1a1f25]/60 border border-white/40 dark:border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
								<p className="text-slate-700 dark:text-slate-200 leading-relaxed text-base sm:text-lg">
									I build elegant, scalable web interfaces with modern
									<span className="text-blue-600 dark:text-blue-400 font-semibold">
										{" "}
										React
									</span>{" "}
									and
									<span className="text-blue-600 dark:text-blue-400 font-semibold">
										{" "}
										TypeScript
									</span>
									.
								</p>
								<p className="text-slate-700 dark:text-slate-200 leading-relaxed text-base sm:text-lg">
									I focus on clean design and fluid user experience — blending
									<span className="text-blue-600 dark:text-blue-400 font-semibold">
										{" "}
										Tailwind CSS
									</span>
									and smooth transitions to create a modern, polished feel.
								</p>
								<p className="text-slate-500 dark:text-slate-400 leading-relaxed italic text-sm sm:text-base">
									Always exploring, learning, and improving.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
									officiis distinctio pariatur necessitatibus nihil? Officia
									doloremque vel itaque in debitis eveniet nihil pariatur. Quis
									voluptatum, ratione cumque aut, ipsa dolore atque dignissimos
									fugit nostrum adipisci saepe tenetur! Officia porro odit cum
									eaque quasi recusandae, sunt rem vel quaerat voluptates
									maiores iure ea velit temporibus autem aliquam magnam ullam,
									maxime impedit veniam corporis dolorem officiis. Sapiente,
									placeat quas. Eveniet qui animi porro possimus? Hic maiores
									ducimus, dolor repudiandae accusamus minima blanditiis rem
				
								</p>
							</div>

							<div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-4">
								{[
									{ value: "5+", label: "Years Exp." },
									{ value: "50+", label: "Projects" },
									{ value: "15+", label: "Technologies" },
								].map((item, index) => (
									<div
										key={index}
										className="backdrop-blur-xl bg-white/40 dark:bg-[#1a1f25]/60 border border-white/40 dark:border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
										<div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
											{item.value}
										</div>
										<div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
											{item.label}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Оң жак — сүрөт */}
						<div className="flex-1 relative w-full max-w-md sm:max-w-lg lg:max-w-xl flex justify-center mt-6 lg:mt-0">
							<Image
								className="w-full h-auto rounded-2xl"
								src={AboutPhoto}
								alt="Web Developer Illustration"
								priority={true}
								width={500}
								height={500}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPages;
