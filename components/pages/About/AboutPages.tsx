import Image from "next/image";
import React from "react";
import AboutPhoto from "../../../public/assets/webdev.svg";
import photo from "../../../public/assets/bulb.png";

const AboutPages = () => {
	return (
		<div className="relative bg-white dark:bg-gradient-to-br dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen overflow-hidden transition-colors duration-500">
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl"></div>
			</div>

			{/* Grid Pattern Overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(100,100,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,100,100,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

			<div className="relative flex items-center min-h-screen py-20 px-4">
				<div className="container mx-auto max-w-7xl">
					<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
						{/* Text Content */}
						<div className="flex-1 space-y-8 max-w-2xl">
							{/* Badge */}
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 dark:bg-blue-500/10 border border-blue-500/30 dark:border-blue-500/20 backdrop-blur-sm shadow-lg dark:shadow-blue-500/5">
								<div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
								<span className="text-sm text-blue-700 dark:text-blue-300 font-medium">
									Frontend Developer
								</span>
							</div>

							{/* Heading with Gradient */}
							<div className="space-y-4">
								<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
									<span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 dark:from-white dark:via-blue-100 dark:to-blue-200 bg-clip-text text-transparent">
										About Me
									</span>
								</h1>
								<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 rounded-full shadow-lg dark:shadow-blue-500/50"></div>
							</div>

							{/* Description with Glass Effect */}
							<div className="relative group">
								<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-30 dark:opacity-20 group-hover:opacity-40 dark:group-hover:opacity-30 transition duration-500"></div>
								<div className="relative bg-white/70 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-2xl dark:shadow-blue-500/5">
									<p className="text-slate-700 dark:text-gray-300 leading-relaxed text-lg">
										Over the years, I have accumulated expertise in developing
										high-quality, scalable web applications. My skills encompass
										modern{" "}
										<span className="text-blue-600 dark:text-blue-400 font-semibold">
											React
										</span>{" "}
										and{" "}
										<span className="text-blue-600 dark:text-blue-400 font-semibold">
											TypeScript
										</span>{" "}
										development, state management with{" "}
										<span className="text-cyan-600 dark:text-cyan-400 font-semibold">
											Redux
										</span>
										,{" "}
										<span className="text-cyan-600 dark:text-cyan-400 font-semibold">
											MobX
										</span>
										, and{" "}
										<span className="text-cyan-600 dark:text-cyan-400 font-semibold">
											RTK Query
										</span>
										.
									</p>
									<p className="text-slate-700 dark:text-gray-300 leading-relaxed text-lg mt-4">
										I specialize in creating responsive, pixel-perfect
										interfaces using{" "}
										<span className="text-purple-600 dark:text-purple-400 font-semibold">
											Tailwind CSS
										</span>
										,{" "}
										<span className="text-purple-600 dark:text-purple-400 font-semibold">
											SASS
										</span>
										, and{" "}
										<span className="text-purple-600 dark:text-purple-400 font-semibold">
											Styled Components
										</span>
										. My toolkit includes{" "}
										<span className="text-emerald-600 dark:text-emerald-400 font-semibold">
											Docker
										</span>
										,{" "}
										<span className="text-emerald-600 dark:text-emerald-400 font-semibold">
											Firebase
										</span>
										, and{" "}
										<span className="text-emerald-600 dark:text-emerald-400 font-semibold">
											Git
										</span>{" "}
										for building robust, production-ready applications.
									</p>
									<p className="text-slate-600 dark:text-gray-400 leading-relaxed mt-6 italic">
										I'm always eager to tackle new challenges and master
										emerging technologies to deliver innovative solutions.
									</p>
								</div>
							</div>

							{/* Stats Row */}
							<div className="grid grid-cols-3 gap-4 pt-4">
								<div className="bg-gradient-to-br from-blue-500/20 to-transparent dark:from-blue-500/10 dark:to-transparent border border-blue-500/30 dark:border-blue-500/20 rounded-xl p-4 backdrop-blur-sm hover:border-blue-500/50 dark:hover:border-blue-400/40 transition-all duration-300 shadow-lg dark:shadow-none">
									<div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
										5+
									</div>
									<div className="text-sm text-slate-600 dark:text-gray-400 mt-1">
										Years Exp.
									</div>
								</div>
								<div className="bg-gradient-to-br from-cyan-500/20 to-transparent dark:from-cyan-500/10 dark:to-transparent border border-cyan-500/30 dark:border-cyan-500/20 rounded-xl p-4 backdrop-blur-sm hover:border-cyan-500/50 dark:hover:border-cyan-400/40 transition-all duration-300 shadow-lg dark:shadow-none">
									<div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">
										50+
									</div>
									<div className="text-sm text-slate-600 dark:text-gray-400 mt-1">
										Projects
									</div>
								</div>
								<div className="bg-gradient-to-br from-purple-500/20 to-transparent dark:from-purple-500/10 dark:to-transparent border border-purple-500/30 dark:border-purple-500/20 rounded-xl p-4 backdrop-blur-sm hover:border-purple-500/50 dark:hover:border-purple-400/40 transition-all duration-300 shadow-lg dark:shadow-none">
									<div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
										15+
									</div>
									<div className="text-sm text-slate-600 dark:text-gray-400 mt-1">
										Technologies
									</div>
								</div>
							</div>
						</div>

						{/* Image Section with 3D Effect */}
						<div className="flex-1 relative lg:max-w-xl">
							<div className="relative group">
								{/* Glow Effect Behind Image */}
								<div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-40 dark:opacity-30 group-hover:opacity-60 dark:group-hover:opacity-50 transition duration-500"></div>

								{/* Image Container with Glass Effect */}
								<div className="relative bg-gradient-to-br from-white/60 to-slate-100/60 dark:from-slate-800/40 dark:to-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl transform group-hover:scale-[1.02] transition duration-500">
									<Image
										className="w-full h-auto rounded-2xl"
										src={AboutPhoto}
										alt="Web Developer Illustration"
										priority={true}
										width={500}
										height={500}
									/>
								</div>

								{/* Floating Decorative Elements */}
								<div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-30 dark:opacity-20 blur-xl animate-pulse"></div>
								<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-30 dark:opacity-20 blur-xl animate-pulse delay-300"></div>
							</div>
						</div>
					</div>
				</div>

				{/* Animated Bulb Icon */}
				<div className="absolute -left-20 lg:-left-32 bottom-10 lg:bottom-20 rotate-12 hover:rotate-6 transition-transform duration-500">
					<div className="relative group cursor-pointer">
						<div className="absolute inset-0 bg-yellow-400/30 dark:bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
						<Image
							src={photo}
							alt="Idea Bulb"
							width={220}
							height={220}
							className="w-40 h-40 lg:w-56 lg:h-56 relative z-10 drop-shadow-2xl transform group-hover:scale-110 transition duration-300 brightness-110 dark:brightness-100"
						/>
					</div>
				</div>
			</div>

			{/* Bottom Gradient Line */}
			<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-600 dark:via-blue-500 to-transparent shadow-lg dark:shadow-blue-500/50"></div>
		</div>
	);
};

export default AboutPages;
