import "./globals.css";
import { Funnel_Display } from "next/font/google";
import Provider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
	title: "GrowSense",
	description:
		"Discover premium magic trick tutorials, special playing card decks, and exclusive magic props at GrowSense. Master mind-blowing illusions and elevate your magic skills today! ✨🎩 Visit GrowSense.com.",
};

const AppFont = Funnel_Display({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<>
			<ClerkProvider>
				<html lang="en">
					<body className={AppFont.className}>
						<Provider>{children}</Provider>
						<Toaster />
						<Analytics />
					</body>
				</html>
			</ClerkProvider>
		</>
	);
}
