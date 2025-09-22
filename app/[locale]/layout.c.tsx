"use client";
import LayoutPages from "@/components/layout/LayoutPages";
import { FC, ReactNode } from "react";
// import NextTopLoader from "nextjs-toploader";
// import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
// import { ClaudeAi } from "@/components/user/layout/ClaudeAi";

interface ILayoutClientRootProps {
	children: ReactNode;
}

const LayoutClientRoot: FC<ILayoutClientRootProps> = ({ children }) => {
	return (
		<>
			{/* <NextTopLoader showSpinner={false} color="#ad47ff" height={3} /> */}
			{/* <ClaudeAi
				aiModel="akylman"
				telegramBotToken="7852703824:AAF9h2HF_bQMxtOUfMdEsTiC7rfC4JDy2yY"
				telegramChatId="-4720741958"
			/> */}
			<LayoutPages>
				<>{children}</>
			</LayoutPages>
		</>
	);
};

export default LayoutClientRoot;
