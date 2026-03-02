import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/use-theme";

const options = [
	{ value: "light" as const, icon: Sun, label: "Light" },
	{ value: "dark" as const, icon: Moon, label: "Dark" },
	{ value: "system" as const, icon: Monitor, label: "System" },
];

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<div className="flex items-center rounded-full border border-neutral-200 dark:border-white/[0.08] bg-neutral-100 dark:bg-white/[0.05] p-0.5">
			{options.map(({ value, icon: Icon, label }) => (
				<button
					key={value}
					type="button"
					onClick={() => setTheme(value)}
					aria-label={label}
					className={`p-1.5 rounded-full transition-colors ${
						theme === value
							? "bg-white dark:bg-white/[0.15] text-neutral-900 dark:text-white shadow-sm"
							: "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300"
					}`}
				>
					<Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
				</button>
			))}
		</div>
	);
}
