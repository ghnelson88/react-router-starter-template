import type { Route } from "./+types/home";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "LaneLines — Swim team management made simple" },
		{
			name: "description",
			content:
				"LaneLines centralizes swim team scheduling, athlete progress, and meet operations for coaches, families, and clubs.",
		},
	];
}

export default function Home() {
	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-6xl px-6 py-16">
				<div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
					<div>
						<p className="text-sm uppercase tracking-[0.3em] text-white/60">
							Built for swim clubs
						</p>
						<h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
							Every athlete, workout, and meet in one place.
						</h1>
						<p className="mt-4 text-lg text-white/70">
							LaneLines gives coaches and team admins a single source of truth for training
							plans, attendance, and meet results so everyone stays aligned.
						</p>
						<div className="mt-8 flex flex-wrap gap-4">
							<a
								className="rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-amber-300 px-6 py-3 text-sm font-semibold text-slate-900"
								href="/contact"
							>
								Book a demo
							</a>
							<a
								className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80"
								href="/pricing"
							>
								View pricing
							</a>
						</div>
						<div className="mt-10 grid gap-6 text-sm text-white/70 sm:grid-cols-3">
							<div>
								<p className="text-2xl font-semibold text-white">32%</p>
								<p className="mt-1">Higher athlete attendance</p>
							</div>
							<div>
								<p className="text-2xl font-semibold text-white">4 hrs</p>
								<p className="mt-1">Saved weekly on admin tasks</p>
							</div>
							<div>
								<p className="text-2xl font-semibold text-white">98%</p>
								<p className="mt-1">Families staying informed</p>
							</div>
						</div>
					</div>
					<div className="rounded-3xl border border-white/10 bg-white/5 p-8">
						<h2 className="text-lg font-semibold text-white">Coach dashboard preview</h2>
						<ul className="mt-6 space-y-4 text-sm text-white/70">
							<li>
								<span className="font-medium text-white">Attendance insights</span> by practice,
								athlete, and group.
							</li>
							<li>
								<span className="font-medium text-white">Training plans</span> that auto-publish
								to athletes and parents.
							</li>
							<li>
								<span className="font-medium text-white">Meet management</span> with heat sheets,
								seed times, and RSVPs.
							</li>
						</ul>
						<div className="mt-8 rounded-2xl bg-slate-950/60 p-6">
							<p className="text-xs uppercase tracking-[0.3em] text-white/50">Today</p>
							<p className="mt-3 text-2xl font-semibold text-white">146 athletes checked in</p>
							<p className="mt-2 text-sm text-white/60">3 workouts published · 2 meets in prep</p>
						</div>
					</div>
				</div>
			</section>
			<section className="border-t border-white/10 bg-slate-900/60">
				<div className="mx-auto w-full max-w-6xl px-6 py-16">
					<h2 className="text-2xl font-semibold text-white">Why teams choose LaneLines</h2>
					<div className="mt-8 grid gap-6 md:grid-cols-3">
						<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
							<h3 className="text-lg font-semibold text-white">Unified roster hub</h3>
							<p className="mt-3 text-sm text-white/70">
								Track attendance, athlete groups, and practice history in a single view.
							</p>
						</div>
						<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
							<h3 className="text-lg font-semibold text-white">Smarter communication</h3>
							<p className="mt-3 text-sm text-white/70">
								Automated updates keep families aligned on practices and meet changes.
							</p>
						</div>
						<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
							<h3 className="text-lg font-semibold text-white">Meet ready workflows</h3>
							<p className="mt-3 text-sm text-white/70">
								Collect entries, seed times, and travel details without spreadsheets.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mx-auto w-full max-w-6xl px-6 py-16">
				<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-400/20 via-blue-500/10 to-amber-300/10 p-10">
					<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
						<div>
							<h2 className="text-2xl font-semibold text-white">
								Bring your entire swim program into LaneLines.
							</h2>
							<p className="mt-2 text-sm text-white/70">
								Set up your club, invite athletes, and streamline every meet.
							</p>
						</div>
						<a
							className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
							href="/contact"
						>
							Schedule a live demo
						</a>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
