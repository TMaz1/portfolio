import { createHashRouter, Navigate } from "react-router-dom";
import { SiteShell } from "../components/layout/SiteShell";
import { HomePage } from "../pages/HomePage";
import { ContentPage } from "../pages/ContentPage";
import { EngineeringNotesPage } from "../pages/EngineeringNotesPage";
import { AboutPage } from "../pages/AboutPage";

export const router = createHashRouter([
	{
		path: "/",
		element: <SiteShell />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "engineering-notes", element: <EngineeringNotesPage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "articles/:slug", element: <ContentPage kind="article" /> },
			{ path: "projects/:slug", element: <ContentPage kind="project" /> },
			{ path: "*", element: <Navigate to="/" replace /> },
		],
	},
]);