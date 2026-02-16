import { Link } from "react-router";

const navLinks = [
	{ label: "Pricing", to: "/pricing" },
	{ label: "Founding Pilot", to: "/founding-pilot" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
];

const footerNav = {
	product: [
		{ label: "Pricing", to: "/pricing" },
		{ label: "Founding Pilot", to: "/founding-pilot" },
		{ label: "About", to: "/about" },
		{ label: "Contact", to: "/contact" },
	],
	legal: [
		{ label: "Privacy", to: "/privacy" },
		{ label: "Community Guidelines", to: "/community-guidelines" },
		{ label: "Child Privacy", to: "/child-privacy-notice" },
		{ label: "Report Abuse", to: "/report-abuse" },
		{ label: "Support", to: "/support" },
	],
};

export function MarketingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-[#F5F7F9] text-[#2F3A45]">
			<a
				className="sr-only left-4 top-4 z-50 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0F1E2E] focus:not-sr-only focus:fixed"
				href="#main-content"
			>
				Skip to content
			</a>

			{/* Header */}
			<header className="sticky top-0 z-40 border-b border-[#0F1E2E]/8 bg-white/80 backdrop-blur-xl">
				<div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 md:gap-8 md:py-4">
					<Link
						className="flex items-center gap-2.5 text-[#0F1E2E]"
						to="/"
					>
						<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0F1E2E] text-xs font-bold tracking-tight text-white">
							LL
						</span>
						<span className="text-base font-semibold tracking-[-0.01em]">
							LaneLines
						</span>
					</Link>

					<nav className="hidden items-center gap-8 text-[13px] font-medium text-[#2F3A45]/70 md:flex">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								className="hover:text-[#0F1E2E]"
								to={link.to}
							>
								{link.label}
							</Link>
						))}
					</nav>

					<div className="hidden items-center gap-3 text-[13px] md:flex">
						<a
							className="font-medium text-[#2F3A45]/70 hover:text-[#0F1E2E]"
							href="https://app.lanelinesapp.com"
						>
							Open App
						</a>
						<Link
							className="rounded-lg bg-[#0F1E2E] px-4 py-2 font-semibold text-white hover:bg-[#0F1E2E]/90"
							to="/founding-pilot"
						>
							Get Started
						</Link>
					</div>

					<details className="relative md:hidden">
						<summary className="list-none rounded-lg border border-[#0F1E2E]/10 px-3 py-2 text-sm text-[#2F3A45]">
							<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
						</summary>
						<div className="absolute right-0 top-12 w-56 rounded-xl border border-[#0F1E2E]/8 bg-white p-2 shadow-xl shadow-[#0F1E2E]/5">
							{navLinks.map((link) => (
								<Link
									key={link.to}
									className="block rounded-lg px-3 py-2.5 text-sm text-[#2F3A45] hover:bg-[#F5F7F9]"
									to={link.to}
								>
									{link.label}
								</Link>
							))}
							<div className="my-1 border-t border-[#0F1E2E]/8" />
							<a
								className="block rounded-lg px-3 py-2.5 text-sm text-[#2F3A45] hover:bg-[#F5F7F9]"
								href="https://app.lanelinesapp.com"
							>
								Open App
							</a>
							<Link
								className="mt-1 block rounded-lg bg-[#0F1E2E] px-3 py-2.5 text-center text-sm font-semibold text-white"
								to="/founding-pilot"
							>
								Get Started
							</Link>
						</div>
					</details>
				</div>
			</header>

			<main id="main-content">{children}</main>

			{/* Footer */}
			<footer className="border-t border-[#0F1E2E]/8 bg-white">
				<div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
					<div className="grid gap-10 md:grid-cols-[1.5fr,1fr,1fr]">
						<div>
							<Link className="flex items-center gap-2.5 text-[#0F1E2E]" to="/">
								<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#0F1E2E] text-[10px] font-bold tracking-tight text-white">
									LL
								</span>
								<span className="text-sm font-semibold tracking-[-0.01em]">LaneLines</span>
							</Link>
							<p className="mt-4 max-w-xs text-sm leading-relaxed text-[#2F3A45]/60">
								The system of record for swim meet operations. Built for year-round USA Swimming clubs.
							</p>
						</div>
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#2F3A45]/40">
								Product
							</p>
							<nav className="mt-4 flex flex-col gap-3">
								{footerNav.product.map((link) => (
									<Link
										key={link.to}
										className="text-sm text-[#2F3A45]/60 hover:text-[#0F1E2E]"
										to={link.to}
									>
										{link.label}
									</Link>
								))}
							</nav>
						</div>
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#2F3A45]/40">
								Legal
							</p>
							<nav className="mt-4 flex flex-col gap-3">
								{footerNav.legal.map((link) => (
									<Link
										key={link.to}
										className="text-sm text-[#2F3A45]/60 hover:text-[#0F1E2E]"
										to={link.to}
									>
										{link.label}
									</Link>
								))}
							</nav>
						</div>
					</div>
				</div>
				<div className="border-t border-[#0F1E2E]/6 px-6 py-5 text-center text-xs text-[#2F3A45]/40">
					&copy; 2026 G&J Family Ventures LLC. All rights reserved.
				</div>
			</footer>
		</div>
	);
}
