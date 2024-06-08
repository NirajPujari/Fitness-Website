import styles from "./Home.module.css";
import React, { useEffect, useState } from "react";
import { Hero, TextImageBlock, Cards } from "../../components";
import { CardData, SoftLinks } from "../../types";
import { Link } from "react-router-dom";
import { aboutUs } from "../../assets/img";
import {
	fetchWrapper,
	getLocalStorageItem,
	removeLocalStorageItems,
	setLocalStorageItem,
} from "../../utils";

export const Home: React.FC = () => {
	const [data, setData] = useState<CardData[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const localData = getLocalStorageItem<CardData[]>("cardData");
			const fetchedData = await fetchWrapper(
				"https://powerhousefitnessapi.vercel.app/api/cards"
			);
			if (localData == fetchedData && localData) {
				setData(localData);
			} else {
				removeLocalStorageItems(["cardData"]);
				setLocalStorageItem<CardData[]>("cardData", fetchedData);
				setData(fetchedData);
			}
		};
		fetchData();
	}, []);

	const softLinks: SoftLinks[] = [
		{
			title: "Membership",
			links: [
				{ name: "Membership Options", url: "/" },
				{ name: "Frequently Asked Questions", url: "/" },
				{ name: "Get Membership", url: "/" },
				{ name: "Get Sessions", url: "/" },
			],
		},
		{
			title: "Policies & Legal",
			links: [
				{ name: "Privacy Policy", url: "/" },
				{ name: "Terms & Conditions - Website", url: "/" },
				{ name: "Terms & Conditions - Members", url: "/" },
				{ name: "Labour Compliance Documents", url: "/" },
			],
		},
		{
			title: "Customer Services",
			links: [
				{ name: "Personal Training", url: "/" },
				{ name: "Swimming Pool", url: "/" },
				{ name: "Sauna Steam Room", url: "/" },
				{ name: "Contact Us", url: "/" },
				{ name: "Member's Enquiry", url: "/" },
			],
		},
	];
	return (
		<main>
			<Hero />
			<TextImageBlock
				header="About Us"
				image={aboutUs}
				altText="About Us"
			>
				<p className="text-xl">
					Your Gym is a premier fitness center committed to helping
					you achieve your health and fitness goals. With
					state-of-the-art equipment, highly qualified trainers, and a
					variety of classes, we provide the best environment to
					optimize your workout experience.
				</p>
				<p className="text-xl">
					Whether you're just starting your fitness journey or looking
					to take your training to the next level, our expert team is
					here to support and guide you every step of the way. We
					offer personalized training plans, group classes,
					nutritional counseling, and much more to help you reach your
					fitness goals faster.
				</p>
			</TextImageBlock>
			<Cards data={data} />
			<section className="p-8 pt-0 innerWidth flex flex-col items-center space-y-12 lg:items-start lg:flex-row lg:space-y-0 lg:justify-evenly">
				{softLinks.map(({ title, links }) => (
					<div
						key={title}
						className="space-y-6 w-full text-center lg:w-1/4 lg:text-left"
					>
						<header className="text-2xl font-bold">{title}</header>
						<ul className="flex flex-col items-center text-xl space-y-2 lg:items-start">
							{links.map(({ name, url }) => (
								<li key={name} className="relative w-max">
									<Link
										to={url}
										className="Link"
										id={styles.contactLink}
									>
										{name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</section>
		</main>
	);
};
