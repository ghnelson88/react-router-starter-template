import type { Route } from "./+types/report-abuse";
import { MarketingLayout } from "../components/marketing-layout";

const reportableContent = [
	{
		title: "Harassment or Bullying",
		description: "Intimidation, threats, repeated unwanted contact, or targeting of individuals",
	},
	{
		title: "Hate Speech",
		description:
			"Slurs, discriminatory language, or content targeting someone based on race, gender, religion, or other protected characteristics",
	},
	{
		title: "Sexual or Inappropriate Content",
		description:
			"Sexually explicit material, suggestive content involving minors, or grooming behavior",
	},
	{
		title: "Threats or Violence",
		description: "Direct or implied threats of physical harm, self-harm, or violent behavior",
	},
	{
		title: "Personal Information Sharing",
		description:
			"Sharing someone's private contact details, address, or other personal data without their permission",
	},
	{
		title: "Spam or Scams",
		description: "Unsolicited advertising, phishing attempts, or fraudulent messages",
	},
];

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "How to Report Abuse - LaneLines" },
		{
			name: "description",
			content:
				"Learn how to report abuse, harassment, or safety concerns on LaneLines. We take every report seriously.",
		},
	];
}

export default function ReportAbuse() {
	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-4xl px-6 py-16">
				<p className="text-sm uppercase tracking-[0.3em] text-[#0D3C61]/60">Trust & Safety</p>
				<h1 className="mt-4 text-4xl font-semibold text-[#0D3C61]">How to Report Abuse</h1>
				<p className="mt-4 text-[#0D3C61]/70">
					<strong>Effective Date:</strong> February 2026
				</p>

				<div className="mt-10 space-y-10 text-[#0D3C61]/80">
					<p>
						LaneLines is committed to keeping our platform safe for everyone — especially the
						young swimmers and families who depend on it. If you see something that doesn't
						belong, we want to know about it.
					</p>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">
							1. How to Report Within the App
						</h2>
						<p className="mt-4">
							You can report content or users directly from the LaneLines app:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								<strong>Messages and announcements</strong> — tap the flag or report icon on any
								message to submit a report
							</li>
							<li>
								<strong>User profiles</strong> — visit the person's profile and tap the report
								option
							</li>
						</ul>
						<p className="mt-3">
							When you submit a report, you'll be asked to select a reason and can add optional
							details. Reports are confidential — the person you're reporting will not know who
							filed the report.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">2. What You Can Report</h2>
						<p className="mt-4">
							You can report any content or behavior that makes the platform feel unsafe or
							violates our{" "}
							<a
								href="/community-guidelines"
								className="text-[#1E88E5] underline hover:text-[#1565C0]"
							>
								Community Guidelines
							</a>
							, including:
						</p>
						<div className="mt-6 grid gap-4 md:grid-cols-2">
							{reportableContent.map((category) => (
								<div
									key={category.title}
									className="rounded-2xl border border-[#0D3C61]/15 bg-white p-5"
								>
									<h3 className="text-lg font-semibold text-[#0D3C61]">
										{category.title}
									</h3>
									<p className="mt-2 text-sm text-[#0D3C61]/75">{category.description}</p>
								</div>
							))}
						</div>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">
							3. What Happens After You Report
						</h2>
						<p className="mt-4">
							Every report is taken seriously. Here's what happens once you submit one:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								Your report is logged and assigned for review
							</li>
							<li>
								Team administrators are notified and can take immediate action within their team
							</li>
							<li>
								LaneLines staff review reports that involve safety concerns, policy violations,
								or patterns of behavior
							</li>
							<li>
								Depending on severity, reported content may be removed and the account may be
								restricted or permanently banned
							</li>
						</ul>
						<p className="mt-3">
							We aim to review reports promptly. In cases involving minors or safety risks,
							reports are prioritized.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">4. Blocking Users</h2>
						<p className="mt-4">
							Blocking is separate from reporting. You can do both, or either one:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								To block someone, go to their profile and select the block option
							</li>
							<li>
								Blocked users cannot send you messages or see your activity
							</li>
							<li>
								Blocking does not automatically generate a report — if the behavior violates our
								guidelines, please report it as well
							</li>
						</ul>
					</div>

					<div className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
						<h2 className="text-2xl font-semibold text-[#0D3C61]">
							5. Emergency Situations
						</h2>
						<p className="mt-4">
							If someone is in immediate danger or you believe a child is at risk of harm,
							please <strong>contact your local authorities first</strong>.
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								<strong>Call 911</strong> (or your local emergency number) for immediate threats
							</li>
							<li>
								<strong>National Child Abuse Hotline:</strong> 1-800-422-4453
							</li>
							<li>
								<strong>Crisis Text Line:</strong> Text HOME to 741741
							</li>
						</ul>
						<p className="mt-3">
							After contacting authorities, you can also report the situation to us so we can
							take action on our platform.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">
							6. Protections for Minors
						</h2>
						<p className="mt-4">
							LaneLines provides additional safety measures for young users:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								<strong>Messaging restrictions</strong> — swimmer accounts have limited messaging
								capabilities and cannot initiate direct conversations with other swimmers
							</li>
							<li>
								<strong>Content screening</strong> — messages are screened to help catch
								inappropriate content before it reaches young users
							</li>
							<li>
								<strong>Adult oversight</strong> — guardians and coaches maintain visibility into
								team communications
							</li>
							<li>
								<strong>Reports involving minors are prioritized</strong> — any report that
								involves a child is escalated for faster review
							</li>
						</ul>
						<p className="mt-3">
							For more on how we protect children's data, see our{" "}
							<a
								href="/child-privacy-notice"
								className="text-[#1E88E5] underline hover:text-[#1565C0]"
							>
								Child Privacy Notice
							</a>
							.
						</p>
					</div>

					<div className="rounded-2xl border border-[#0D3C61]/15 bg-white p-6">
						<h2 className="text-2xl font-semibold text-[#0D3C61]">7. Contact Us</h2>
						<p className="mt-4">
							If you have safety concerns that need human review, or if you're unable to use the
							in-app reporting tools, contact us directly:
						</p>
						<p className="mt-3 font-semibold text-[#0D3C61]">LaneLines Trust & Safety</p>
						<p className="mt-1">
							<a
								href="mailto:support@lanelinesapp.com"
								className="text-[#1E88E5] underline hover:text-[#1565C0]"
							>
								support@lanelinesapp.com
							</a>
						</p>
						<p className="mt-3 text-sm text-[#0D3C61]/60">
							Please include as much detail as possible so we can investigate effectively.
						</p>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
