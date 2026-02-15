import { Link } from "react-router";
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

function CheckIcon() {
	return (
		<svg
			className="mt-0.5 h-4 w-4 shrink-0 text-[#2E6F95]"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
		</svg>
	);
}

export default function FoundingPilot() {
	return (
		<MarketingLayout>
			{/* Header */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-white to-[#F5F7F9]" />
				<div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="mx-auto max-w-2xl text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
							Founding pilot
						</p>
						<h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-5xl">
							Become a Founding
							<br />
							LaneLines Club
						</h1>
						<p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[#2F3A45]/70">
							We&apos;re onboarding a limited group of year-round USA Swimming clubs who want
							to bring operational clarity to meet season.
						</p>
					</div>
				</div>
			</section>

			{/* What You Get */}
			<section className="border-y border-[#0F1E2E]/6 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="grid gap-12 md:grid-cols-2 md:items-start">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
								Pilot benefits
							</p>
							<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
								What you get.
							</h2>
							<p className="mt-4 text-base leading-relaxed text-[#2F3A45]/60">
								Full access to everything LaneLines offers, plus direct partnership with
								our team as we build the platform together.
							</p>
						</div>
						<div className="grid gap-3 sm:grid-cols-2">
							{[
								{
									title: "Full platform access",
									desc: "Every feature, no restrictions.",
								},
								{
									title: "Roster setup support",
									desc: "We help configure your groups.",
								},
								{
									title: "Meet workflow onboarding",
									desc: "Guided setup for your first meet.",
								},
								{
									title: "Volunteer coordination",
									desc: "Role management built in.",
								},
								{
									title: "Direct founder access",
									desc: "Talk to the people building it.",
								},
								{
									title: "Roadmap influence",
									desc: "Your feedback shapes what ships.",
								},
							].map((item) => (
								<div
									key={item.title}
									className="rounded-lg border border-[#0F1E2E]/6 bg-[#F5F7F9] p-4"
								>
									<p className="text-sm font-semibold text-[#0F1E2E]">
										{item.title}
									</p>
									<p className="mt-1 text-sm text-[#2F3A45]/50">{item.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Pilot Terms */}
			<section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
				<div className="mx-auto max-w-xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
						Terms
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
						Pilot terms.
					</h2>
					<p className="mt-4 text-sm text-[#2F3A45]/60">
						Standard license: <strong className="text-[#0F1E2E]">$1,800 per club per year</strong>
					</p>
				</div>

				<div className="mx-auto mt-8 max-w-xl rounded-xl border border-[#2E6F95]/20 bg-[#2E6F95]/5 p-8">
					<h3 className="text-lg font-semibold text-[#0F1E2E]">
						Founding Partner Discount
					</h3>
					<p className="mt-3 text-base font-semibold text-[#0F1E2E]">
						100% waived through the end of your current competitive season.
					</p>
					<div className="mt-4 space-y-1 text-sm text-[#2F3A45]/60">
						<p>Invoice issued at standard rate.</p>
						<p>Discount applied in full.</p>
					</div>
				</div>
			</section>

			{/* In Exchange */}
			<section className="border-y border-[#0F1E2E]/6 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="grid gap-12 md:grid-cols-2 md:items-center">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
								Partnership
							</p>
							<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
								In exchange.
							</h2>
							<p className="mt-4 text-base leading-relaxed text-[#2F3A45]/60">
								We ask for honest input so we can build the right product. Your feedback
								directly shapes what we ship.
							</p>
						</div>
						<div className="space-y-4">
							{[
								{
									title: "Monthly feedback session",
									desc: "30-minute structured conversation about what's working and what's not.",
								},
								{
									title: "End-of-season review",
									desc: "A candid look back at how the platform performed during your season.",
								},
								{
									title: "Honest product input",
									desc: "Tell us what you actually need — no polished answers required.",
								},
							].map((item) => (
								<div
									key={item.title}
									className="rounded-lg border border-[#0F1E2E]/6 bg-[#F5F7F9] p-4"
								>
									<p className="text-sm font-semibold text-[#0F1E2E]">
										{item.title}
									</p>
									<p className="mt-1 text-sm text-[#2F3A45]/50">{item.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Ideal Pilot Clubs */}
			<section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
						Fit
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
						Ideal pilot clubs.
					</h2>
					<p className="mt-4 text-base text-[#2F3A45]/60">
						We&apos;re selecting clubs that match the operational profile LaneLines is built for.
					</p>
				</div>
				<div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
					{[
						"Run full meet calendars",
						"Have 60–150 swimmers",
						"Use an existing registration platform",
						"Want operational clarity",
						"Are willing to give structured feedback",
					].map((item) => (
						<div
							key={item}
							className="flex items-start gap-3 rounded-lg border border-[#0F1E2E]/6 bg-white p-4"
						>
							<CheckIcon />
							<span className="text-sm text-[#2F3A45]/70">{item}</span>
						</div>
					))}
				</div>
			</section>

			{/* Apply CTA */}
			<section className="border-t border-[#0F1E2E]/6 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="mx-auto max-w-2xl rounded-2xl border border-[#0F1E2E]/8 bg-[#0F1E2E] p-10 md:p-14">
						<div className="text-center">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
								Apply
							</p>
							<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
								Apply for Pilot Access
							</h2>
							<p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
								We&apos;ll follow up personally to discuss fit.
							</p>
						</div>

						<div className="mt-8 space-y-3">
							<p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30">
								Please include
							</p>
							<ul className="space-y-2">
								{[
									"Club name",
									"Swimmer count",
									"Number of practice groups",
									"Current registration platform",
									"Biggest meet-day pain point",
									"Head coach contact information",
								].map((item) => (
									<li
										key={item}
										className="flex items-center gap-2.5 text-sm text-white/60"
									>
										<span className="h-1 w-1 shrink-0 rounded-full bg-[#2E6F95]" />
										{item}
									</li>
								))}
							</ul>
						</div>

						<div className="mt-8 text-center">
							<Link
								className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F1E2E] hover:bg-white/90"
								to="/contact"
							>
								Contact Us to Apply
							</Link>
						</div>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
