import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
	locales: ["ru", "kg", "en"],
	defaultLocale: "kg",
	localePrefix: "as-needed", // Use "as-needed" to prefix non-default locales only
	localeCookie: false, // Disable locale cookie if not needed
	localeDetection: false, // Disable automatic locale detection if not needed
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing);
