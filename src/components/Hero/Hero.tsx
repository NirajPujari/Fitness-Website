import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { heroLand, heroPort } from "../../assets/img";

export const Hero: React.FC = () => {
	const [width, setWidth] = useState<boolean>(window.innerWidth < 1400);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth < 1400);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset;
			const parallaxElements = document.querySelectorAll(".parallax");

			parallaxElements.forEach((element) => {
				const attribute = element.getAttribute("data-speed");
				if (attribute) {
					const speed = parseFloat(attribute);
					(element as HTMLElement).style.transform = `translateY(${
						scrollTop * speed
					}px)`;
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section className="h-[90vh] overflow-hidden relative">
			<div className="absolute inset-0 z-[-100]">
				<img
					src={width ? heroPort : heroLand}
					alt="Hero"
					className="w-full h-full object-cover parallax"
					data-speed="1"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-60 parallax"></div>
			</div>
			<div className="absolute top-1/2 left-1/2 max-md:left-1/4 transform -translate-x-1/2 max-md:-translate-x-[15%] -translate-y-1/2 text-center space-y-5 text-white">
				<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
					Welcome to PowerHouse Fitness
				</h1>
				<div className="text-xl md:text-2xl lg:text-3xl space-y-5">
					<p>Get Fit, Stay Healthy, and Have Fun!</p>
					<button className="button text-md md:text-lg lg:text-xl">
						<Link to="/join">Join Us</Link>
					</button>
					<p>
						Enjoy state of the art facilities and top-notch
						trainers.
					</p>
					<p>
						Join our group fitness classes for a fun workout
						experience.
					</p>
				</div>
			</div>
		</section>
	);
};
