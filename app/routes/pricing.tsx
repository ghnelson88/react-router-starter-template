import type { Route } from "./+types/pricing";
import { MarketingLayout } from "../components/marketing-layout";

const tiers = [
	{
		name: "Pilot",
		price: "Launch pricing",
		description: "A guided rollout for a single team and core scheduling needs.",
		features: ["Team roster setup", "Practice scheduling", "Family communications"],
	},
	{
		name: "Club",
		price: "Team pricing",
		description: "Scale across squads with meet prep, volunteers, and insights.",
		features: ["Multi-group planning", "Meet and volunteer coordination", "Attendance insights"],
		highlighted: true,
	},
	{
		name: "Federation",
		price: "Custom",
		description: "Custom workflows for large clubs, associations, and federations.",
		features: ["Multi-club governance", "Custom workflows", "Dedicated success partner"],
	},
];

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "LaneLines Pricing" },
		{
			name: "description",
			content: "Flexible plans for swim teams, clubs, and associations.",
		},
	];
}

export default function Pricing() {
	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
				<div className="max-w-3xl">
					<h1 className="text-4xl font-semibold text-white md:text-5xl">Flexible pricing for growing teams</h1>
					<p className="mt-4 text-lg text-white/80">
						Pick a plan that matches your season goals and operational needs. Need a custom rollout?
						We&apos;ll design it with you.
					</p>
				</div>
				<div className="mt-6 rounded-2xl border border-sky-300/30 bg-sky-400/10 p-5 text-sm text-sky-100">
					<p className="font-semibold text-white">Not sure which plan is right?</p>
					<p className="mt-1">Talk to our team and get a recommendation based on your club size and schedule.</p>
				</div>
				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{tiers.map((tier) => (
						<div
							key={tier.name}
							className={`rounded-3xl border p-6 ${
								tier.highlighted
									? "border-white bg-white text-slate-900"
									: "border-white/15 bg-white/5 text-white"
							}`}
						>
							<div className="flex items-center justify-between">
								<h2 className="text-xl font-semibold">{tier.name}</h2>
								{tier.highlighted ? (
									<span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
										Most popular
									</span>
								) : null}
							</div>
							<p className="mt-4 text-3xl font-semibold">{tier.price}</p>
							<p className="mt-3 text-base opacity-90">{tier.description}</p>
							<ul className="mt-6 space-y-3 text-base">
								{tier.features.map((feature) => (
									<li key={feature} className="flex items-center gap-3">
										<span className={`h-2.5 w-2.5 rounded-full ${tier.highlighted ? "bg-slate-900" : "bg-white"}`} />
										{feature}
									</li>
								))}
							</ul>
							<a
								className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
									tier.highlighted
										? "bg-slate-900 text-white hover:bg-slate-800"
										: "border border-white/40 text-white hover:border-white"
								}`}
								href="/contact"
							>
								Contact sales
							</a>
						</div>
					))}
				</div>
			</section>
		</MarketingLayout>
	);
}
