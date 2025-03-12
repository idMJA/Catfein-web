import { RedirectClient } from "./RedirectClient";

interface PageProps {
	params: Promise<{
		redirect: string;
	}>;
}

export default async function Page({ params }: PageProps) {
	const resolvedParams = await params;
	return <RedirectClient redirect={resolvedParams.redirect} />;
}
