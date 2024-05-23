import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { whiteLogo } from "../../assets/img";
import { MenuItemProps, MobileMenuProps } from "../../types";

const Logo: React.FC = () => (
	<Link to="/home" className="navbar-brand">
		<img
			src={whiteLogo}
			className="max-w-28 max-md:pl-3 transition ease-out duration-500 hover:translate-y-1 hover:scale-125"
			alt="PowerHouse Logo"
		/>
	</Link>
);

const MenuItem: React.FC<MenuItemProps> = ({ to, label }) => (
	<li className="py-2 relative w-max">
		<Link to={to} className="Link">
			{label}
		</Link>
	</li>
);

const MenuItems: React.FC = () => (
	<>
		<MenuItem to="/home" label="Home" />
		<MenuItem to="/join" label="Join Us" />
		<MenuItem to="/membership" label="Membership" />
		<MenuItem to="/contact" label="Contact" />
	</>
);

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, handleClose }) => (
	<div
		className={`fixed top-0 right-0 h-full bg-black text-white z-50 transition-all duration-700 ${
			isOpen ? "w-[95%]" : "w-0"
		}`}
	>
		<header className="w-full flex justify-between pt-6 px-8">
			<Logo />
			<button
				className="text-4xl"
				onClick={handleClose}
				title="Toggle close"
				type="button"
			>
				<RiCloseCircleLine />
			</button>
		</header>
		<section>
			<ul className="p-8 text-lg">
				<MenuItems />
			</ul>
		</section>
		<footer
			className={`pt-4 relative transition-all duration-700 ${
				isOpen ? "right-0" : "right-[-150px]"
			}`}
		>
			<div className="flex justify-center gap-10 text-2xl text-white">
				<SocialLinks />
			</div>
		</footer>
	</div>
);

export const Navbar: React.FC = () => {
	const [width, setWidth] = useState<boolean>(window.innerWidth < 1200);
	const [open, setOpen] = useState<boolean>(false);

	const handleToggle = () => {
		setOpen(!open);
	};

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth < 1200);
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<nav className="bg-black sticky top-0 z-50">
			<div
				className={`w-full m-auto py-2 flex justify-between pl-12 pr-12 max-md:py-5`}
			>
				<Logo />
				{width ? (
					<button
						className="text-2xl text-white"
						onClick={handleToggle}
						title="Toggle open"
						type="button"
					>
						<FaBars />
					</button>
				) : (
					<ul className="text-lg flex gap-6 text-white my-auto">
						<MenuItems />
					</ul>
				)}
			</div>
			<MobileMenu isOpen={open} handleClose={handleToggle} />
		</nav>
	);
};
