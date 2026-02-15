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

export default function Pricing() {
	return (
		<MarketingLayout>
			{/* Header */}
			<section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
				<h1 className="text-4xl font-semibold text-[#0D3C61] md:text-5xl">
					Simple Pricing for Competitive Swim Clubs
				</h1>
				<p className="mt-6 max-w-2xl text-lg text-[#0D3C61]/85">
					LaneLines is licensed at the club level — predictable, transparent, and built for
					year-round USA Swimming programs.
				</p>
				<div className="mt-6 space-y-1 text-base text-[#0D3C61]/80">
					<p>No per-swimmer fees.</p>
					<p>No feature tiers.</p>
					<p>No surprise add-ons.</p>
				</div>
			</section>

			{/* Standard Club License */}
			<section className="border-y border-[#0D3C61]/15 bg-white">
				<div className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
					<h2 className="text-3xl font-semibold text-[#0D3C61]">Standard Club License</h2>
					<p className="mt-4 text-4xl font-semibold text-[#0D3C61]">
						$1,800{" "}
						<span className="text-lg font-normal text-[#0D3C61]/70">
							per club per year
						</span>
					</p>
					<p className="mt-2 text-base text-[#0D3C61]/80">Covers your entire team.</p>
					<ul className="mt-6 space-y-3 text-base text-[#0D3C61]/80">
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Unlimited swimmers
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Unlimited practice groups
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Meet entries and RSVP tracking
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Volunteer coordination
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Attendance insights
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Best times and relay planning support
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Family communication
						</li>
					</ul>
					<p className="mt-6 text-base text-[#0D3C61]/70">
						Works alongside your existing registration system.
					</p>
				</div>
			</section>

			{/* Founding Pilot Cohort */}
			<section className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
				<h2 className="text-3xl font-semibold text-[#0D3C61]">Founding Pilot Cohort</h2>
				<p className="mt-4 text-base text-[#0D3C61]/80">
					Standard Annual License: <strong className="text-[#0D3C61]">$1,800</strong>
				</p>

				<div className="mt-8 rounded-2xl border border-[#0D3C61]/15 bg-white p-6">
					<h3 className="text-xl font-semibold text-[#0D3C61]">
						Founding Partner Investment
					</h3>
					<p className="mt-4 text-lg font-semibold text-[#0D3C61]">
						100% discounted through the end of your current competitive season.
					</p>
					<div className="mt-4 space-y-1 text-base text-[#0D3C61]/80">
						<p>Invoice issued at standard rate.</p>
						<p>Founding partner discount applied in full.</p>
					</div>
					<div className="mt-6">
						<p className="text-base text-[#0D3C61]/80">In exchange for:</p>
						<ul className="mt-3 space-y-2 text-base text-[#0D3C61]/80">
							<li className="flex items-start gap-3">
								<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
								Structured product feedback
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
								Monthly check-ins
							</li>
							<li className="flex items-start gap-3">
								<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
								End-of-season review
							</li>
						</ul>
					</div>
					<p className="mt-6 text-base text-[#0D3C61]/70">
						Limited to a small number of competitive clubs.
					</p>
					<div className="mt-6">
						<Link
							className="rounded-full bg-[#1E88E5] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#1565C0]"
							to="/founding-pilot"
						>
							Apply for Founding Pilot Access
						</Link>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="border-t border-[#0D3C61]/15 bg-white">
				<div className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
					<h2 className="text-3xl font-semibold text-[#0D3C61]">
						Frequently Asked Questions
					</h2>
					<dl className="mt-8 space-y-8">
						{faqs.map((faq) => (
							<div key={faq.question}>
								<dt className="text-lg font-semibold text-[#0D3C61]">
									{faq.question}
								</dt>
								<dd className="mt-2 text-base text-[#0D3C61]/80">{faq.answer}</dd>
							</div>
						))}
					</dl>
				</div>
			</section>
		</MarketingLayout>
	);
}
