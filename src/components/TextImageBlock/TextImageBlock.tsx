import React from "react";
import { TextImageBlockProps, TextAsideProps } from "../../types";
import { ImageAside } from "../../components";

export const TextImageBlock: React.FC<TextImageBlockProps> = ({
	header = "",
	subheader = "",
	children,
	image,
	altText,
	className = "",
	reversed = false,
}) => {
	return (
		<section className={`my-8 ${className}`}>
			<div
				className={`innerWidth paddings flex flex-row max-xl:items-center max-xl:flex-col gap-16 xl:gap-5 ${
					reversed ? "flex-row-reverse" : ""
				}`}
			>
				<TextAside header={header} subheader={subheader}>
					{children}
				</TextAside>
				<ImageAside image={image} altText={altText} />
			</div>
		</section>
	);
};

const TextAside: React.FC<TextAsideProps> = ({
	header,
	subheader,
	children,
}) => {
	return (
		<aside className="flex flex-col w-full xl:w-1/2">
			{header && (
				<header className="text-3xl md:text-4xl font-bold mb-6">
					{header}
				</header>
			)}
			{subheader && (
				<h2 className="text-2xl font-semibold mb-2">{subheader}</h2>
			)}
			<div className="text-base md:text-lg space-y-6">{children}</div>
		</aside>
	);
};
