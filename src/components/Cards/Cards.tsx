import React from "react";
import { CardsProps } from "../../types";
import { Card } from "./Card/Card";

export const Cards: React.FC<CardsProps> = ({ data }) => {
	return (
		<section className="px-8 pb-8 grid grid-cols-1 justify-items-center 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 m-auto">
			{data.map((card) => (
				<Card
					image={card.image}
					title={card.title}
					className="mb-8"
					key={card._id}
				>
					<p>{card.description}</p>
				</Card>
			))}
		</section>
	);
};
