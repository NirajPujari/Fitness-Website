import { ReactNode } from "react";
export interface TextImageBlockProps {
	header?: string;
	subheader?: string;
	children: ReactNode;
	image: string;
	altText: string;
	className?: string;
	reversed?: boolean;
}

export interface ImageAsideProps {
	image: string;
	altText: string;
}

export interface TextAsideProps {
	header?: string;
	subheader?: string;
	children: ReactNode;
}

export interface CardData {
	_id: number;
	title: string;
	image: string;
	description: string;
}

export interface CardsProps {
	data: CardData[];
}

export interface CardProps {
	className?: string;
	image: string;
	title: string;
	children: ReactNode;
}
