"use client";
import { BsTelegram } from "react-icons/bs";
import { PiInstagramLogoBold } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from '../../../public/assets/smzlogo.jpg'
import AnimatedNumbers from "@/components/ui/AnimatedNumbers";
import { useTranslations } from "next-intl";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	// const t = useTranslations("Home")

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<header className={`fixed top-0 w-full z-[50] transition-all duration-500 ${
				isScrolled 
					? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]' 
					: 'bg-black/20 backdrop-blur-sm'
			}`}>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						
						{/* Logo Section */}
						<div className="flex items-center group cursor-pointer">
							<div className="relative mr-4">
								{/* Glow effect behind logo */}
								<div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
								
								{/* Logo with border animation */}
								<div className="relative">
									<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-60 blur-sm transition-all duration-500"></div>
									<Image 
										src={logo} 
										alt="Mustafa Sultanov"    
										className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-500 group-hover:scale-105"  
									/>
								</div>
							</div>
							
							{/* Logo text with animation */}
							<div className="hidden md:flex flex-col">
								<div className="flex items-center gap-3">
									<div className="w-8 h-px bg-gradient-to-r from-white/40 to-transparent group-hover:from-blue-400/60 transition-all duration-500"></div>
									<span className="text-white/60 text-xs font-mono tracking-[0.2em] uppercase group-hover:text-white/80 transition-colors duration-300">
										{/* {t("title")} */}
									</span>
								</div>
								<span className="text-white font-light text-2xl tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
									<AnimatedNumbers value={2005} />
								</span>
							</div>
						</div>

						<nav className="hidden lg:flex items-center space-x-8">
							<div className="flex items-center space-x-8">
								{['Work', 'About', 'Contact'].map((item) => (
									<Link 
										key={item}
										href={`#${item.toLowerCase()}`}
										className="relative group py-2"
									>
										<span className="text-white/70 hover:text-white font-medium text-sm tracking-wide transition-colors duration-300">
											{item}
										</span>
										<div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
									</Link>
								))}
							</div>

							<div className="w-px h-6 bg-white/20"></div>

							<div className="flex items-center gap-4">
								{[
									{ icon: BsGithub, href: "https://github.com/SultanovMusa", color: "hover:text-gray-300" },
									{ icon: PiInstagramLogoBold, href: "https://www.instagram.com/sultanov_11_/", color: "hover:text-pink-400" },
									{ icon: BsTelegram, href: "https://t.me/Mufa_Sultanov", color: "hover:text-blue-400" }
								].map((social, index) => {
									const IconComponent = social.icon;
									return (
										<Link 
											key={index}
											href={social.href}
											className="group relative p-2"
										>
											<div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"></div>
											<IconComponent className={`relative w-5 h-5 text-white/60 ${social.color} group-hover:scale-110 transition-all duration-300`} />
										</Link>
									);
								})}
							</div>

							<button className="group relative overflow-hidden">
								<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
								<div className="relative px-6 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 rounded-lg text-white text-sm font-medium transition-all duration-300">
									<span className="relative z-10">Let's Talk</span>
								</div>
							</button>
						</nav>

						{/* Mobile Menu Button */}
						<button 
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="lg:hidden relative p-2 text-white/80 hover:text-white transition-colors duration-300"
						>
							<div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
							{isMobileMenuOpen ? (
								<HiOutlineX className="relative w-6 h-6" />
							) : (
								<HiOutlineMenu className="relative w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div className={`lg:hidden transition-all duration-500 overflow-hidden ${
					isMobileMenuOpen 
						? 'max-h-screen opacity-100' 
						: 'max-h-0 opacity-0'
				}`}>
					<div className="bg-black/95 backdrop-blur-xl border-t border-white/10">
						<div className="px-6 py-6 space-y-6">
							{/* Mobile Navigation Links */}
							<div className="space-y-4">
								{['Work', 'About', 'Contact'].map((item) => (
									<Link 
										key={item}
										href={`#${item.toLowerCase()}`}
										onClick={() => setIsMobileMenuOpen(false)}
										className="block text-white/70 hover:text-white font-medium text-lg transition-colors duration-300"
									>
										{item}
									</Link>
								))}
							</div>

							{/* Mobile Social Links */}
							<div className="flex items-center gap-6 pt-4 border-t border-white/10">
								{[
									{ icon: BsGithub, href: "https://github.com/SultanovMusa" },
									{ icon: PiInstagramLogoBold, href: "https://www.instagram.com/sultanov_11_/" },
									{ icon: BsTelegram, href: "https://t.me/Mufa_Sultanov" }
								].map((social, index) => {
									const IconComponent = social.icon;
									return (
										<Link 
											key={index}
											href={social.href}
											className="text-white/60 hover:text-white transition-colors duration-300"
										>
											<IconComponent className="w-6 h-6" />
										</Link>
									);
								})}
							</div>

							{/* Mobile CTA */}
							<button className="w-full py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 rounded-lg text-white font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
								Let's Talk
							</button>
						</div>
					</div>
				</div>
			</header>

			{/* Spacer to prevent content from being hidden behind fixed header */}
			<div className="h-20"></div>
		</>
	);
};

export default Header;