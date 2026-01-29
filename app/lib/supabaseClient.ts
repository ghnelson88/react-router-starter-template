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
	}
}

export function getSupabaseClient(): SupabaseClient | null {
	if (typeof window === "undefined") {
		return null;
	}

	const supabase = window.supabase;
	if (!supabase?.createClient) {
		return null;
	}

	const url = import.meta.env.VITE_SUPABASE_URL;
	const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
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
