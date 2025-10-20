"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { ServiceData } from "@/constants";

const ServiceSliderVIP = () => {
	return (
		<main className="relative min-h-screen bg-gradient-to-br from-white via-[#f7f9fb] to-[#e8ebf0] dark:from-[#0f1115] dark:via-[#13171d] dark:to-[#101418] overflow-hidden transition-colors duration-500">
			
			<div className="absolute inset-0 backdrop-blur-2xl bg-white/30 dark:bg-[#1a1f25]/30 pointer-events-none"></div>

			<div className="absolute top-20 right-20 w-[420px] h-[420px] bg-white/40 dark:bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
			<div className="absolute bottom-20 left-20 w-[420px] h-[420px] bg-white/30 dark:bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>

			<section className="relative flex flex-col items-center justify-center text-center pt-24 pb-20 px-6 z-10">
				<div className="mb-8 flex items-center gap-4">
					<div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
					<span className="text-gray-600 dark:text-gray-300 text-sm font-mono tracking-widest uppercase">
						My Arsenal
					</span>
					<div className="w-16 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
				</div>

				<h1 className="text-5xl md:text-7xl font-light tracking-tight leading-none mb-8">
					<span className="block text-gray-900 dark:text-gray-100 font-semibold drop-shadow-sm">
						Skills
					</span>
					<span className="block text-gray-600 dark:text-gray-300 mt-3 text-3xl md:text-5xl font-light">
						& Technologies
					</span>
				</h1>

				<p className="max-w-2xl text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
					Crafting exceptional digital experiences with modern tools and frameworks.
					<span className="block mt-2 text-gray-800 dark:text-gray-200 font-medium opacity-80">
						Always learning, always evolving.
					</span>
				</p>
			</section>

			{/* Stats Section */}
			<section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{[
						{ num: "5+", label: "Years Experience", icon: "🚀" },
						{ num: "50+", label: "Projects Delivered", icon: "💼" },
						{ num: "10+", label: "Technologies", icon: "⚙️" },
					].map((stat) => (
						<div key={stat.label} className="group relative overflow-hidden">
							<div className="relative backdrop-blur-2xl bg-white/50 dark:bg-[#1c1f25]/60 border border-white/30 dark:border-white/10 rounded-3xl p-8 transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
								<div className="text-4xl mb-4">{stat.icon}</div>
								<h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-3">
									{stat.num}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-base font-medium">
									{stat.label}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Swiper Section */}
			<section className="relative py-24 px-6 md:px-12 z-10">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
							Technology Stack
						</h2>
						<div className="flex justify-center">
							<div className="w-32 h-[1px] bg-gray-400/40 rounded-full"></div>
						</div>
					</div>

					<Swiper
						breakpoints={{
							340: { slidesPerView: 1, spaceBetween: 20 },
							640: { slidesPerView: 2, spaceBetween: 24 },
							1024: { slidesPerView: 3, spaceBetween: 32 },
						}}
						freeMode
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						pagination={{
							clickable: true,
							bulletActiveClass:
								"swiper-pagination-bullet-active !bg-gray-600 dark:!bg-gray-400",
						}}
						modules={[FreeMode, Pagination, Autoplay]}
						className="pb-16">
						{ServiceData.map((item) => (
							<SwiperSlide key={item.title}>
								<div className="group relative h-[340px] w-full mx-auto rounded-3xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500">
									<div className="relative h-full backdrop-blur-2xl bg-white/40 dark:bg-[#1b1e23]/60 border border-white/30 dark:border-white/10 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-500">
										<div
											className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-15 transition-opacity duration-500"
											style={{
												backgroundImage: `url(${item.backgroundImage})`,
											}}
										/>
										<div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 text-center">
											<div className="relative">
												<div className="p-6 rounded-2xl bg-white/40 dark:bg-[#2a2d33]/60 backdrop-blur-2xl group-hover:scale-110 transition-transform duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
													<item.icon className="w-16 h-16 text-gray-800 dark:text-white transition-colors duration-500" />
												</div>
											</div>
											<h3 className="text-2xl font-medium text-gray-800 dark:text-white transition-all duration-500">
												{item.title}
											</h3>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>

			<div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-400/20"></div>
		</main>
	);
};

export default ServiceSliderVIP;
