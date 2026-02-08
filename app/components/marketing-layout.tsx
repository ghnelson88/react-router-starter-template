import { Link } from "react-router";

const navLinks = [
	{ label: "Pricing", to: "/pricing" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
	{ label: "Guidelines", to: "/community-guidelines" },
];

export function MarketingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-slate-950 text-white">
			<header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
					<Link className="flex items-center gap-3 text-lg font-semibold tracking-wide" to="/">
						<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 via-blue-500 to-amber-300 text-sm font-bold text-slate-900">
							LL
						</span>
						LaneLines
					</Link>
					<nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								className="transition hover:text-white"
								to={link.to}
							>
								{link.label}
							</Link>
						))}
					</nav>
					<div className="flex items-center gap-3 text-sm">
						<a
							className="rounded-full border border-white/20 px-4 py-2 text-white/80 transition hover:border-white/40 hover:text-white"
							href="https://app.lanelinesapp.com"
						>
							Open App
						</a>
						<Link
							className="rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-amber-300 px-4 py-2 font-medium text-slate-900 transition hover:opacity-90"
							to="/contact"
						>
							Book a demo
						</Link>
					</div>
				</div>
			</header>
			<main>{children}</main>
			<footer className="border-t border-white/10">
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="text-white">LaneLines</p>
						<p className="mt-2 max-w-md">
							The swim team platform that keeps athletes, coaches, and families in sync.
						</p>
					</div>
					<div className="flex flex-wrap gap-4">
						<Link className="hover:text-white" to="/pricing">
							Pricing
						</Link>
						<Link className="hover:text-white" to="/about">
							About
						</Link>
						<Link className="hover:text-white" to="/contact">
							Contact
						</Link>
						<Link className="hover:text-white" to="/privacy">
							Privacy
						</Link>
						<Link className="hover:text-white" to="/community-guidelines">
							Community Guidelines
						</Link>
						<Link className="hover:text-white" to="/support">
							Support
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
