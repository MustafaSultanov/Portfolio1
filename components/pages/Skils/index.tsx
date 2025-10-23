"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import { Code2, Palette, Zap, Rocket, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import foto from "../../../public/assets/image.svg";

const ServiceData = [
	{ title: "Frontend Development", icon: Code2, emoji: "💻" },
	{ title: "UI/UX Design", icon: Palette, emoji: "🎨" },
	{ title: "Performance", icon: Zap, emoji: "⚡" },
	{ title: "React & Next.js", icon: Rocket, emoji: "🚀" },
	{ title: "Modern Stack", icon: Star, emoji: "⭐" },
	{ title: "Optimization", icon: TrendingUp, emoji: "📈" },
];

const ModernSkillsPortfolio = () => {
	return (
		<div className="min-h-screen bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
			<div className="absolute inset-0 opacity-20 dark:opacity-30">
				<div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-20 w-64 h-64 bg-slate-200 dark:bg-slate-800/40 rounded-full blur-3xl"></div>
			</div>

			<section className="relative z-10 pt-24 pb-20 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="flex justify-center mb-12">
						<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 transition-colors">
							<div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
							<span className="text-slate-600 dark:text-slate-400 text-sm font-medium">
								Available for work
							</span>
						</div>
					</div>

					<div className="text-center space-y-6 mb-16">
						<h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white transition-colors">
							Skills & Technologies
						</h1>
						<p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
							Building modern web experiences with passion and precision
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
						{[
							{ num: "5+", label: "Years Experience" },
							{ num: "50+", label: "Projects Completed" },
							{ num: "15+", label: "Technologies Mastered" },
						].map((stat, i) => (
							<div
								key={i}
								className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 rounded-2xl p-8 text-center hover:bg-slate-100 dark:hover:bg-slate-900/70 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group">
								<div className="text-5xl font-bold text-slate-900 dark:text-white mb-2 group-hover:scale-110 transition-transform">
									{stat.num}
								</div>
								<div className="text-slate-600 dark:text-slate-400 text-base font-medium">
									{stat.label}
								</div>
							</div>
						))}
					</div>

					<div className="text-center mb-16">
						<div className="inline-flex items-center gap-3 mb-6">
							<div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
							<span className="text-slate-500 dark:text-slate-500 text-sm uppercase tracking-widest font-semibold">
								Tech Stack
							</span>
							<div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
						</div>
						<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
							My Arsenal
						</h2>
					</div>
				</div>
			</section>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 pb-20">
				<section className="relative z-10 w-full lg:w-auto">
					<div className="max-w-md mx-auto">
						<Swiper
							effect="cards"
							grabCursor={true}
							autoplay={{
								delay: 3500,
								disableOnInteraction: false,
							}}
							modules={[EffectCards, Autoplay]}
							className="w-full"
							cardsEffect={{
								perSlideOffset: 10,
								perSlideRotate: 3,
								slideShadows: false,
							}}>
							{ServiceData.map((item, index) => (
								<SwiperSlide key={index}>
									<div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl transition-all">
										<div className="absolute inset-0 opacity-[0.03] dark:opacity-5">
											<div
												className="absolute inset-0"
												style={{
													backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
													backgroundSize: "40px 40px",
												}}
											 ></div>
												<div className="text-slate-900 dark:text-white"></div>
										</div>

										<div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
											<div className="mb-10 relative">
												<div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-2xl"></div>
												<div className="relative text-8xl drop-shadow-lg">
													{item.emoji}
												</div>
											</div>

											<h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
												{item.title}
											</h3>

											<div className="flex gap-2.5 mt-8">
												<div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
												<div className="w-2 h-2 bg-slate-400 dark:bg-slate-700 rounded-full"></div>
												<div className="w-2 h-2 bg-slate-500 dark:bg-slate-800 rounded-full"></div>
											</div>
										</div>

										<div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>

										<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						{/* Simple Instruction */}
						<div className="text-center mt-8">
							<p className="text-slate-500 dark:text-slate-600 text-sm font-medium">
								👆 Swipe to explore more
							</p>
						</div>
					</div>
				</section>

				{/* Image Section */}
				<section className="relative w-full max-w-md lg:max-w-lg">
					<div className="relative group">
						{/* Glow Effect Behind Image */}
						<div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>

						{/* Image Container */}
						<div className="relative bg-slate-50 dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-6 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-all">
							<Image
								className="w-full h-auto rounded-2xl group-hover:scale-105 transition-transform duration-500"
								src={foto}
								alt="Web Developer Illustration"
								priority={true}
								width={500}
								height={500}
							/>
						</div>
					</div>
				</section>
			</div>

			{/* Simple Footer CTA */}
			<section className="relative z-10 pb-24 px-6">
				<div className="max-w-4xl mx-auto text-center">
					<div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/50 rounded-3xl p-10 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
						<h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
							Let s Work Together
						</h3>
						<p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
							Ready to create something amazing
						</p>
						<button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full font-semibold text-white transition-all hover:scale-105 shadow-lg hover:shadow-xl">
							Get In Touch
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ModernSkillsPortfolio;
