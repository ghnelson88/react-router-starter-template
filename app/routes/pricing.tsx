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
			<section className="mx-auto w-full max-w-6xl px-6 py-12 transition-colors duration-300 md:py-16">
				<div className="max-w-3xl">
					<h1 className="text-4xl font-semibold text-neutral-900 dark:text-white md:text-5xl">Flexible pricing for growing teams</h1>
					<p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
						Pick a plan that matches your season goals and operational needs. Need a custom rollout?
						We&apos;ll design it with you.
					</p>
				</div>
				<div className="mt-6 rounded-2xl border border-[#007BA7]/20 bg-[#007BA7]/10 p-5 text-sm text-neutral-600 dark:bg-[#007BA7]/15 dark:text-neutral-400">
					<p className="font-semibold text-neutral-900 dark:text-white">Not sure which plan is right?</p>
					<p className="mt-1">Talk to our team and get a recommendation based on your club size and schedule.</p>
				</div>
				<div className="mt-10 grid gap-6 md:grid-cols-3">
					{tiers.map((tier) => (
						<div
							key={tier.name}
							className={`rounded-3xl border p-6 transition-colors duration-300 ${
								tier.highlighted
									? "border-[#0A4C75]/30 bg-[#0A4C75] text-white dark:border-white/[0.15] dark:bg-white/[0.05] dark:text-white"
									: "border-neutral-200 bg-white text-neutral-900 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-white dark:shadow-none"
							}`}
						>
							<div className="flex items-center justify-between">
								<h2 className="text-xl font-semibold">{tier.name}</h2>
								{tier.highlighted ? (
									<span className="rounded-full bg-[#007BA7]/20 px-3 py-1 text-xs font-semibold text-[#0A4C75] dark:text-[#007BA7]">
										Most popular
									</span>
								) : null}
							</div>
							<p className="mt-4 text-3xl font-semibold">{tier.price}</p>
							<p className="mt-3 text-base opacity-90">{tier.description}</p>
							<ul className="mt-6 space-y-3 text-base">
								{tier.features.map((feature) => (
									<li key={feature} className="flex items-center gap-3">
										<span className={`h-2.5 w-2.5 rounded-full ${tier.highlighted ? "bg-[#007BA7]/20" : "bg-[#007BA7]"}`} />
										{feature}
									</li>
								))}
							</ul>
							<a
								className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
									tier.highlighted
											? "bg-white text-[#0A4C75] hover:bg-white/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
											: "border border-neutral-300 text-neutral-900 hover:border-neutral-400 dark:border-white/[0.1] dark:text-white dark:hover:border-white/[0.2]"
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
