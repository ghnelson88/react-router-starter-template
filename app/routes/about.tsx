import type { Route } from "./+types/about";
import { Link } from "react-router";
import { MarketingLayout } from "../components/marketing-layout";
import {
	Users,
	Blocks,
	MessageCircle,
	TrendingDown,
	ArrowRight,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "About Us | LaneLines" },
		{
			name: "description",
			content:
				"LaneLines exists to bring structure and clarity to the operational side of swim teams so coaches can focus on developing swimmers.",
		},
	];
}

export default function About() {
	return (
		<MarketingLayout>
			{/* Hero Section */}
			<section className="max-w-4xl mx-auto px-6 pt-16 pb-24 text-center flex flex-col items-center">
				<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 dark:border-white/[0.08] dark:bg-white/[0.02] text-sm mb-8 text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
					<Users
						className="w-4 h-4 text-[#0A4C75] dark:text-[#007BA7]"
						strokeWidth={1.5}
					/>
					<span>Our Purpose</span>
				</div>

				<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 leading-tight text-neutral-900 dark:text-white transition-colors duration-300">
					Built to Support the People Who
					<br className="hidden md:block" />
					<span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0A4C75] to-[#007BA7] dark:from-white dark:to-neutral-500">
						{" "}Make Swim Teams Work
					</span>
				</h1>

				<div className="text-lg md:text-xl max-w-2xl text-neutral-500 dark:text-neutral-400 transition-colors duration-300 space-y-6 text-left sm:text-center">
					<p>Competitive swim teams are built on great coaching.</p>
					<p>
						But behind every practice and meet is a huge amount of work that
						happens outside the water — coordinating volunteers, organizing
						meets, communicating with families, and keeping teams running
						smoothly.
					</p>
					<p className="text-neutral-700 dark:text-neutral-300">
						LaneLines exists to bring structure and clarity to the operational
						side of swim teams so coaches can focus on what matters most:{" "}
						<span className="text-neutral-900 dark:text-white font-medium">
							developing swimmers.
						</span>
					</p>
				</div>
			</section>

			{/* The Hidden Work */}
			<section className="w-full max-w-3xl mx-auto px-6 mb-24">
				<div className="pt-16 border-t border-neutral-200 dark:border-white/[0.08]">
					<h2 className="text-3xl font-medium tracking-tight mb-8 text-neutral-900 dark:text-white">
						The Hidden Work of Running a Swim Team
					</h2>
					<div className="space-y-6 text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
						<p>Running a swim team requires far more than great coaching.</p>
						<p>
							Every week teams are coordinating practices, organizing meet
							entries, recruiting volunteers, answering parent questions, sharing
							updates, and managing countless logistical details.
						</p>
						<p>
							Most teams handle these responsibilities through a patchwork of
							tools — email threads, spreadsheets, text messages, and
							institutional knowledge passed down from season to season.
						</p>
						<p>None of these tools are wrong individually.</p>
						<p>
							But together they create a system where critical information is
							scattered and responsibility often falls on the same dedicated
							people.
						</p>
						<p className="text-neutral-900 dark:text-neutral-200 font-medium pt-2">
							Over time, that operational noise adds unnecessary pressure to the
							coaches, parents, and volunteers working hardest to support the
							team.
						</p>
					</div>
				</div>
			</section>

			{/* A Better System */}
			<section className="w-full max-w-5xl mx-auto px-6 mb-32">
				<div className="border border-neutral-200 bg-neutral-50 dark:border-white/[0.08] dark:bg-white/[0.02] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden transition-colors duration-300">
					<div className="absolute top-0 right-0 w-full max-w-lg h-64 bg-[#007BA7]/5 dark:bg-[#007BA7]/10 blur-[100px] rounded-full pointer-events-none transition-colors duration-300" />

					<div className="relative z-10 max-w-2xl">
						<div className="h-12 w-12 rounded-xl bg-white border border-neutral-200 text-[#0A4C75] dark:bg-white/[0.05] dark:border-white/[0.08] dark:text-[#007BA7] flex items-center justify-center mb-8 shadow-sm dark:shadow-none">
							<Blocks className="w-6 h-6" strokeWidth={1.5} />
						</div>
						<h2 className="text-3xl font-medium tracking-tight mb-6 text-neutral-900 dark:text-white">
							A Better System for Team Operations
						</h2>
						<div className="space-y-6 text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
							<p>
								LaneLines was created to bring structure to the operational
								layer of swim teams.
							</p>
							<p>
								Not to change how coaches coach. And not to replace the
								traditions and community that make swim teams special.
							</p>
							<p>
								Instead, LaneLines helps teams organize the work that surrounds
								coaching — communication, event coordination, volunteer roles,
								and team logistics — so everyone understands what needs to
								happen and who is responsible.
							</p>
							<div className="border-l-2 border-[#007BA7]/30 dark:border-white/[0.1] pl-6 py-2 mt-8">
								<p className="text-neutral-900 dark:text-white font-medium">
									When operational systems are clear, teams run more smoothly.
									And coaches can spend more time doing what they love most:
									coaching swimmers.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Founders Story */}
			<section className="w-full max-w-3xl mx-auto px-6 mb-32">
				<h2 className="text-3xl font-medium tracking-tight mb-8 text-neutral-900 dark:text-white">
					How LaneLines Started
				</h2>
				<div className="space-y-6 text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-16">
					<p>
						LaneLines grew out of conversations between two people experiencing
						swim teams from different perspectives.
					</p>
					<p>
						Jean Nelson grew up in the sport and later returned to the pool deck
						as a coach. Through coaching, she experienced firsthand the daily
						reality of running a swim team — the excitement of developing
						swimmers alongside the constant operational demands that surround
						practices and meets.
					</p>
					<p>
						At the same time, Geoff Nelson was entering the swim world as a
						parent. After decades working in manufacturing and operations —
						environments where clear systems and processes determine success — he
						began noticing something different about youth sports organizations.
					</p>
					<p>
						Behind every practice and meet was an enormous amount of invisible
						work holding the team together.
					</p>
					<p>
						Most of that work lived in email threads, spreadsheets, and the
						experience of a few dedicated people who knew how everything fit
						together.
					</p>

					<div className="grid sm:grid-cols-2 gap-6 py-6 my-8 border-y border-neutral-200 dark:border-white/[0.08]">
						<div className="flex items-start gap-3">
							<MessageCircle
								className="w-5 h-5 text-neutral-400 dark:text-neutral-500 mt-1 shrink-0"
								strokeWidth={1.5}
							/>
							<p className="text-base text-neutral-700 dark:text-neutral-300">
								Jean was experiencing the pressure from the coaching side.
							</p>
						</div>
						<div className="flex items-start gap-3">
							<TrendingDown
								className="w-5 h-5 text-neutral-400 dark:text-neutral-500 mt-1 shrink-0"
								strokeWidth={1.5}
							/>
							<p className="text-base text-neutral-700 dark:text-neutral-300">
								Geoff was seeing the operational gaps from a systems
								perspective.
							</p>
						</div>
					</div>

					<p>
						As parents of four multi-sport athletes and volunteers across youth
						sports programs, they had seen similar patterns in other
						organizations — passionate communities supported by people working
						incredibly hard, often without clear operational systems.
					</p>
					<p>Together they began asking a simple question:</p>
					<p className="text-xl font-medium text-[#0A4C75] dark:text-[#007BA7] italic">
						What would swim teams look like if the systems supporting them were
						as strong as the coaching itself?
					</p>
					<p>LaneLines grew out of that question.</p>
				</div>

				{/* Founder Profiles */}
				<div className="grid md:grid-cols-2 gap-8 mt-16">
					<div className="p-8 rounded-2xl border border-neutral-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.01] shadow-sm dark:shadow-none transition-colors duration-300">
						<div className="h-12 w-12 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-500 dark:bg-white/[0.05] dark:border-white/[0.1] flex items-center justify-center mb-6 dark:text-neutral-300">
							<span className="text-lg font-medium">JN</span>
						</div>
						<h3 className="text-xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-white">
							Jean Nelson
						</h3>
						<div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
							<p>
								Jean Nelson grew up in Petaluma and has been part of the
								swimming community since she joined her first team at eight
								years old.
							</p>
							<p>
								After years in the sport as an athlete, she later returned to
								the pool deck as a coach, working closely with swimmers and
								families and experiencing firsthand the daily realities of
								running a competitive swim program.
							</p>
							<p>
								Through coaching, Jean saw how much work happens outside the
								water to keep a team functioning — coordinating volunteers,
								organizing meets, communicating with families, and managing the
								many details surrounding practices and competitions.
							</p>
							<p>
								Jean and Geoff have four sons, all of whom are swimmers, giving
								her the perspective of both a coach and a parent deeply invested
								in the sport.
							</p>
							<p>
								Her experience inside swim teams helped shape LaneLines into a
								platform designed around the real needs of coaches and families.
							</p>
						</div>
					</div>

					<div className="p-8 rounded-2xl border border-neutral-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.01] shadow-sm dark:shadow-none transition-colors duration-300">
						<div className="h-12 w-12 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-500 dark:bg-white/[0.05] dark:border-white/[0.1] flex items-center justify-center mb-6 dark:text-neutral-300">
							<span className="text-lg font-medium">GN</span>
						</div>
						<h3 className="text-xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-white">
							Geoff Nelson
						</h3>
						<div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
							<p>
								Geoff Nelson came to swimming through his children and quickly
								became deeply involved in the sport. To better understand how
								swim meets operate, he became a certified swim official and
								immersed himself in meet and team operations.
							</p>
							<p>
								Before entering the swim world, Geoff spent decades working in
								manufacturing and operations, where success depends on
								well-designed systems, clear processes, and strong operational
								structure.
							</p>
							<p>
								As he became more involved in the swim community, he began
								applying that systems perspective to the challenges teams face
								every day.
							</p>
							<p>
								Working alongside Jean, Geoff focused on designing operational
								tools that support the people already doing the hard work of
								running teams.
							</p>
							<p>LaneLines grew out of those conversations.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="w-full max-w-5xl mx-auto px-6 mb-32">
				<div className="grid md:grid-cols-2 gap-6">
					<div className="p-10 rounded-2xl border border-[#007BA7]/20 bg-[#007BA7]/5 dark:border-white/[0.08] dark:bg-white/[0.02] transition-colors duration-300 flex flex-col justify-center text-center items-center">
						<span className="text-sm text-[#0A4C75] dark:text-neutral-500 uppercase tracking-widest mb-4">
							Mission
						</span>
						<h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white leading-tight">
							Free coaches to do what matters most:{" "}
							<br className="hidden sm:block" />
							<span className="text-[#0A4C75] dark:text-[#007BA7]">
								coach swimmers.
							</span>
						</h3>
					</div>
					<div className="p-10 rounded-2xl border border-[#007BA7]/20 bg-[#007BA7]/5 dark:border-white/[0.08] dark:bg-white/[0.02] transition-colors duration-300 flex flex-col justify-center text-center items-center">
						<span className="text-sm text-[#0A4C75] dark:text-neutral-500 uppercase tracking-widest mb-4">
							Vision
						</span>
						<h3 className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white leading-tight">
							Stronger swimmers built on{" "}
							<br className="hidden sm:block" />
							<span className="text-[#0A4C75] dark:text-[#007BA7]">
								stronger systems.
							</span>
						</h3>
					</div>
				</div>
			</section>

			{/* Closing CTA */}
			<section className="w-full max-w-3xl mx-auto px-6 pb-16 text-center">
				<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-tight text-neutral-900 dark:text-white transition-colors duration-300">
					Supporting the Future of Swim Teams
				</h2>
				<div className="text-lg mb-10 text-neutral-500 dark:text-neutral-400 transition-colors duration-300 space-y-4 max-w-2xl mx-auto">
					<p>
						Swim teams succeed because of dedicated coaches, committed families,
						and passionate volunteers.
					</p>
					<p>
						LaneLines exists to support those people by making the operational
						side of running a team clearer, more organized, and more sustainable.
					</p>
					<p className="text-neutral-900 dark:text-white font-medium pt-2">
						Because when teams run smoothly, everyone benefits — especially the
						swimmers.
					</p>
				</div>
				<Link
					to="/contact"
					className="inline-flex items-center gap-2 text-base px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-[#007BA7]/20 dark:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] bg-[#0A4C75] text-white hover:bg-[#0A4C75]/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
				>
					Get Started with LaneLines
					<ArrowRight className="w-4 h-4" strokeWidth={1.5} />
				</Link>
			</section>
		</MarketingLayout>
	);
}
