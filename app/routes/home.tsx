import type { Route } from "./+types/home";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "LaneLines — Swim team management made simple" },
		{
			name: "description",
			content:
				"LaneLines unifies swim team communication, scheduling, and meet prep for coaches, families, and clubs.",
		},
	];
}

export default function Home() {
	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
				<div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
					<div>
						<p className="text-sm uppercase tracking-[0.3em] text-white/70">Swim ops, reimagined</p>
						<h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
							Keep every practice, meet, and family on the same page.
						</h1>
						<p className="mt-4 max-w-2xl text-lg text-white/80">
							LaneLines brings coaching, communication, and meet logistics into one clear hub
							so your team can move faster and stay aligned all season.
						</p>
						<div className="mt-8 flex flex-wrap gap-4">
							<a
								className="rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-amber-300 px-6 py-3.5 text-base font-semibold text-slate-900"
								href="/contact"
							>
								Contact Us
							</a>
							<a
								className="rounded-full border border-white/30 px-6 py-3.5 text-base font-semibold text-white"
								href="/pricing"
							>
								View pricing
							</a>
						</div>
						<p className="mt-4 text-sm text-white/70">No credit card required for a walkthrough.</p>
						<div className="mt-10 grid gap-6 text-base text-white/75 sm:grid-cols-3">
							<div>
								<p className="text-2xl font-semibold text-white">Attendance clarity</p>
								<p className="mt-1">Spot trends and act early when attendance slips.</p>
							</div>
							<div>
								<p className="text-2xl font-semibold text-white">Operational lift</p>
								<p className="mt-1">Reduce back-and-forth across email and spreadsheets.</p>
							</div>
							<div>
								<p className="text-2xl font-semibold text-white">Family confidence</p>
								<p className="mt-1">Keep guardians in sync with schedules and updates.</p>
							</div>
						</div>
					</div>
					<div className="rounded-3xl border border-white/15 bg-white/5 p-8">
						<h2 className="text-xl font-semibold text-white">Coach dashboard preview</h2>
						<ul className="mt-6 space-y-4 text-base text-white/75">
							<li>
								<span className="font-medium text-white">Attendance signals</span> by practice,
								athlete, and group.
							</li>
							<li>
								<span className="font-medium text-white">Training plans</span> that publish to
								athletes and parents.
							</li>
							<li>
								<span className="font-medium text-white">Meet readiness</span> with entries,
								roles, and RSVPs.
							</li>
						</ul>
						<div className="mt-8 rounded-2xl bg-slate-950/60 p-6">
							<p className="text-xs uppercase tracking-[0.3em] text-white/60">Snapshot</p>
							<p className="mt-3 text-2xl font-semibold text-white">Check-ins and workouts in sync</p>
							<p className="mt-2 text-sm text-white/70">
								Meet prep, volunteer roles, and updates ready to share.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="border-y border-white/10 bg-slate-900/70">
				<div className="mx-auto w-full max-w-6xl px-6 py-12">
					<div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:flex md:items-center md:justify-between md:gap-6">
						<div>
							<h2 className="text-xl font-semibold text-white">Need help choosing the right plan?</h2>
							<p className="mt-2 text-base text-white/75">
								Share your team size and goals, and we&apos;ll recommend your best next step.
							</p>
						</div>
						<div className="mt-4 md:mt-0">
							<a
								className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900"
								href="/contact"
							>
								Get a recommendation
							</a>
						</div>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
