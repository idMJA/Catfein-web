"use client";

import React from "react";

export default function Loading() {
	return (
		<div className="min-h-screen bg-black flex items-center justify-center">
			<div className="relative">
				{/* Outer ring */}
				<div className="w-16 h-16 border-4 border-zinc-800 rounded-full animate-spin">
					{/* Inner highlight */}
					<div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-white rounded-full animate-spin" />
				</div>
			</div>
		</div>
	);
}
