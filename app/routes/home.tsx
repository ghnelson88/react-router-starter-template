import { Link } from "react-router";
import type { Route } from "./+types/home";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "LaneLines | Run Meets Without the Chaos" },
		{
			name: "description",
			content:
				"LaneLines is the system of record for swim meet operations, built for year-round USA Swimming clubs.",
		},
	];
}

export default function Home() {
	return (
		<MarketingLayout>
			{/* Hero */}
			<section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
				<h1 className="text-4xl font-semibold leading-tight text-[#0D3C61] md:text-5xl">
					Run Meets Without the Chaos.
				</h1>
				<p className="mt-6 max-w-2xl text-lg text-[#0D3C61]/85">
					LaneLines is the <strong>system of record for swim meet operations</strong> — built
					for year-round USA Swimming clubs who want clarity, not more spreadsheets.
				</p>
				<p className="mt-4 text-base text-[#0D3C61]/75">
					Works alongside your existing registration platform.
				</p>
				<div className="mt-8 flex flex-wrap gap-4">
					<Link
						className="rounded-full bg-[#1E88E5] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#1565C0]"
						to="/founding-pilot"
					>
						Apply for Founding Pilot Access
					</Link>
					<Link
						className="rounded-full border border-[#0D3C61]/25 bg-white px-6 py-3.5 text-base font-semibold text-[#0D3C61] transition hover:border-[#0D3C61]/55"
						to="/pricing"
					>
						View Pricing
					</Link>
				</div>
			</section>

			{/* The Real Problem */}
			<section className="border-y border-[#0D3C61]/15 bg-white">
				<div className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
					<h2 className="text-3xl font-semibold text-[#0D3C61]">The Real Problem</h2>
					<p className="mt-4 text-base text-[#0D3C61]/80">By Thursday before a meet:</p>
					<ul className="mt-4 space-y-2 text-base text-[#0D3C61]/80">
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							RSVPs are incomplete
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Volunteer roles aren't filled
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Coaches are chasing confirmations
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Parents are digging through email
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Lineups are being rebuilt manually
						</li>
					</ul>
					<p className="mt-6 text-base text-[#0D3C61]/80">
						Swim teams don't struggle with effort.
					</p>
					<p className="text-base font-semibold text-[#0D3C61]">
						They struggle with coordination.
					</p>
				</div>
			</section>

			{/* What LaneLines Owns */}
			<section className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
				<h2 className="text-3xl font-semibold text-[#0D3C61]">What LaneLines Owns</h2>
				<p className="mt-4 text-base text-[#0D3C61]/80">
					LaneLines centralizes meet operations in one clear hub.
				</p>

				<div className="mt-10 grid gap-8 md:grid-cols-3">
					<div>
						<h3 className="text-xl font-semibold text-[#0D3C61]">Meet Readiness</h3>
						<ul className="mt-4 space-y-2 text-base text-[#0D3C61]/80">
							<li>Entries, RSVPs, and attendance in one place</li>
							<li>Volunteer coverage at a glance</li>
							<li>Clear signals when something's slipping</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-semibold text-[#0D3C61]">Coaching Clarity</h3>
						<ul className="mt-4 space-y-2 text-base text-[#0D3C61]/80">
							<li>Attendance trends by practice group</li>
							<li>Practice plans published to families</li>
							<li>Best times ready for relay planning</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-semibold text-[#0D3C61]">Family Alignment</h3>
						<ul className="mt-4 space-y-2 text-base text-[#0D3C61]/80">
							<li>One source for schedules and updates</li>
							<li>Transparent volunteer expectations</li>
							<li>No hunting through text threads</li>
						</ul>
					</div>
				</div>

				<p className="mt-8 text-base font-semibold text-[#0D3C61]">
					Decision support — not automation. Coaches stay in control.
				</p>
			</section>

			{/* Works Alongside */}
			<section className="border-y border-[#0D3C61]/15 bg-white">
				<div className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
					<h2 className="text-3xl font-semibold text-[#0D3C61]">
						Works Alongside What You Already Use
					</h2>
					<p className="mt-4 text-base text-[#0D3C61]/80">LaneLines does not replace:</p>
					<ul className="mt-4 space-y-2 text-base text-[#0D3C61]/80">
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Registration
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Billing
						</li>
						<li className="flex items-start gap-3">
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
							Governing body compliance
						</li>
					</ul>
					<p className="mt-6 text-base text-[#0D3C61]/80">
						We work alongside platforms like SportsEngine and TeamUnify.
					</p>
					<p className="mt-2 text-base text-[#0D3C61]/80">
						You keep what works. We fix meet chaos.
					</p>
				</div>
			</section>

			{/* Built for Competitive Clubs */}
			<section className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
				<h2 className="text-3xl font-semibold text-[#0D3C61]">Built for Competitive Clubs</h2>
				<p className="mt-4 text-base text-[#0D3C61]/80">Designed for:</p>
				<ul className="mt-4 space-y-2 text-base text-[#0D3C61]/80">
					<li className="flex items-start gap-3">
						<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
						60–150 swimmer year-round programs
					</li>
					<li className="flex items-start gap-3">
						<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
						Multi-group practice structures
					</li>
					<li className="flex items-start gap-3">
						<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
						Volunteer-dependent meets
					</li>
					<li className="flex items-start gap-3">
						<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1E88E5]" />
						Coaching staffs who need operational clarity
					</li>
				</ul>
				<p className="mt-6 text-base font-semibold text-[#0D3C61]">
					If you're running serious meets, this is for you.
				</p>
			</section>

			{/* Founding Pilot CTA */}
			<section className="border-t border-[#0D3C61]/15 bg-white">
				<div className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
					<h2 className="text-3xl font-semibold text-[#0D3C61]">Founding Pilot Cohort</h2>
					<p className="mt-4 text-base text-[#0D3C61]/80">
						We are onboarding a limited number of year-round competitive clubs.
					</p>
					<div className="mt-6 space-y-2 text-base text-[#0D3C61]/80">
						<p>Full platform access.</p>
						<p>Guided onboarding.</p>
						<p>Direct roadmap influence.</p>
					</div>
					<p className="mt-6 text-base font-semibold text-[#0D3C61]">
						100% discounted through the end of your current competitive season.
					</p>
					<div className="mt-8">
						<Link
							className="rounded-full bg-[#1E88E5] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#1565C0]"
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
