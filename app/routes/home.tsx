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
						<p className="text-sm uppercase tracking-[0.3em] text-[#1565C0]">Swim ops, reimagined</p>
						<h1 className="mt-4 text-4xl font-semibold leading-tight text-[#0D3C61] md:text-5xl">
							Keep every practice, meet, and family on the same page.
						</h1>
						<p className="mt-4 max-w-2xl text-lg text-[#0D3C61]/85">
							LaneLines brings coaching, communication, and meet logistics into one clear hub
							so your team can move faster and stay aligned all season.
						</p>
						<div className="mt-8 flex flex-wrap gap-4">
							<a
								className="rounded-full bg-[#1E88E5] px-6 py-3.5 text-base font-semibold text-white"
								href="/contact"
							>
								Contact Us
							</a>
							<a
								className="rounded-full border border-[#0D3C61]/25 bg-white px-6 py-3.5 text-base font-semibold text-[#0D3C61]"
								href="/pricing"
							>
								View pricing
							</a>
						</div>
						<p className="mt-4 text-sm text-[#0D3C61]/75">No credit card required for a walkthrough.</p>
						<div className="mt-10 grid gap-6 text-base text-[#0D3C61]/80 sm:grid-cols-3">
							<div>
								<p className="text-2xl font-semibold text-[#0D3C61]">Attendance clarity</p>
								<p className="mt-1">Spot trends and act early when attendance slips.</p>
							</div>
							<div>
								<p className="text-2xl font-semibold text-[#0D3C61]">Operational lift</p>
								<p className="mt-1">Reduce back-and-forth across email and spreadsheets.</p>
							</div>
							<div>
								<p className="text-2xl font-semibold text-[#0D3C61]">Family confidence</p>
								<p className="mt-1">Keep guardians in sync with schedules and updates.</p>
							</div>
						</div>
					</div>
					<div className="rounded-3xl border border-[#0D3C61]/15 bg-white p-8 shadow-sm">
						<h2 className="text-xl font-semibold text-[#0D3C61]">Coach dashboard preview</h2>
						<ul className="mt-6 space-y-4 text-base text-[#0D3C61]/80">
							<li>
								<span className="font-medium text-[#0D3C61]">Attendance signals</span> by practice,
								athlete, and group.
							</li>
							<li>
								<span className="font-medium text-[#0D3C61]">Training plans</span> that publish to
								athletes and parents.
							</li>
							<li>
								<span className="font-medium text-[#0D3C61]">Meet readiness</span> with entries,
								roles, and RSVPs.
							</li>
						</ul>
						<div className="mt-8 rounded-2xl bg-[#0D3C61] p-6">
							<p className="text-xs uppercase tracking-[0.3em] text-white/70">Snapshot</p>
							<p className="mt-3 text-2xl font-semibold text-white">Check-ins and workouts in sync</p>
							<p className="mt-2 text-sm text-white/80">
								Meet prep, volunteer roles, and updates ready to share.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="border-y border-[#0D3C61]/15 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-12">
					<div className="rounded-2xl border border-[#1E88E5]/20 bg-[#1E88E5]/5 p-6 md:flex md:items-center md:justify-between md:gap-6">
						<div>
							<h2 className="text-xl font-semibold text-[#0D3C61]">Need help choosing the right plan?</h2>
							<p className="mt-2 text-base text-[#0D3C61]/80">
								Share your team size and goals, and we&apos;ll recommend your best next step.
							</p>
						</div>
						<div className="mt-4 md:mt-0">
							<a
								className="inline-flex rounded-full bg-[#FFC107] px-5 py-3 text-sm font-semibold text-[#0D3C61]"
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
