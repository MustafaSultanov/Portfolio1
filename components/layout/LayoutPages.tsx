"use client";
import { FC, ReactNode } from "react";
// import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Sidebar from "../pages/Sidebar";
// import Footer from "./footer/Footer";

interface LayoutProps {
	children: ReactNode;
}
const LayoutPages: FC<LayoutProps> = ({ children }) => {
	return (
		<div>
			<>
				<Header />
				<main>{children}</main>
				<Sidebar />
				{/* <Footer /> */}
			</>
		</div>
	);
};

export default LayoutPages;
