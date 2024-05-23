import React from "react";
import { Link } from "react-router-dom";
import { CardProps } from "../../../types";

export const Card: React.FC<CardProps> = ({
	className = "",
	image,
	title,
	children,
}) => {
	return (
		<Link
			to="/home/SessionForm"
			className={`group flex flex-col justify-start p-8 rounded-lg gap-3 max-w-[25rem] min-h-[25rem] text-center transition-all duration-[450ms] hover:scale-110 hover:bg-black hover:text-white ${className}`}
		>
			<div className="w-full h-64">
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover object-center rounded-lg transition-transform duration-300 group-hover:scale-105"
				/>
			</div>
			<h3 className="font-bold text-2xl">{title}</h3>
			{children}
		</Link>
	);
};
