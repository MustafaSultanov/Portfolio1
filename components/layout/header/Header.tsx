"use client";
import { BsTelegram } from "react-icons/bs";
import { PiInstagramLogoBold } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import logo from "../../../public/assets/smzlogo.jpg";
// import AnimatedNumbers from "@/components/ui/AnimatedNumbers";
import { useLocale, useTranslations } from "next-intl";
import russianFlag from "../../../public/assets/flags/russian.png";
import englishFlag from "../../../public/assets/flags/english.png";
import kyrgyzFlag from "../../../public/assets/flags/kyrgyz.png";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "@/components/darkMode/ModeToggle";

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const locale = useLocale();
	const t = useTranslations("Home");
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!(dropdownRef.current as HTMLDivElement).contains(event.target as Node)
			) {
				setIsLangDropdownOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const languages = [
		{ name: "Кыргызча", flag: kyrgyzFlag, code: "kg" },
		{ name: "Русский", flag: russianFlag, code: "ru" },
		{ name: "English", flag: englishFlag, code: "en" },
	];

	const currentLanguage =
		languages.find((lang) => lang.code === locale) || languages[0];

	const switchLanguage = (newLocale: string) => {
		const pathSegments = pathname.split("/").filter((segment) => segment);
		const currentLocale = pathSegments[0];
		let newPath = "";

		if (languages.some((lang) => lang.code === currentLocale)) {
			pathSegments[0] = newLocale;
			newPath = "/" + pathSegments.join("/");
		} else {
			newPath = "/" + newLocale + pathname;
		}

		router.push(newPath);
		setIsLangDropdownOpen(false);
	};

	return (
		<>
			<header
				className={`fixed top-0 w-full z-50 transition-all duration-500 ${
					isScrolled
						? "bg-white/80 dark:bg-slate-950/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-200/50 dark:border-slate-800/50"
						: "bg-[rgba(28,26,26,0.9)]"
				}`}>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						{/* Logo Section */}
						<div className="flex items-center gap-3 group">
							<div className="relative">
								<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
								<Image
									src={logo}
									alt="Mustafa Sultanov"
									className="relative w-11 h-11 lg:w-12 lg:h-12 rounded-lg ring-2 ring-white/10 dark:ring-white/5"
								/>
							</div>
							<div className="hidden sm:block">
								<h1 className="text-lg font-semibold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
									Mustafa
								</h1>
								<p className="text-xs text-slate-500 dark:text-slate-400 -mt-0.5">
									Full Stack Developer
								</p>
							</div>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden lg:flex items-center gap-8">
							{/* Language Switcher */}
							<div className="relative" ref={dropdownRef}>
								<button
									onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
									className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200 border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
									<div className="w-5 h-3.5 relative overflow-hidden rounded-sm">
										<Image
											src={currentLanguage.flag}
											alt="flag"
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<span>{currentLanguage.name}</span>
									<svg
										className={`h-4 w-4 transition-transform duration-200 ${
											isLangDropdownOpen ? "rotate-180" : ""
										}`}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor">
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										/>
									</svg>
								</button>

								{isLangDropdownOpen && (
									<div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
										{languages.map((language, index) => (
											<button
												key={language.code}
												className={`flex items-center w-full px-4 py-3 text-sm transition-colors duration-150 ${
													locale === language.code
														? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
														: "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
												} ${index !== languages.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}
												onClick={() => switchLanguage(language.code)}>
												<div className="mr-3 w-6 h-4 relative overflow-hidden rounded-sm">
													<Image
														src={language.flag}
														alt="flag"
														layout="fill"
														objectFit="cover"
													/>
												</div>
												{language.name}
											</button>
										))}
									</div>
								)}
							</div>

							{/* Social Links */}
							<div className="flex items-center gap-2">
								{[
									{
										icon: BsGithub,
										href: "https://github.com/SultanovMusa",
										label: "GitHub",
									},
									{
										icon: PiInstagramLogoBold,
										href: "https://www.instagram.com/sultanov_11_/",
										label: "Instagram",
									},
									{
										icon: BsTelegram,
										href: "https://t.me/Mufa_Sultanov",
										label: "Telegram",
									},
								].map((social, index) => {
									const IconComponent = social.icon;
									return (
										<Link
											key={index}
											href={social.href}
											aria-label={social.label}
											className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200">
											<IconComponent className="w-5 h-5" />
										</Link>
									);
								})}
							</div>

							<ModeToggle />
						</nav>

						{/* Mobile Menu Button */}
						<div className="flex items-center gap-3 lg:hidden">
							<ModeToggle />
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200"
								aria-label="Toggle menu">
								{isMobileMenuOpen ? (
									<HiOutlineX className="w-5 h-5" />
								) : (
									<HiOutlineMenu className="w-5 h-5" />
								)}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`lg:hidden transition-all duration-300 ease-in-out ${
						isMobileMenuOpen
							? "max-h-screen opacity-100 visible"
							: "max-h-0 opacity-0 invisible"
					}`}>
					<div className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 shadow-lg">
						<div className="container mx-auto px-4 sm:px-6 py-6 space-y-6">
							{/* Mobile Language Switcher */}
							<div>
								<div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
									Language
								</div>
								<div className="space-y-1">
									{languages.map((language) => (
										<button
											key={language.code}
											className={`flex items-center w-full px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
												locale === language.code
													? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium shadow-sm"
													: "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
											}`}
											onClick={() => {
												switchLanguage(language.code);
												setIsMobileMenuOpen(false);
											}}>
											<div className="mr-3 w-6 h-4 relative overflow-hidden rounded-sm">
												<Image
													src={language.flag}
													alt="flag"
													layout="fill"
													objectFit="cover"
												/>
											</div>
											{language.name}
										</button>
									))}
								</div>
							</div>

							{/* Mobile Social Links */}
							<div className="border-t border-slate-200 dark:border-slate-800 pt-6">
								<div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
									Connect
								</div>
								<div className="grid grid-cols-3 gap-3">
									{[
										{
											icon: BsGithub,
											href: "https://github.com/SultanovMusa",
											label: "GitHub",
										},
										{
											icon: PiInstagramLogoBold,
											href: "https://www.instagram.com/sultanov_11_/",
											label: "Instagram",
										},
										{
											icon: BsTelegram,
											href: "https://t.me/Mufa_Sultanov",
											label: "Telegram",
										},
									].map((social, index) => {
										const IconComponent = social.icon;
										return (
											<Link
												key={index}
												href={social.href}
												className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200 group">
												<IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
												<span className="text-xs font-medium">{social.label}</span>
											</Link>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Spacer */}
			<div className="h-20"></div>
		</>
	);
};

export default Header;