import { createRequestHandler } from "react-router";

declare module "react-router" {
	export interface AppLoadContext {
		cloudflare: {
			env: Env;
			ctx: ExecutionContext;
		};
	}
}

const requestHandler = createRequestHandler(
	() => import("virtual:react-router/server-build"),
	import.meta.env.MODE,
);

function withSecurityHeaders(response: Response): Response {
	const headers = new Headers(response.headers);
	headers.set("X-Content-Type-Options", "nosniff");
	headers.set("X-Frame-Options", "DENY");
	headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
	headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
	headers.set("Cross-Origin-Opener-Policy", "same-origin");
	headers.set("Cross-Origin-Resource-Policy", "same-origin");
	headers.set(
		"Content-Security-Policy",
		[
			"default-src 'self'",
			"base-uri 'self'",
			"form-action 'self'",
			"frame-ancestors 'none'",
			"img-src 'self' data: https:",
			"font-src 'self' data:",
			"style-src 'self' 'unsafe-inline'",
			"script-src 'self' 'unsafe-inline'",
			"connect-src 'self' https://*.supabase.co https://api.resend.com",
			"object-src 'none'",
			"upgrade-insecure-requests",
		].join("; "),
	);

	if (response.headers.has("Set-Cookie")) {
		headers.set("Cache-Control", "private, no-store");
	}

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}

export default {
	async fetch(request, env, ctx) {
		const response = await requestHandler(request, {
			cloudflare: { env, ctx },
		});

		return withSecurityHeaders(response);
	},
} satisfies ExportedHandler<Env>;
