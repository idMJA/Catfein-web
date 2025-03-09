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

export default function TOS() {
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
						Catfein Hosting - Terms of Service
					</h1>
					<p className="text-gray-400 mb-8">Last Updated: March 9, 2025</p>

					<div className="prose prose-invert max-w-none">
						<p className="text-gray-300 mb-8">
							By using Catfein Hosting services, you agree to be bound by these
							Terms of Service (&quot;TOS&quot;). Please read them carefully.
						</p>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">
								1. Acceptance of Terms
							</h2>
							<p className="text-gray-300">
								By accessing or using the Catfein Hosting website, dashboard,
								and services (collectively, the &quot;Services&quot;), you
								(&quot;User&quot; or &quot;you&quot;) signify that you have
								read, understood, and agree to be bound by these Terms of
								Service. If you do not agree to these Terms of Service, you are
								not permitted to use the Services.
							</p>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">
								2. Services Provided
							</h2>
							<p className="text-gray-300">
								Catfein Hosting provides web hosting services, including the
								option to create a server for free by selecting the free plan on
								our dashboard at https://house.catfein.co.id/. The specifics of
								the services, features, and resources available to you will
								depend on the hosting plan you select.
							</p>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">3. User Account</h2>
							<div className="text-gray-300">
								<p className="mb-4">
									<strong>Account Registration:</strong> You may be required to
									register an account to access certain features of the
									Services. You agree to provide accurate, current, and complete
									information during the registration process and to update such
									information to keep it accurate, current, and complete.
								</p>
								<p className="mb-4">
									<strong>No Temporary Emails:</strong> Registration using
									temporary email addresses is prohibited. Accounts created
									using temporary email addresses may be suspended or terminated
									without notice.
								</p>
								<p>
									<strong>Account Security:</strong> You are responsible for
									safeguarding the password that you use to access the Services
									and for any activities or actions under your password. Catfein
									Hosting encourages you to use &quot;strong&quot; passwords
									(passwords that use a combination of upper and lower case
									letters, numbers and symbols) with your account. Catfein
									Hosting will not be liable for any loss or damage arising from
									your failure to comply with the above.
								</p>
							</div>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">
								4. Acceptable Use Policy and Prohibitions
							</h2>
							<p className="text-gray-300 mb-4">
								You agree to use the Services in accordance with all applicable
								laws and regulations and in a manner that does not infringe the
								rights of others, nor restrict or inhibit their use and
								enjoyment of the Services. Prohibited activities include, but
								are not limited to:
							</p>
							<div className="text-gray-300 space-y-4 pl-6">
								<p>
									<strong>Spamming:</strong> No spamming pings in Discord
									channels or DMs.
								</p>
								<p>
									<strong>Copyright Infringement:</strong> No storing and
									sharing content that violates copyrights.
								</p>
								<p>
									<strong>Disruptive Activities:</strong> No using Catfein
									services for activities that may disrupt other users, such as:
								</p>
								<ul className="list-disc pl-8 space-y-2">
									<li>Cryptocurrency Mining: Mining cryptocurrency.</li>
									<li>
										Non-Cryptocurrency Mining Programs: Running programs similar
										to cryptocurrency mining, but for other purposes.
									</li>
									<li>
										AI Data Training Programs for Coin Rewards: Running programs
										on hosting platforms to train AI data (especially for
										websites) where installing and running such programs results
										in earning any form of digital currency, tokens, or similar
										rewards.
									</li>
									<li>
										Spamming using any means, including but not limited to
										Discord bots, WhatsApp bots, and APIs.
									</li>
									<li>Spreading hoaxes or misinformation.</li>
									<li>Mass DMs.</li>
									<li>
										Distributed Denial of Service (DDoS) attacks or similar
										activities.
									</li>
								</ul>
								<p>
									<strong>Unauthorized Virtualization:</strong> No installing
									VMs, PteroVM, or similar virtualization software without
									explicit permission from Owner.
								</p>
								<p>
									<strong>Proxy Servers:</strong> No running proxy scripts or
									installing proxies on free plan servers without explicit
									permission from Owner.
								</p>
								<p>
									<strong>Unauthorized Discord Invitations:</strong> No sharing
									Discord link invitations without explicit permission from
									Owner.
								</p>
								<p>
									<strong>Selfbots:</strong> Using selfbots within our services
									or related platforms is not allowed.
								</p>
							</div>
							<p className="text-gray-300 mt-4">
								Catfein Hosting reserves the right to determine, in its sole
								discretion, whether your use of the Services violates this
								Acceptable Use Policy.
							</p>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">
								5. Disclaimer of Support for Free Services
							</h2>
							<div className="text-gray-300 space-y-4">
								<p>
									Catfein Hosting provides free servers as a courtesy. As such,
									support for free services is limited.
								</p>
								<p>
									<strong>Self-Service and Community Support:</strong> Users of
									free servers are expected to possess the knowledge and
									understanding to manage their servers. Catfein Hosting does
									not provide support for issues such as bot malfunctions,
									module installation problems, or rate limits.
								</p>
								<p>
									<strong>Community Assistance:</strong> Users are encouraged to
									seek help from other users in the designated ⁠💬・global-chat
									channel for general questions and assistance.
								</p>
								<p>
									<strong>Limited Official Support:</strong> Official support
									from Catfein Hosting is primarily limited to server hosting
									issues, including accessibility problems, slot availability,
									and network/resource management.
								</p>
								<p>
									<strong>No Guarantees:</strong> Catfein Hosting does not
									guarantee the performance or availability of free services and
									reserves the right to modify or terminate free service
									offerings at any time.
								</p>
							</div>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">
								6. Modifications to Services and Terms
							</h2>
							<p className="text-gray-300">
								Catfein Hosting reserves the right at any time to modify or
								discontinue, temporarily or permanently, the Services (or any
								part thereof) with or without notice. Catfein Hosting may also
								modify these Terms of Service at any time. It is your
								responsibility to check these Terms of Service periodically for
								changes. Your continued use of the Services following the
								posting of changes will mean that you accept and agree to the
								changes.
							</p>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
							<p className="text-gray-300">
								Catfein Hosting may terminate or suspend your access to all or
								part of the Services, without prior notice and without
								liability, for conduct that Catfein Hosting believes, in its
								sole discretion, violates these Terms of Service or is harmful
								to other users of the Services, Catfein Hosting, or third
								parties, or for any other reason.
							</p>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">
								8. Disclaimer of Warranties
							</h2>
							<p className="text-gray-300">
								THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
								AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
								IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
								OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
								NON-INFRINGEMENT. CATFEIN HOSTING DOES NOT WARRANT THAT THE
								SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL
								BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM
								AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
							</p>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">
								9. Limitation of Liability
							</h2>
							<p className="text-gray-300">
								TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
								SHALL CATFEIN HOSTING, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS,
								AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT,
								INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES,
								INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
								GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR
								ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES;
								(II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES;
								(III) ANY CONTENT OBTAINED FROM THE SERVICES; AND (IV)
								UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR
								CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING
								NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE
								BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A
								REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL
								PURPOSE.
							</p>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
							<p className="text-gray-300">
								These Terms of Service shall be governed by and construed in
								accordance with the laws of Indonesia, without regard to its
								conflict of law provisions.
							</p>
						</section>

						<section className="mb-8 border border-gray-700 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
							<p className="text-gray-300">
								For support or inquiries regarding these Terms of Service,
								please open a ticket on our Discord server.
							</p>
						</section>
					</div>
				</MotionDiv>
			</main>

			<Footer />
		</div>
	);
}
