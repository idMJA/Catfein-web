"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// Dynamically import motion components with ssr disabled
const MotionDiv = dynamic(
	() => import("framer-motion").then((mod) => mod.motion.div),
	{ ssr: false },
);

// Animation variants
const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
		transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
	},
};

export default function NotFound() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Navbar />
			<div className="h-16" />

			<main className="flex flex-col items-center justify-center min-h-[90vh] relative overflow-hidden">
				{/* Background blur effects */}
				<div className="absolute inset-0 opacity-20">
					<MotionDiv
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 0.2, scale: 1 }}
						transition={{ duration: 2 }}
						className="absolute transform -rotate-12 -left-1/4 top-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
					/>
					<MotionDiv
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 0.2, scale: 1 }}
						transition={{ duration: 2, delay: 0.3 }}
						className="absolute transform rotate-12 -right-1/4 top-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
					/>
				</div>

				{/* Content */}
				<MotionDiv
					initial="initial"
					animate="animate"
					className="relative z-10 text-center px-4"
				>
					<MotionDiv variants={fadeInUp}>
						<h1 className="text-9xl font-bold mb-4">404</h1>
					</MotionDiv>

					<MotionDiv variants={fadeInUp}>
						<h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
					</MotionDiv>

					<MotionDiv variants={fadeInUp}>
						<p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
							Oops! It seems like this page has wandered off into the digital
							void. Let&apos;s get you back on track.
						</p>
					</MotionDiv>

					<MotionDiv variants={fadeInUp}>
						<Link
							href="/"
							className="bg-zinc-800 text-gray-200 hover:bg-zinc-700 px-8 py-4 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
						>
							Return Home
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								/>
							</svg>
						</Link>
					</MotionDiv>
				</MotionDiv>
			</main>

			<Footer />
		</div>
	);
}
