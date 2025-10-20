import Image from "next/image";
import React from "react";
import AboutPhoto from "../../../public/assets/webdev.svg";
import photo from "../../../public/assets/bulb.png";

const AboutPages = () => {
	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#f6f8fb] to-[#eef1f6] dark:from-[#0e1116] dark:via-[#0d1218] dark:to-[#10151c] transition-colors duration-500">

			<div className="absolute inset-0 backdrop-blur-2xl bg-white/30 dark:bg-[#1a1f25]/40"></div>

			{/* Жумшак жарык чекиттер */}
			<div className="absolute top-32 right-32 w-[420px] h-[420px] bg-white/50 dark:bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
			<div className="absolute bottom-32 left-32 w-[420px] h-[420px] bg-white/10 dark:bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>

			<div className="relative z-10 flex items-center min-h-screen py-20 px-4">
				<div className="container mx-auto max-w-7xl">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
						
						<div className="flex-1 space-y-8 max-w-2xl">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-px bg-gradient-to-r from-blue-500 to-blue-400"></div>
								<span className="text-blue-600 dark:text-blue-300 text-sm font-mono tracking-wider uppercase">
									Frontend Developer
								</span>
							</div>

							<div className="space-y-4">
								<h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none">
									<span className="block bg-gradient-to-r from-[#1a1a1a] to-[#3a3a3a] dark:from-white dark:to-gray-300 bg-clip-text text-transparent font-normal">
										About
									</span>
								</h1>
								<div className="w-24 h-px bg-gradient-to-r from-blue-500 via-gray-300 to-transparent dark:via-gray-500"></div>
							</div>

							<div className="max-w-md space-y-6 backdrop-blur-md bg-white/40 dark:bg-[#1a1f25]/60 border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
								<p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
									I build elegant, scalable web interfaces with modern 
									<span className="text-blue-600 dark:text-blue-400 font-semibold"> React</span> and 
									<span className="text-blue-600 dark:text-blue-400 font-semibold"> TypeScript</span>.
								</p>
								<p className="text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
									I focus on clean design and fluid user experience — blending 
									<span className="text-blue-600 dark:text-blue-400 font-semibold"> Tailwind CSS</span> 
									and smooth transitions to create a modern, polished feel.
								</p>
								<p className="text-slate-500 dark:text-slate-400 leading-relaxed italic">
									Always exploring, learning, and improving.
								</p>
							</div>

							{/* Статистика карталары */}
							<div className="grid grid-cols-3 gap-4 pt-4">
								{[
									{ value: "5+", label: "Years Exp." },
									{ value: "50+", label: "Projects" },
									{ value: "15+", label: "Technologies" },
								].map((item, index) => (
									<div
										key={index}
										className="backdrop-blur-xl bg-white/40 dark:bg-[#1a1f25]/60 border border-white/40 dark:border-white/10 rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
									>
										<div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
											{item.value}
										</div>
										<div className="text-sm text-slate-600 dark:text-slate-400 mt-1">
											{item.label}
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Оң жак — сүрөт */}
						<div className="flex-1 relative lg:max-w-xl flex justify-center">
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

				{/* Light effect image */}
				<div className="absolute -left-36 bottom-6 rotate-12 animate-pulse duration-[3000ms]">
					<Image
						src={photo}
						alt="bulb"
						priority={true}
						width={260}
						height={260}
						className="w-full h-full hidden md:block opacity-80"
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutPages;
