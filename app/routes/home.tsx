import type { Route } from "./+types/home";
import { Link } from "react-router";
import {
	Target,
	ArrowRight,
	XCircle,
	Unlink,
	BarChart2,
	CheckCircle2,
	Calendar,
	SlidersHorizontal,
	Users,
	Layers,
	ArrowDown,
	XSquare,
	CheckSquare,
} from "lucide-react";
import { ThemeToggle } from "../components/theme-toggle";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "LaneLines | Connect Effort to Improvement" },
		{
			name: "description",
			content:
				"Swimmers improve when effort, structure, and communication are aligned. LaneLines brings the clarity your team is missing.",
		},
	];
}

export default function Home() {
	return (
		<div
			className="antialiased selection:bg-[#007BA7]/20 selection:text-[#0A4C75] dark:selection:bg-[#007BA7]/30 dark:selection:text-blue-100 bg-white dark:bg-black text-neutral-600 dark:text-neutral-400 transition-colors duration-300"
			style={{
				fontFamily:
					"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
			}}
		>
			{/* Navigation */}
			<header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200 dark:border-white/[0.08] backdrop-blur-md bg-white/80 dark:bg-black/60 transition-colors duration-300">
				<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
					<a href="#" className="flex items-center gap-2">
						<img
							src="/image.png"
							alt="LaneLines Logo"
							className="h-16 md:h-18 w-auto object-contain dark:brightness-200 dark:contrast-125 dark:grayscale-[50%]"
						/>
					</a>
					<nav className="hidden md:flex items-center gap-6 text-base">
						<a
							href="#features"
							className="transition-colors text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
						>
							Features
						</a>
						<Link
							to="/pricing"
							className="transition-colors text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
						>
							Pricing
						</Link>
						<Link
							to="/about"
							className="transition-colors text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
						>
							About
						</Link>
						<Link
							to="/contact"
							className="transition-colors text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
						>
							Contact
						</Link>
					</nav>
					<div className="flex items-center gap-4">
						<ThemeToggle />
						<a
							className="text-base transition-colors hidden sm:block text-neutral-600 hover:text-neutral-900 dark:text-white dark:hover:text-neutral-300"
							href="https://app.lanelinesapp.com"
						>
							Log in
						</a>
						<Link
							to="/contact"
							className="text-base px-5 py-2 rounded-full transition-colors bg-[#0A4C75] text-white hover:bg-[#0A4C75]/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-sm"
						>
							Get Started
						</Link>
					</div>
				</div>
			</header>

			<main className="flex flex-col pt-36 pb-24 items-center">
				{/* Hero Section */}
				<section className="max-w-4xl mx-auto px-6 text-center mb-32 flex flex-col items-center">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-neutral-50 dark:border-white/[0.08] dark:bg-white/[0.02] text-sm mb-8 text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
						<Target className="w-4 h-4 text-[#0A4C75] dark:text-[#007BA7]" strokeWidth={1.5} />
						<span>The system for teams that care</span>
					</div>

					<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-tight text-neutral-900 dark:text-white transition-colors duration-300">
						Connect effort to <br className="hidden md:block" />
						<span className="text-transparent bg-clip-text bg-gradient-to-b from-[#0A4C75] to-[#007BA7] dark:from-white dark:to-neutral-500">
							measurable improvement.
						</span>
					</h1>

					<p className="text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed text-neutral-500 dark:text-neutral-400 transition-colors duration-300">
						Swimmers improve when effort, structure, and communication are aligned. LaneLines brings the
						clarity your team is missing.
					</p>

					<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
						<Link
							to="/contact"
							className="w-full sm:w-auto text-base px-6 py-3 rounded-full transition-colors flex items-center justify-center gap-2 bg-[#0A4C75] text-white hover:bg-[#0A4C75]/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-sm"
						>
							Build your team
							<ArrowRight className="w-4 h-4" strokeWidth={1.5} />
						</Link>
						<Link
							to="/pricing"
							className="w-full sm:w-auto bg-neutral-50 border border-neutral-200 text-neutral-700 hover:bg-neutral-100 dark:bg-white/[0.05] dark:border-white/[0.08] dark:text-white dark:hover:bg-white/[0.1] text-base px-6 py-3 rounded-full transition-colors"
						>
							See how it works
						</Link>
					</div>
				</section>

				{/* The Problem */}
				<section id="problem" className="w-full max-w-7xl mx-auto px-6 mb-32">
					<div className="border border-neutral-200 bg-neutral-50 dark:border-white/[0.08] dark:bg-white/[0.02] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden transition-colors duration-300">
						{/* Decorative background gradient */}
						<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-[#007BA7]/10 dark:bg-[#007BA7]/20 blur-[100px] rounded-full pointer-events-none transition-colors duration-300" />

						<div className="relative z-10 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
							<div>
								<h2 className="text-3xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-white">
									The Real Problem
								</h2>
								<p className="text-lg mb-6 text-neutral-600 dark:text-neutral-400">
									Most teams have good coaching, committed parents, and hardworking swimmers. What they
									lack is{" "}
									<strong className="text-neutral-900 dark:text-neutral-200">shared clarity</strong>.
								</p>
								<p className="text-lg mb-6 text-neutral-600 dark:text-neutral-400">
									Improvement isn&apos;t just about sets and yards. It&apos;s about showing up
									consistently, understanding expectations, and communicating early.
								</p>
								<ul className="space-y-4">
									<li className="flex items-start gap-3 text-base text-neutral-600 dark:text-neutral-500">
										<XCircle
											className="w-5 h-5 text-rose-500/80 mt-0.5 shrink-0"
											strokeWidth={1.5}
										/>
										Attendance lives in one place, times in another.
									</li>
									<li className="flex items-start gap-3 text-base text-neutral-600 dark:text-neutral-500">
										<XCircle
											className="w-5 h-5 text-rose-500/80 mt-0.5 shrink-0"
											strokeWidth={1.5}
										/>
										Announcements get buried in endless email threads.
									</li>
									<li className="flex items-start gap-3 text-base text-neutral-600 dark:text-neutral-500">
										<XCircle
											className="w-5 h-5 text-rose-500/80 mt-0.5 shrink-0"
											strokeWidth={1.5}
										/>
										Parents don&apos;t see how effort connects to outcomes.
									</li>
								</ul>
								<div className="mt-8 pt-8 border-t border-neutral-200 dark:border-white/[0.08]">
									<p className="text-lg text-neutral-900 dark:text-white">
										The result? Hard work without shared understanding.
									</p>
								</div>
							</div>

							<div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[300px] border border-neutral-200 bg-white dark:border-white/[0.05] dark:bg-black rounded-2xl flex items-center justify-center overflow-hidden transition-colors duration-300">
								<div className="absolute top-1/4 left-1/4 p-3 border border-neutral-200 bg-white/80 dark:border-white/[0.1] dark:bg-white/[0.03] backdrop-blur-sm rounded-xl text-sm text-neutral-500 transform -rotate-6 animate-[pulse_4s_ease-in-out_infinite] shadow-sm dark:shadow-none">
									Attendance.xlsx
								</div>
								<div className="absolute bottom-1/3 right-1/4 p-3 border border-neutral-200 bg-white/80 dark:border-white/[0.1] dark:bg-white/[0.03] backdrop-blur-sm rounded-xl text-sm text-neutral-500 transform rotate-3 animate-[pulse_5s_ease-in-out_infinite] shadow-sm dark:shadow-none">
									Group Text
								</div>
								<div className="absolute top-1/2 left-1/3 p-3 border border-neutral-200 bg-white/80 dark:border-white/[0.1] dark:bg-white/[0.03] backdrop-blur-sm rounded-xl text-sm text-neutral-500 transform rotate-12 animate-[pulse_3s_ease-in-out_infinite] shadow-sm dark:shadow-none">
									Times Database
								</div>
								<div className="absolute bottom-1/4 left-[20%] p-3 border border-neutral-200 bg-white/80 dark:border-white/[0.1] dark:bg-white/[0.03] backdrop-blur-sm rounded-xl text-sm text-neutral-500 transform -rotate-12 animate-[pulse_6s_ease-in-out_infinite] shadow-sm dark:shadow-none">
									Lost Email
								</div>

								<Unlink className="w-10 h-10 text-neutral-300 dark:text-neutral-700" strokeWidth={1.5} />
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section id="features" className="w-full max-w-7xl mx-auto px-6 mb-32">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-white">
							What LaneLines Does
						</h2>
						<p className="text-lg max-w-2xl mx-auto text-neutral-500 dark:text-neutral-400">
							LaneLines aligns the team. Not by adding more tools, but by connecting what already matters.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Feature 1 */}
						<div className="border border-neutral-200 bg-white hover:bg-neutral-50 dark:border-white/[0.08] dark:bg-white/[0.02] rounded-2xl p-6 dark:hover:bg-white/[0.04] transition-colors group shadow-sm dark:shadow-none flex flex-col">
							<div className="h-12 w-12 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-500 dark:bg-white/[0.05] dark:border-white/[0.08] flex items-center justify-center mb-6 group-hover:text-[#0A4C75] group-hover:bg-[#007BA7]/10 dark:group-hover:text-[#007BA7] dark:group-hover:bg-[#007BA7]/20 transition-colors dark:text-neutral-300">
								<BarChart2 className="w-6 h-6" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-medium tracking-tight mb-3 text-neutral-900 dark:text-white">
								Makes Improvement Visible
							</h3>
							<p className="text-base mb-6 leading-relaxed text-neutral-600 dark:text-neutral-400">
								Swimmers don&apos;t improve in secret. Test sets, personal bests, and season trends show
								clear trajectory.
							</p>
							<ul className="space-y-3 mt-auto text-sm text-neutral-500">
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-[#007BA7]" strokeWidth={1.5} />
									Coaches see progress
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-[#007BA7]" strokeWidth={1.5} />
									Swimmers see growth
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="w-4 h-4 text-[#007BA7]" strokeWidth={1.5} />
									Parents see effort turning to results
								</li>
							</ul>
						</div>

						{/* Feature 2 */}
						<div className="border border-neutral-200 bg-white hover:bg-neutral-50 dark:border-white/[0.08] dark:bg-white/[0.02] rounded-2xl p-6 dark:hover:bg-white/[0.04] transition-colors group shadow-sm dark:shadow-none flex flex-col">
							<div className="h-12 w-12 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-500 dark:bg-white/[0.05] dark:border-white/[0.08] flex items-center justify-center mb-6 group-hover:text-[#0A4C75] group-hover:bg-[#007BA7]/10 dark:group-hover:text-[#007BA7] dark:group-hover:bg-[#007BA7]/20 transition-colors dark:text-neutral-300">
								<Calendar className="w-6 h-6" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-medium tracking-tight mb-3 text-neutral-900 dark:text-white">
								Connects Attendance to Outcomes
							</h3>
							<p className="text-base mb-6 leading-relaxed text-neutral-600 dark:text-neutral-400">
								Attendance isn&apos;t a checkbox; it&apos;s the foundation. See practice consistency,
								gaps, and patterns over time.
							</p>
							<p className="text-sm mt-auto text-neutral-600 dark:text-neutral-500 italic border-l-2 border-[#007BA7]/30 dark:border-white/[0.1] pl-4 py-1">
								When a swimmer drops time, the connection to their consistent attendance is undeniably
								visible.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="border border-neutral-200 bg-white hover:bg-neutral-50 dark:border-white/[0.08] dark:bg-white/[0.02] rounded-2xl p-6 dark:hover:bg-white/[0.04] transition-colors group shadow-sm dark:shadow-none flex flex-col">
							<div className="h-12 w-12 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-500 dark:bg-white/[0.05] dark:border-white/[0.08] flex items-center justify-center mb-6 group-hover:text-[#0A4C75] group-hover:bg-[#007BA7]/10 dark:group-hover:text-[#007BA7] dark:group-hover:bg-[#007BA7]/20 transition-colors dark:text-neutral-300">
								<SlidersHorizontal className="w-6 h-6" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-medium tracking-tight mb-3 text-neutral-900 dark:text-white">
								Replaces Noise With Signal
							</h3>
							<p className="text-base mb-6 leading-relaxed text-neutral-600 dark:text-neutral-400">
								Most teams drown in scattered emails and missed deadlines. We replace it with structured
								communication.
							</p>
							<div className="flex flex-wrap gap-2 mt-auto">
								<span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200 dark:bg-white/[0.03] dark:border-white/[0.05] text-sm text-neutral-600 dark:text-neutral-400">
									Clear announcements
								</span>
								<span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200 dark:bg-white/[0.03] dark:border-white/[0.05] text-sm text-neutral-600 dark:text-neutral-400">
									Defined deadlines
								</span>
								<span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200 dark:bg-white/[0.03] dark:border-white/[0.05] text-sm text-neutral-600 dark:text-neutral-400">
									Targeted messages
								</span>
							</div>
						</div>

						{/* Feature 4 */}
						<div className="border border-neutral-200 bg-white hover:bg-neutral-50 dark:border-white/[0.08] dark:bg-white/[0.02] rounded-2xl p-6 dark:hover:bg-white/[0.04] transition-colors group shadow-sm dark:shadow-none md:col-span-2 lg:col-span-1">
							<div className="h-12 w-12 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-500 dark:bg-white/[0.05] dark:border-white/[0.08] flex items-center justify-center mb-6 group-hover:text-[#0A4C75] group-hover:bg-[#007BA7]/10 dark:group-hover:text-[#007BA7] dark:group-hover:bg-[#007BA7]/20 transition-colors dark:text-neutral-300">
								<Users className="w-6 h-6" strokeWidth={1.5} />
							</div>
							<h3 className="text-xl font-medium tracking-tight mb-3 text-neutral-900 dark:text-white">
								Strengthens the Triangle
							</h3>
							<p className="text-base mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
								Strong teams are aligned teams. Enable direct coach-to-parent communication and shared
								visibility into progress and expectations.
							</p>
						</div>

						{/* Feature 5 */}
						<div className="border border-neutral-200 bg-white hover:bg-neutral-50 dark:border-white/[0.08] dark:bg-white/[0.02] rounded-2xl p-6 dark:hover:bg-white/[0.04] transition-colors group shadow-sm dark:shadow-none md:col-span-2 lg:col-span-2 flex flex-col justify-center">
							<div className="flex items-start gap-6">
								<div className="hidden sm:flex h-12 w-12 shrink-0 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-500 dark:bg-white/[0.05] dark:border-white/[0.08] items-center justify-center group-hover:text-[#0A4C75] group-hover:bg-[#007BA7]/10 dark:group-hover:text-[#007BA7] dark:group-hover:bg-[#007BA7]/20 transition-colors dark:text-neutral-300">
									<Layers className="w-6 h-6" strokeWidth={1.5} />
								</div>
								<div>
									<h3 className="text-xl font-medium tracking-tight mb-3 flex items-center gap-3 text-neutral-900 dark:text-white">
										<Layers
											className="sm:hidden w-6 h-6 text-neutral-500 dark:text-neutral-300"
											strokeWidth={1.5}
										/>
										Encodes Culture Into Structure
									</h3>
									<p className="text-base mb-4 leading-relaxed max-w-xl text-neutral-600 dark:text-neutral-400">
										Culture isn&apos;t slogans. It&apos;s consistency, clarity, and reinforcement.
										LaneLines embeds clear standards and responsibilities directly into the tool, so
										your culture isn&apos;t dependent on memory—it&apos;s supported by structure.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* The Alignment Layer */}
				<section id="alignment" className="w-full max-w-5xl mx-auto px-6 mb-32">
					<div className="flex flex-col items-center text-center mb-12">
						<span className="text-sm text-[#0A4C75] dark:text-neutral-500 uppercase tracking-widest mb-3">
							The Blueprint
						</span>
						<h2 className="text-3xl font-medium tracking-tight mb-4 text-neutral-900 dark:text-white">
							The Alignment Layer
						</h2>
						<p className="text-base max-w-lg text-neutral-600 dark:text-neutral-400">
							Not a registration replacement. Not a billing takeover tool. It connects the dots that
							actually build stronger teams.
						</p>
					</div>

					{/* Flow Diagram */}
					<div className="relative py-14 px-6 border border-neutral-200 bg-gradient-to-b from-neutral-50 to-transparent dark:border-white/[0.05] dark:from-white/[0.02] dark:to-transparent rounded-3xl overflow-hidden transition-colors duration-300">
						<div
							className="absolute inset-0 opacity-50"
							style={{
								backgroundImage:
									"url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTUwLDE1MCwxNTAsMC4xKSIvPjwvc3ZnPg==\")",
							}}
						/>

						<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5 max-w-4xl mx-auto">
							<div className="flex flex-col items-center gap-3 group w-full md:w-auto">
								<div className="h-14 w-full md:w-36 rounded-xl bg-white border border-neutral-200 text-neutral-700 dark:bg-white/[0.03] dark:border-white/[0.1] flex items-center justify-center text-base shadow-sm group-hover:border-neutral-300 dark:group-hover:border-white/[0.2] transition-colors backdrop-blur-sm dark:text-white">
									Attendance
								</div>
							</div>

							<ArrowRight
								className="hidden md:block w-5 h-5 text-neutral-300 dark:text-neutral-600"
								strokeWidth={1.5}
							/>
							<ArrowDown
								className="md:hidden w-5 h-5 text-neutral-300 dark:text-neutral-600"
								strokeWidth={1.5}
							/>

							<div className="flex flex-col items-center gap-3 group w-full md:w-auto">
								<div className="h-14 w-full md:w-36 rounded-xl bg-white border border-neutral-200 text-neutral-700 dark:bg-white/[0.03] dark:border-white/[0.1] flex items-center justify-center text-base shadow-sm group-hover:border-neutral-300 dark:group-hover:border-white/[0.2] transition-colors backdrop-blur-sm dark:text-white">
									Effort
								</div>
							</div>

							<ArrowRight
								className="hidden md:block w-5 h-5 text-neutral-300 dark:text-neutral-600"
								strokeWidth={1.5}
							/>
							<ArrowDown
								className="md:hidden w-5 h-5 text-neutral-300 dark:text-neutral-600"
								strokeWidth={1.5}
							/>

							<div className="flex flex-col items-center gap-3 group w-full md:w-auto">
								<div className="h-14 w-full md:w-36 rounded-xl bg-[#007BA7]/5 border border-[#007BA7]/30 text-[#0A4C75] dark:bg-[#007BA7]/10 dark:border-[#007BA7]/40 flex items-center justify-center text-base shadow-[0_0_15px_rgba(0,123,167,0.15)] dark:shadow-none group-hover:border-[#007BA7]/50 transition-colors backdrop-blur-sm dark:text-[#007BA7]">
									Improvement
								</div>
							</div>

							<ArrowRight
								className="hidden md:block w-5 h-5 text-neutral-300 dark:text-neutral-600"
								strokeWidth={1.5}
							/>
							<ArrowDown
								className="md:hidden w-5 h-5 text-neutral-300 dark:text-neutral-600"
								strokeWidth={1.5}
							/>

							<div className="flex flex-col items-center gap-3 group w-full md:w-auto">
								<div className="h-14 w-full md:w-36 rounded-xl bg-white border border-neutral-200 text-neutral-700 dark:bg-white/[0.03] dark:border-white/[0.1] flex items-center justify-center text-base shadow-sm group-hover:border-neutral-300 dark:group-hover:border-white/[0.2] transition-colors backdrop-blur-sm dark:text-white">
									Motivation
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Target Audience / Contrast */}
				<section className="w-full max-w-4xl mx-auto px-6 mb-32 grid md:grid-cols-2 gap-8">
					<div className="p-8 rounded-2xl border border-neutral-200 bg-white dark:border-white/[0.05] dark:bg-black shadow-sm dark:shadow-none transition-colors duration-300">
						<h3 className="text-base uppercase tracking-wider mb-6 flex items-center gap-3 text-neutral-500">
							<XSquare className="w-5 h-5" strokeWidth={1.5} />
							Who it&apos;s not for
						</h3>
						<p className="text-base mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
							If you&apos;re just trying to &ldquo;manage registration&rdquo; or need a feature-packed
							admin suite to take over billing, you don&apos;t need this.
						</p>
					</div>

					<div className="p-8 rounded-2xl border border-[#007BA7]/20 bg-[#007BA7]/5 dark:border-white/[0.1] dark:bg-white/[0.02] transition-colors duration-300">
						<h3 className="text-base uppercase tracking-wider mb-6 flex items-center gap-3 text-neutral-900 dark:text-white">
							<CheckSquare
								className="w-5 h-5 text-[#0A4C75] dark:text-[#007BA7]"
								strokeWidth={1.5}
							/>
							Who LaneLines is for
						</h3>
						<p className="text-base mb-5 leading-relaxed text-neutral-700 dark:text-neutral-300">
							Teams that truly care. Teams that want:
						</p>
						<ul className="space-y-3 text-base text-neutral-600 dark:text-neutral-400">
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full bg-[#007BA7] dark:bg-[#007BA7]/70" />
								Parents to understand the process.
							</li>
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full bg-[#007BA7] dark:bg-[#007BA7]/70" />
								Swimmers to see progress.
							</li>
							<li className="flex items-center gap-3">
								<div className="w-1.5 h-1.5 rounded-full bg-[#007BA7] dark:bg-[#007BA7]/70" />
								Coaches to spend time coaching.
							</li>
						</ul>
					</div>
				</section>

				{/* Final CTA / Outcome */}
				<section className="w-full max-w-3xl mx-auto px-6 text-center">
					<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-tight text-neutral-900 dark:text-white transition-colors duration-300">
						Stronger swimmers.
						<br />
						Stronger culture.
						<br />
						Less noise. More focus.
					</h2>
					<p className="text-lg mb-10 max-w-md mx-auto text-neutral-500 dark:text-neutral-400 transition-colors duration-300">
						Coaches coach. Parents understand. Swimmers improve. Get the blueprint for a team that gets
						better on purpose.
					</p>
					<Link
						to="/contact"
						className="inline-block text-base px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-[#007BA7]/20 dark:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] bg-[#0A4C75] text-white hover:bg-[#0A4C75]/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
					>
						Start Building Alignment
					</Link>
				</section>
			</main>

			<footer className="border-t border-neutral-200 dark:border-white/[0.08] mt-auto transition-colors duration-300">
				<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-8">
					<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
						<div>
							<Link to="/" className="flex items-center gap-2">
								<img
									src="/image.png"
									alt="LaneLines Logo"
									className="h-6 w-auto object-contain dark:brightness-200 dark:contrast-125 dark:grayscale-[50%] opacity-70"
								/>
							</Link>
							<p className="mt-3 max-w-md text-sm text-neutral-500">
								The swim team platform that keeps athletes, coaches, and families in sync.
							</p>
						</div>
						<div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
							<Link to="/pricing" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Pricing</Link>
							<Link to="/about" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">About</Link>
							<Link to="/contact" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Contact</Link>
							<Link to="/support" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Support</Link>
							<Link to="/privacy" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Privacy</Link>
							<Link to="/terms" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Terms</Link>
							<Link to="/community-guidelines" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Guidelines</Link>
							<Link to="/child-privacy-notice" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Child Privacy</Link>
							<Link to="/report-abuse" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">Report Abuse</Link>
						</div>
					</div>
					<div className="border-t border-neutral-200 dark:border-white/[0.08] pt-4 text-center text-xs text-neutral-400 dark:text-neutral-600">
						&copy; 2026 G&amp;J Family Ventures LLC. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	);
}
