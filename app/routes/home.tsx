import type { Route } from "./+types/home";
import { MarketingLayout } from "../components/marketing-layout";
import { BrandLogo } from "../components/brand-logo";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "LaneLines | Connect Effort to Improvement" },
		{
			name: "description",
			content:
				"LaneLines helps swim teams connect attendance, effort, and communication to measurable improvement.",
		},
	];
}

const card =
	"rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-colors hover:bg-neutral-50";

export default function Home() {
	return (
		<MarketingLayout>
			<section className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-20 text-center">
				<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-600">
					<span>◎</span>
					<span>The system for teams that care</span>
				</div>
				<h1 className="text-4xl font-medium tracking-tight text-neutral-900 md:text-6xl">
					Connect effort to <br className="hidden md:block" />
					<span className="bg-gradient-to-b from-[#0A4C75] to-[#007BA7] bg-clip-text text-transparent">
						measurable improvement.
					</span>
				</h1>
				<p className="mt-6 max-w-2xl text-xl text-neutral-500">
					Swimmers improve when effort, structure, and communication are aligned. LaneLines
					brings the clarity your team is missing.
				</p>
				<div className="mt-10 flex w-full flex-col justify-center gap-4 sm:flex-row">
					<a className="rounded-full bg-[#0A4C75] px-6 py-3 text-white hover:bg-[#0A4C75]/90" href="/contact">
						Build your team
					</a>
					<a
						className="rounded-full border border-neutral-200 bg-neutral-50 px-6 py-3 text-neutral-700 hover:bg-neutral-100"
						href="/about"
					>
						See how it works
					</a>
				</div>
			</section>

			<section className="mx-auto mt-24 w-full max-w-7xl px-6" id="problem">
				<div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 md:p-12">
					<div className="grid items-center gap-12 md:grid-cols-2">
						<div>
							<h2 className="text-3xl font-medium tracking-tight text-neutral-900">The Real Problem</h2>
							<p className="mt-4 text-lg text-neutral-600">
								Most teams have good coaching, committed parents, and hardworking swimmers.
								What they lack is <strong className="text-neutral-900">shared clarity</strong>.
							</p>
							<ul className="mt-6 space-y-3 text-neutral-600">
								<li>✕ Attendance lives in one place, times in another.</li>
								<li>✕ Announcements get buried in endless email threads.</li>
								<li>✕ Parents don&apos;t see how effort connects to outcomes.</li>
							</ul>
							<p className="mt-8 border-t border-neutral-200 pt-6 text-lg text-neutral-900">
								The result? Hard work without shared understanding.
							</p>
						</div>
						<div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-white">
							<div className="absolute left-10 top-12 rounded-xl border border-neutral-200 bg-white/90 px-3 py-2 text-sm text-neutral-500">
								Attendance.xlsx
							</div>
							<div className="absolute bottom-20 right-12 rounded-xl border border-neutral-200 bg-white/90 px-3 py-2 text-sm text-neutral-500">
								Group Text
							</div>
							<div className="absolute right-20 top-36 rounded-xl border border-neutral-200 bg-white/90 px-3 py-2 text-sm text-neutral-500">
								Times Database
							</div>
							<p className="text-4xl text-neutral-300">⛓</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto mt-24 w-full max-w-7xl px-6" id="features">
				<div className="mb-12 text-center">
					<h2 className="text-4xl font-medium tracking-tight text-neutral-900">What LaneLines Does</h2>
					<p className="mx-auto mt-3 max-w-2xl text-lg text-neutral-500">
						LaneLines aligns the team by connecting what already matters.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div className={card}>
						<h3 className="text-xl font-medium text-neutral-900">Makes Improvement Visible</h3>
						<p className="mt-3 text-neutral-600">
							Test sets, personal bests, and season trends reveal clear trajectory.
						</p>
					</div>
					<div className={card}>
						<h3 className="text-xl font-medium text-neutral-900">Connects Attendance to Outcomes</h3>
						<p className="mt-3 text-neutral-600">
							See consistency, gaps, and patterns over time—not just checkboxes.
						</p>
					</div>
					<div className={card}>
						<h3 className="text-xl font-medium text-neutral-900">Replaces Noise With Signal</h3>
						<p className="mt-3 text-neutral-600">
							Structured announcements and deadlines replace scattered threads.
						</p>
					</div>
				</div>
			</section>

			<section className="mx-auto mt-24 w-full max-w-5xl px-6" id="alignment">
				<div className="text-center">
					<p className="text-sm uppercase tracking-[0.2em] text-[#0A4C75]">The Blueprint</p>
					<h2 className="mt-2 text-3xl font-medium tracking-tight text-neutral-900">The Alignment Layer</h2>
					<p className="mx-auto mt-3 max-w-lg text-neutral-600">
						Not a billing takeover tool. It connects the dots that build stronger teams.
					</p>
				</div>
				<div className="mt-8 rounded-3xl border border-neutral-200 bg-gradient-to-b from-neutral-50 p-8">
					<div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
						{["Attendance", "Effort", "Improvement", "Motivation"].map((item) => (
							<div
								key={item}
								className={`w-full rounded-xl border px-6 py-4 md:w-40 ${
									item === "Improvement"
										? "border-[#007BA7]/40 bg-[#007BA7]/10 text-[#0A4C75]"
										: "border-neutral-200 bg-white text-neutral-700"
								}`}
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto mt-24 grid w-full max-w-4xl gap-8 px-6 md:grid-cols-2">
				<div className="rounded-2xl border border-neutral-200 bg-white p-8">
					<h3 className="text-sm uppercase tracking-[0.2em] text-neutral-500">Who it&apos;s not for</h3>
					<p className="mt-4 text-neutral-600">
						If you only need registration or billing, this isn&apos;t your tool.
					</p>
				</div>
				<div className="rounded-2xl border border-[#007BA7]/20 bg-[#007BA7]/5 p-8">
					<h3 className="text-sm uppercase tracking-[0.2em] text-neutral-900">Who LaneLines is for</h3>
					<ul className="mt-4 space-y-2 text-neutral-700">
						<li>• Parents who want process clarity</li>
						<li>• Swimmers who want to see progress</li>
						<li>• Coaches who want to spend time coaching</li>
					</ul>
				</div>
			</section>

			<section className="mx-auto mt-24 w-full max-w-3xl px-6 text-center">
				<BrandLogo className="justify-center" />
				<h2 className="mt-8 text-4xl font-medium tracking-tight text-neutral-900 md:text-5xl">
					Stronger swimmers. Stronger culture. Less noise. More focus.
				</h2>
				<p className="mx-auto mt-6 max-w-md text-lg text-neutral-500">
					Coaches coach. Parents understand. Swimmers improve.
				</p>
				<a
					className="mt-8 inline-flex rounded-full bg-[#0A4C75] px-8 py-3.5 text-white shadow-lg shadow-[#007BA7]/20 hover:bg-[#0A4C75]/90"
					href="/contact"
				>
					Start Building Alignment
				</a>
			</section>
		</MarketingLayout>
	);
}
