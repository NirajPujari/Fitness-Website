import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { useRouteLogger, useScrollToTop } from "./hooks";

const App: React.FC = () => {
	useScrollToTop();
	useRouteLogger();
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
