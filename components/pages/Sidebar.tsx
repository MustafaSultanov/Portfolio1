"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { Home, User, Sparkles, FolderOpen, MessageSquare } from "lucide-react";

const NavLinks = [
	{
		name: "Home",
		icon: Home,
		link: "/",
	},
	{
		name: "About me",
		icon: User,
		link: "/about",
	},
	{
		name: "Skills",
		icon: Sparkles,
		link: "/my-skills",
	},
	{
		name: "Project",
		icon: FolderOpen,
		link: "/my-project",
	},
	{
		name: "Chat",
		icon: MessageSquare,
		link: "/chat",
	},
];

// Transition Component
const Transition = () => {
	return (
		<motion.div
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 0 }}
			exit={{ scaleY: 1 }}
			transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
			className="fixed inset-0 z-[100] origin-bottom bg-gradient-to-t from-[#77BEF0] via-[#0c0f14] to-[#0c0f14]"
		/>
	);
};

const Sidebar = () => {
	const [isActive, setIsActive] = useState("/");
	const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
	const [isRouting, setIsRouting] = useState(false);
	const [prevPath, setPrevPath] = useState("/");

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
		<div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50">
			{/* Transition animation when routing */}
			<AnimatePresence mode="wait">
				{isRouting && <Transition />}
			</AnimatePresence>

			<motion.section
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="w-fit flex items-center justify-evenly bg-[#FFFFFF1A] dark:bg-[#FFFFFF1A] backdrop-blur-[80px] rounded-[30px] px-2 py-2">
				{NavLinks.map((link, index) => {
					const isCurrentActive = isActive === link.link;
					const isHovered = hoveredIndex === index;

					return (
						<label
							key={link.name}
							title={link.name}
							className="relative px-[18px] py-2 inline-block cursor-pointer transition-all duration-200 group"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
							onClick={() => {
								setIsActive(link.link);
								router.push(link.link);
							}}>
							{/* Hidden radio input */}
							<input
								type="radio"
								name="page"
								checked={isCurrentActive}
								onChange={() => {}}
								className="hidden"
							/>

							{/* Bottom indicator line */}
							<motion.div
								initial={false}
								animate={{
									width: isCurrentActive ? "100%" : "0%",
									left: isCurrentActive ? "0" : "50%",
								}}
								transition={{ duration: 0.2 }}
								className="absolute top-[25px] h-[2px] rounded-[5px] bg-[#00BFFF] shadow-[0_0_10px_#00BFFF,0_0_20px_#00BFFF]"
							/>

							{/* Icon */}
							<motion.div
								initial={false}
								animate={{
									scale: isCurrentActive ? 1.2 : 1,
									marginTop: isCurrentActive ? "-5px" : "0px",
								}}
								transition={{ duration: 0.3 }}>
								<link.icon
									className={`w-[14px] h-[14px] transition-all duration-300 ${
										isCurrentActive
											? "fill-[#00BFFF] text-[#00BFFF]"
											: isHovered
											? "fill-[#00BFFF] text-[#00BFFF] opacity-60"
											: "fill-[#52555a] text-[#52555a]"
									}`}
									strokeWidth={0}
									fill="currentColor"
								/>
							</motion.div>
						</label>
					);
				})}
			</motion.section>
		</div>
	);
};

export default Sidebar;
