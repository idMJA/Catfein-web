/**
 * This file contains a list of all redirects in the application
 * It serves as documentation and can be used to programmatically generate redirects
 */

/**
 * Interface for redirect entries
 */
export interface RedirectInfo {
	url: string;
	title: string;
	message: string;
}

/**
 * Mapping of redirect paths to their destination information
 */
export const REDIRECTS: Record<string, RedirectInfo> = {
	// External service redirects
	pse: {
		url: "https://pse.komdigi.go.id/tdpse-detail/19732",
		title: "PSE (Penyelenggara Sistem Elektronik)",
		message: "You are being redirected to the PSE page",
	},
	status: {
		url: "https://status.catfein.co.id/",
		title: "Status",
		message: "You are being redirected to the Catfein Status page",
	},
	dash: {
		url: "https://house.catfein.co.id/",
		title: "Dashboard",
		message: "You are being redirected to the Catfein Dashboard",
	},
	panel: {
		url: "https://portal.catfein.co.id/",
		title: "Panel",
		message: "You are being redirected to the Catfein Panel",
	},
	discord: {
		url: "https://discord.gg/eSC98WAF5k",
		title: "Discord",
		message: "You are being redirected to the Catfein Discord",
	},

	// Add more redirects here as needed
};

/**
 * Get redirect information by path
 * @param path The path to get redirect information for
 * @returns The redirect information or undefined if not found
 */
export function getRedirectByPath(path: string): RedirectInfo | undefined {
	// Normalize the path by removing leading slash if present
	const normalizedPath = path.startsWith("/") ? path.substring(1) : path;

	// Return the redirect information if the path exists in the redirects map
	return REDIRECTS[normalizedPath];
}
