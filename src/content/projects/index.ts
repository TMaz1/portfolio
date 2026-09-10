import type { ProjectSummary } from "../../types/content";

export const projects: ProjectSummary[] = [
	{
		slug: "payments-processing-sandbox",
		title: "Payments Processing Sandbox",
		description:
			"A serverless payments-processing environment exploring asynchronous workflows, failure handling and infrastructure as code. Designed around queues, retries and dead-letter processing rather than a simple request/response flow.",
		technologies: [
			"AWS Lambda",
			"SQS",
			"DynamoDB",
			"S3",
			"Terraform",
			"JavaScript",
			"CloudWatch",
		],
	},
	{
		slug: "e-commerce-products-api",
		title: "E-Commerce Products API",
		description:
			"Production-style REST API built around a relational data model, with caching and automated testing. Demonstrates the stack closest to my professional .NET experience while incorporating modern ASP.NET 8 patterns.",
		technologies: [
			"ASP.NET 8",
			"EF Core",
			"SQL Server",
			"Redis",
			"xUnit",
			"Moq",
			"SQLite",
		],
	},
	{
		slug: "event-driven-appointments-api",
		title: "Event-Driven Appointments API",
		description:
			"An event-driven API for appointment and document workflows. Built around webhooks, retry behaviour and dead-letter queues, with Docker providing a consistent development environment.",
		technologies: [
			"Node.js",
			"TypeScript",
			"Docker",
			"Webhooks",
			"Retries",
			"DLQ",
		],
	},
	{
		slug: "authentication-api",
		title: "Authentication API",
		description:
			"Modern ASP.NET Core authentication implementation covering the less glamorous but important parts of account security: MFA, email verification, password recovery and token lifecycle management.",
		technologies: [
			"ASP.NET Core 8",
			"C#",
			"JWT",
			"Refresh Tokens",
			"MFA",
			"Security",
		],
	},
	{
		slug: "frontend-social-system",
		title: "Frontend Social System",
		description:
			"High-interactivity social media prototype focused on frontend behaviour, application state and user interaction. A contrast to the backend-heavy projects elsewhere in the portfolio.",
		technologies: [
			"TypeScript",
			"Frontend",
			"UI State",
			"Interactions",
			"Responsive",
		],
	},
	{
		slug: "image-to-text",
		title: "Image To Text",
		description:
			"Bulk OCR pipeline for extracting text from images. Uses computer-vision preprocessing before passing images through Tesseract, demonstrating a different side of engineering: working with imperfect real-world input.",
		technologies: [
			"Python",
			"OpenCV",
			"Tesseract",
			"OCR",
			"Image Processing",
		],
	},
];