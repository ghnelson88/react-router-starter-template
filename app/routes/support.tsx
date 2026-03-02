import type { Route } from "./+types/support";
import { MarketingLayout } from "../components/marketing-layout";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Support - LaneLines" },
		{
			name: "description",
			content: "Get help with LaneLines. Contact support, find answers to common questions, and learn about troubleshooting.",
		},
	];
}

export default function Support() {
	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-4xl px-6 py-16 transition-colors duration-300">
				<p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Help Center</p>
				<h1 className="mt-4 text-4xl font-semibold text-neutral-900 dark:text-white">LaneLines Support</h1>

				<div className="mt-10 space-y-12 text-neutral-600 dark:text-neutral-400">
					{/* Contact Support Section */}
					<div className="rounded-2xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-6">
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">How to Get Help</h2>
						<p className="mt-4">
							If you need help with LaneLines, we're here.
						</p>
						<p className="mt-4">
							<strong>Email:</strong>{" "}
							<a
								href="mailto:support@lanelines.app"
								className="text-[#007BA7] hover:text-[#0A4C75] dark:hover:text-[#007BA7]/80"
							>
								support@lanelines.app
							</a>
						</p>
						<div className="mt-4 space-y-2">
							<p className="font-semibold text-neutral-900 dark:text-white">SMS Program (Account Verification / 2FA)</p>
							<p>
								LaneLines sends one-time passcodes (OTP) for account verification and login. Message frequency varies and messages are sent only when you request a verification code during sign-in. Message and data rates may apply. For help, reply HELP or contact support@lanelines.app. To opt out, reply STOP.
							</p>
						</div>
						<p className="mt-3 text-neutral-500">
							We typically respond within 1-2 business days.
						</p>
						<div className="mt-4">
							<p className="font-medium text-neutral-900 dark:text-white">For fastest support, please include:</p>
							<ul className="mt-2 list-disc space-y-1 pl-6">
								<li>Your team name</li>
								<li>Your role (coach, guardian, swimmer)</li>
								<li>A brief description of the issue</li>
							</ul>
						</div>
					</div>

					{/* Common Questions Section */}
					<div>
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Common Questions</h2>

						{/* Getting Started */}
						<h3 className="mt-8 text-lg font-semibold text-neutral-900 dark:text-white">Getting Started</h3>
						<div className="mt-4 space-y-4">
							<div>
								<p className="font-medium text-neutral-900 dark:text-white">Q: How do I join a team?</p>
								<p className="mt-1">
									A: LaneLines is team-based. You must be invited by a coach or team administrator to access team information.
								</p>
							</div>
							<div>
								<p className="font-medium text-neutral-900 dark:text-white">Q: I downloaded the app but don't see anything. Is it broken?</p>
								<p className="mt-1">
									A: No - this usually means you haven't joined a team yet. Once invited, your team's events and swimmers will appear automatically.
								</p>
							</div>
						</div>

						{/* Accounts & Roles */}
						<h3 className="mt-8 text-lg font-semibold text-neutral-900 dark:text-white">Accounts & Roles</h3>
						<div className="mt-4 space-y-4">
							<div>
								<p className="font-medium text-neutral-900 dark:text-white">Q: Can I have more than one role?</p>
								<p className="mt-1">
									A: Yes. A user may be a coach on one team and a guardian on another.
								</p>
							</div>
							<div>
								<p className="font-medium text-neutral-900 dark:text-white">Q: Can swimmers have their own accounts?</p>
								<p className="mt-1">
									A: Some teams allow swimmer accounts with limited access. This is controlled by the team and guardian.
								</p>
							</div>
						</div>

						{/* Events & RSVPs */}
						<h3 className="mt-8 text-lg font-semibold text-neutral-900 dark:text-white">Events & RSVPs</h3>
						<div className="mt-4 space-y-4">
							<div>
								<p className="font-medium text-neutral-900 dark:text-white">Q: Who can RSVP for a swimmer?</p>
								<p className="mt-1">
									A: Guardians can RSVP for their linked swimmers. Coaches can view and manage attendance for the team.
								</p>
							</div>
							<div>
								<p className="font-medium text-neutral-900 dark:text-white">Q: Why can't I RSVP for another swimmer?</p>
								<p className="mt-1">
									A: LaneLines protects swimmer privacy. You can only manage availability for swimmers you're authorized for.
								</p>
							</div>
						</div>

						{/* Messaging */}
						<h3 className="mt-8 text-lg font-semibold text-neutral-900 dark:text-white">Messaging</h3>
						<div className="mt-4 space-y-4">
							<div>
								<p className="font-medium text-neutral-900 dark:text-white">Q: Who can I message?</p>
								<p className="mt-1">A: Messaging is role-based:</p>
								<ul className="mt-2 list-disc space-y-1 pl-6">
									<li>Coaches can message team members</li>
									<li>Guardians can message coaches</li>
									<li>Swimmer accounts can message coaches (when enabled)</li>
								</ul>
								<p className="mt-2 text-neutral-500">Teen-to-teen messaging is not supported.</p>
							</div>
						</div>
					</div>

					{/* Youth & Privacy Protection */}
					<div>
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Youth & Privacy Protection</h2>
						<p className="mt-4">
							LaneLines is built for youth sports.
						</p>
						<ul className="mt-4 list-disc space-y-2 pl-6">
							<li>Teams control access - no public profiles</li>
							<li>Guardians manage swimmer participation</li>
							<li>Swimmer accounts (if enabled) have limited permissions</li>
							<li>No advertising</li>
							<li>No selling of personal data</li>
						</ul>
						<p className="mt-4">
							For details, see our{" "}
							<Link to="/privacy" className="text-[#007BA7] hover:text-[#0A4C75] dark:hover:text-[#007BA7]/80">
								Privacy Policy
							</Link>
							.
						</p>
					</div>

					{/* Troubleshooting */}
					<div>
						<h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Troubleshooting Tips</h2>
						<ul className="mt-4 list-disc space-y-2 pl-6">
							<li>Make sure you're using the latest version of the app</li>
							<li>Confirm you're logged into the correct email address</li>
							<li>If switching teams, fully close and reopen the app</li>
						</ul>
						<p className="mt-4">
							If issues persist,{" "}
							<a
								href="mailto:support@lanelines.app"
								className="text-[#007BA7] hover:text-[#0A4C75] dark:hover:text-[#007BA7]/80"
							>
								contact support
							</a>
							.
						</p>
					</div>

					{/* Footer */}
					<div className="rounded-2xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] p-6">
						<p className="text-neutral-900 dark:text-white">
							<strong>LaneLines</strong> is a product operated by G&J Family Ventures.
						</p>
						<div className="mt-4 flex flex-wrap gap-4">
							<Link to="/privacy" className="text-[#007BA7] hover:text-[#0A4C75] dark:hover:text-[#007BA7]/80">
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
