import { useEffect, useMemo, useState } from "react";
import { getSupabaseClient, type SupabaseClient } from "../lib/supabaseClient";
import { WelcomeMessage } from "../components/WelcomeMessage";

type Status =
	| { state: "loading"; message: string }
	| { state: "success"; message: string }
	| { state: "error"; message: string };

function useSupabaseClient(): SupabaseClient | null {
	return useMemo(() => getSupabaseClient(), []);
}

function parseAuthParams(url: URL) {
	const hashParams = new URLSearchParams(url.hash.replace(/^#/, ""));
	return {
		code: url.searchParams.get("code"),
		accessToken: hashParams.get("access_token"),
		refreshToken: hashParams.get("refresh_token"),
		error:
			url.searchParams.get("error_description") ||
			hashParams.get("error_description"),
	};
}

function safeDecodeURIComponent(value: string) {
	try {
		return decodeURIComponent(value);
	} catch {
		return value;
	}
}

function stripSensitiveAuthParams(url: URL) {
	const nextUrl = new URL(url.toString());
	nextUrl.searchParams.delete("code");
	nextUrl.searchParams.delete("error");
	nextUrl.searchParams.delete("error_description");
	nextUrl.hash = "";
	window.history.replaceState({}, document.title, nextUrl.toString());
}

export default function AuthCallbackRoute() {
	const supabase = useSupabaseClient();
	const [status, setStatus] = useState<Status>({
		state: "loading",
		message: "Completing sign-in...",
	});

	useEffect(() => {
		if (!supabase) {
			setStatus({
				state: "error",
				message:
					"Supabase client is unavailable. Check SUPABASE_URL/SUPABASE_ANON_KEY (or VITE_SUPABASE_URL/VITE_SUPABASE_ANON_KEY).",
			});
			return;
		}

		const url = new URL(window.location.href);
		const { code, accessToken, refreshToken, error } = parseAuthParams(url);
		stripSensitiveAuthParams(url);

		if (error) {
			setStatus({ state: "error", message: safeDecodeURIComponent(error) });
			return;
		}

		const completeAuth = async () => {
			if (code) {
				const { error: exchangeError } =
					await supabase.auth.exchangeCodeForSession(code);
				if (exchangeError) {
					setStatus({ state: "error", message: exchangeError.message });
					return;
				}
				setStatus({ state: "success", message: "Welcome to LaneLines." });
				return;
			}

			if (accessToken && refreshToken) {
				const { error: sessionError } = await supabase.auth.setSession({
					access_token: accessToken,
					refresh_token: refreshToken,
				});
				if (sessionError) {
					setStatus({ state: "error", message: sessionError.message });
					return;
				}
				setStatus({ state: "success", message: "Welcome to LaneLines." });
				return;
			}

			setStatus({
				state: "error",
				message:
					"Missing authentication details. Please try signing in again.",
			});
		};

		void completeAuth();
	}, [supabase]);

	if (status.state === "success") {
		return <WelcomeMessage />;
	}

	return (
		<main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-slate-900">
			<div className="w-full max-w-md space-y-4 rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
				<h1 className="text-2xl font-semibold">Auth callback</h1>
				<p className="text-sm text-slate-600">{status.message}</p>
			</div>
		</main>
	);
}
