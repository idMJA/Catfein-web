"use client";

import React from "react";
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

export default function Privacy() {
	return (
		<div className="min-h-screen bg-black text-white">
			<Navbar />
			<div className="h-16" />

			<main className="container mx-auto px-4 py-16">
				<MotionDiv
					initial="initial"
					animate="animate"
					variants={fadeInUp}
					className="max-w-4xl mx-auto"
				>
					<h1 className="text-4xl font-bold mb-4">
						Catfein Hosting - Privacy Policy
					</h1>
					<p className="text-gray-400 mb-8">Last Updated: March 9, 2025</p>

					<div className="prose prose-invert max-w-none">
						<p className="text-gray-300 mb-8">
							Your privacy is important to Catfein Hosting. This Privacy Policy
							explains how we collect, use, and disclose information when you
							use our Services.
						</p>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">
								1. Information We Collect
							</h2>
							<div className="text-gray-300">
								<p className="mb-4">
									We collect several types of information from and about users
									of our Services, including:
								</p>
								<p className="mb-4">
									<strong>Account Information:</strong> When you register for an
									account, we collect information such as your username, email
									address, and any other information you choose to provide.
								</p>
								<p className="mb-4">
									<strong>Server Usage Data:</strong> We collect data related to
									your use of our hosting services, including server logs,
									resource usage, and performance data. This is necessary for
									providing and managing the Services.
								</p>
								<p className="mb-4">
									<strong>Communications:</strong> If you contact us directly,
									we may receive additional information about you, such as your
									name, email address, phone number, the contents of the message
									and/or attachments you may send us, and any other information
									you may choose to provide.
								</p>
								<p>
									<strong>Cookies and Tracking Technologies:</strong> We may use
									cookies, beacons, tags, and scripts to collect and track
									information and to improve and analyze our Service.
								</p>
							</div>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">
								2. How We Use Your Information
							</h2>
							<div className="text-gray-300">
								<p className="mb-4">
									We use the information we collect for various purposes,
									including to:
								</p>
								<p className="mb-4">
									<strong>Provide and Maintain Services:</strong> To deliver and
									operate our Services, including setting up and managing your
									hosting environment.
								</p>
								<p className="mb-4">
									<strong>Improve and Personalize Services:</strong> To
									understand and analyze how you use our Services and develop
									new products, services, features, and functionality.
								</p>
								<p className="mb-4">
									<strong>Communicate with You:</strong> To communicate with
									you, either directly or through one of our partners, including
									for customer service, to provide you with updates and other
									information relating to the Service, and for marketing and
									promotional purposes.
								</p>
								<p className="mb-4">
									<strong>Ensure Security and Prevent Fraud:</strong> To enhance
									the security of our Services, prevent fraud, and ensure
									compliance with our Terms of Service and applicable law.
								</p>
								<p>
									<strong>Compliance with Legal Obligations:</strong> To comply
									with legal obligations, including responding to legal requests
									and preventing harm.
								</p>
							</div>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">
								3. Sharing of Your Information
							</h2>
							<div className="text-gray-300">
								<p className="mb-4">
									We may share your information in the following situations:
								</p>
								<p className="mb-4">
									<strong>Service Providers:</strong> We may share information
									with third-party vendors, service providers, contractors or
									agents who perform services for us or on our behalf and
									require access to such information to do that work. Examples
									include payment processing, data analysis, email delivery,
									hosting services, customer service, and marketing efforts.
								</p>
								<p className="mb-4">
									<strong>Legal Compliance:</strong> We may disclose information
									if required to do so by law or in the good faith belief that
									such action is necessary to (i) comply with a legal
									obligation, (ii) protect and defend our rights or property,
									(iii) prevent or investigate possible wrongdoing in connection
									with the Services, (iv) protect the personal safety of users
									of the Services or the public, and (v) protect against legal
									liability.
								</p>
								<p className="mb-4">
									<strong>Business Transfers:</strong> Information may be
									disclosed and otherwise transferred to an acquirer, successor,
									or assignee as part of any merger, acquisition, debt
									financing, sale of assets, or similar transaction, as well as
									in the event of an insolvency, bankruptcy, or receivership in
									which information is transferred to one or more third parties
									as one of our business assets.
								</p>
								<p>
									<strong>With Your Consent:</strong> We may share information
									about you with your consent.
								</p>
							</div>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
							<p className="text-gray-300">
								We take reasonable measures to help protect your information
								from loss, theft, misuse and unauthorized access, disclosure,
								alteration, and destruction. However, no method of transmission
								over the internet, or method of electronic storage, is 100%
								secure. While we strive to use commercially acceptable means to
								protect your personal information, we cannot guarantee its
								absolute security.
							</p>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
							<p className="text-gray-300">
								We retain personal information for as long as necessary to
								provide the Services and fulfill the purposes outlined in this
								Privacy Policy. We may also retain and use your information as
								necessary to comply with our legal obligations, resolve
								disputes, and enforce our agreements.
							</p>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
							<div className="text-gray-300">
								<p className="mb-4">
									You have certain rights regarding your personal information,
									including the right to:
								</p>
								<p className="mb-4">
									<strong>Access:</strong> Request access to your personal
									information held by us.
								</p>
								<p className="mb-4">
									<strong>Correction:</strong> Request that we correct any
									inaccurate or incomplete personal information.
								</p>
								<p className="mb-4">
									<strong>Deletion:</strong> Request that we delete your
									personal information, under certain conditions.
								</p>
								<p className="mb-4">
									<strong>Opt-out of Marketing Communications:</strong> You may
									opt-out of receiving promotional communications from us by
									following the unsubscribe instructions provided in those
									communications.
								</p>
								<p>
									To exercise any of these rights, please open a ticket on our
									Discord server.
								</p>
							</div>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">
								7. Changes to This Privacy Policy
							</h2>
							<p className="text-gray-300">
								Catfein Hosting may update this Privacy Policy from time to
								time. We will notify you of any changes by posting the new
								Privacy Policy on this page. You are advised to review this
								Privacy Policy periodically for any changes. Changes to this
								Privacy Policy are effective when they are posted on this page.
							</p>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
							<p className="text-gray-300">
								For questions or concerns about this Privacy Policy, please open
								a ticket on our Discord server.
							</p>
						</section>
					</div>
				</MotionDiv>
			</main>

			<Footer />
		</div>
	);
}
