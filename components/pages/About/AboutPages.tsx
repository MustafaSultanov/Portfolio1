import Image from "next/image";
import React from "react";
import AboutPhoto from "../../../public/assets/webdev.svg";
import photo from "../../../public/assets/bulb.png";

const AboutPages = () => {
	return (
		<div className="relative bg-white dark:bg-zinc-900 min-h-screen overflow-hidden transition-colors duration-500">
			<div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

			<div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-800 opacity-90 pointer-events-none"></div>

			<div className="relative z-10 flex items-center min-h-screen py-20 px-4">
				<div className="container mx-auto max-w-7xl">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
						<div className="flex-1 space-y-8 max-w-2xl">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-12 h-px bg-zinc-700"></div>
								<span className="text-zinc-400 text-sm font-mono tracking-wider uppercase">
									Frontend Developer
								</span>
							</div>

							<div className="space-y-4">
								<h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none">
									<span className="block text-slate-800 dark:text-white font-normal">
										About
									</span>
								</h1>
								<div className="w-24 h-px bg-gradient-to-r from-zinc-700 to-transparent"></div>
							</div>

							<div className="max-w-md space-y-6">
								<div className="relative p-0 shadow-none">
									<p className="text-slate-700 dark:text-zinc-400 leading-relaxed text-lg">
										Over the years, I have accumulated expertise in developing
										high-quality, scalable web applications. My skills encompass
										modern{" "}
										<span className="text-slate-800 dark:text-white font-semibold">
											React
										</span>{" "}
										and{" "}
										<span className="text-slate-800 dark:text-white font-semibold">
											TypeScript
										</span>{" "}
										development, state management with{" "}
										<span className="text-slate-800 dark:text-white font-semibold">
											Redux
										</span>
										,{" "}
										<span className="text-slate-800 dark:text-white font-semibold">
											MobX
										</span>
										, and{" "}
										<span className="text-slate-800 dark:text-white font-semibold">
											RTK Query
										</span>
										.
									</p>
									<p className="text-slate-700 dark:text-zinc-400 leading-relaxed text-lg mt-4">
										I specialize in creating responsive, pixel-perfect
										interfaces using{" "}
										<span className="text-slate-800 dark:text-white font-semibold">
											Tailwind CSS
										</span>
										,{" "}
										<span className="text-slate-800 dark:text-white font-semibold">
											SASS
										</span>
										, and{" "}
										<span className="text-slate-800 dark:text-white font-semibold">
											Styled Components
										</span>
										. My toolkit includes{" "}
										<span className="text-slate-800 dark:text-white font-semibold">
											Docker
										</span>
										,{" "}
										<span className="text-slate-800 dark:text-white font-semibold">
											Firebase
										</span>
										, and{" "}
										<span className="text-slate-800 dark:text-white font-semibold">
											Git
										</span>{" "}
										for building robust, production-ready applications.
									</p>
									<p className="text-slate-600 dark:text-zinc-500 leading-relaxed mt-6 italic">
										Im always eager to tackle new challenges and master emerging
										technologies to deliver innovative solutions.
									</p>
								</div>
							</div>

							<div className="grid grid-cols-3 gap-4 pt-4">
								<div className="border border-zinc-700/50 rounded-xl p-4 transition-all duration-300 hover:border-white/50">
									<div className="text-3xl font-bold text-slate-800 dark:text-white">
										5+
									</div>
									<div className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
										Years Exp.
									</div>
								</div>
								<div className="border border-zinc-700/50 rounded-xl p-4 transition-all duration-300 hover:border-white/50">
									<div className="text-3xl font-bold text-slate-800 dark:text-white">
										50+
									</div>
									<div className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
										Projects
									</div>
								</div>
								<div className="border border-zinc-700/50 rounded-xl p-4 transition-all duration-300 hover:border-white/50">
									<div className="text-3xl font-bold text-slate-800 dark:text-white">
										15+
									</div>
									<div className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
										Technologies
									</div>
								</div>
							</div>
						</div>

						<div className="flex-1 relative lg:max-w-xl flex justify-center">
							<div className="relative w-full max-w-md">
								<div className="relative bg-white dark:bg-zinc-800 border border-zinc-700 rounded-3xl p-6 shadow-xl dark:shadow-black/50">
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

				<div className="absolute -left-36 bottom-6 rotate-12 animate-pulse duration-[3000ms]">
					<Image
						src={photo}
						alt="bulb"
						priority={true}
						width={260}
						height={260}
						className="w-full h-full hidden md:block"
					/>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 dark:via-zinc-600 to-transparent"></div>
		</div>
	);
};

export default AboutPages;
