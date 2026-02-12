import type { Route } from "./+types/child-privacy-notice";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Child Privacy Notice - LaneLines" },
		{
			name: "description",
			content:
				"Learn how LaneLines collects, uses, and protects personal information about children in compliance with COPPA.",
		},
	];
}

export default function ChildPrivacyNotice() {
	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-4xl px-6 py-16">
				<p className="text-sm uppercase tracking-[0.3em] text-[#0D3C61]/60">Legal</p>
				<h1 className="mt-4 text-4xl font-semibold text-[#0D3C61]">Child Privacy Notice</h1>
				<p className="mt-4 text-[#0D3C61]/70">
					<strong>Effective Date:</strong> February 2026
				</p>

				<div className="mt-10 space-y-10 text-[#0D3C61]/80">
					<p>
						LaneLines is a team management platform built for youth swim teams. Because many of our
						swimmers are under 13, protecting children's privacy is central to how we operate. This
						notice explains how we handle personal information about children in compliance with the
						Children's Online Privacy Protection Act (COPPA).
					</p>
					<p>
						This notice supplements our{" "}
						<a
							href="/privacy"
							className="text-[#1E88E5] underline hover:text-[#1565C0]"
						>
							Privacy Policy
						</a>{" "}
						and provides additional detail specific to children's data.
					</p>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">
							1. What Information We Collect About Children
						</h2>
						<p className="mt-4">
							When a guardian or coach adds a swimmer to a team, we may collect the following
							information about that child:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								<strong>Name</strong> — first and last name, used to identify the swimmer within
								their team
							</li>
							<li>
								<strong>Age or birthdate</strong> — used for age-group placement and meet
								eligibility
							</li>
							<li>
								<strong>Attendance and availability</strong> — practice and event participation
								records
							</li>
							<li>
								<strong>Swim performance times</strong> — event results and personal bests used
								for tracking progress
							</li>
							<li>
								<strong>Team and group assignments</strong> — which team, practice group, and
								season the swimmer belongs to
							</li>
						</ul>
						<p className="mt-3">
							We do <strong>not</strong> collect photos, location data, or contact information
							directly from children. Children do not create their own accounts — swimmer profiles
							are created and managed by guardians or coaches.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">
							2. How We Use Children's Information
						</h2>
						<p className="mt-4">
							We use the information collected about children solely to provide team management
							features, including:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								<strong>Team management</strong> — organizing rosters, assigning swimmers to
								practice groups, and tracking meet entries
							</li>
							<li>
								<strong>Practice and event tracking</strong> — recording attendance, RSVPs, and
								participation across the season
							</li>
							<li>
								<strong>Performance statistics</strong> — logging swim times so coaches and
								families can monitor improvement over time
							</li>
						</ul>
						<p className="mt-3">
							We do <strong>not</strong> use children's information for advertising, marketing,
							or any purpose unrelated to the team's activities. We do not sell children's
							personal information.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">
							3. Who Can See Your Child's Information
						</h2>
						<p className="mt-4">
							Access to a child's information is strictly limited to people within their team:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								<strong>Team coaches and administrators</strong> — can view rosters, attendance,
								and performance data to manage the team
							</li>
							<li>
								<strong>The child's guardians</strong> — can view and manage their own child's
								profile, data, and consent settings
							</li>
						</ul>
						<p className="mt-3">
							Children's information is <strong>never shared with third parties</strong>,
							advertisers, or data brokers. It is not visible to other families on the team. We
							only share data with service providers (such as our hosting and database providers)
							who process it on our behalf under strict confidentiality agreements.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">4. Parental Consent</h2>
						<p className="mt-4">
							We require verifiable parental or guardian consent before storing any personal
							information about a child under 13. Here's how that works:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								A guardian must grant consent before their child's data is saved in LaneLines
							</li>
							<li>
								Consent can be granted during the team registration process or when a coach
								invites a swimmer to join
							</li>
							<li>
								Guardians can <strong>revoke consent at any time</strong> by contacting us or
								through their account settings
							</li>
							<li>
								If consent is revoked, we will stop collecting information about that child and
								remove their existing data as described below
							</li>
						</ul>
						<p className="mt-3">
							Guardians also have the right to review the personal information we hold about
							their child. To make a review request, contact us at the email address listed at
							the bottom of this page.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">
							5. Data Retention and Deletion
						</h2>
						<p className="mt-4">
							We keep children's information only as long as it is needed to provide team
							management services. When data is no longer needed, here's what happens:
						</p>

						<h3 className="mt-6 text-lg font-semibold text-[#0D3C61]">
							When Consent Is Revoked
						</h3>
						<p className="mt-2">
							If a guardian revokes consent, we remove the child's personal information from
							active use. Historical records (such as past attendance or meet results) are
							anonymized so they no longer identify the child, while still preserving aggregate
							team data.
						</p>

						<h3 className="mt-6 text-lg font-semibold text-[#0D3C61]">
							When an Account Is Deleted
						</h3>
						<p className="mt-2">
							If a guardian deletes their account or removes a swimmer from a team, the child's
							personal data is deleted or anonymized. Anonymized data cannot be traced back to any
							individual.
						</p>

						<h3 className="mt-6 text-lg font-semibold text-[#0D3C61]">
							Retention Period
						</h3>
						<p className="mt-2">
							We do not retain identifiable children's data beyond the active period of their team
							membership unless required by law.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">
							6. Messaging and Safety Protections
						</h2>
						<p className="mt-4">
							LaneLines includes additional safeguards for young users:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								Swimmer accounts (if enabled by the team) have restricted permissions — they
								cannot send direct messages to other swimmers
							</li>
							<li>
								All messages are subject to content screening to help prevent inappropriate
								content
							</li>
							<li>Guardians and coaches maintain oversight of team communications</li>
						</ul>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-[#0D3C61]">7. Your Rights as a Parent</h2>
						<p className="mt-4">As a parent or guardian, you have the right to:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Review the personal information we have collected about your child</li>
							<li>Request that we delete your child's personal information</li>
							<li>Revoke your consent for future collection of your child's data</li>
							<li>
								Refuse to allow further collection without having your child removed from the
								platform
							</li>
						</ul>
						<p className="mt-3">
							We will never require a child to provide more information than is reasonably
							necessary to participate on their swim team.
						</p>
					</div>

					<div className="rounded-2xl border border-[#0D3C61]/15 bg-white p-6">
						<h2 className="text-2xl font-semibold text-[#0D3C61]">8. Contact Us</h2>
						<p className="mt-4">
							If you have questions about this Child Privacy Notice, want to review your child's
							data, or need to revoke consent, please contact us:
						</p>
						<p className="mt-3 font-semibold text-[#0D3C61]">LaneLines Privacy Team</p>
						<p className="mt-1">
							<a
								href="mailto:support@lanelinesapp.com"
								className="text-[#1E88E5] underline hover:text-[#1565C0]"
							>
								support@lanelinesapp.com
							</a>
						</p>
						<p className="mt-3 text-sm text-[#0D3C61]/60">
							We aim to respond to all privacy requests within 30 days.
						</p>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
