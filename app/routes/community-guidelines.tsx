import type { Route } from "./+types/community-guidelines";
import { MarketingLayout } from "../components/marketing-layout";

const prohibitedContent = [
	{
		title: "Harassment & Abuse",
		items: [
			"Bullying, intimidation, or harassment of any kind",
			"Repeated unwanted contact",
			"Threats or encouragement of harm",
		],
	},
	{
		title: "Hate & Discrimination",
		items: [
			"Hate speech or symbols",
			"Discrimination based on race, ethnicity, religion, gender, sexual orientation, disability, or nationality",
		],
	},
	{
		title: "Sexual or Inappropriate Content",
		items: [
			"Sexual content involving minors (zero tolerance)",
			"Sexually explicit or suggestive content",
			"Grooming, predatory behavior, or boundary violations",
		],
	},
	{
		title: "Privacy & Safety Violations",
		items: [
			"Sharing private contact information without consent",
			"Sharing personal data about minors outside approved team contexts",
			"Impersonating another person",
		],
	},
	{
		title: "Spam & Misuse",
		items: [
			"Advertising or solicitation",
			"Scams or fraudulent activity",
			"Content unrelated to team activities",
		],
	},
];

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Community Guidelines - LaneLines" },
		{
			name: "description",
			content:
				"Read the LaneLines Community Guidelines for safe, respectful communication across youth swim teams.",
		},
	];
}

export default function CommunityGuidelines() {
	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-4xl px-6 py-16">
				<p className="text-sm uppercase tracking-[0.3em] text-[#0D3C61]/60">Trust & Safety</p>
				<h1 className="mt-4 text-4xl font-semibold text-[#0D3C61]">LaneLines Community Guidelines</h1>
				<p className="mt-4 text-[#0D3C61]/70">
					<strong>Effective Date:</strong> February 8, 2026
				</p>

				<div className="mt-10 space-y-10 text-[#0D3C61]/80">
					<p>
						LaneLines is a team management and communication platform designed to support youth
						swim teams, their coaches, guardians, and swimmers. Our goal is to provide a safe,
						respectful, and well-structured environment that reflects how real swim teams
						operate.
					</p>
					<p>These Community Guidelines apply to all users of LaneLines.</p>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">1. Our Community Values</h2>
						<p className="mt-4">LaneLines exists to support:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Clear communication</li>
							<li>Youth athlete safety</li>
							<li>Respectful collaboration</li>
							<li>Coach- and guardian-led decision making</li>
						</ul>
						<p className="mt-3">
							All users are expected to act in a way that reflects the trust placed in them by
							their team and community.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">2. Who Uses LaneLines</h2>
						<p className="mt-4">LaneLines may be used by:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Coaches and team administrators</li>
							<li>Parents and legal guardians</li>
							<li>Swimmers, only if explicitly enabled by their team</li>
						</ul>
						<p className="mt-3">
							Some users may hold multiple roles (for example, a coach who is also a parent).
						</p>
						<p className="mt-3">
							Access and permissions are intentionally role-based and team-scoped.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">3. Allowed Content</h2>
						<p className="mt-4">You may use LaneLines to:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Communicate about practices, meets, and team events</li>
							<li>Coordinate logistics and volunteering</li>
							<li>Share team-appropriate announcements and updates</li>
							<li>Ask questions related to team activities</li>
							<li>Participate respectfully in team conversations</li>
						</ul>
						<p className="mt-3">
							All content should be relevant to the team and appropriate for a youth sports
							environment.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">
							4. Prohibited Content (Strictly Enforced)
						</h2>
						<p className="mt-4">The following are not allowed on LaneLines:</p>
						<div className="mt-6 grid gap-4 md:grid-cols-2">
							{prohibitedContent.map((category) => (
								<div
									key={category.title}
									className="rounded-2xl border border-[#0D3C61]/15 bg-white p-5"
								>
									<h3 className="text-lg font-semibold text-[#0D3C61]">{category.title}</h3>
									<ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-[#0D3C61]/75">
										{category.items.map((item) => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
							))}
						</div>
						<p className="mt-4">
							Violations may result in immediate action, including account restriction or
							removal.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">
							5. Youth Safety & Messaging Protections
						</h2>
						<p className="mt-4">LaneLines is designed with youth safety by default:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Swimmer accounts are optional and explicitly enabled by teams</li>
							<li>Swimmer users have limited permissions</li>
							<li>Direct messaging is restricted by role</li>
							<li>Teen-to-teen direct messaging is not enabled</li>
							<li>Guardians and coaches maintain oversight by design</li>
						</ul>
						<p className="mt-3">
							Any attempt to bypass these safeguards is a serious violation.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">6. Reporting Content or Users</h2>
						<p className="mt-4">
							If you see content or behavior that violates these guidelines:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Use the Report option within the app, or</li>
							<li>
								Contact LaneLines support at:{" "}
								<a className="text-sky-300 underline hover:text-sky-200" href="mailto:support@lanelinesapp.com">
									support@lanelinesapp.com
								</a>
							</li>
						</ul>
						<p className="mt-3">
							Reports are reviewed by LaneLines staff. We take all reports seriously,
							especially those involving youth safety.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">7. Moderation & Enforcement</h2>
						<p className="mt-4">LaneLines actively moderates reported content.</p>
						<p className="mt-3">Actions may include:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Content removal</li>
							<li>Temporary messaging or feature restrictions</li>
							<li>Account suspension or permanent removal</li>
							<li>Team-level administrative intervention when appropriate</li>
						</ul>
						<p className="mt-3">Enforcement decisions are based on:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>The severity of the violation</li>
							<li>Repeated or patterned behavior</li>
							<li>Risk to individuals or the community</li>
						</ul>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">8. User Responsibility</h2>
						<p className="mt-4">By using LaneLines, you agree to:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Communicate respectfully</li>
							<li>Follow team rules and expectations</li>
							<li>Protect the privacy and safety of swimmers</li>
							<li>Report violations when they occur</li>
							<li>Use the platform only for its intended purpose</li>
						</ul>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">9. Changes to These Guidelines</h2>
						<p className="mt-4">
							We may update these Community Guidelines as LaneLines evolves.
						</p>
						<p className="mt-3">
							When changes are made, the updated version will be posted publicly with a revised
							effective date.
						</p>
					</div>

					<div className="rounded-2xl border border-[#0D3C61]/15 bg-white p-6">
						<h2 className="text-2xl font-semibold text-[#0D3C61]">10. Contact Us</h2>
						<p className="mt-4">Questions or concerns about these guidelines can be directed to:</p>
						<p className="mt-3 font-semibold text-[#0D3C61]">LaneLines Support</p>
						<p className="mt-1">
							📧 {" "}
							<a className="text-sky-300 underline hover:text-sky-200" href="mailto:support@lanelinesapp.com">
								support@lanelinesapp.com
							</a>
						</p>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
