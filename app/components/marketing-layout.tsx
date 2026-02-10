import { Link } from "react-router";

const navLinks = [
	{ label: "Pricing", to: "/pricing" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
	{ label: "Guidelines", to: "/community-guidelines" },
];

export function MarketingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-[#F5F5F5] text-[#0D3C61]">
			<a
				className="sr-only left-4 top-4 z-50 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0D3C61] focus:not-sr-only focus:fixed"
				href="#main-content"
			>
				Skip to content
			</a>
			<header className="border-b border-[#0D3C61]/15 bg-white/95 backdrop-blur">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:gap-6 md:py-5">
					<Link className="flex items-center gap-3 text-lg font-semibold tracking-wide text-[#0D3C61]" to="/">
						<span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1E88E5] text-sm font-bold text-white">
							LL
						</span>
						LaneLines
					</Link>
					<nav className="hidden items-center gap-6 text-sm text-[#0D3C61]/80 md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								className="transition hover:text-[#1E88E5]"
								to={link.to}
							>
								{link.label}
							</Link>
						))}
					</nav>
					<div className="hidden items-center gap-3 text-sm md:flex">
						<a
							className="rounded-full border border-[#0D3C61]/30 px-4 py-2.5 text-[#0D3C61] transition hover:border-[#0D3C61]/55"
							href="https://app.lanelinesapp.com"
						>
							Open App
						</a>
						<Link
							className="rounded-full bg-[#1E88E5] px-4 py-2.5 font-semibold text-white transition hover:bg-[#1565C0]"
							to="/contact"
						>
							Contact Sales
						</Link>
					</div>
					<details className="relative md:hidden">
						<summary className="list-none rounded-xl border border-[#0D3C61]/25 px-3 py-2 text-sm text-[#0D3C61]">
							Menu
						</summary>
						<div className="absolute right-0 top-12 w-52 space-y-2 rounded-2xl border border-[#0D3C61]/15 bg-white p-3 shadow-xl">
							{navLinks.map((link) => (
								<Link
									key={link.to}
									className="block rounded-lg px-3 py-2 text-sm text-[#0D3C61] hover:bg-[#1E88E5]/10"
									to={link.to}
								>
									{link.label}
								</Link>
							))}
							<Link
								className="mt-1 block rounded-lg bg-[#1E88E5] px-3 py-2 text-sm font-semibold text-white"
								to="/contact"
							>
								Contact Sales
							</Link>
						</div>
					</details>
				</div>
			</header>
			<main id="main-content">{children}</main>
			<footer className="border-t border-[#0D3C61]/15 bg-white">
				<div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-[#0D3C61]/75 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="text-[#0D3C61]">LaneLines</p>
						<p className="mt-2 max-w-md">
							The swim team platform that keeps athletes, coaches, and families in sync.
						</p>
					</div>
					<div className="flex flex-wrap gap-4">
						<Link className="hover:text-[#1E88E5]" to="/pricing">
							Pricing
						</Link>
						<Link className="hover:text-[#1E88E5]" to="/about">
							About
						</Link>
						<Link className="hover:text-[#1E88E5]" to="/contact">
							Contact
						</Link>
						<Link className="hover:text-[#1E88E5]" to="/privacy">
							Privacy
						</Link>
						<Link className="hover:text-[#1E88E5]" to="/community-guidelines">
							Community Guidelines
						</Link>
						<Link className="hover:text-[#1E88E5]" to="/support">
							Support
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
