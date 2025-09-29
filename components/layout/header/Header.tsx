"use client";
import { BsTelegram } from "react-icons/bs";
import { PiInstagramLogoBold } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect, useRef } from "react";
import logo from "../../../public/assets/smzlogo.jpg";
import AnimatedNumbers from "@/components/ui/AnimatedNumbers";
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

	// Scroll эффекти үчүн
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Dropdown тышкарысын басканда жабуу үчүн
	useEffect(() => {
		interface Language {
			name: string;
			flag: StaticImageData;
			code: string;
		}

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
		{ name: "Английский", flag: englishFlag, code: "en" },
	];

	const currentLanguage =
		languages.find((lang) => lang.code === locale) || languages[0];

	const switchLanguage = (newLocale: string) => {
		const pathSegments = pathname.split("/").filter((segment) => segment);

		// Учурдагы locale убактысын алып салып, жаңы locale кошуу
		const currentLocale = pathSegments[0];
		let newPath = "";

		// Эгерде учурдагы path тилди камтыса, аны алмаштыр
		if (languages.some((lang) => lang.code === currentLocale)) {
			pathSegments[0] = newLocale;
			newPath = "/" + pathSegments.join("/");
		} else {
			// Эгерде тил жок болсо, башына кош
			newPath = "/" + newLocale + pathname;
		}

		router.push(newPath);
		setIsLangDropdownOpen(false);
	};

	return (
		<>
			<header
				className={`fixed top-0   w-full z-50   bg-[#FFFFFF1A] dark:bg-[#FFFFFF1A] backdrop-blur-[80px] `}>
				<div className="container mx-auto px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						{/* Logo Section - Скромный дизайн */}
						<div className="flex items-center">
							<div className="relative mr-4">
								<Image
									src={logo}
									alt="Mustafa Sultanov"
									className="w-12 h-12 lg:w-14 lg:h-14 rounded-sm"
								/>
							</div>

							<div className="hidden md:flex flex-col">
								<span className="text-white font-medium text-xl">
									Mustafa Sultanov
								</span>
								<span className="text-gray-400 text-sm">
									<AnimatedNumbers value={2005} />
								</span>
							</div>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden lg:flex items-center space-x-8">
							{/* Language Switcher */}
							<div className="relative" ref={dropdownRef}>
								<button
									onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
									className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
									{currentLanguage.name}
									<svg
										className="h-4 w-4"
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

								{/* Dropdown menu */}
								{isLangDropdownOpen && (
									<div className="absolute top-full right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
										{languages.map((language) => (
											<button
												key={language.code}
												className={`flex items-center w-full px-4 py-3 text-sm hover:bg-gray-700 transition-colors duration-200 ${
													locale === language.code
														? "bg-gray-700 text-white"
														: "text-gray-300 hover:text-white"
												}`}
												onClick={() => switchLanguage(language.code)}>
												<div className="mr-3 w-6 h-4 relative overflow-hidden">
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
							<div className="flex items-center space-x-6">
								{[
									{
										icon: BsGithub,
										href: "https://github.com/SultanovMusa",
									},
									{
										icon: PiInstagramLogoBold,
										href: "https://www.instagram.com/sultanov_11_/",
									},
									{
										icon: BsTelegram,
										href: "https://t.me/Mufa_Sultanov",
									},
								].map((social, index) => {
									const IconComponent = social.icon;
									return (
										<Link
											key={index}
											href={social.href}
											className="text-gray-400 hover:text-white transition-colors duration-200">
											<IconComponent className="w-5 h-5" />
										</Link>
									);
								})}
							</div>

							<ModeToggle />
						</nav>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="lg:hidden text-gray-400 hover:text-white transition-colors duration-200">
							{isMobileMenuOpen ? (
								<HiOutlineX className="w-6 h-6" />
							) : (
								<HiOutlineMenu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div
					className={`lg:hidden transition-all duration-300 overflow-hidden ${
						isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
					}`}>
					<div className="bg-gray-900 border-t border-gray-700">
						<div className="px-6 py-6 space-y-6">
							{/* Mobile Language Switcher */}
							<div>
								<div className="text-gray-400 text-sm mb-3">Language</div>
								<div className="space-y-2">
									{languages.map((language) => (
										<button
											key={language.code}
											className={`flex items-center w-full px-3 py-2 text-sm rounded transition-colors duration-200 ${
												locale === language.code
													? "bg-gray-700 text-white"
													: "text-gray-300 hover:text-white hover:bg-gray-800"
											}`}
											onClick={() => switchLanguage(language.code)}>
											<div className="mr-3 w-6 h-4 relative overflow-hidden">
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
							<div className="border-t border-gray-700 pt-6">
								<div className="flex items-center space-x-8">
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
												className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200">
												<IconComponent className="w-5 h-5" />
												<span className="text-sm">{social.label}</span>
											</Link>
										);
									})}
								</div>
							</div>

							{/* Mobile Contact Button */}
							{/* <button className="w-full py-3 bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors duration-200">
								Contact
							</button> */}
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
