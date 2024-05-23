import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { useScrollToTop } from "./hooks";

const App: React.FC = () => {
	useScrollToTop();
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
