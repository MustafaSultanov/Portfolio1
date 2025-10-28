"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
import {
	Code2,
	Zap,
	Rocket,
	Terminal,
	Layers,
	Layout,
	Sparkles,
} from "lucide-react";

const ServiceData = [
	{
		title: "React Development",
		icon: Code2,
		emoji: "⚛️",
		color: "from-blue-500 to-cyan-500",
	},
	{
		title: "Next.js Applications",
		icon: Rocket,
		emoji: "🚀",
		color: "from-purple-500 to-pink-500",
	},
	{
		title: "TypeScript",
		icon: Terminal,
		emoji: "📘",
		color: "from-yellow-500 to-orange-500",
	},
	{
		title: "Modern Frontend",
		icon: Layers,
		emoji: "💻",
		color: "from-green-500 to-emerald-500",
	},
	{
		title: "Performance Optimization",
		icon: Zap,
		emoji: "⚡",
		color: "from-indigo-500 to-purple-500",
	},
	{
		title: "Responsive Design",
		icon: Layout,
		emoji: "📱",
		color: "from-rose-500 to-red-500",
	},
];

const TechStack = [
	{ name: "React", icon: Layers },
	{ name: "Next.js", icon: Terminal },
	{ name: "TypeScript", icon: Code2 },
	{ name: "Tailwind", icon: Layout },
];

const ModernSkillsPortfolio = () => {
	return (
		<section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden transition-all duration-700">
			{/* Background visuals */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
				<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
			</div>

			{/* Tech Stack */}
			<div className="relative z-10 pt-20 pb-12 px-6 max-w-7xl mx-auto">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
					{TechStack.map((tech, i) => {
						const Icon = tech.icon;
						return (
							<div
								key={i}
								className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105">
								<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
								<Icon className="w-8 h-8 mx-auto mb-3 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
								<p className="text-sm font-semibold text-center text-slate-700 dark:text-slate-300">
									{tech.name}
								</p>
							</div>
						);
					})}
				</div>
			</div>

			{/* Core Competencies */}
			<div className="relative z-10 py-16 px-6 max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
						Core Competencies
					</h2>
					<p className="text-slate-600 dark:text-slate-400">
						Specialized skills and technologies I work with
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
					{/* Left: 3 cards */}
					<div className="order-2 lg:order-1 space-y-6">
						{ServiceData.slice(0, 3).map((item, i) => {
							const Icon = item.icon;
							return (
								<div
									key={i}
									className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:scale-105">
									<div className="flex items-center gap-4">
										<div
											className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl`}>
											{item.emoji}
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
												{item.title}
											</h3>
											<p className="text-sm text-slate-600 dark:text-slate-400">
												Professional expertise
											</p>
										</div>
										<Icon className="w-6 h-6 text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
									</div>
								</div>
							);
						})}
					</div>

					{/* Right: Swiper */}
					<div className="order-1 lg:order-2">
						<Swiper
							effect="cards"
							grabCursor={true}
							autoplay={{ delay: 3000, disableOnInteraction: false }}
							modules={[EffectCards, Autoplay]}
							className="w-full max-w-sm mx-auto"
							cardsEffect={{
								perSlideOffset: 8,
								perSlideRotate: 2,
								slideShadows: false,
							}}>
							{ServiceData.map((item, index) => {
								const Icon = item.icon;
								return (
									<SwiperSlide key={index}>
										<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl">
											<div className="h-full flex flex-col p-8">
												<div
													className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl mb-6`}>
													{item.emoji}
												</div>
												<h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
													{item.title}
												</h3>
												<p className="text-slate-600 dark:text-slate-400 text-sm mb-auto">
													Advanced skills and modern practices
												</p>
												<div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
													<Icon className="w-12 h-12 text-slate-300 dark:text-slate-700" />
												</div>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ModernSkillsPortfolio;
