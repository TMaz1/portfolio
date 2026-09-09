import { createHashRouter, Navigate } from 'react-router-dom';
import { SiteShell } from '../components/layout/SiteShell';
import { HomePage } from '../pages/HomePage';

export const router = createHashRouter([
	{
		path: '/',
		element: <SiteShell />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: '*', element: <Navigate to="/" replace /> },
		],
	},
]);