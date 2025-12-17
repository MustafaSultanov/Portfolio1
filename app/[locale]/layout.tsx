import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Locale, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import LayoutClientRoot from "./layout.c";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/components/darkMode/theme-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

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
		<html lang={locale} suppressHydrationWarning>
			<head>
				<link rel="preload" as="image" href="/assets/akylmanBanner.jpg" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem
						disableTransitionOnChange>
						<LayoutClientRoot>{children}</LayoutClientRoot>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
