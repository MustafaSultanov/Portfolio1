"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { NavLinks } from "@/constants";
import Transition from "./Transition";

const Sidebar = () => {
	const [isRouting, setIsRouting] = useState(false);
	const [isActive, setIsActive] = useState("/");
	const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

	const pathname = usePathname();
	const router = useRouter();
	const locale = useLocale();

	const prevDataRef = useRef({
		pathname: pathname,
		locale: locale,
	});

	useEffect(() => {
		const prev = prevDataRef.current;

		const pathChanged = prev.pathname !== pathname;
		const localeChanged = prev.locale !== locale;

		
		const shouldAnimate = pathChanged && !localeChanged;

		if (shouldAnimate) {
			setIsRouting(true);

			const timeout = setTimeout(() => {
				setIsRouting(false);
			}, 1200);

			// Обновляем сохранённые значения
			prevDataRef.current = {
				pathname: pathname,
				locale: locale,
			};

			return () => clearTimeout(timeout);
		}

		// Если изменился только язык, просто обновляем ref без анимации
		if (localeChanged) {
			prevDataRef.current = {
				pathname: pathname,
				locale: locale,
			};
		}
	}, [pathname, locale]);

	useEffect(() => {
		setIsActive(pathname);
	}, [pathname]);

	return (
		<>
			<AnimatePresence mode="wait">
				{isRouting && <Transition key="transition" />}
			</AnimatePresence>

			<div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50">
				<motion.div
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="flex gap-4 px-6 py-3 rounded-full bg-transparent backdrop-blur-xl shadow-lg border border-blue-500/20">
					{NavLinks.map((link, index) => (
						<div
							key={link.name}
							onClick={() => {
								setIsActive(link.link);
								router.push(link.link);
							}}
							className="relative cursor-pointer group"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}>
							<AnimatePresence>
								{hoveredIndex === index && (
									<motion.div
										initial={{ opacity: 0, scale: 0.9, y: 5 }}
										animate={{ opacity: 1, scale: 1, y: 0 }}
										exit={{ opacity: 0, scale: 0.95, y: 5 }}
										transition={{ duration: 0.2, ease: "easeOut" }}
										className="absolute bottom-full -right-[10px] -translate-x-1/2 mb-3 pointer-events-none">
										<div className="relative px-4 py-2 bg-slate-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-lg whitespace-nowrap shadow-xl border border-blue-400/30">
											{link.name}
											<div className="absolute top-full left-1/2 -translate-x-1/2">
												<div className="w-3 h-3 bg-slate-900/95 rotate-45 border-r border-b border-blue-400/30" />
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>

							<motion.div
								whileHover={{ scale: 1.15, y: -2 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 400, damping: 18 }}
								className={`p-3 rounded-xl transition-all duration-300 ${
									isActive === link.link
										? "bg-blue-600/25"
										: "dark:hover:bg-white/10 hover:bg-blue-600/25"
								}`}>
								<link.icon
									className={`w-7 h-7 transition-colors duration-300 ${
										isActive === link.link
											? "text-blue-500"
											: "text-black dark:text-white dark-hover:text-white hover-none"
									}`}
								/>
							</motion.div>
						</div>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default Sidebar;
