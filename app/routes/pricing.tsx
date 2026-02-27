import { Link } from "react-router";
import type { Route } from "./+types/pricing";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Pricing | LaneLines" },
		{
			name: "description",
			content: "Simple, flat annual pricing for competitive swim clubs.",
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

const faqs = [
	{
		question: "Does this replace our registration system?",
		answer: "No. Registration and billing remain where they are. LaneLines runs meet operations.",
	},
	{
		question: "Is pricing per swimmer?",
		answer: "No. Flat annual club license. Unlimited swimmers.",
	},
	{
		question: "Can we use this across multiple practice groups?",
		answer: "Yes. Built for senior, age group, and developmental structures.",
	},
	{
		question: "What happens after pilot ends?",
		answer:
			"Founding clubs receive preferred renewal pricing for their first full paid season.",
	},
];

const features = [
	"Unlimited swimmers",
	"Unlimited practice groups",
	"Meet entries and RSVP tracking",
	"Volunteer coordination",
	"Attendance insights",
	"Best times and relay planning support",
	"Family communication",
];

export default function Pricing() {
	return (
		<MarketingLayout>
			{/* Header */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-white to-[#F5F7F9]" />
				<div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="mx-auto max-w-2xl text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
							Pricing
						</p>
						<h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-5xl">
							Simple Pricing for
							<br />
							Competitive Swim Clubs
						</h1>
						<p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[#2F3A45]/70">
							LaneLines is licensed at the club level — predictable, transparent, and built
							for year-round USA Swimming programs.
						</p>
						<div className="mt-6 flex items-center justify-center gap-6 text-sm text-[#2F3A45]/50">
							<span>No per-swimmer fees</span>
							<span className="h-1 w-1 rounded-full bg-[#2F3A45]/20" />
							<span>No feature tiers</span>
							<span className="h-1 w-1 rounded-full bg-[#2F3A45]/20" />
							<span>No surprise add-ons</span>
						</div>
					</div>
				</div>
			</section>

			{/* Standard Club License */}
			<section className="border-y border-[#0F1E2E]/6 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="mx-auto max-w-xl">
						<div className="rounded-xl border border-[#0F1E2E]/8 bg-white p-8 shadow-sm">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F3A45]/40">
								Standard Club License
							</p>
							<div className="mt-4 flex items-baseline gap-2">
								<span className="text-5xl font-bold tracking-tight text-[#0F1E2E]">
									$1,800
								</span>
								<span className="text-base text-[#2F3A45]/50">
									per club per year
								</span>
							</div>
							<p className="mt-3 text-sm text-[#2F3A45]/60">
								Covers your entire team. Works alongside your existing registration system.
							</p>

							<div className="my-6 border-t border-[#0F1E2E]/6" />

							<p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2F3A45]/40">
								Everything included
							</p>
							<ul className="mt-4 space-y-3">
								{features.map((feature) => (
									<li
										key={feature}
										className="flex items-start gap-2.5 text-sm text-[#2F3A45]/70"
									>
										<CheckIcon />
										{feature}
									</li>
								))}
							</ul>

							<div className="mt-8">
								<Link
									className="block rounded-lg bg-[#0F1E2E] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#0F1E2E]/90"
									to="/contact"
								>
									Contact Sales
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Founding Pilot Cohort */}
			<section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
				<div className="mx-auto max-w-xl">
					<div className="text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
							Limited availability
						</p>
						<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
							Founding Pilot Cohort
						</h2>
						<p className="mt-4 text-sm text-[#2F3A45]/60">
							Standard Annual License: <strong className="text-[#0F1E2E]">$1,800</strong>
						</p>
					</div>

					<div className="mt-8 rounded-xl border border-[#2E6F95]/20 bg-[#2E6F95]/5 p-8">
						<h3 className="text-lg font-semibold text-[#0F1E2E]">
							Founding Partner Investment
						</h3>
						<p className="mt-3 text-base font-semibold text-[#0F1E2E]">
							100% discounted through the end of your current competitive season.
						</p>
						<div className="mt-4 space-y-1 text-sm text-[#2F3A45]/60">
							<p>Invoice issued at standard rate.</p>
							<p>Founding partner discount applied in full.</p>
						</div>

						<div className="my-6 border-t border-[#2E6F95]/10" />

						<p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2F3A45]/40">
							In exchange for
						</p>
						<ul className="mt-3 space-y-2.5">
							{[
								"Structured product feedback",
								"Monthly check-ins",
								"End-of-season review",
							].map((item) => (
								<li
									key={item}
									className="flex items-start gap-2.5 text-sm text-[#2F3A45]/70"
								>
									<CheckIcon />
									{item}
								</li>
							))}
						</ul>

						<p className="mt-6 text-sm text-[#2F3A45]/50">
							Limited to a small number of competitive clubs.
						</p>

						<div className="mt-6">
							<Link
								className="inline-block rounded-lg bg-[#0F1E2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0F1E2E]/90"
								to="/founding-pilot"
							>
								Apply for Founding Pilot Access
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="border-t border-[#0F1E2E]/6 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="mx-auto max-w-2xl">
						<h2 className="text-center text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
							Frequently Asked Questions
						</h2>
						<dl className="mt-12 divide-y divide-[#0F1E2E]/6">
							{faqs.map((faq) => (
								<div key={faq.question} className="py-6 first:pt-0 last:pb-0">
									<dt className="text-base font-semibold text-[#0F1E2E]">
										{faq.question}
									</dt>
									<dd className="mt-2 text-sm leading-relaxed text-[#2F3A45]/60">
										{faq.answer}
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
