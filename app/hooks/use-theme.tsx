import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
	theme: Theme;
	resolvedTheme: "light" | "dark";
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): "light" | "dark" {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(resolved: "light" | "dark") {
	const root = document.documentElement;
	if (resolved === "dark") {
		root.classList.add("dark");
	} else {
		root.classList.remove("dark");
	}
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setThemeState] = useState<Theme>(() => {
		if (typeof window === "undefined") return "system";
		return (localStorage.getItem("theme") as Theme) || "system";
	});
	const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
		if (typeof window === "undefined") return "light";
		const stored = localStorage.getItem("theme") as Theme | null;
		if (stored === "light" || stored === "dark") return stored;
		return getSystemTheme();
	});

	const setTheme = useCallback((newTheme: Theme) => {
		setThemeState(newTheme);
		localStorage.setItem("theme", newTheme);
	}, []);

	useEffect(() => {
		const resolved = theme === "system" ? getSystemTheme() : theme;
		setResolvedTheme(resolved);
		applyTheme(resolved);
	}, [theme]);

	// Listen for system theme changes when in "system" mode
	useEffect(() => {
		if (theme !== "system") return;
		const mql = window.matchMedia("(prefers-color-scheme: dark)");
		const handler = () => {
			const sys = getSystemTheme();
			setResolvedTheme(sys);
			applyTheme(sys);
		};
		mql.addEventListener("change", handler);
		return () => mql.removeEventListener("change", handler);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const ctx = useContext(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
	return ctx;
}
