import React from "react";
import { notFound } from "../../assets/img";

export const NotFound: React.FC = () => {
	return (
		<main className="min-h-screen flex justify-center bg-white">
			<div className="w-full max-w-2xl p-8 sm:p-12 bg-slate-100 text-center rounded-lg">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">
					404 - Page Not Found
				</h1>
				<p className="text-lg text-gray-600 mb-8">
					Oops! The page you are looking for does not exist.
				</p>
				<img
					src={notFound}
					alt="404 Not Found"
					className="mx-auto max-w-full h-auto rounded-xl"
				/>
				<p className="text-gray-600 mt-4">
					You can <a href="/">return to the homepage</a>.
				</p>
			</div>
		</main>
	);
};
