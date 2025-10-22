"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { NavLinks } from "@/constants";
import Transition from "./Transition";

const Sidebar = () => {
	const [isRouting, setIsRouting] = useState(false);
	const [isActive, setIsActive] = useState("/");
	const [prevPath, setPrevPath] = useState("/");
	const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

	const path = usePathname();
	const router = useRouter();

	useEffect(() => {
		if (prevPath !== path) setIsRouting(true);
	}, [path, prevPath]);

	useEffect(() => {
		if (isRouting) {
			setPrevPath(path);
			const timeout = setTimeout(() => setIsRouting(false), 1200);
			return () => clearTimeout(timeout);
		}
	}, [isRouting]);

	useEffect(() => {
		setIsActive(path);
	}, [path]);

	return (
		<>
			{/* Page transition */}
			<AnimatePresence mode="wait">
				{isRouting && <Transition />}
			</AnimatePresence>

			{/* Sidebar */}
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
							{/* Tooltip */}
							<AnimatePresence>
								{hoveredIndex === index && (
									<motion.div
										initial={{ opacity: 0, y: 10, scale: 0.8 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										exit={{ opacity: 0, y: 5, scale: 0.9 }}
										transition={{ duration: 0.2 }}
										className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/95 backdrop-blur-sm text-white text-sm font-medium rounded-lg whitespace-nowrap shadow-xl border border-blue-400/30 z-50">
										{link.name}
										<div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900/95 rotate-45 border-r border-b border-blue-400/30" />
									</motion.div>
								)}
							</AnimatePresence>

							{/* Icon */}
							<motion.div
								whileHover={{ scale: 1.15, y: -2 }}
								whileTap={{ scale: 0.95 }}
								transition={{ type: "spring", stiffness: 400, damping: 18 }}
								className={`p-3 rounded-xl transition-all duration-300 ${
									isActive === link.link
										? "bg-blue-600/25 shadow-[0_0_20px_rgba(37,99,235,0.5)]"
										: "hover:bg-white/10"
								}`}>
								<link.icon
									className={`w-7 h-7 transition-colors duration-300 ${
										isActive === link.link
											? "text-blue-500"
											: "text-gray-400 group-hover:text-white"
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
