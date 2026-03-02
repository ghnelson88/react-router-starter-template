import { Link } from "react-router";

type BrandLogoProps = {
	className?: string;
	compact?: boolean;
	to?: string;
};

export function BrandLogo({ className = "", compact = false, to = "/" }: BrandLogoProps) {
	const content = (
		<div className={`flex items-center gap-3 ${className}`.trim()}>
			<svg
				aria-hidden="true"
				className={compact ? "h-8 w-8" : "h-10 w-10"}
				viewBox="0 0 48 48"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4 18C10 18 10 12 16 12H19C25 12 25 18 31 18H44"
					stroke="#0A4C75"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<path
					d="M4 30H17C23 30 23 36 29 36H44"
					stroke="#007BA7"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				<circle cx="3" cy="18" r="2.5" fill="#0A4C75" />
				<circle cx="45" cy="30" r="2.5" fill="#007BA7" />
			</svg>
			{!compact && (
				<span className="text-xl font-medium tracking-tight text-[#0A4C75]">lanelines</span>
			)}
		</div>
	);

	return (
		<Link aria-label="LaneLines home" className="inline-flex" to={to}>
			{content}
		</Link>
	);
}
