"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getRedirectByPath } from "../utils/redirects";
import type { RedirectInfo } from "../utils/redirects";

interface RedirectProps {
	params: {
		redirect: string;
	};
}

export default function Redirect({ params }: RedirectProps) {
	const router = useRouter();
	const { redirect } = params;
	const [countdown, setCountdown] = useState(5);
	const [redirectInfo, setRedirectInfo] = useState<RedirectInfo | null>(null);

	useEffect(() => {
		// Get the redirect information
		const info = getRedirectByPath(redirect);

		if (info) {
			setRedirectInfo(info);

			// Set up countdown timer
			if (countdown > 0) {
				const timer = setTimeout(() => {
					setCountdown(countdown - 1);
				}, 1000);

				return () => clearTimeout(timer);
			}

			// Redirect when countdown reaches 0
			window.location.href = info.url;
		} else {
			// If no redirect is found, go to homepage
			router.push("/");
		}
	}, [redirect, router, countdown]);

	// If no redirect information was found, show loading while redirecting to homepage
	if (!redirectInfo) {
		return (
			<div className="min-h-screen bg-black flex items-center justify-center">
				<div className="relative">
					<div className="w-16 h-16 border-4 border-zinc-800 rounded-full animate-spin">
						<div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-white rounded-full animate-spin" />
					</div>
				</div>
			</div>
		);
	}

	// Show countdown page
	return (
		<div className="min-h-screen bg-black text-white">
			<Navbar />
			<div className="h-16" />

			<main className="flex flex-col items-center justify-center min-h-[80vh] relative overflow-hidden">
				{/* Background blur effects */}
				<div className="absolute inset-0 opacity-20">
					<div className="absolute transform -rotate-12 -left-1/4 top-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
					<div className="absolute transform rotate-12 -right-1/4 top-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
				</div>

				{/* Content */}
				<div className="relative z-10 text-center px-4">
					<h1 className="text-5xl font-bold mb-4">{redirectInfo.title}</h1>

					<p className="text-gray-400 text-lg mb-6 max-w-md mx-auto">
						{redirectInfo.message}
					</p>

					<div className="text-3xl font-semibold mb-8 text-white">
						Redirecting in <span className="text-blue-400">{countdown}</span>{" "}
						seconds...
					</div>

					<div className="flex gap-4 justify-center">
						<Link
							href={redirectInfo.url}
							className="bg-zinc-800 text-gray-200 hover:bg-zinc-700 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
						>
							Go Now
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<title>Arrow Right</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								/>
							</svg>
						</Link>

						<Link
							href="/"
							className="border border-zinc-700 text-gray-300 hover:bg-zinc-800 px-8 py-4 rounded-lg font-medium transition-colors"
						>
							Return Home
						</Link>
					</div>

					<div className="mt-12 text-gray-500 text-sm">
						Destination:{" "}
						<span className="text-gray-400">{redirectInfo.url}</span>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
