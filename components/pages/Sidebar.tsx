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
		if (prevPath !== path) {
			setIsRouting(true);
		}
	}, [path, prevPath]);

	useEffect(() => {
		if (isRouting) {
			setPrevPath(path);
			const timeout = setTimeout(() => {
				setIsRouting(false);
			}, 900); 

			return () => clearTimeout(timeout);
		}
	}, [isRouting]);

	useEffect(() => {
		setIsActive(path === "/" ? "/" : path);
	}, [path]);

	return (
		<div className="fixed left-[43%] pt-3 top-[90%] z-[20] h-[48px] w-[250px] rounded-full bg-[#01060f] shadow-[2px_6px_10px_rgba(0,0,255,0.5)]">
			<AnimatePresence mode="wait">
				{isRouting && <Transition />}
				<div className="flex   gap-5 pb-3 justify-center items-center h-full">
					{NavLinks.map((link, index) => (
						<div
							key={link.name}
							onClick={() => {
								setIsActive(link.name);
								router.push(link.link);
							}}
							className="cursor-pointer"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<AnimatePresence>
								{hoveredIndex === index && (
									<motion.div
										initial={{ opacity: 0, y: 10, scale: 0.8 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										exit={{ opacity: 0, y: 5, scale: 0.9 }}
										transition={{ duration: 0.2 }}
										className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-xl border border-white/20 pointer-events-none">
										{link.name}
										<div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-white/20" />
									</motion.div>
								)}
							</AnimatePresence>
							<link.icon
								className={`w-[28px] h-[28px] ${
									isActive === link.link ? "text-blue-800" : "text-white"
								}`}
							/>
						</div>
					))}
				</div>
			</AnimatePresence>
		</div>
	);
};

export default Sidebar;