"use client";

import React from "react";
import { FaNodeJs, FaPython, FaDiscord, FaTerminal } from "react-icons/fa";
import { SiWebpack, SiBun } from "react-icons/si";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

// Dynamically import motion components with ssr disabled
const MotionDiv = dynamic(
	() => import("framer-motion").then((mod) => mod.motion.div),
	{ ssr: false },
);
const MotionSection = dynamic(
	() => import("framer-motion").then((mod) => mod.motion.section),
	{ ssr: false },
);

// Smooth easing
const easing = [0.6, -0.05, 0.01, 0.99];

// Animation variants
const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
		transition: { duration: 0.6, ease: easing },
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, ease: easing },
	},
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const fadeInScale = {
	initial: {
		scale: 0.8,
		opacity: 0,
		transition: { duration: 0.6, ease: easing },
	},
	animate: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.6, ease: easing },
	},
};

const slideInLeft = {
	initial: {
		x: -60,
		opacity: 0,
		transition: { duration: 0.8, ease: easing },
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.8, ease: easing },
	},
};

const slideInRight = {
	initial: {
		x: 60,
		opacity: 0,
		transition: { duration: 0.8, ease: easing },
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.8, ease: easing },
	},
};

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Navbar />

			{/* Hero Section */}
			<header className="h-screen flex items-center justify-center container mx-auto px-4 relative overflow-hidden">
				<div className="absolute inset-0 opacity-20">
					<MotionDiv
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 0.2, scale: 1 }}
						transition={{ duration: 2, ease: easing }}
						className="absolute transform -rotate-12 -left-1/4 top-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
					/>
					<MotionDiv
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 0.2, scale: 1 }}
						transition={{ duration: 2, ease: easing, delay: 0.3 }}
						className="absolute transform rotate-12 -right-1/4 top-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
					/>
				</div>
				<MotionDiv
					initial="initial"
					animate="animate"
					className="max-w-4xl mx-auto text-center relative z-10"
				>
					<MotionDiv
						variants={slideInLeft}
						className="text-6xl sm:text-7xl font-bold mb-6 text-white"
					>
						Catfein
					</MotionDiv>
					<MotionDiv
						variants={slideInRight}
						className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto"
					>
						The purr-fect Hosting platform. Experience lightning-fast
						performance with enterprise-grade reliability.
					</MotionDiv>
					<MotionDiv
						variants={fadeInUp}
						className="flex flex-col sm:flex-row justify-center gap-4"
					>
						<Link
							href="/dash"
							className="bg-zinc-800 text-gray-200 hover:bg-zinc-700 px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
						>
							Get Started
						</Link>
						<Link
							href="/discord"
							className="bg-zinc-950 text-gray-300 hover:bg-zinc-900 px-6 py-3 rounded-lg text-base font-medium transition-colors flex items-center gap-2"
						>
							Join Discord
							<FaDiscord className="w-5 h-5" />
						</Link>
					</MotionDiv>
				</MotionDiv>
			</header>

			{/* Features Section */}
			<MotionSection
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
				id="features"
				className="container mx-auto px-8 py-32"
			>
				<MotionDiv
					variants={fadeInScale}
					className="text-4xl font-bold text-center mb-8"
				>
					Premium Features
				</MotionDiv>
				<MotionDiv
					variants={fadeInScale}
					className="text-gray-400 text-center mb-24 max-w-3xl mx-auto text-lg"
				>
					Unlock powerful features to enhance your bot&apos;s performance and
					capabilities
				</MotionDiv>
				<MotionDiv
					variants={staggerContainer}
					className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto"
				>
					<MotionDiv
						variants={fadeInUp}
						className="bg-zinc-900 p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all"
					>
						<div className="h-16 w-16 bg-zinc-800 rounded-xl mb-6 flex items-center justify-center">
							<svg
								className="w-8 h-8"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<title>Cloud Icon</title>
								<path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
							</svg>
						</div>
						<h3 className="text-2xl font-semibold mb-4">High Performance</h3>
						<p className="text-gray-400 text-lg">
							Experience lightning-fast response times and seamless scaling for
							your growing community.
						</p>
					</MotionDiv>
					<MotionDiv
						variants={fadeInUp}
						className="bg-zinc-900 p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all"
					>
						<div className="h-16 w-16 bg-zinc-800 rounded-xl mb-6 flex items-center justify-center">
							<svg
								className="w-8 h-8"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<title>Chart Icon</title>
								<path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
							</svg>
						</div>
						<h3 className="text-2xl font-semibold mb-4">
							Real-time Monitoring
						</h3>
						<p className="text-gray-400 text-lg">
							Monitor your bot&apos;s performance with our intuitive dashboard.
						</p>
					</MotionDiv>
					<MotionDiv
						variants={fadeInUp}
						className="bg-zinc-900 p-12 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all"
					>
						<div className="h-16 w-16 bg-zinc-800 rounded-xl mb-6 flex items-center justify-center">
							<svg
								className="w-8 h-8"
								fill="currentColor"
								viewBox="0 0 20 20"
								aria-hidden="true"
							>
								<title>Users Icon</title>
								<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
							</svg>
						</div>
						<h3 className="text-2xl font-semibold mb-4">DDoS Protection</h3>
						<p className="text-gray-400 text-lg">
							Enterprise-grade DDoS protection for maximum security.
						</p>
					</MotionDiv>
				</MotionDiv>
			</MotionSection>

			{/* User Ratings Section */}
			<MotionSection
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
				id="ratings"
				className="container mx-auto px-4 py-20"
			>
				<MotionDiv
					variants={fadeInScale}
					className="text-6xl font-bold text-center mb-4"
				>
					Everyone loves it
				</MotionDiv>
				<MotionDiv
					variants={fadeInScale}
					className="text-gray-400 text-center mb-16 max-w-3xl mx-auto text-xl"
				>
					Discover what our amazing community has to say about their experience
					with Catfein
				</MotionDiv>
				<MotionDiv
					variants={staggerContainer}
					className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
				>
					<MotionDiv
						variants={fadeInUp}
						className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50"
					>
						<div className="flex items-start gap-3">
							<div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-800">
								<Image
									src="/users/mj.png"
									alt="iaMJ"
									width={48}
									height={48}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<h4 className="font-semibold text-gray-200">iaMJ / アーリャ</h4>
								<p className="text-gray-500">@mjba</p>
							</div>
						</div>
						<p className="text-gray-300 mt-4">
							So far so good, but mostly I&apos;m a skill issue
						</p>
					</MotionDiv>

					<MotionDiv
						variants={fadeInUp}
						className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50"
					>
						<div className="flex items-start gap-3">
							<div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-800">
								<Image
									src="/users/ducky.gif"
									alt="avatar"
									width={48}
									height={48}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<h4 className="font-semibold text-gray-200">S1mp1y Ducky</h4>
								<p className="text-gray-500">@s1mp1yducky</p>
							</div>
						</div>
						<p className="text-gray-300 mt-4">
							The new website IS SOO MUCH BETTER. But like make the navigation
							easier Home, Servers, Store, News
						</p>
					</MotionDiv>

					<MotionDiv
						variants={fadeInUp}
						className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50"
					>
						<div className="flex items-start gap-3">
							<div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-800">
								<Image
									src="/users/tyowk.png"
									alt="avatar"
									width={48}
									height={48}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<h4 className="font-semibold text-gray-200">Tyowk</h4>
								<p className="text-gray-500">@tyowk.dev</p>
							</div>
						</div>
						<p className="text-gray-300 mt-4">
							Fast, stable, and responsive support. <s>cheap price</s> free!
							overall, satisfied!
						</p>
					</MotionDiv>

					<MotionDiv
						variants={fadeInUp}
						className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50"
					>
						<div className="flex items-start gap-3">
							<div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-800">
								<Image
									src="/users/ngops.png"
									alt="avatar"
									width={48}
									height={48}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<h4 className="font-semibold text-gray-200">.ngops</h4>
								<p className="text-gray-500">@.ngops</p>
							</div>
						</div>
						<p className="text-gray-300 mt-4">
							This hosting offers stable performance and fast access, ensuring a
							smooth user experience. The customer support team is responsive
							and friendly, always ready to assist. With high-quality service
							and attractive features, this hosting is highly recommended!
						</p>
					</MotionDiv>

					<MotionDiv
						variants={fadeInUp}
						className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50"
					>
						<div className="flex items-start gap-3">
							<div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-800">
								<Image
									src="https://api.dicebear.com/7.x/avataaars/svg?seed=mike"
									alt="avatar"
									width={48}
									height={48}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<h4 className="font-semibold text-gray-200">MikeOverflow</h4>
								<p className="text-gray-500">@mikestacks</p>
							</div>
						</div>
						<p className="text-gray-300 mt-4">
							The scaling is amazing! My bot handled so many users, it started a
							support group for overworked Discord bots.
						</p>
					</MotionDiv>

					<MotionDiv
						variants={fadeInUp}
						className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800/50"
					>
						<div className="flex items-start gap-3">
							<div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-800">
								<Image
									src="https://api.dicebear.com/7.x/avataaars/svg?seed=lily"
									alt="avatar"
									width={48}
									height={48}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<h4 className="font-semibold text-gray-200">LilyPad</h4>
								<p className="text-gray-500">@lilydev</p>
							</div>
						</div>
						<p className="text-gray-300 mt-4">
							Dashboard is so intuitive, my cat walked across the keyboard and
							accidentally optimized my bot&apos;s performance!
						</p>
					</MotionDiv>
				</MotionDiv>
			</MotionSection>

			{/* Runtime Support */}
			<MotionSection
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
				className="container mx-auto px-8 py-32"
			>
				<MotionDiv
					variants={fadeInScale}
					className="text-5xl font-bold text-center mb-8"
				>
					Supported Languages
				</MotionDiv>
				<MotionDiv
					variants={fadeInScale}
					className="text-gray-400 text-center mb-16 max-w-3xl mx-auto text-xl"
				>
					Deploy your bot using your favorite programming language and framework
				</MotionDiv>
				<MotionDiv
					variants={staggerContainer}
					className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
				>
					<MotionDiv
						variants={fadeInUp}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.2, ease: easing },
						}}
						className="bg-zinc-900/50 p-8 rounded-xl flex flex-col items-center justify-center hover:bg-zinc-800 transition-colors gap-4"
					>
						<FaNodeJs className="w-12 h-12 text-gray-300" />
						<span className="text-xl font-semibold text-gray-300">Node.js</span>
					</MotionDiv>
					<MotionDiv
						variants={fadeInUp}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.2, ease: easing },
						}}
						className="bg-zinc-900/50 p-8 rounded-xl flex flex-col items-center justify-center hover:bg-zinc-800 transition-colors gap-4"
					>
						<FaPython className="w-12 h-12 text-gray-300" />
						<span className="text-xl font-semibold text-gray-300">Python</span>
					</MotionDiv>
					<MotionDiv
						variants={fadeInUp}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.2, ease: easing },
						}}
						className="bg-zinc-900/50 p-8 rounded-xl flex flex-col items-center justify-center hover:bg-zinc-800 transition-colors gap-4"
					>
						<SiWebpack className="w-12 h-12 text-gray-300" />
						<span className="text-xl font-semibold text-gray-300">Website</span>
					</MotionDiv>
					<MotionDiv
						variants={fadeInUp}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.2, ease: easing },
						}}
						className="bg-zinc-900/50 p-8 rounded-xl flex flex-col items-center justify-center hover:bg-zinc-800 transition-colors gap-4"
					>
						<FaTerminal className="w-12 h-12 text-gray-300" />
						<span className="text-xl font-semibold text-gray-300">
							AIO (Bash)
						</span>
					</MotionDiv>
					<MotionDiv
						variants={fadeInUp}
						whileHover={{
							scale: 1.05,
							transition: { duration: 0.2, ease: easing },
						}}
						className="bg-zinc-900/50 p-8 rounded-xl flex flex-col items-center justify-center hover:bg-zinc-800 transition-colors gap-4"
					>
						<SiBun className="w-12 h-12 text-gray-300" />
						<span className="text-xl font-semibold text-gray-300">Bun</span>
					</MotionDiv>
				</MotionDiv>
				<div className="mt-12 text-center">
					<p className="text-gray-400 text-lg flex items-center justify-center gap-2">
						<FaDiscord className="w-6 h-6" />
						Need support for other languages? Join our Discord community!
					</p>
					<Link
						href="/discord"
						className="inline-block mt-4 bg-zinc-800 text-gray-300 hover:bg-zinc-700 px-6 py-3 rounded-lg text-base font-medium transition-colors"
					>
						Join Discord Server
					</Link>
				</div>
			</MotionSection>

			{/* CTA Section */}
			<MotionSection
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				variants={staggerContainer}
				className="container mx-auto px-8 py-24"
			>
				<MotionDiv
					variants={fadeInScale}
					className="bg-zinc-900/50 rounded-3xl p-12 text-center max-w-5xl mx-auto"
				>
					<h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
					<p className="text-lg mb-8 max-w-2xl mx-auto text-gray-400">
						Join thousands of developers who trust Catfein for their Discord bot
						hosting needs
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Link
							href="/dash"
							className="bg-zinc-900 text-gray-200 hover:bg-zinc-800 px-6 py-3 rounded-lg text-base font-medium transition-colors flex items-center gap-2"
						>
							Get Started
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
							href="/discord"
							className="bg-zinc-950 text-gray-300 hover:bg-zinc-900 px-6 py-3 rounded-lg text-base font-medium transition-colors flex items-center gap-2"
						>
							Join Discord
							<FaDiscord className="w-5 h-5" />
						</Link>
					</div>
				</MotionDiv>
			</MotionSection>

			<Footer />
		</div>
	);
}
