import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { MemberPlans } from "./pages/Member";
import { NotFound } from "./pages/NotFound";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "", element: <Navigate to="home" replace /> },
			{ path: "home", element: <Home /> },
			{
				path: "member",
				children: [{ path: "plans", element: <MemberPlans /> }],
			},
			{ path: "*", element: <NotFound /> },
		],
	},
]);
