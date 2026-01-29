export type SupabaseClient = {
	auth: {
		exchangeCodeForSession: (code: string) => Promise<{
			data: unknown;
			error: { message: string } | null;
		}>;
		setSession: (session: {
			access_token: string;
			refresh_token: string;
		}) => Promise<{
			data: unknown;
			error: { message: string } | null;
		}>;
		updateUser: (updates: { password: string }) => Promise<{
			data: unknown;
			error: { message: string } | null;
		}>;
	};
};

declare global {
	interface Window {
		supabase?: {
			createClient: (
				url: string,
				key: string,
				options?: {
					auth?: { flowType?: "pkce" | "implicit"; detectSessionInUrl?: boolean };
				}
			) => SupabaseClient;
		};
		__SUPABASE_ENV__?: {
			url?: string | null;
			anonKey?: string | null;
		};
	}
}

function readEnvValue(key: "VITE_SUPABASE_URL" | "VITE_SUPABASE_ANON_KEY") {
	if (typeof import.meta !== "undefined" && import.meta.env?.[key]) {
		return import.meta.env[key];
	}

	if (typeof window !== "undefined") {
		return key === "VITE_SUPABASE_URL"
			? window.__SUPABASE_ENV__?.url
			: window.__SUPABASE_ENV__?.anonKey;
	}

	return null;
}

export function getSupabaseClient(): SupabaseClient | null {
	if (typeof window === "undefined") {
		return null;
	}

	const supabase = window.supabase;
	if (!supabase?.createClient) {
		return null;
	}

	const url = readEnvValue("VITE_SUPABASE_URL");
	const key = readEnvValue("VITE_SUPABASE_ANON_KEY");
	if (!url || !key) {
		return null;
	}

	return supabase.createClient(url, key, {
		auth: {
			flowType: "pkce",
			detectSessionInUrl: false,
		},
	});
}
