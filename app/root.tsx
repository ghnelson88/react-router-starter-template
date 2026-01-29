import { useEffect } from "react";
import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
];

export function loader({ context }: Route.LoaderArgs) {
	const env =
		context.cloudflare?.env ??
		(typeof process !== "undefined" ? process.env : undefined);

	return {
		supabaseUrl: env?.SUPABASE_URL ?? env?.VITE_SUPABASE_URL ?? null,
		supabaseAnonKey: env?.SUPABASE_ANON_KEY ?? env?.VITE_SUPABASE_ANON_KEY ?? null,
	};
}

export function Layout({ children }: { children: React.ReactNode }) {
	const { supabaseUrl, supabaseAnonKey } = useLoaderData<typeof loader>();

	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				<script
					dangerouslySetInnerHTML={{
						__html: `window.__SUPABASE_ENV__ = ${JSON.stringify({
							url: supabaseUrl,
							anonKey: supabaseAnonKey,
						})};`,
					}}
				/>
				<script
					defer
					src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"
				></script>
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		const { hash, pathname, search } = window.location;
		if (!hash) {
			return;
		}

		const hashParams = new URLSearchParams(hash.replace(/^#/, ""));
		const isRecovery = hashParams.get("type") === "recovery";

		if (!isRecovery || pathname.startsWith("/auth/reset-password")) {
			return;
		}

		window.location.replace(`/auth/reset-password${search}${hash}`);
	}, []);

	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
