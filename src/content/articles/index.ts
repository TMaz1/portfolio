import type { ContentDocument } from "../../types/content";

import gettingStartedWithArticles from "./getting-started-with-articles";
import findingThe900msPath from "./finding-the-900ms-path";
import designingApisThatFailWell from "./designing-apis-that-fail-well";
import theRequestIsNotTheSystem from "./the-request-is-not-the-system";
import whenSqlBecomesTheBottleneck from "./when-sql-becomes-the-bottleneck";
import optimisingTheCriticalPath from "./optimising-the-critical-path";
import stateIsADesignProblem from "./state-is-a-design-problem";
import infrastructureShouldBeRepeatable from "./infrastructure-should-be-repeatable";
import whatTransferLearningBuysYou from "./what-transfer-learning-buys-you";
import authenticationIsALifecycle from "./authentication-is-a-lifecycle";

export const articleDocuments: ContentDocument[] = [
	gettingStartedWithArticles,
	findingThe900msPath,
	designingApisThatFailWell,
	theRequestIsNotTheSystem,
	whenSqlBecomesTheBottleneck,
	optimisingTheCriticalPath,
	stateIsADesignProblem,
	infrastructureShouldBeRepeatable,
	whatTransferLearningBuysYou,
	authenticationIsALifecycle,
];