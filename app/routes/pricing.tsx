import type { Route } from "./+types/pricing";
import { MarketingLayout } from "../components/marketing-layout";

const tiers = [
	{
		name: "Starter",
		price: "$699",
		description: "Launch LaneLines for a single team and core practice scheduling.",
		features: [
			"One team roster",
			"Practice scheduling",
			"Parent notifications",
		],
	},
	{
		name: "Growth",
		price: "$1,950",
		description: "Scale across multiple squads with meet prep and analytics.",
		features: [
			"Multi-group planning",
			"Meet entry management",
			"Attendance insights",
		],
		highlighted: true,
	},
	{
		name: "Enterprise",
		price: "Custom",
		description: "Custom workflows for large clubs, associations, and federations.",
		features: [
			"Unlimited teams",
			"Custom integrations",
			"Dedicated success manager",
		],
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
				<section className="mx-auto w-full max-w-6xl px-6 py-16">
					<div className="max-w-2xl">
						<h1 className="text-4xl font-semibold text-white">Simple, scalable pricing</h1>
						<p className="mt-4 text-lg text-white/70">
							Pick a plan that matches your team size and meet schedule. Need a custom rollout?
							We&apos;ll design it with you.
						</p>
					</div>
				<div className="mt-12 grid gap-6 md:grid-cols-3">
					{tiers.map((tier) => (
						<div
							key={tier.name}
							className={`rounded-3xl border p-6 ${
								tier.highlighted
									? "border-white bg-white text-slate-900"
									: "border-white/10 bg-white/5 text-white"
							}`}
						>
							<div className="flex items-center justify-between">
								<h2 className="text-lg font-semibold">{tier.name}</h2>
								{tier.highlighted ? (
									<span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
										Most popular
									</span>
								) : null}
							</div>
							<p className="mt-4 text-3xl font-semibold">{tier.price}</p>
							<p className="mt-3 text-sm opacity-80">{tier.description}</p>
							<ul className="mt-6 space-y-3 text-sm">
								{tier.features.map((feature) => (
									<li key={feature} className="flex items-center gap-3">
										<span
											className={`h-2.5 w-2.5 rounded-full ${
												tier.highlighted ? "bg-slate-900" : "bg-white"
											}`}
										/>
										{feature}
									</li>
								))}
							</ul>
							<a
								className={`mt-8 inline-flex rounded-full px-5 py-2 text-sm font-semibold transition ${
									tier.highlighted
										? "bg-slate-900 text-white hover:bg-slate-800"
										: "border border-white/30 text-white hover:border-white"
								}`}
								href="/contact"
							>
								Talk to sales
							</a>
						</div>
					))}
				</div>
			</section>
		</MarketingLayout>
	);
}
