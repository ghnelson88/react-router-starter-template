import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("pricing", "routes/pricing.tsx"),
	route("about", "routes/about.tsx"),
	route("contact", "routes/contact.tsx"),
	route("privacy", "routes/privacy.tsx"),
	route("support", "routes/support.tsx"),
	route("app", "routes/app._index.tsx"),
	route("auth/reset-password", "routes/auth.reset-password.tsx"),
	route("auth/callback", "routes/auth.callback.tsx"),
] satisfies RouteConfig;
