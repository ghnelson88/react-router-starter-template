import { useEffect, useMemo, useState } from "react";
import { getSupabaseClient, type SupabaseClient } from "../lib/supabaseClient";
import { WelcomeMessage } from "../components/WelcomeMessage";

type Status =
	| { state: "loading"; message: string }
	| { state: "ready"; message: string }
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

export default function ResetPasswordRoute() {
	const supabase = useSupabaseClient();
	const [status, setStatus] = useState<Status>({
		state: "loading",
		message: "Preparing your password reset...",
	});
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	useEffect(() => {
		if (!supabase) {
			setStatus({
				state: "error",
				message:
					"Supabase client is unavailable. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
			});
			return;
		}

		const url = new URL(window.location.href);
		const { code, accessToken, refreshToken, error } = parseAuthParams(url);

		if (error) {
			setStatus({ state: "error", message: decodeURIComponent(error) });
			return;
		}

		const establishSession = async () => {
			if (code) {
				const { error: exchangeError } =
					await supabase.auth.exchangeCodeForSession(code);
				if (exchangeError) {
					setStatus({ state: "error", message: exchangeError.message });
					return;
				}
				setStatus({
					state: "ready",
					message: "Session ready. Set a new password.",
				});
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
				setStatus({
					state: "ready",
					message: "Session ready. Set a new password.",
				});
				return;
			}

			setStatus({
				state: "error",
				message:
					"Missing authentication details. Please open the reset link from your email again.",
			});
		};

		void establishSession();
	}, [supabase]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!supabase) {
			setStatus({
				state: "error",
				message:
					"Supabase client is unavailable. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.",
			});
			return;
		}

		if (password.length < 8) {
			setStatus({
				state: "error",
				message: "Password must be at least 8 characters.",
			});
			return;
		}

		if (password !== confirmPassword) {
			setStatus({
				state: "error",
				message: "Passwords do not match.",
			});
			return;
		}

		setStatus({ state: "loading", message: "Updating your password..." });
		const { error } = await supabase.auth.updateUser({ password });
		if (error) {
			setStatus({ state: "error", message: error.message });
			return;
		}

		setStatus({ state: "success", message: "welcome to lanelines" });
	};

	if (status.state === "success") {
		return <WelcomeMessage />;
	}

	return (
		<main className="flex min-h-screen items-center justify-center bg-white px-6 py-16 text-slate-900">
			<div className="w-full max-w-md space-y-6 rounded-2xl border border-slate-200 p-8 shadow-sm">
				<div className="space-y-2 text-center">
					<h1 className="text-2xl font-semibold">Reset your password</h1>
					<p className="text-sm text-slate-600">{status.message}</p>
				</div>

				{status.state === "ready" || status.state === "error" ? (
					<form className="space-y-4" onSubmit={handleSubmit}>
						<div>
							<label className="text-sm font-medium" htmlFor="password">
								New password
							</label>
							<input
								className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
								id="password"
								name="password"
								type="password"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								required
								minLength={8}
							/>
						</div>
						<div>
							<label className="text-sm font-medium" htmlFor="confirmPassword">
								Confirm password
							</label>
							<input
								className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								value={confirmPassword}
								onChange={(event) => setConfirmPassword(event.target.value)}
								required
								minLength={8}
							/>
						</div>
						<button
							className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
							disabled={status.state === "loading"}
							type="submit"
						>
							Update password
						</button>
					</form>
				) : null}
			</div>
		</main>
	);
}
