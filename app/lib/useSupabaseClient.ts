import { useEffect, useState } from "react";
import { getSupabaseClient, type SupabaseClient } from "./supabaseClient";

type SupabaseClientState = {
	client: SupabaseClient | null;
	error: string | null;
	isLoading: boolean;
};

const SUPABASE_LOAD_TIMEOUT_MS = 5000;
const SUPABASE_POLL_INTERVAL_MS = 200;

export function useSupabaseClient(): SupabaseClientState {
	const [client, setClient] = useState<SupabaseClient | null>(() =>
		getSupabaseClient()
	);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (client || error) {
			return;
		}

		const url = import.meta.env.VITE_SUPABASE_URL;
		const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
		if (!url || !key) {
			setError(
				"Supabase client is unavailable. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
			);
			return;
		}

		let isMounted = true;
		const checkForClient = () => {
			const nextClient = getSupabaseClient();
			if (nextClient && isMounted) {
				setClient(nextClient);
				return true;
			}
			return false;
		};

		if (checkForClient()) {
			return () => {
				isMounted = false;
			};
		}

		const intervalId = window.setInterval(() => {
			if (checkForClient()) {
				window.clearInterval(intervalId);
			}
		}, SUPABASE_POLL_INTERVAL_MS);

		const timeoutId = window.setTimeout(() => {
			if (!isMounted) {
				return;
			}
			if (!client) {
				setError(
					"Supabase client is unavailable. Ensure the Supabase script finishes loading."
				);
			}
			window.clearInterval(intervalId);
		}, SUPABASE_LOAD_TIMEOUT_MS);

		return () => {
			isMounted = false;
			window.clearInterval(intervalId);
			window.clearTimeout(timeoutId);
		};
	}, [client, error]);

	return { client, error, isLoading: !client && !error };
}
