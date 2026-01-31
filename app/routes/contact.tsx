import type { Route } from "./+types/contact";
import { MarketingLayout } from "../components/marketing-layout";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Contact LaneLines" },
		{
			name: "description",
			content: "Get in touch to schedule a demo or talk to our team.",
		},
	];
}

export default function Contact() {
	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-6xl px-6 py-16">
				<div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
					<div>
						<h1 className="text-4xl font-semibold text-white">Let&apos;s talk swimming</h1>
						<p className="mt-4 text-lg text-white/70">
							Tell us about your team size, season goals, and meet schedule. We&apos;ll respond
							within one business day.
						</p>
						<div className="mt-8 space-y-4 text-sm text-white/70">
							<p>
								<span className="text-white">Email:</span> hello@lanelinesapp.com
							</p>
							<p>
								<span className="text-white">Phone:</span> (555) 555-0148
							</p>
							<p>
								<span className="text-white">HQ:</span> Remote-first · North America
							</p>
						</div>
					</div>
					<form className="rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-white/80">
						<label className="block">
							<span className="text-white">Name</span>
							<input
								className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/50"
								placeholder="Jane Doe"
								type="text"
							/>
						</label>
						<label className="mt-5 block">
							<span className="text-white">Work email</span>
							<input
								className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/50"
								placeholder="jane@company.com"
								type="email"
							/>
						</label>
						<label className="mt-5 block">
							<span className="text-white">Team size</span>
							<select className="mt-2 w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white">
								<option className="text-slate-900">Under 50 athletes</option>
								<option className="text-slate-900">50 - 150 athletes</option>
								<option className="text-slate-900">150+ athletes</option>
							</select>
						</label>
						<label className="mt-5 block">
							<span className="text-white">What are you hoping to solve?</span>
							<textarea
								className="mt-2 min-h-[120px] w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/50"
								placeholder="Tell us about attendance, meet management, or parent communication..."
							/>
						</label>
						<button className="mt-6 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
							Submit request
						</button>
						<p className="mt-3 text-xs text-white/60">
							By submitting, you agree to receive communications from Lanelines.
						</p>
					</form>
				</div>
			</section>
		</MarketingLayout>
	);
}
