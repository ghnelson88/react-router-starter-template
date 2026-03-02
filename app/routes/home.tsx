import { Link } from "react-router";
import type { Route } from "./+types/home";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "LaneLines | The System That Connects Effort to Improvement" },
		{
			name: "description",
			content:
				"LaneLines aligns effort, structure, and communication so swimmers improve with shared clarity across coaches, parents, and swimmers.",
		},
	];
}

export default function Home() {
	return (
		<MarketingLayout>
			<section className="border-b border-[#0F1E2E]/8 bg-white">
				<div className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">LaneLines</p>
					<h1 className="mt-3 text-4xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-6xl md:leading-[1.08]">
						The System That Connects Effort to Improvement
					</h1>
					<p className="mt-6 text-lg leading-relaxed text-[#2F3A45]/75">
						Swimmers improve when effort, structure, and communication are aligned.
					</p>
					<div className="mt-8 space-y-2 text-base text-[#2F3A45]/75">
						<p>Most teams have good coaching.</p>
						<p>Most teams have committed parents.</p>
						<p>Most teams have hardworking swimmers.</p>
					</div>
					<p className="mt-8 text-xl font-semibold text-[#0F1E2E]">What they lack is shared clarity.</p>
					<p className="mt-2 text-xl font-semibold text-[#0F1E2E]">LaneLines brings that clarity.</p>
				</div>
			</section>

			<section className="mx-auto w-full max-w-4xl px-6 py-16 md:py-20">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">The Real Problem</p>
				<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">
					Improvement isn&apos;t just about sets and yards.
				</h2>
				<p className="mt-6 text-base text-[#2F3A45]/75">It&apos;s about:</p>
				<ul className="mt-4 space-y-2 text-base text-[#2F3A45]/80">
					{[
						"Showing up consistently",
						"Understanding expectations",
						"Seeing progress",
						"Communicating early",
						"Reinforcing standards",
					].map((item) => (
						<li key={item}>• {item}</li>
					))}
				</ul>

				<p className="mt-8 text-base text-[#2F3A45]/75">But most teams operate in fragments:</p>
				<ul className="mt-4 space-y-2 text-base text-[#2F3A45]/80">
					{[
						"Attendance lives in one place.",
						"Times live in another.",
						"Announcements get buried in email.",
						"Volunteer roles fill at the last minute.",
						"Parents don&apos;t see how effort connects to outcomes.",
					].map((item) => (
						<li key={item}>• {item}</li>
					))}
				</ul>

				<p className="mt-8 text-base text-[#2F3A45]/75">The result?</p>
				<p className="mt-2 text-xl font-semibold text-[#0F1E2E]">Hard work without shared understanding.</p>
			</section>

			<section className="border-y border-[#0F1E2E]/8 bg-white">
				<div className="mx-auto w-full max-w-4xl space-y-14 px-6 py-16 md:py-20">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">What LaneLines Does</p>
						<h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#0F1E2E] md:text-4xl">LaneLines aligns the team.</h2>
						<p className="mt-4 text-base text-[#2F3A45]/75">Not by adding more tools. By connecting what already matters.</p>
					</div>

					{[
						{
							title: "1️⃣ Makes Improvement Visible",
							copy: [
								"Swimmers don&apos;t improve in secret.",
								"Test sets show progress immediately.",
								"Personal bests show momentum.",
								"Time standards show trajectory.",
								"Season trends show patterns.",
								"Coaches see progress. Swimmers see growth. Parents see effort turning into results.",
								"Improvement becomes visible, not anecdotal.",
							],
						},
						{
							title: "2️⃣ Connects Attendance to Outcomes",
							copy: [
								"Attendance isn&apos;t just a checkbox. It&apos;s the foundation of improvement.",
								"LaneLines lets coaches and parents see practice consistency, gaps in attendance, and patterns over time.",
								"When a swimmer gains time, it&apos;s visible. When a swimmer drops time, it&apos;s visible.",
								"No guessing. No “maybe.” No paper sheets in a binder. Just clarity.",
							],
						},
						{
							title: "3️⃣ Replaces Noise With Signal",
							copy: [
								"Most teams aren&apos;t lacking information. They&apos;re drowning in it.",
								"LaneLines replaces scattered emails, group texts, missed deadlines, and repeated reminders.",
								"With structured communication: clear announcements, defined deadlines, expiring posts, and targeted messages.",
								"Parents know what matters. Coaches don&apos;t repeat themselves. The feed stays clean.",
							],
						},
						{
							title: "4️⃣ Strengthens the Coach–Parent–Swimmer Triangle",
							copy: [
								"Strong teams are aligned teams.",
								"LaneLines enables direct coach-to-parent communication, shared visibility into progress, shared expectations around attendance, and shared ownership of meet support.",
								"If you care about building a real team — not just running practices — alignment matters.",
								"LaneLines reinforces that alignment.",
							],
						},
						{
							title: "5️⃣ Encodes Culture Into Structure",
							copy: [
								"Culture isn&apos;t slogans. It&apos;s consistency. It&apos;s clarity. It&apos;s reinforcement.",
								"LaneLines embeds clear standards, clear responsibilities, clear communication, and clear accountability.",
								"So your culture isn&apos;t dependent on memory. It&apos;s supported by structure.",
							],
						},
					].map((section) => (
						<div key={section.title}>
							<h3 className="text-2xl font-semibold tracking-tight text-[#0F1E2E]">{section.title}</h3>
							<div className="mt-4 space-y-3 text-base leading-relaxed text-[#2F3A45]/75">
								{section.copy.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="mx-auto w-full max-w-4xl space-y-12 px-6 py-16 md:py-20">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">Who LaneLines Is For</p>
					<p className="mt-4 text-base text-[#2F3A45]/75">LaneLines is for teams that truly care.</p>
					<p className="mt-4 text-base text-[#2F3A45]/75">Teams that want:</p>
					<ul className="mt-4 space-y-2 text-base text-[#2F3A45]/80">
						{[
							"Parents to understand the process.",
							"Swimmers to see progress.",
							"Coaches to spend time coaching.",
							"Effort to translate into measurable improvement.",
						].map((item) => (
							<li key={item}>• {item}</li>
						))}
					</ul>
					<p className="mt-6 text-base text-[#2F3A45]/75">If you&apos;re just trying to “manage registration,” you don&apos;t need this.</p>
					<p className="mt-2 text-base font-medium text-[#0F1E2E]">If you&apos;re trying to build a team that improves — together — you do.</p>
				</div>

				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2E6F95]">What Makes It Different</p>
					<p className="mt-4 text-base text-[#2F3A45]/75">LaneLines is not:</p>
					<ul className="mt-4 space-y-2 text-base text-[#2F3A45]/80">
						{[
							"A registration replacement.",
							"A billing takeover tool.",
							"A feature-packed admin suite.",
						].map((item) => (
							<li key={item}>• {item}</li>
						))}
					</ul>
					<p className="mt-6 text-base font-medium text-[#0F1E2E]">It&apos;s the alignment layer.</p>
					<p className="mt-4 text-base text-[#2F3A45]/75">It connects:</p>
					<div className="mt-4 space-y-2 text-base font-medium text-[#0F1E2E]">
						<p>Attendance → Effort</p>
						<p>Effort → Improvement</p>
						<p>Improvement → Motivation</p>
						<p>Communication → Culture</p>
					</div>
					<p className="mt-6 text-base text-[#2F3A45]/75">When those dots are connected, teams get stronger.</p>
				</div>
			</section>

			<section className="border-t border-[#0F1E2E]/8 bg-[#0F1E2E]">
				<div className="mx-auto w-full max-w-4xl px-6 py-16 text-center md:py-20">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">The Outcome</p>
					<div className="mt-6 space-y-1 text-2xl font-semibold text-white md:text-3xl">
						<p>Stronger swimmers.</p>
						<p>Stronger culture.</p>
						<p>Less noise.</p>
						<p>More focus.</p>
					</div>
					<p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/75">
						Coaches coach. Parents understand. Swimmers improve.
						<br />
						LaneLines gives you the blueprint for a team that gets better on purpose.
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
						<Link
							className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0F1E2E] hover:bg-white/90"
							to="/founding-pilot"
						>
							See How LaneLines Works
						</Link>
						<Link
							className="inline-block rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
							to="/contact"
						>
							Talk With Our Team
						</Link>
					</div>
				</div>
			</section>
		</MarketingLayout>
	);
}
