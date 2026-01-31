import type { Route } from "./+types/app._index";
import { AppLayout } from "../components/app-layout";

const alerts = [
	{
		lane: "Senior group • Morning practice",
		status: "Attendance dip",
		detail: "3 athletes absent · follow-up sent to parents",
	},
	{
		lane: "Meet: Regional Qualifier",
		status: "Entries due",
		detail: "Submission deadline in 2 days · 14 athletes pending",
	},
	{
		lane: "Age group • Afternoon practice",
		status: "Resolved",
		detail: "Pool update shared · workout rescheduled",
	},
];

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "LaneLines App Dashboard" },
		{ name: "description", content: "Operations visibility for every swimmer." },
	];
}

export default function AppDashboard() {
	return (
		<AppLayout>
			<div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
				<div>
					<h1 className="text-2xl font-semibold">Operations overview</h1>
					<p className="mt-2 text-sm text-slate-500">
						Today&apos;s attendance, training, and meet readiness across your team.
					</p>
					<div className="mt-8 grid gap-4 sm:grid-cols-3">
						<div className="rounded-2xl border border-slate-200 bg-white p-5">
							<p className="text-xs font-semibold uppercase text-slate-400">Athletes</p>
							<p className="mt-3 text-2xl font-semibold">214</p>
							<p className="mt-2 text-xs text-emerald-600">+4 new this month</p>
						</div>
						<div className="rounded-2xl border border-slate-200 bg-white p-5">
							<p className="text-xs font-semibold uppercase text-slate-400">Attendance</p>
							<p className="mt-3 text-2xl font-semibold">92%</p>
							<p className="mt-2 text-xs text-emerald-600">+3% vs last week</p>
						</div>
						<div className="rounded-2xl border border-slate-200 bg-white p-5">
							<p className="text-xs font-semibold uppercase text-slate-400">Meets</p>
							<p className="mt-3 text-2xl font-semibold">3 upcoming</p>
							<p className="mt-2 text-xs text-amber-600">Entries due</p>
						</div>
					</div>
					<div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6">
						<div className="flex items-center justify-between">
							<h2 className="text-lg font-semibold">Team alerts</h2>
							<button className="text-xs font-semibold uppercase text-slate-500" type="button">
								Export report
							</button>
						</div>
						<ul className="mt-6 space-y-4 text-sm">
							{alerts.map((alert) => (
								<li
									key={alert.lane}
									className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
								>
									<p className="font-semibold text-slate-900">{alert.lane}</p>
									<p className="mt-1 text-xs uppercase text-slate-500">{alert.status}</p>
									<p className="mt-2 text-sm text-slate-600">{alert.detail}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<aside className="space-y-6">
					<div className="rounded-3xl border border-slate-200 bg-white p-6">
						<h2 className="text-lg font-semibold">Priority actions</h2>
						<ul className="mt-4 space-y-4 text-sm text-slate-600">
							<li>Publish next week&apos;s training plan.</li>
							<li>Confirm travel details for the regional meet.</li>
							<li>Send end-of-month progress summaries.</li>
						</ul>
						<button
							className="mt-6 w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
							type="button"
						>
							Assign tasks
						</button>
					</div>
					<div className="rounded-3xl border border-slate-200 bg-white p-6">
						<h2 className="text-lg font-semibold">Support team</h2>
						<p className="mt-3 text-sm text-slate-500">
							Your LaneLines partner is on standby.
						</p>
						<div className="mt-4 rounded-2xl bg-slate-50 p-4">
							<p className="text-sm font-semibold">Taylor Brooks</p>
							<p className="text-xs text-slate-500">Customer Success Coach</p>
							<button
								className="mt-4 w-full rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600"
								type="button"
							>
								Message success team
							</button>
						</div>
					</div>
				</aside>
			</div>
		</AppLayout>
	);
}
