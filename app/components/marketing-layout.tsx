import { Link } from "react-router";

const navLinks = [
	{ label: "Pricing", to: "/pricing" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
	{ label: "Support", to: "/support" },
];

const footerLinks = [
	{ label: "Pricing", to: "/pricing" },
	{ label: "About", to: "/about" },
	{ label: "Contact", to: "/contact" },
	{ label: "Support", to: "/support" },
	{ label: "Privacy", to: "/privacy" },
	{ label: "Terms", to: "/terms" },
	{ label: "Guidelines", to: "/community-guidelines" },
	{ label: "Child Privacy", to: "/child-privacy-notice" },
	{ label: "Report Abuse", to: "/report-abuse" },
];

export function MarketingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className="min-h-screen bg-white dark:bg-black text-neutral-600 dark:text-neutral-400 transition-colors duration-300"
			style={{
				fontFamily:
					"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
			}}
		>
			<a
				className="sr-only left-4 top-4 z-50 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-neutral-900 focus:not-sr-only focus:fixed"
				href="#main-content"
			>
				Skip to content
			</a>
			<header className="fixed top-0 inset-x-0 z-50 border-b border-neutral-200 dark:border-white/[0.08] backdrop-blur-md bg-white/80 dark:bg-black/60 transition-colors duration-300">
				<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
					<Link to="/" className="flex items-center gap-2">
						<img
							src="/image.png"
							alt="LaneLines Logo"
							className="h-16 md:h-18 w-auto object-contain dark:brightness-200 dark:contrast-125 dark:grayscale-[50%]"
						/>
					</Link>
					<nav className="hidden md:flex items-center gap-6 text-base">
						{navLinks.map((link) => (
							<Link
								key={link.to}
								className="transition-colors text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
								to={link.to}
							>
								{link.label}
							</Link>
						))}
					</nav>
					<div className="flex items-center gap-4">
						<a
							className="text-base transition-colors hidden sm:block text-neutral-600 hover:text-neutral-900 dark:text-white dark:hover:text-neutral-300"
							href="https://app.lanelinesapp.com"
						>
							Open App
						</a>
						<Link
							className="text-base px-5 py-2 rounded-full transition-colors bg-[#0A4C75] text-white hover:bg-[#0A4C75]/90 dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-sm"
							to="/contact"
						>
							Contact Sales
						</Link>
					</div>
					<details className="relative md:hidden">
						<summary className="list-none rounded-xl border border-neutral-200 dark:border-white/[0.08] px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300">
							Menu
						</summary>
						<div className="absolute right-0 top-12 w-52 space-y-2 rounded-2xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-neutral-900 p-3 shadow-xl">
							{navLinks.map((link) => (
								<Link
									key={link.to}
									className="block rounded-lg px-3 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-[#007BA7]/10"
									to={link.to}
								>
									{link.label}
								</Link>
							))}
							<Link
								className="mt-1 block rounded-lg bg-[#0A4C75] dark:bg-white px-3 py-2 text-sm font-semibold text-white dark:text-black"
								to="/contact"
							>
								Contact Sales
							</Link>
						</div>
					</details>
				</div>
			</header>
			<main id="main-content" className="pt-20">
				{children}
			</main>
			<footer className="border-t border-neutral-200 dark:border-white/[0.08] transition-colors duration-300">
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
							<p className="mt-3 max-w-md text-sm text-neutral-500 dark:text-neutral-500">
								The swim team platform that keeps athletes, coaches, and families in sync.
							</p>
						</div>
						<div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
							{footerLinks.map((link) => (
								<Link
									key={link.to}
									className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
									to={link.to}
								>
									{link.label}
								</Link>
							))}
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
