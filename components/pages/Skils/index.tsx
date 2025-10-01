"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "@/constants";
// GSAP жана useEffect импорттору parallax/particles алынгандыктан, азыр кереги жок.

const ServiceSliderVIP = () => {
	// Parallax жана Particles эффекттери алынып салынды
	// Ошондуктан parallaxRef жана particlesRef колдонулбайт

	return (
		// HomePages стили: bg-zinc-900, минималдуу текст түстөрү
		<main className="relative min-h-screen bg-white dark:bg-zinc-900 text-gray-200 overflow-hidden">
			{/* Grid Pattern Overlay (HomePages'тен алынган) */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-50 dark:opacity-10"></div>
			
			{/* Dark gradient for depth (HomePages'тен алынган) */}
			<div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white dark:bg-gradient-to-br dark:from-zinc-900 dark:via-black dark:to-zinc-800 opacity-90 pointer-events-none"></div>

			{/* HERO INTRO */}
			<section className="relative flex flex-col items-center justify-center text-center pt-20 pb-16 px-6 z-10">
				{/* HOME PAGE стилиндеги аталыш */}
				<h1 className="text-4xl md:text-6xl font-light text-slate-800 dark:text-white tracking-tight leading-none mb-6">
					<span className="block text-slate-800 dark:text-white font-normal">
						Skills &
					</span>
					<span className="block text-slate-600 dark:text-zinc-400 mt-2 font-light">
						Expertise
					</span>
				</h1>
				{/* HomePages стилиндеги сызык */}
				<div className="w-24 h-px bg-gradient-to-r from-zinc-700 to-transparent mb-6"></div>
				<p className="max-w-xl text-slate-600 dark:text-zinc-400 text-lg leading-relaxed">
					Building high-quality, scalable front-end experiences with a focus on modern frameworks and clean architecture.
				</p>
			</section>

			{/* EXPERIENCE STATS (Стилдер HomePages'тин Stat Row'уна окшоштурулду) */}
			<section className="flex flex-wrap justify-center gap-6 md:gap-12 py-10 border-y border-zinc-700 relative z-10 mx-auto max-w-5xl px-6">
				{[
					{ num: "5+", label: "Years Experience" },
					{ num: "50+", label: "Projects Delivered" },
					{ num: "10+", label: "Technologies Mastered" },
				].map((stat) => (
					<div
						key={stat.label}
						className="text-center p-4 border border-zinc-700/50 rounded-xl transition-all duration-300 hover:border-white/50 w-full sm:w-auto flex-1 max-w-[200px]"
					>
						<h3 className="text-4xl font-semibold text-slate-800 dark:text-white">{stat.num}</h3>
						<p className="text-slate-600 dark:text-zinc-400 mt-2 text-sm">{stat.label}</p>
					</div>
				))}
			</section>

			{/* SKILLS SLIDER */}
			<section className="relative py-20 px-6 md:px-12 z-10">
				<h2 className="text-3xl font-semibold text-center text-slate-800 dark:text-white mb-12">
					Tech Stack
				</h2>

				<Swiper
					breakpoints={{
						340: { slidesPerView: 1, spaceBetween: 24 },
						768: { slidesPerView: 3, spaceBetween: 32 },
					}}
					freeMode
					pagination={{ clickable: true }}
					modules={[FreeMode, Pagination]}
					className="pb-16"
				>
					{ServiceData.map((item, idx) => (
						<SwiperSlide key={item.title}>
							{/* КАРТАНЫН ЖАҢЫ СТИЛИ (Минималдуу, Zinc негизинде) */}
							<div
								className="group relative h-[300px] w-full max-w-[280px] mx-auto rounded-xl
								border border-zinc-700 bg-white/5 dark:bg-zinc-800
								shadow-lg dark:shadow-black/50
								hover:border-zinc-500 hover:shadow-2xl
								overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
							>
								{/* Neon glow border алынып, жөнөкөй hover border калды */}
								
								{/* background image - Home Pages'тин минималдуу стилине ылайыкташтыруу */}
								<div
									className="absolute inset-0 bg-cover bg-center opacity-5 dark:opacity-10
									group-hover:opacity-15 transition-opacity duration-300"
									style={{ backgroundImage: `url(${item.backgroundImage})` }}
								/>

								{/* content */}
								<div className="relative z-10 h-full flex flex-col items-center justify-center gap-5 text-center px-4">
									{/* Иконка - Zinc түстөргө дал келтирилди */}
									<item.icon className="w-16 h-16 text-slate-700 dark:text-zinc-300 group-hover:text-white transition-colors duration-300" />
									<h3 className="text-xl font-medium text-slate-800 dark:text-white">{item.title}</h3>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			
			{/* Bottom Line (HomePages'тен алынган) */}
			<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700 dark:via-zinc-600 to-transparent"></div>
		</main>
	);
};

export default ServiceSliderVIP;