import { Link } from "react-router";
import { BrandLogo } from "./brand-logo";

const navLinks = [
	{ label: "The Problem", to: "/#problem" },
	{ label: "Features", to: "/#features" },
	{ label: "Alignment", to: "/#alignment" },
	{ label: "Pricing", to: "/pricing" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
];

export function MarketingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen bg-white text-neutral-600">
			<a
				className="sr-only left-4 top-4 z-50 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0A4C75] focus:not-sr-only focus:fixed"
				href="#main-content"
			>
				Skip to content
			</a>
			<header className="sticky top-0 inset-x-0 z-50 border-b border-neutral-200 backdrop-blur-md bg-white/85">
				<div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
					<BrandLogo compact />
					<nav className="hidden items-center gap-6 text-sm md:flex">
						{navLinks.map((link) => (
							<Link key={link.to} className="text-neutral-500 hover:text-neutral-900" to={link.to}>
								{link.label}
							</Link>
						))}
					</nav>
					<div className="hidden items-center gap-3 text-sm md:flex">
						<a className="rounded-full px-4 py-2.5 text-neutral-700 hover:text-neutral-900" href="/contact">
							Log in
						</a>
						<Link
							className="rounded-full bg-[#0A4C75] px-5 py-2.5 font-medium text-white hover:bg-[#0A4C75]/90"
							to="/contact"
						>
							Get Started
						</Link>
					</div>
				</div>
			</header>
			<main className="pb-24" id="main-content">
				{children}
			</main>
			<footer className="border-t border-neutral-200">
				<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-sm text-neutral-500 md:flex-row">
					<BrandLogo className="opacity-80" compact />
					<p>© 2026 LaneLines. The alignment layer for swim teams.</p>
					<div className="flex flex-wrap items-center gap-5">
						<Link className="hover:text-neutral-700" to="/privacy">
							Privacy
						</Link>
						<Link className="hover:text-neutral-700" to="/terms">
							Terms
						</Link>
						<Link className="hover:text-neutral-700" to="/support">
							Support
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
