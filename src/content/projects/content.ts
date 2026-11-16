
import type { ContentDocument } from "../../types/content";

import apiGateway from "./ai-gateway";
import authenticationApiMfaEmailVerification from "./authentication-api";
import eventDrivenAppointmentsApi from "./event-driven-appointments-api";
import frontendSocialSystem from "./frontend-social-system";

/**
 * Only explicitly authored project documents belong here.
 *
 * Adding a project to the project catalogue does not automatically
 * create an Engineering Notes project article.
 *
 * To publish a new project article:
 * 1. Create its content file in this directory.
 * 2. Import it below.
 * 3. Add it to projectDocuments.
 *
 * Projects without an authored document remain available on the
 * Projects page but do not have a project article route.
 */
export const projectDocuments: ContentDocument[] = [
	apiGateway,
	authenticationApiMfaEmailVerification,
	eventDrivenAppointmentsApi,
	frontendSocialSystem,
];