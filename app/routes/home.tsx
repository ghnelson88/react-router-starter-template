import { Link } from "react-router";
import type { Route } from "./+types/home";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "LaneLines | Operational Clarity for Competitive Swim Teams" },
		{
			name: "description",
			content:
				"LaneLines is the system of record for swim team operations, built for year-round USA Swimming clubs.",
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
							Team operations infrastructure
						</p>
						<h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-6xl md:leading-[1.08]">
							Run Your Program
							<br />
							Without the Chaos.
						</h1>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#2F3A45]/70">
							LaneLines is the system of record for swim team operations — built for year-round
							USA Swimming clubs who need structure across meet prep, attendance, volunteer
							coordination, and practice alignment.
						</p>
						<p className="mt-3 text-sm text-[#2F3A45]/50">
							Works alongside your existing registration platform.
						</p>
						<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
							<Link
								className="rounded-lg bg-[#0F1E2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0F1E2E]/90"
								to="/founding-pilot"
							>
								Apply for Founding Pilot Access
							</Link>
							<Link
								className="rounded-lg border border-[#0F1E2E]/12 bg-white px-5 py-3 text-sm font-semibold text-[#0F1E2E] hover:border-[#0F1E2E]/25 hover:bg-[#F5F7F9]"
								to="/pricing"
							>
								View Pricing
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
							By Thursday before a meet, everything&apos;s unraveling.
						</h2>
						<div className="mt-8 space-y-4">
							{[
								"RSVPs are incomplete",
								"Volunteer roles aren't filled",
								"Coaches are chasing confirmations",
								"Parents are digging through email",
								"Lineups are being rebuilt manually",
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
								Swim teams don&apos;t struggle with effort.
							</p>
							<p className="mt-1 text-base font-semibold text-[#0F1E2E]">
								They struggle with coordination.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Product Value — Three Columns */}
			<section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
						What LaneLines owns
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
						One hub for team operations.
					</h2>
					<p className="mt-4 text-base text-[#2F3A45]/60">
						LaneLines brings structure to the operational work that falls between registration
						and the pool deck. Decision support — not automation. Coaches stay in control.
					</p>
				</div>

				<div className="mt-14 grid gap-6 md:grid-cols-3">
					{[
						{
							title: "Meet Readiness",
							description:
								"See entries, RSVPs, and attendance in one view. Know volunteer coverage at a glance. Get clear signals when something's slipping.",
							items: [
								"Entries and RSVPs unified",
								"Volunteer coverage tracking",
								"Readiness signals before meet day",
							],
						},
						{
							title: "Coaching Clarity",
							description:
								"Track attendance patterns across practice groups. Align training plans with families. Keep best times organized for lineup and relay decisions.",
							items: [
								"Attendance patterns by practice group",
								"Training plans aligned with families",
								"Best times for lineup and relay decisions",
							],
						},
						{
							title: "Family Alignment",
							description:
								"One source for schedules and updates. Transparent volunteer expectations. No hunting through text threads.",
							items: [
								"Single source for schedules",
								"Transparent volunteer expectations",
								"No more text thread hunting",
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

			{/* Works Alongside */}
			<section className="border-y border-[#0F1E2E]/6 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="grid gap-12 md:grid-cols-2 md:items-center">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
								Integration
							</p>
							<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
								Works alongside what you already use.
							</h2>
							<p className="mt-4 text-base leading-relaxed text-[#2F3A45]/60">
								LaneLines works alongside platforms like SportsEngine and TeamUnify. You keep
								what works. We bring operational structure.
							</p>
						</div>
						<div className="space-y-4">
							{[
								{
									label: "Registration",
									desc: "Stays where it is. We don't touch it.",
								},
								{
									label: "Billing",
									desc: "Your billing system remains unchanged.",
								},
								{
									label: "Governing body compliance",
									desc: "USA Swimming compliance is not our scope.",
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
						</div>
					</div>
				</div>
			</section>

			{/* Built for Competitive Clubs */}
			<section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
				<div className="mx-auto max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
						Who it&apos;s for
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
						Built for competitive clubs.
					</h2>
					<p className="mt-4 text-base text-[#2F3A45]/60">
						If you&apos;re running a serious competitive program, this is for you.
					</p>
				</div>
				<div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
					{[
						"60–150 swimmer year-round programs",
						"Multi-group practice structures",
						"Volunteer-dependent meets",
						"Coaching staffs who need operational clarity",
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

			{/* Pricing Preview */}
			<section className="border-y border-[#0F1E2E]/6 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
					<div className="mx-auto max-w-2xl text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">
							Pricing
						</p>
						<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
							Simple, flat pricing.
						</h2>
						<p className="mt-4 text-base text-[#2F3A45]/60">
							One license covers your entire club. No per-swimmer fees. No feature tiers.
						</p>
					</div>
					<div className="mx-auto mt-10 max-w-md rounded-xl border border-[#0F1E2E]/8 bg-[#F5F7F9] p-8 text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F3A45]/40">
							Standard Club License
						</p>
						<p className="mt-3 text-5xl font-bold tracking-tight text-[#0F1E2E]">
							$1,800
						</p>
						<p className="mt-1 text-sm text-[#2F3A45]/50">per club, per year</p>
						<div className="my-6 border-t border-[#0F1E2E]/8" />
						<p className="text-sm font-medium text-[#2E6F95]">
							Founding pilot clubs: 100% discounted through end of season.
						</p>
						<div className="mt-6">
							<Link
								className="inline-block rounded-lg bg-[#0F1E2E] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0F1E2E]/90"
								to="/pricing"
							>
								View Full Pricing
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
				<div className="mx-auto max-w-2xl rounded-2xl border border-[#0F1E2E]/8 bg-[#0F1E2E] p-10 text-center md:p-14">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
						Founding Pilot
					</p>
					<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-white md:text-4xl">
						Join the founding cohort.
					</h2>
					<p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60">
						Full platform access. Guided onboarding. Direct roadmap influence. Limited to a
						small number of competitive clubs.
					</p>
					<div className="mt-8">
						<Link
							className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F1E2E] hover:bg-white/90"
							to="/founding-pilot"
						>
							Apply for Founding Pilot Access
						</Link>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
