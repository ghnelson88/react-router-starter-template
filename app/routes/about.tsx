import type { Route } from "./+types/about";
import { Link } from "react-router";
import { MarketingLayout } from "../components/marketing-layout";
import { Users, ArrowRight } from "lucide-react";

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

			{/* How LaneLines Started */}
			<section className="w-full max-w-3xl mx-auto px-6 mb-24">
				<div className="pt-16 border-t border-neutral-200 dark:border-white/[0.08]">
					<h2 className="text-3xl font-medium tracking-tight mb-8 text-neutral-900 dark:text-white">
						How LaneLines Started
					</h2>
					<div className="space-y-6 text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
						<p>
							LaneLines grew out of conversations between two people
							experiencing swim teams from different perspectives — one from
							the coaching side, one from an operations background.
						</p>
						<p>
							Behind every practice and meet, they saw an enormous amount of
							invisible work holding teams together — email threads,
							spreadsheets, and the experience of a few dedicated people who
							knew how everything fit together.
						</p>
						<p>Together they began asking a simple question:</p>
						<p className="text-xl font-medium text-[#0A4C75] dark:text-[#007BA7] italic">
							What would swim teams look like if the systems supporting them
							were as strong as the coaching itself?
						</p>
						<p>LaneLines grew out of that question.</p>
					</div>
				</div>
			</section>

			{/* Founder Profiles */}
			<section className="w-full max-w-3xl mx-auto px-6 mb-32">
				<div className="grid md:grid-cols-2 gap-8">
					<div className="p-8 rounded-2xl border border-neutral-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.01] shadow-sm dark:shadow-none transition-colors duration-300">
						<div className="h-12 w-12 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-500 dark:bg-white/[0.05] dark:border-white/[0.1] flex items-center justify-center mb-6 dark:text-neutral-300">
							<span className="text-lg font-medium">JN</span>
						</div>
						<h3 className="text-xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-white">
							Jean Nelson
						</h3>
						<div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
							<p>
								Jean has been part of the swimming community since joining her
								first team at eight years old. She
								later returned to the pool deck as a coach, experiencing
								firsthand the daily realities of running a competitive swim
								program.
							</p>
							<p>
								Through coaching, Jean saw how much work happens outside the
								water to keep a team functioning — and how that pressure falls
								on the people who care most.
							</p>
							<p>
								As a coach and a parent of four swimmers, her experience shaped
								LaneLines into a platform designed around the real needs of
								coaches and families.
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
								Geoff came to swimming through his children and quickly became
								deeply involved — becoming a certified swim official and
								immersing himself in meet and team operations.
							</p>
							<p>
								After decades in manufacturing and operations, where success
								depends on well-designed systems and clear processes, he began
								applying that perspective to the challenges swim teams face
								every day.
							</p>
							<p>
								Working alongside Jean, Geoff focused on designing operational
								tools that support the people already doing the hard work of
								running teams.
							</p>
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
				<p className="text-lg mb-10 text-neutral-500 dark:text-neutral-400 transition-colors duration-300 max-w-2xl mx-auto">
					Swim teams succeed because of dedicated coaches, committed families,
					and passionate volunteers. LaneLines exists to support those people —{" "}
					<span className="text-neutral-900 dark:text-white font-medium">
						because when teams run smoothly, everyone benefits, especially the
						swimmers.
					</span>
				</p>
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
