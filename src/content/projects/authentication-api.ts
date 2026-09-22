import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "project",
	slug: "authentication-api",
	title: "Authentication API with MFA & Email Verification",
	eyebrow: "PROJECT / AUTHENTICATION",
	intro:
		"A modular authentication API built with ASP.NET Core 8, designed around a simple principle: authentication should be secure enough to trust, but structured cleanly enough to change.",
	archive: {
		category: "Backend",
		filterCategories: ["backend"],
		readingTime: "6 min",
		year: 2026,
	},
	blocks: [
		{
			type: "paragraph",
			id: "intro-context",
			lead: true,
			text: [
				{
					type: "text",
					text: "The project handles the parts that tend to become tangled when authentication grows beyond a basic login — email verification, MFA, password recovery, refresh tokens, account lockouts, and administrative recovery — while keeping those concerns separated behind the authentication layer.",
				},
			],
		},

		{
			type: "heading",
			id: "authentication-flow",
			level: 2,
			text: "The authentication flow",
		},
		{
			type: "paragraph",
			id: "authentication-flow-intro",
			text: "The API treats authentication as a sequence rather than a single login operation.",
		},
		{
			type: "code",
			id: "authentication-flow-code",
			language: "Flow",
			code: `Register
   ↓
Verify
   ↓
Login
   ↓
MFA
   ↓
Access + Refresh Tokens
   ↓
Refresh / Logout`,
		},
		{
			type: "paragraph",
			id: "authentication-flow-detail",
			text: "Registration creates the account and sends a time-limited verification link. Once verified, the user can authenticate normally unless MFA is enabled. In that case, credentials are only the first step; a valid TOTP or short-lived email OTP is required before the API issues the access and refresh token pair.",
		},
		{
			type: "callout",
			id: "mfa-boundary",
			label: "Why it matters",
			text: "MFA is not bolted onto the login endpoint as an afterthought. It forms part of the authentication state itself, with token issuance happening only after the required factor has been verified.",
		},

		{
			type: "heading",
			id: "core-endpoints",
			level: 2,
			text: "Core endpoints",
		},
		{
			type: "table",
			id: "core-endpoints-table",
			table: {
				headers: ["Area", "Endpoint", "Purpose"],
				rows: [
					[
						"Registration",
						"/api/auth/register",
						"Create an account and send verification",
					],
					[
						"Verification",
						"/api/auth/verify-account",
						"Activate a verified account",
					],
					[
						"Login",
						"/api/auth/login",
						"Authenticate credentials",
					],
					[
						"MFA",
						"/api/auth/mfa/*",
						"Setup, verify, enable or disable MFA",
					],
					[
						"Tokens",
						"/api/auth/refresh-token",
						"Rotate an access / refresh token pair",
					],
					[
						"Recovery",
						"/api/auth/password-reset-*",
						"Recover an account using one-time links",
					],
					[
						"Admin",
						"/api/auth/unlock",
						"Recover locked accounts",
					],
					[
						"Admin",
						"/api/auth/mfa/reset",
						"Reset MFA for an account",
					],
				],
			},
		},

		{
			type: "heading",
			id: "modular-architecture",
			level: 2,
			text: "Why the architecture is modular",
		},
		{
			type: "paragraph",
			id: "modular-architecture-intro",
			text: "Authentication is a good example of where modularity pays for itself later.",
		},
		{
			type: "paragraph",
			id: "modular-architecture-detail",
			text: "Email delivery is isolated behind a central service rather than being embedded into registration, verification, and password-reset logic individually. Redis provides a natural place for short-lived state, while SQL Server remains responsible for persistent user data. Serilog and correlation IDs then give the whole request a traceable path across those boundaries.",
		},
		{
			type: "cards",
			id: "architecture-responsibilities",
			columns: 2,
			items: [
				{
					tag: "Persistence",
					title: "SQL Server",
					description:
						"Owns durable identity and user data rather than temporary authentication state.",
					tone: "primary",
				},
				{
					tag: "Temporary state",
					title: "Redis",
					description:
						"Handles short-lived or fast-access state without becoming the source of truth for users.",
				},
				{
					tag: "Infrastructure",
					title: "SMTP",
					description:
						"Provides email delivery without coupling the authentication workflow to a specific provider.",
				},
				{
					tag: "Sessions",
					title: "JWT + Refresh Tokens",
					description:
						"Provides the session mechanism while keeping token handling separate from persistence and email concerns.",
				},
			],
		},
		{
			type: "paragraph",
			id: "modular-architecture-conclusion",
			text: "The useful architectural decision here is not any individual technology. It is being able to replace one without rewriting the authentication model around it.",
		},

		{
			type: "heading",
			id: "mfa",
			level: 2,
			text: "MFA without coupling the user to one method",
		},
		{
			type: "paragraph",
			id: "mfa-intro",
			text: "MFA supports both authenticator applications and email-based OTPs. TOTP provides the stronger, app-based route, while email OTP gives users a practical fallback when an authenticator application is unavailable.",
		},
		{
			type: "cards",
			id: "mfa-methods",
			columns: 2,
			items: [
				{
					tag: "Authenticator",
					title: "TOTP",
					description:
						"Generates a shared secret and QR code for pairing with an authenticator application.",
					tone: "primary",
				},
				{
					tag: "Email",
					title: "OTP",
					description:
						"Sends a short-lived verification code for users without an authenticator application.",
				},
			],
		},
		{
			type: "paragraph",
			id: "mfa-design",
			text: "The API treats the second factor as a verification mechanism rather than making the rest of the authentication system care how that factor was produced. That leaves room for future implementations such as SMS or additional identity providers without forcing the core authentication flow to change significantly.",
		},
		{
			type: "callout",
			id: "engineering-note",
			label: "Engineering note",
			tone: "definition",
			text: "Authentication code tends to become difficult to maintain when every new requirement is added directly to the login path. Keeping verification, token issuance, email delivery, MFA, and account recovery as distinct responsibilities makes future changes considerably cheaper.",
		},

		{
			type: "heading",
			id: "recovery",
			level: 2,
			text: "Recovery is part of authentication",
		},
		{
			type: "paragraph",
			id: "recovery-intro",
			text: "Password reset, verification resend, account unlock, and MFA reset are not secondary features. They are the paths users take when the normal authentication flow stops working.",
		},
		{
			type: "pathway",
			id: "recovery-pathway",
			items: [
				{
					title: "Password reset",
					description:
						"Uses a controlled, one-time recovery link rather than exposing the normal authentication flow.",
				},
				{
					title: "Verification resend",
					description:
						"Allows unverified users to request another verification message when the original has expired or is missing.",
				},
				{
					title: "Account unlock",
					description:
						"Provides an explicit administrative recovery path for locked accounts.",
				},
				{
					title: "MFA reset",
					description:
						"Allows authorised administrators to recover accounts when the configured second factor is no longer available.",
				},
			],
		},
		{
			type: "paragraph",
			id: "recovery-detail",
			text: "These flows use short-lived operations, expiring verification tokens, configurable lockout behaviour, and administrator-only recovery endpoints to keep recovery explicit rather than treating it as another variation of login.",
		},
		{
			type: "callout",
			id: "email-testing",
			label: "Development",
			text: "Email flows can be tested safely through the provided test endpoint and Ethereal SMTP without sending real messages.",
		},

		{
			type: "heading",
			id: "running-locally",
			level: 2,
			text: "Running locally",
		},
		{
			type: "paragraph",
			id: "running-locally-intro",
			text: "The project is intentionally conventional to get running.",
		},
		{
			type: "code",
			id: "running-locally-code",
			language: "Shell",
			code: `dotnet restore
dotnet ef database update
dotnet run`,
		},
		{
			type: "paragraph",
			id: "running-locally-config",
			text: "Configuration lives in appsettings.json, with SQL Server, Redis and SMTP settings supplied according to the environment.",
		},
		{
			type: "paragraph",
			id: "correlation-ids",
			text: "For debugging a complete authentication request, the correlation ID is particularly useful. A registration or login attempt may touch the API, database, Redis and SMTP service; being able to follow that single request through the logs is often more valuable than another layer of abstraction.",
		},

		{
			type: "heading",
			id: "designed-to-grow",
			level: 2,
			text: "Designed to grow",
		},
		{
			type: "paragraph",
			id: "designed-to-grow-intro",
			text: "The current implementation leaves natural extension points for OAuth providers, SMS-based MFA, remember-device behaviour, and further token or verification policies.",
		},
		{
			type: "cards",
			id: "future-extensions",
			columns: 4,
			items: [
				{
					title: "OAuth",
					description:
						"Extend authentication through external identity providers.",
				},
				{
					title: "SMS MFA",
					description:
						"Introduce another second-factor implementation without changing the core flow.",
				},
				{
					title: "Remember device",
					description:
						"Add trusted-device behaviour around the existing MFA boundary.",
				},
				{
					title: "New policies",
					description:
						"Introduce additional token or verification rules without redefining authentication.",
				},
			],
		},
		{
			type: "paragraph",
			id: "final-thought",
			text: "The important part is that these additions do not need to redefine the entire authentication system. They can become new implementations or policies around an existing flow.",
		},
		{
			type: "callout",
			id: "project-goal",
			label: "The goal",
			tone: "success",
			text: "Not to build the biggest authentication API, but to keep a security-sensitive part of an application understandable as its requirements grow.",
		},
	],
};

export default article;