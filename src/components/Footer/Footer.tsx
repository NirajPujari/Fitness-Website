import React from "react";
import { SocialLinks } from "../SocialLinks/SocialLinks";

export const Footer: React.FC = () => {
	return (
		<footer className="w-full bg-black text-white flex justify-center">
			<div className="flex flex-col justify-center items-center gap-2 my-4">
				<div>
					&copy; {new Date().getFullYear()} PowerHouse Fitness. All
					rights reserved.
				</div>
				<div>Contact us: pujariniraj09@gmail.com</div>
				<div className="flex flex-row gap-5 text-xl">
					<SocialLinks />
				</div>
			</div>
		</footer>
	);
};
