import type { Route } from "./+types/about";
import { MarketingLayout } from "../components/marketing-layout";

const values = [
	{
		title: "Operational empathy",
		copy: "We build with coaches, parents, and swimmers who live the season every day.",
	},
	{
		title: "Data you can trust",
		copy: "We translate performance and attendance into clear, action-ready insights.",
	},
	{
		title: "Partnership over platforms",
		copy: "LaneLines works alongside your team to elevate swimmer outcomes, not just dashboards.",
	},
];

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About LaneLines" },
		{
			name: "description",
			content: "Meet the team building the swim team platform of the future.",
		},
	];
}

export default function About() {
	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-6xl px-6 py-16">
				<div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
					<div>
						<p className="text-sm uppercase tracking-[0.3em] text-white/60">Our mission</p>
						<h1 className="mt-4 text-4xl font-semibold text-white">
							Help every swim team operate with championship-level clarity.
						</h1>
						<p className="mt-4 text-lg text-white/70">
							We started LaneLines after watching coaches juggle attendance sheets, meet entries,
							and endless email threads. Our platform brings swim operations into a single
							shared workspace so teams can focus on athlete growth.
						</p>
					</div>
					<div className="rounded-3xl border border-white/10 bg-white/5 p-8">
						<h2 className="text-lg font-semibold text-white">Built for teams like yours</h2>
						<p className="mt-4 text-sm text-white/70">
							From summer league programs to year-round clubs, LaneLines adapts to the rhythm
							and complexity of your season.
						</p>
						<div className="mt-6 space-y-3 text-sm text-white/70">
							<p>Built alongside coaches and operations leaders</p>
							<p>Season planning across practices, meets, and clinics</p>
							<p>Insights designed for swimmer development</p>
						</div>
					</div>
				</div>
			</section>
			<section className="border-t border-white/10 bg-slate-900/60">
				<div className="mx-auto w-full max-w-6xl px-6 py-16">
					<h2 className="text-2xl font-semibold text-white">What we value</h2>
					<div className="mt-8 grid gap-6 md:grid-cols-3">
						{values.map((value) => (
							<div key={value.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
								<h3 className="text-lg font-semibold text-white">{value.title}</h3>
								<p className="mt-3 text-sm text-white/70">{value.copy}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
