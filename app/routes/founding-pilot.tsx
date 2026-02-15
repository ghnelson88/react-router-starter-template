import type { Route } from "./+types/founding-pilot";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Founding Pilot | LaneLines" },
		{
			name: "description",
			content:
				"Become a founding LaneLines club and help shape the future of meet operations.",
		},
	];
}

export default function FoundingPilot() {
	return (
		<MarketingLayout>
			{/* Header */}
			<section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
				<h1 className="text-4xl font-semibold leading-tight text-[#0D3C61] md:text-5xl">
					Become a Founding LaneLines Club
				</h1>
				<p className="mt-6 max-w-2xl text-lg text-[#0D3C61]/85">
					We're onboarding a limited group of year-round USA Swimming clubs who want to
					bring operational clarity to meet season.
				</p>
			</section>

			{/* What You Get */}
			<section className="border-y border-[#0D3C61]/15 bg-white">
				<div className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
					<h2 className="text-3xl font-semibold text-[#0D3C61]">What You Get</h2>
					<ul className="mt-6 space-y-3 text-base text-[#0D3C61]/80">
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Full platform access
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Roster and group setup support
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Meet workflow onboarding
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Volunteer coordination tools
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Direct access to the founders
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Influence on roadmap decisions
						</li>
					</ul>
				</div>
			</section>

			{/* Pilot Terms */}
			<section className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
				<h2 className="text-3xl font-semibold text-[#0D3C61]">Pilot Terms</h2>
				<p className="mt-4 text-base text-[#0D3C61]/80">
					Standard license: <strong className="text-[#0D3C61]">$1,800 per club per year</strong>
				</p>

				<div className="mt-8 rounded-2xl border border-[#0D3C61]/15 bg-white p-6">
					<h3 className="text-xl font-semibold text-[#0D3C61]">
						Founding Partner Discount
					</h3>
					<p className="mt-4 text-lg font-semibold text-[#0D3C61]">
						100% waived through the end of your current competitive season.
					</p>
					<div className="mt-4 space-y-1 text-base text-[#0D3C61]/80">
						<p>Invoice issued at standard rate.</p>
						<p>Discount applied in full.</p>
					</div>
				</div>
			</section>

			{/* In Exchange */}
			<section className="border-y border-[#0D3C61]/15 bg-white">
				<div className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
					<h2 className="text-3xl font-semibold text-[#0D3C61]">In Exchange</h2>
					<p className="mt-4 text-base text-[#0D3C61]/80">We ask for:</p>
					<ul className="mt-4 space-y-3 text-base text-[#0D3C61]/80">
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Monthly feedback session
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							End-of-season review
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Honest product input
						</li>
					</ul>
				</div>
			</section>

			{/* Ideal Pilot Clubs */}
			<section className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
				<h2 className="text-3xl font-semibold text-[#0D3C61]">Ideal Pilot Clubs</h2>
				<p className="mt-4 text-base text-[#0D3C61]/80">We're selecting clubs that:</p>
				<ul className="mt-4 space-y-3 text-base text-[#0D3C61]/80">
					<li className="flex items-start gap-3">
						<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
						Run full meet calendars
					</li>
					<li className="flex items-start gap-3">
						<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
						Have 60–150 swimmers
					</li>
					<li className="flex items-start gap-3">
						<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
						Use an existing registration platform
					</li>
					<li className="flex items-start gap-3">
						<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
						Want operational clarity
					</li>
					<li className="flex items-start gap-3">
						<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
						Are willing to give structured feedback
					</li>
				</ul>
			</section>

			{/* Apply */}
			<section className="border-t border-[#0D3C61]/15 bg-white">
				<div className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
					<h2 className="text-3xl font-semibold text-[#0D3C61]">Apply for Pilot Access</h2>
					<p className="mt-4 text-base text-[#0D3C61]/80">Please include:</p>
					<ul className="mt-4 space-y-3 text-base text-[#0D3C61]/80">
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Club name
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Swimmer count
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Number of practice groups
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Current registration platform
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Biggest meet-day pain point
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Head coach contact information
						</li>
					</ul>
					<p className="mt-6 text-base text-[#0D3C61]/80">
						We'll follow up personally to discuss fit.
					</p>
					<div className="mt-8">
						<a
							className="rounded-full bg-[#1E88E5] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#1565C0]"
							href="/contact"
						>
							Contact Us to Apply
						</a>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
