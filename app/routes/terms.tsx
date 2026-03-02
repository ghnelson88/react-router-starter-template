import { Link } from "react-router";
import type { Route } from "./+types/terms";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Terms of Use - LaneLines" },
		{
			name: "description",
			content: "LaneLines Terms of Use for website, mobile applications, and related services.",
		},
	];
}

export default function Terms() {
	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-4xl px-6 py-16 transition-colors duration-300">
				<p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Legal</p>
				<h1 className="mt-4 text-4xl font-semibold text-neutral-900 dark:text-white">Terms of Use</h1>
				<div className="mt-5 rounded-2xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-5 text-sm text-neutral-600 dark:text-neutral-400 sm:flex sm:gap-10">
					<p>
						<strong className="text-neutral-900 dark:text-white">Effective Date:</strong> March 2, 2026
					</p>
					<p className="mt-2 sm:mt-0">
						<strong className="text-neutral-900 dark:text-white">Last Updated:</strong> March 2, 2026
					</p>
				</div>

				<div className="mt-10 space-y-10 text-neutral-600 dark:text-neutral-400">
					<p>
						These Terms of Use ("Terms") govern your access to and use of the LaneLines website,
						mobile applications, and related services (collectively, the "Service").
					</p>
					<p>
						LaneLines is operated by <strong>G&amp;J Family Ventures</strong> ("LaneLines," "we,"
						"us," or "our").
					</p>
					<p>
						By creating an account, accessing, or using LaneLines, you agree to be bound by these
						Terms. If you do not agree, do not use the Service.
					</p>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">1. Eligibility</h2>
						<p className="mt-4">You must be at least 18 years old to create an account.</p>
						<p className="mt-3">
							Swimmer accounts (if enabled by a team) must be created and authorized by a parent
							or legal guardian. Guardians are responsible for the actions of swimmer users linked
							to their account.
						</p>
						<p className="mt-3">Use of LaneLines is void where prohibited by law.</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">2. Description of Service</h2>
						<p className="mt-4">
							LaneLines provides operational tools for competitive youth swim teams, including
							but not limited to:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Event and meet management</li>
							<li>Attendance and availability tracking</li>
							<li>Volunteer coordination</li>
							<li>Team messaging and announcements</li>
							<li>Billing and payments</li>
							<li>Performance tracking</li>
						</ul>
						<p className="mt-3">
							LaneLines is not a governing body and does not determine athlete eligibility or
							compliance with external swim organizations.
						</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">3. Account Responsibility</h2>
						<p className="mt-4">You are responsible for:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Maintaining the confidentiality of your login credentials</li>
							<li>All activity occurring under your account</li>
							<li>Providing accurate and current information</li>
						</ul>
						<p className="mt-3">You agree not to share your login credentials.</p>
						<p className="mt-3">We may suspend or terminate accounts that violate these Terms.</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">4. Acceptable Use</h2>
						<p className="mt-4">You agree not to:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Use the Service for unlawful purposes</li>
							<li>Harass, abuse, or threaten other users</li>
							<li>Attempt to access data outside your authorized scope</li>
							<li>Interfere with system integrity or security</li>
							<li>Reverse engineer or copy the platform</li>
							<li>Upload malicious code</li>
						</ul>
						<p className="mt-3">
							Teen-to-teen direct messaging is intentionally restricted to protect minors.
						</p>
						<p className="mt-3">
							We reserve the right to investigate and take appropriate action for violations.
						</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">5. Team-Based Access &amp; Data Visibility</h2>
						<p className="mt-4">LaneLines operates on a team-scoped access model.</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Users may only access data for teams where they are active members.</li>
							<li>Coaches and administrators have broader operational visibility.</li>
							<li>Guardians may act on behalf of linked swimmers.</li>
							<li>Swimmer accounts (if enabled) have limited permissions.</li>
						</ul>
						<p className="mt-3">
							Access is role-based and may change if your team membership changes.
						</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
							6. SMS Program (Account Verification / 2FA)
						</h2>
						<p className="mt-4">
							LaneLines may send one-time passcodes (OTP) for account verification and login.
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Message frequency varies.</li>
							<li>Messages are sent only when you request a verification code.</li>
							<li>Message and data rates may apply.</li>
							<li>
								To request help, reply <strong>HELP</strong> or contact support@lanelinesapp.com.
							</li>
							<li>
								To opt out, reply <strong>STOP</strong>.
							</li>
						</ul>
						<p className="mt-3">
							You consent to receive these verification messages when you initiate login or
							verification.
						</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">7. Billing &amp; Payments</h2>
						<p className="mt-4">Certain teams may enable billing features.</p>
						<p className="mt-3">
							Payments may be processed through third-party providers such as Stripe. LaneLines
							does not store full credit card numbers.
						</p>
						<p className="mt-3">
							Refund policies, fee structures, and billing terms are determined by each team, not
							LaneLines.
						</p>
						<p className="mt-3">
							We are not responsible for disputes between teams and families regarding fees.
						</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">8. Intellectual Property</h2>
						<p className="mt-4">
							All content, trademarks, logos, software, and materials provided through LaneLines
							are owned by or licensed to LaneLines.
						</p>
						<p className="mt-3">
							You may not copy, modify, distribute, or create derivative works without prior
							written permission.
						</p>
						<p className="mt-3">
							User-generated content remains yours, but you grant LaneLines a limited license to
							use it to operate the Service.
						</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">9. Privacy</h2>
						<p className="mt-4">Your use of LaneLines is subject to our:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								<Link className="text-[#007BA7] hover:text-[#0A4C75] dark:hover:text-[#007BA7]/80" to="/privacy">
									Privacy Policy
								</Link>
							</li>
							<li>
							<Link className="text-[#007BA7] hover:text-[#0A4C75] dark:hover:text-[#007BA7]/80" to="/child-privacy-notice">
								Child Privacy Policy
							</Link>
							</li>
						</ul>
						<p className="mt-3">
							LaneLines does not sell personal data and does not display advertising.
						</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">10. Disclaimers</h2>
						<p className="mt-4">The Service is provided "as is" and "as available."</p>
						<p className="mt-3">We do not guarantee:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Uninterrupted service</li>
							<li>Error-free functionality</li>
							<li>Accuracy of user-entered data</li>
						</ul>
						<p className="mt-3">
							LaneLines is not responsible for team decisions, coaching outcomes, or athlete
							performance.
						</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">11. Limitation of Liability</h2>
						<p className="mt-4">To the maximum extent permitted by law, LaneLines shall not be liable for:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Indirect, incidental, or consequential damages</li>
							<li>Loss of data</li>
							<li>Team-level disputes</li>
							<li>Decisions made by coaches, guardians, or swimmers</li>
						</ul>
						<p className="mt-3">
							Total liability shall not exceed the amount paid to LaneLines in the preceding 12
							months, if any.
						</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">12. Termination</h2>
						<p className="mt-4">We may suspend or terminate access if:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>You violate these Terms</li>
							<li>Required by law</li>
							<li>Necessary to protect system integrity</li>
						</ul>
						<p className="mt-3">Upon termination, your right to use the Service ends immediately.</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">13. Modifications to Terms</h2>
						<p className="mt-4">We may update these Terms from time to time.</p>
						<p className="mt-3">
							If we make material changes, we will update the "Last Updated" date. Continued use
							of the Service after changes constitutes acceptance of the revised Terms.
						</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">14. Governing Law</h2>
						<p className="mt-4">
							These Terms are governed by the laws of the State of [Your State], without regard
							to conflict-of-law principles.
						</p>
					</div>

					<div className="transition-colors duration-300">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">15. Contact Information</h2>
						<p className="mt-4">For questions about these Terms:</p>
						<p className="mt-3">
							<strong>Email:</strong> support@lanelinesapp.com
						</p>
						<p className="mt-2">
							<strong>Operator:</strong> G&amp;J Family Ventures
						</p>
					</div>

					<div className="transition-colors duration-300 rounded-2xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-6">
						<p className="text-neutral-900 dark:text-white">
							By using LaneLines, you acknowledge that you have read and agree to these Terms of
							Use.
						</p>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
