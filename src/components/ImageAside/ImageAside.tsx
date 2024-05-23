import React from "react";
import { ImageAsideProps } from "../../types";

export const ImageAside: React.FC<ImageAsideProps> = ({ image, altText }) => {
	return (
		<aside className="w-full xl:w-1/2 rounded-xl border-8 border-black overflow-hidden">
			<img src={image} alt={altText} className="h-full w-full bg-black" />
		</aside>
	);
};
