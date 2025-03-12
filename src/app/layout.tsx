import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Catfein",
	description: "The Purr-fect Hosting Solutions.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/catfein.svg" type="image/svg+xml" />
				<meta property="og:title" content="Catfein" />
				<meta
					property="og:description"
					content="The Purr-fect Hosting Solutions."
				/>
				<meta property="og:image" content="/catfein.svg" />
				<meta property="og:url" content="https://catfein.com" />
				<meta name="twitter:card" content="summary_large_image" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
