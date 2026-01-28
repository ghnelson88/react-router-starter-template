import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("pricing", "routes/pricing.tsx"),
	route("about", "routes/about.tsx"),
	route("contact", "routes/contact.tsx"),
	route("app", "routes/app._index.tsx"),
] satisfies RouteConfig;
