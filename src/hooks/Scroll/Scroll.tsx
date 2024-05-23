import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
	HandleChangeScroll,
	ScrollToPosition,
	useScrollOnXYProps,
} from "./../../types/Scroll";

export const useScrollToTop = (): void => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
};

export const useScrollOnXY = ({
	x,
	y,
}: useScrollOnXYProps): [ScrollToPosition, HandleChangeScroll] => {
	const [position, setPosition] = useState<[number, number]>([x, y]);

	const handleChangeScroll: HandleChangeScroll = (x, y) => {
		setPosition([x, y]);
	};

	const scrollToPosition: ScrollToPosition = () => {
		window.scrollTo(position[0], position[1]);
	};

	return [scrollToPosition, handleChangeScroll];
};
