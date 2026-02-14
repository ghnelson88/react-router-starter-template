import { Link } from "react-router";

const navLinks = [
	{ label: "Dashboard", to: "/app" },
	{ label: "Pricing", to: "/pricing" },
	{ label: "Support", to: "/contact" },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-slate-100 text-slate-900">
			<header className="border-b border-slate-200 bg-white">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
					<div className="flex items-center gap-3">
						<Link className="flex items-center gap-2 text-base font-semibold" to="/">
							<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-amber-300 text-xs font-bold text-slate-900">
								LL
							</span>
							LaneLines
						</Link>
						<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
							App
						</span>
					</div>
					<nav className="flex items-center gap-5 text-sm text-slate-500">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								className="transition hover:text-slate-900"
								to={link.to}
							>
								{link.label}
							</Link>
						))}
					</nav>
					<button className="rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-amber-300 px-4 py-2 text-sm font-medium text-slate-900">
						Invite team
					</button>
				</div>
			</header>
			<main className="mx-auto w-full max-w-6xl px-6 py-10">
				{children}
			</main>
			<footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-400">
				© 2026 G&J Family Ventures LLC. All rights reserved.
			</footer>
		</div>
	);
}
