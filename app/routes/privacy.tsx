import type { Route } from "./+types/privacy";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Privacy Policy - LaneLines" },
		{
			name: "description",
			content: "LaneLines Privacy Policy - Learn how we collect, use, and protect your personal information.",
		},
	];
}

export default function Privacy() {
	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-4xl px-6 py-16">
				<p className="text-sm uppercase tracking-[0.3em] text-white/60">Legal</p>
				<h1 className="mt-4 text-4xl font-semibold text-white">Privacy Policy</h1>
				<p className="mt-4 text-white/70">
					<strong>Effective Date:</strong> February 2026
				</p>

				<div className="mt-10 space-y-10 text-white/80">
					<p>
						LaneLines ("LaneLines," "we," "us," or "our") provides a team-based swim program
						management platform for coaches, guardians, and swimmers. This Privacy Policy explains
						how we collect, use, disclose, and protect personal information when you use our mobile
						applications, websites, and related services (collectively, the "Services").
					</p>
					<p>
						This policy is designed to meet applicable U.S. privacy requirements, including COPPA
						and CCPA/CPRA, and to align with App Store review guidelines.
					</p>

					<div>
						<h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
						<p className="mt-4">
							We collect information necessary to operate a team-based sports management platform.
							The categories below describe what we collect and why.
						</p>

						<h3 className="mt-6 text-lg font-semibold text-white">
							1.1 Information You Provide Directly
						</h3>
						<p className="mt-2">
							Depending on your role (coach, guardian, swimmer), we may collect:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								<strong>Account Information:</strong> name, email address, authentication
								credentials
							</li>
							<li>
								<strong>Profile Information:</strong> display name, avatar
							</li>
							<li>
								<strong>Contact Information:</strong> phone number (optional, role-restricted
								visibility)
							</li>
							<li>
								<strong>Team Information:</strong> team memberships, roles, season participation
							</li>
							<li>
								<strong>Communications:</strong> messages sent through in-app messaging
							</li>
							<li>
								<strong>Availability & Participation:</strong> RSVPs, volunteer commitments,
								attendance
							</li>
						</ul>

						<h3 className="mt-6 text-lg font-semibold text-white">
							1.2 Information About Swimmers
						</h3>
						<p className="mt-2">For swimmers participating on teams, we may collect:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>First and last name</li>
							<li>Birthdate or age group</li>
							<li>Team, group, and season assignments</li>
							<li>Event attendance and participation data</li>
						</ul>
						<p className="mt-3">
							Swimmer records represent <strong>participation</strong>, not identity. Swimmers do
							not authenticate unless explicitly enabled by a team.
						</p>

						<h3 className="mt-6 text-lg font-semibold text-white">
							1.3 Automatically Collected Information
						</h3>
						<p className="mt-2">When you use the Services, we may automatically collect:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Device type and operating system</li>
							<li>App version</li>
							<li>Log data (timestamps, basic diagnostics)</li>
						</ul>
						<p className="mt-3">
							We do <strong>not</strong> collect precise location data or use third-party
							advertising trackers.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-white">2. How We Use Information</h2>
						<p className="mt-4">
							We use collected information solely to operate and improve LaneLines, including to:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Authenticate users and manage accounts</li>
							<li>
								Provide team-based features (events, messaging, availability, volunteers)
							</li>
							<li>Enforce role-based access and privacy rules</li>
							<li>Communicate important service-related messages</li>
							<li>Maintain security, prevent abuse, and debug issues</li>
						</ul>
						<p className="mt-3">
							We do <strong>not</strong> sell personal information.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-white">3. How Information Is Shared</h2>
						<p className="mt-4">
							We share information only as necessary and under strict controls:
						</p>

						<h3 className="mt-6 text-lg font-semibold text-white">3.1 Within Teams</h3>
						<p className="mt-2">
							Information is shared <strong>within a team</strong> according to role-based
							permissions:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								Coaches and administrators may view team rosters and participation data
							</li>
							<li>Guardians may view and manage data for their linked swimmers</li>
							<li>Swimmer accounts (if enabled) have limited, self-only access</li>
						</ul>

						<h3 className="mt-6 text-lg font-semibold text-white">3.2 Service Providers</h3>
						<p className="mt-2">
							We use trusted service providers (e.g., cloud hosting, authentication, databases)
							to operate LaneLines. These providers process data only on our behalf and under
							contractual confidentiality obligations.
						</p>

						<h3 className="mt-6 text-lg font-semibold text-white">3.3 Legal Requirements</h3>
						<p className="mt-2">
							We may disclose information if required to comply with applicable laws,
							regulations, or legal processes.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-white">4. Data Retention</h2>
						<p className="mt-4">We retain personal information only as long as necessary to:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Provide the Services</li>
							<li>Meet legal, accounting, or safety obligations</li>
						</ul>
						<p className="mt-3">
							When a team or user account is deleted, associated personal data is deleted or
							anonymized unless retention is required by law.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-white">5. User Rights and Choices</h2>
						<p className="mt-4">
							Depending on your location, you may have the following rights:
						</p>

						<h3 className="mt-6 text-lg font-semibold text-white">5.1 Access and Correction</h3>
						<p className="mt-2">
							You may access and update your account information through the app.
						</p>

						<h3 className="mt-6 text-lg font-semibold text-white">5.2 Deletion</h3>
						<p className="mt-2">
							You may request deletion of your account and associated personal data. Deletion
							requests are subject to team-level data dependencies (e.g., historical records).
						</p>

						<h3 className="mt-6 text-lg font-semibold text-white">5.3 Data Portability</h3>
						<p className="mt-2">
							You may request a copy of your personal data in a commonly used, machine-readable
							format.
						</p>
						<p className="mt-3">
							To exercise these rights, contact us using the information below.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-white">6. Children's Privacy (COPPA)</h2>
						<p className="mt-4">
							LaneLines is designed for organized youth sports and involves children under 13.
						</p>
						<h3 className="mt-6 text-lg font-semibold text-white">Key Protections:</h3>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>
								Child data is collected <strong>only with parental or guardian involvement</strong>
							</li>
							<li>Guardians control swimmer participation and data visibility</li>
							<li>
								Swimmer accounts (login-enabled) are optional and require team approval
							</li>
							<li>We do not display advertising or collect data for marketing purposes</li>
						</ul>
						<p className="mt-3">
							We comply with the Children's Online Privacy Protection Act (COPPA). Parents or
							guardians may review, request deletion of, or restrict further collection of their
							child's information.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-white">
							7. California Privacy Rights (CCPA/CPRA)
						</h2>
						<p className="mt-4">If you are a California resident, you have the right to:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Know what personal information we collect and why</li>
							<li>Request access to or deletion of your personal information</li>
							<li>
								Opt out of the sale or sharing of personal information (we do not sell data)
							</li>
							<li>Not be discriminated against for exercising privacy rights</li>
						</ul>
						<p className="mt-3">
							Requests may be submitted using the contact information below. We will verify your
							identity before fulfilling requests.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-white">8. Security</h2>
						<p className="mt-4">
							We implement administrative, technical, and organizational safeguards designed to
							protect personal information, including:
						</p>
						<ul className="mt-3 list-disc space-y-1 pl-6">
							<li>Encrypted connections</li>
							<li>Role-based access controls</li>
							<li>Database-level access enforcement</li>
						</ul>
						<p className="mt-3">
							No system is 100% secure, but we work continuously to protect your data.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-white">9. Changes to This Policy</h2>
						<p className="mt-4">
							We may update this Privacy Policy from time to time. Material changes will be
							communicated through the app or website. The effective date will always be updated.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-white">10. Contact Us</h2>
						<p className="mt-4">
							If you have questions, concerns, or requests regarding this Privacy Policy or your
							personal data, contact us at:
						</p>
						<p className="mt-3">
							<strong>Email:</strong>{" "}
							<a
								href="mailto:privacy@lanelinesapp.com"
								className="text-sky-400 hover:text-sky-300"
							>
								privacy@lanelinesapp.com
							</a>
						</p>
					</div>

					<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
						<p className="text-white">
							<strong>LaneLines</strong> is built to support youth sports safely, transparently,
							and responsibly.
						</p>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
