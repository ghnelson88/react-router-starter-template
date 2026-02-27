import { Link } from "react-router";
import type { Route } from "./+types/home";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "LaneLines | Operational Clarity for Competitive Swim Teams" },
		{
			name: "description",
			content:
				"LaneLines is the team operations platform for year-round USA Swimming clubs, bringing structure to communication, attendance, volunteer coordination, meet operations, and team billing.",
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

function DashboardMockup() {
	return (
		<div className="rounded-xl border border-[#0F1E2E]/8 bg-white shadow-lg shadow-[#0F1E2E]/5">
			{/* Title bar */}
			<div className="flex items-center gap-2 border-b border-[#0F1E2E]/6 px-5 py-3">
				<div className="flex gap-1.5">
					<span className="h-2.5 w-2.5 rounded-full bg-[#0F1E2E]/10" />
					<span className="h-2.5 w-2.5 rounded-full bg-[#0F1E2E]/10" />
					<span className="h-2.5 w-2.5 rounded-full bg-[#0F1E2E]/10" />
				</div>
				<span className="ml-2 text-xs font-medium text-[#2F3A45]/40">
					Meet Readiness — Spring Invitational
				</span>
			</div>

			{/* Dashboard content */}
			<div className="p-5">
				{/* Stat row */}
				<div className="grid grid-cols-3 gap-3">
					<div className="rounded-lg border border-[#0F1E2E]/6 p-3">
						<p className="text-[10px] font-medium uppercase tracking-wider text-[#2F3A45]/40">
							Entries
						</p>
						<p className="mt-1 text-2xl font-semibold tracking-tight text-[#0F1E2E]">
							87<span className="text-sm font-normal text-[#2F3A45]/40">/94</span>
						</p>
						<div className="mt-2 h-1.5 rounded-full bg-[#0F1E2E]/6">
							<div className="h-1.5 w-[93%] rounded-full bg-[#2E6F95]" />
						</div>
					</div>
					<div className="rounded-lg border border-[#0F1E2E]/6 p-3">
						<p className="text-[10px] font-medium uppercase tracking-wider text-[#2F3A45]/40">
							Volunteers
						</p>
						<p className="mt-1 text-2xl font-semibold tracking-tight text-[#0F1E2E]">
							12<span className="text-sm font-normal text-[#2F3A45]/40">/18</span>
						</p>
						<div className="mt-2 h-1.5 rounded-full bg-[#0F1E2E]/6">
							<div className="h-1.5 w-[67%] rounded-full bg-amber-500" />
						</div>
					</div>
					<div className="rounded-lg border border-[#0F1E2E]/6 p-3">
						<p className="text-[10px] font-medium uppercase tracking-wider text-[#2F3A45]/40">
							RSVPs
						</p>
						<p className="mt-1 text-2xl font-semibold tracking-tight text-[#0F1E2E]">
							71<span className="text-sm font-normal text-[#2F3A45]/40">/94</span>
						</p>
						<div className="mt-2 h-1.5 rounded-full bg-[#0F1E2E]/6">
							<div className="h-1.5 w-[76%] rounded-full bg-[#2E6F95]" />
						</div>
					</div>
				</div>

				{/* Table preview */}
				<div className="mt-4 rounded-lg border border-[#0F1E2E]/6">
					<div className="border-b border-[#0F1E2E]/6 px-3 py-2">
						<p className="text-[10px] font-semibold uppercase tracking-wider text-[#2F3A45]/40">
							Volunteer Coverage
						</p>
					</div>
					<div className="divide-y divide-[#0F1E2E]/4 text-xs">
						<div className="flex items-center justify-between px-3 py-2">
							<span className="text-[#2F3A45]/70">Head Timer</span>
							<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
								Filled
							</span>
						</div>
						<div className="flex items-center justify-between px-3 py-2">
							<span className="text-[#2F3A45]/70">Stroke & Turn</span>
							<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
								Filled
							</span>
						</div>
						<div className="flex items-center justify-between px-3 py-2">
							<span className="text-[#2F3A45]/70">Stroke & Turn</span>
							<span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">
								Needs 1
							</span>
						</div>
						<div className="flex items-center justify-between px-3 py-2">
							<span className="text-[#2F3A45]/70">Concessions Lead</span>
							<span className="rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-medium text-rose-700">
								Open
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<MarketingLayout>
			{/* Hero */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-b from-white to-[#F5F7F9]" />
				<div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-16 md:pb-24 md:pt-24">
					<div className="mx-auto max-w-3xl text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
							Streamlined Team Operations
						</p>
						<h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-6xl md:leading-[1.08]">
							Streamlined Team Operations
						</h1>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#2F3A45]/70">
							LaneLines is the team operations platform for year-round USA Swimming clubs —
							organizing communication, attendance, volunteer coordination, and meet planning.
							We keep your team circle swimming.
						</p>
						<p className="mt-3 text-sm text-[#2F3A45]/50">
							Built to reduce chaos with calm, structured workflows.
						</p>
						<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
							<Link
								className="rounded-lg bg-[#0F1E2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0F1E2E]/90"
								to="/founding-pilot"
							>
								See How It Works
							</Link>
							<Link
								className="rounded-lg border border-[#0F1E2E]/12 bg-white px-5 py-3 text-sm font-semibold text-[#0F1E2E] hover:border-[#0F1E2E]/25 hover:bg-[#F5F7F9]"
								to="/pricing"
							>
								Start With Your Next Meet
							</Link>
						</div>
					</div>

					{/* Dashboard mockup */}
					<div className="mx-auto mt-16 max-w-2xl">
						<DashboardMockup />
					</div>
				</div>
			</section>

			{/* Problem */}
			<section className="border-y border-[#0F1E2E]/6 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="mx-auto max-w-2xl">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
							The problem
						</p>
						<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
							Coaches Love Coaching. They Burn Out From Chaos.
						</h2>
						<div className="mt-8 space-y-4">
							{[
								"Text chains about timers",
								"Parents asking, \"What time do we warm up?\"",
								"Volunteer spots filled at the last minute",
								"Coaches chasing confirmations for relays",
							].map((item) => (
								<div
									key={item}
									className="flex items-start gap-3 rounded-lg border border-[#0F1E2E]/6 bg-[#F5F7F9] px-4 py-3"
								>
									<svg
										className="mt-0.5 h-4 w-4 shrink-0 text-[#2F3A45]/30"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
										/>
									</svg>
									<span className="text-sm text-[#2F3A45]/80">{item}</span>
								</div>
							))}
						</div>
						<div className="mt-8 border-l-2 border-[#2E6F95] pl-4">
							<p className="text-sm text-[#2F3A45]/60">
								Most swim teams don&apos;t lack effort.
							</p>
							<p className="mt-1 text-base font-semibold text-[#0F1E2E]">
								They lack operational structure. LaneLines brings that structure.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Product Value — Three Columns */}
			<section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
						What LaneLines does
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
						Operational Clarity for Competitive Swim Teams
					</h2>
					<p className="mt-4 text-base text-[#2F3A45]/60">
						LaneLines replaces scattered tools with structured systems designed specifically for
						year-round USA Swimming clubs.
					</p>
				</div>

				<div className="mt-14 grid gap-6 md:grid-cols-3">
					{[
						{
							title: "Structured Communication",
							description:
								"Keep coaches, assistants, and parents aligned with clear updates tied to what happens next.",
							items: [
								"Lifecycle-managed announcements",
								"Action deadlines with reminders",
								"Event-linked logistics",
								"Automatic expiration for old posts",
							],
						},
						{
							title: "Attendance & RSVP Tracking",
							description:
								"See swimmer and meet availability early so coaches can make decisions before crunch time.",
							items: [
								"Swimmer-level availability",
								"Meet attendance visibility",
								"Low-RSVP alerts before it becomes a problem",
								"Clear coach dashboards",
							],
						},
						{
							title: "Volunteer Coordination",
							description:
								"Define roles, manage capacity, and track coverage so meet-week staffing stays stable.",
							items: [
								"Defined meet roles",
								"Capacity-controlled signups",
								"Real-time coverage tracking",
								"End-of-season reconciliation",
							],
						},
						{
							title: "Meet & Team Operations",
							description:
								"Coordinate groups, assignments, and schedules with shared operational visibility across staff.",
							items: [
								"Group organization",
								"Meet assignments",
								"Practice scheduling",
								"Assistant coach clarity",
								"Team billing when you're ready",
							],
						},
					].map((card) => (
						<div
							key={card.title}
							className="rounded-xl border border-[#0F1E2E]/6 bg-white p-6"
						>
							<h3 className="text-lg font-semibold text-[#0F1E2E]">{card.title}</h3>
							<p className="mt-2 text-sm leading-relaxed text-[#2F3A45]/60">
								{card.description}
							</p>
							<ul className="mt-5 space-y-3">
								{card.items.map((item) => (
									<li key={item} className="flex items-start gap-2.5 text-sm text-[#2F3A45]/70">
										<CheckIcon />
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			{/* Registrar Reassurance */}
			<section className="border-y border-[#0F1E2E]/6 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="grid gap-12 md:grid-cols-2 md:items-center">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
								Registrar reassurance
							</p>
							<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
								Works With Your Existing Registration System
							</h2>
							<p className="mt-4 text-base leading-relaxed text-[#2F3A45]/60">
								LaneLines does not replace your governing body registration platform.
							</p>
							<p className="mt-4 text-base leading-relaxed text-[#2F3A45]/60">
								Registration, eligibility, and compliance remain exactly where they are today.
							</p>
						</div>
						<div className="space-y-4">
							{[
								{
									label: "Team operations",
									desc: "LaneLines focuses here.",
								},
								{
									label: "Communication",
									desc: "Structured and event-linked.",
								},
								{
									label: "Attendance",
									desc: "Visible to coaches and assistants.",
								},
								{
									label: "Volunteer coordination",
									desc: "Coverage tracked in real time.",
								},
								{
									label: "Team billing",
									desc: "Supported when you're ready.",
								},
							].map((item) => (
								<div
									key={item.label}
									className="rounded-lg border border-[#0F1E2E]/6 bg-[#F5F7F9] p-4"
								>
									<p className="text-sm font-semibold text-[#0F1E2E]">
										{item.label}
									</p>
									<p className="mt-1 text-sm text-[#2F3A45]/60">{item.desc}</p>
								</div>
							))}
							<p className="text-sm text-[#2F3A45]/60">Adoption stays low-friction.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Onboarding */}
			<section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
						Onboarding
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
						Up and Running in Under 1 Hour
					</h2>
					<p className="mt-4 text-base text-[#2F3A45]/60">
						You don&apos;t migrate everything at once. You start where chaos hurts most.
					</p>
				</div>
				<div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
					{[
						"Step 1: Import your roster",
						"Step 2: Create your next meet or practice",
						"Step 3: Post your first structured announcement",
						"Your team can get started in under 1 hour",
					].map((item) => (
						<div
							key={item}
							className="flex items-start gap-3 rounded-lg border border-[#0F1E2E]/6 bg-white p-4"
						>
							<CheckIcon />
							<span className="text-sm text-[#2F3A45]/70">{item}</span>
						</div>
					))}
				</div>
			</section>

			{/* Vision */}
			<section className="border-y border-[#0F1E2E]/6 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="mx-auto max-w-2xl text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
							Vision
						</p>
						<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
							Stronger Swimmers Built on Stronger Systems
						</h2>
						<p className="mt-4 text-base text-[#2F3A45]/60">
							When operational chaos decreases, coaches spend more time coaching, assistants
							take ownership confidently, parents know what to do, and meet weeks run smoothly.
						</p>
					</div>
					<div className="mx-auto mt-10 max-w-md rounded-xl border border-[#0F1E2E]/8 bg-[#F5F7F9] p-8 text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F3A45]/40">
							LaneLines Mission
						</p>
						<p className="mt-3 text-xl font-bold tracking-tight text-[#0F1E2E]">
							LaneLines exists to free coaches to do what matters most.
						</p>
						<div className="my-6 border-t border-[#0F1E2E]/8" />
						<p className="text-sm font-medium text-[#2E6F95]">
							Structured operations create calmer weeks and better team outcomes.
						</p>
						<div className="mt-6">
							<Link
								className="inline-block rounded-lg bg-[#0F1E2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0F1E2E]/90"
								to="/founding-pilot"
							>
								See How It Works
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
				<div className="mx-auto max-w-2xl rounded-2xl border border-[#0F1E2E]/8 bg-[#0F1E2E] p-10 text-center md:p-14">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
						Final CTA
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
						Ready to Run Your Next Meet Without Chaos?
					</h2>
					<p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60">
						Schedule a short walkthrough and see exactly how LaneLines brings structure to
						your next meet week.
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
						<Link
							className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F1E2E] hover:bg-white/90"
							to="/founding-pilot"
						>
							Schedule a 15-Minute Walkthrough
						</Link>
						<Link
							className="inline-block rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
							to="/pricing"
						>
							Start With One Meet
						</Link>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
