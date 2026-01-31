export function WelcomeMessage() {
	return (
		<main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-slate-900">
			<div className="w-full max-w-md space-y-6 rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
				<div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-amber-300 text-sm font-bold text-slate-900">
					LL
				</div>
				<div className="space-y-2">
					<h1 className="text-2xl font-semibold">Welcome to LaneLines</h1>
					<p className="text-sm text-slate-600">
						Your workspace is ready. Jump back into the dashboard to keep the team on track.
					</p>
				</div>
				<a
					className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
					href="/app"
				>
					Open dashboard
				</a>
			</div>
		</main>
	);
}
