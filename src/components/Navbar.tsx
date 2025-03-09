import React from "react";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="fixed w-full bg-black/50 backdrop-blur-lg border-b border-white/5 z-50">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold text-white">
					Catfein
				</Link>
				<div className="flex gap-8 items-center">
					<Link
						href="/status"
						className="text-gray-400 hover:text-gray-200 transition-colors"
					>
						Status
					</Link>
					<Link
						href="/team"
						className="text-gray-400 hover:text-gray-200 transition-colors"
					>
						Team
					</Link>
					<Link
						href="/pse"
						className="text-gray-400 hover:text-gray-200 transition-colors"
					>
						PSE
					</Link>
					<Link
						href="/dash"
						className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition-colors text-gray-300"
					>
						Login
					</Link>
				</div>
			</div>
		</nav>
	);
}
