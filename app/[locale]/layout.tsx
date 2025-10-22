import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Locale, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
// import "./globals.css";
// import "./claude-ai.css";
// import logoImage from "../../assets/logo.png";
import LayoutClientRoot from "./layout.c";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/darkMode/theme-provider";
// import AosInit from "@/components/ui/aos";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// export const metadata: Metadata = {
// 	title: "Акылман Президенттик лицейи | Таланттуу балдар үчүн билим берүү",
// 	description:
// 		"Акылман Президенттик лицейи - заманбап инфраструктурасы, таланттуу балдар үчүн акысыз окуу жана ыңгайлуу жатакана менен инновациялык билим берүү мекемеси. Жогорку технологиялык жабдуулар жана мыкты мугалимдер ар бир окуучунун потенциалын ачууга жардам берет.",
// 	keywords:
// 		"Акылман Президенттик лицейи, президенттик мектеп, элиталык билим берүү, акысыз окутуу, таланттуу балдар, инновациялык билим берүү, заманбап мектеп, мамлекеттик мектеп, жатаканасы бар мектеп, жеке окутуу, таланттуу балдар, келечектин билими, мектепке тандоо, мектеп лабораториялары, мектеп ийримдери, билим берүү технологиялары",
// 	// icons: {
// 	// 	icon: logoImage.src,
// 	// },
// };

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const { locale } = await params;
	if (!routing.locales.includes(locale as Locale)) {
		notFound();
	}
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<head>
				<link
					rel="preload"
					as="image"
					href="/assets/akylmanBanner.jpg"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<LayoutClientRoot>{children}</LayoutClientRoot>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
