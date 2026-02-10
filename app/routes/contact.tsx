import { Form, useActionData, useNavigation } from "react-router";
import type { Route } from "./+types/contact";
import { MarketingLayout } from "../components/marketing-layout";

type ActionData = {
	success: boolean;
	message: string;
};

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Contact LaneLines" },
		{
			name: "description",
			content: "Get in touch to schedule a demo or talk to our team.",
		},
	];
}

export async function action({ context, request }: Route.ActionArgs) {
	const formData = await request.formData();
	const name = formData.get("name")?.toString().trim();
	const workEmail = formData.get("workEmail")?.toString().trim();
	const teamProfile = formData.get("teamProfile")?.toString().trim();
	const goals = formData.get("goals")?.toString().trim();

	if (!name || !workEmail || !teamProfile || !goals) {
		return Response.json<ActionData>(
			{ success: false, message: "Please complete all fields before submitting." },
			{ status: 400 },
		);
	}

	const env = context.cloudflare?.env ?? (typeof process !== "undefined" ? process.env : undefined);
	const resendApiKey = env?.RESEND_API_KEY;
	const toAddress = env?.DEMO_REQUEST_TO_EMAIL ?? "support@lanelinesapp.com";
	const fromAddress = env?.DEMO_REQUEST_FROM_EMAIL ?? "LaneLines Demo <demo@lanelinesapp.com>";

	if (!resendApiKey) {
		return Response.json<ActionData>(
			{
				success: false,
				message: "Demo request email is not configured yet. Please try again later.",
			},
			{ status: 500 },
		);
	}

	const emailBody = [
		`Name: ${name}`,
		`Work email: ${workEmail}`,
		`Team profile: ${teamProfile}`,
		"",
		"Goals:",
		goals,
	].join("\n");

	const resendResponse = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${resendApiKey}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			from: fromAddress,
			to: [toAddress],
			subject: `New demo request from ${name}`,
			text: emailBody,
			reply_to: workEmail,
		}),
	});

	if (!resendResponse.ok) {
		return Response.json<ActionData>(
			{ success: false, message: "Unable to send your request right now. Please try again." },
			{ status: 502 },
		);
	}

	return Response.json<ActionData>({
		success: true,
		message: "Thanks! Your demo request has been sent.",
	});
}

export default function Contact() {
	const actionData = useActionData<typeof action>();
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<MarketingLayout>
			<section className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
				<div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
					<div>
						<h1 className="text-4xl font-semibold text-[#0D3C61] md:text-5xl">Contact us</h1>
						<p className="mt-4 text-lg text-[#0D3C61]/85">
							Tell us about your team goals, season rhythm, and meet schedule. We&apos;ll follow
							up within one business day.
						</p>
						<div className="mt-8 grid gap-3 sm:grid-cols-2">
							<a
								className="rounded-2xl border border-[#0D3C61]/20 bg-white px-5 py-4 text-base font-medium text-[#0D3C61] hover:border-[#1E88E5]/50"
								href="mailto:hello@lanelinesapp.com"
							>
								Email us directly
								<p className="mt-1 text-sm font-normal text-[#0D3C61]/70">hello@lanelinesapp.com</p>
							</a>
							<a
								className="rounded-2xl border border-[#0D3C61]/20 bg-white px-5 py-4 text-base font-medium text-[#0D3C61] hover:border-[#1E88E5]/50"
								href="/pricing"
							>
								See plans first
								<p className="mt-1 text-sm font-normal text-[#0D3C61]/70">Compare options in under a minute</p>
							</a>
						</div>
					</div>
					<Form className="rounded-3xl border border-[#0D3C61]/15 bg-white p-8 text-sm text-[#0D3C61]/85 shadow-sm" method="post">
						<p className="mb-5 text-sm text-[#0D3C61]/70">Complete this short form and we&apos;ll reach out quickly.</p>
						<label className="block">
							<span className="text-[#0D3C61]">Name</span>
							<input
								className="mt-2 w-full rounded-2xl border border-[#0D3C61]/25 bg-white px-4 py-3 text-base text-[#0D3C61] placeholder:text-[#0D3C61]/45"
								name="name"
								placeholder="Jane Doe"
								required
								type="text"
							/>
						</label>
						<label className="mt-5 block">
							<span className="text-[#0D3C61]">Work email</span>
							<input
								className="mt-2 w-full rounded-2xl border border-[#0D3C61]/25 bg-white px-4 py-3 text-base text-[#0D3C61] placeholder:text-[#0D3C61]/45"
								name="workEmail"
								placeholder="jane@company.com"
								required
								type="email"
							/>
						</label>
						<label className="mt-5 block">
							<span className="text-[#0D3C61]">Team profile</span>
							<select
								className="mt-2 w-full rounded-2xl border border-[#0D3C61]/25 bg-white px-4 py-3 text-base text-[#0D3C61]"
								name="teamProfile"
								required
							>
								<option className="text-[#0D3C61]" value="Small team">
									Small team
								</option>
								<option className="text-[#0D3C61]" value="Growing program">
									Growing program
								</option>
								<option className="text-[#0D3C61]" value="Multi-squad club">
									Multi-squad club
								</option>
							</select>
						</label>
						<label className="mt-5 block">
							<span className="text-[#0D3C61]">What are you hoping to solve?</span>
							<textarea
								className="mt-2 min-h-[120px] w-full rounded-2xl border border-[#0D3C61]/25 bg-white px-4 py-3 text-base text-[#0D3C61] placeholder:text-[#0D3C61]/45"
								name="goals"
								placeholder="Tell us about attendance, meet management, or parent communication..."
								required
							/>
						</label>
						<button
							className="mt-6 w-full rounded-full bg-[#1E88E5] px-6 py-3.5 text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
							disabled={isSubmitting}
							type="submit"
						>
							{isSubmitting ? "Submitting..." : "Send message"}
						</button>
						{actionData && (
							<p className={`mt-3 text-sm ${actionData.success ? "text-emerald-300" : "text-rose-300"}`}>
								{actionData.message}
							</p>
						)}
						<p className="mt-3 text-xs text-[#0D3C61]/65">
							By submitting, you agree to receive communications from LaneLines.
						</p>
					</Form>
				</div>
			</section>
		</MarketingLayout>
	);
}
