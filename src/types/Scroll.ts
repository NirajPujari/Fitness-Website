export interface useScrollOnXYProps {
	x: number;
	y: number;
}

export type ScrollToPosition = () => void;
export type HandleChangeScroll = (x: number, y: number) => void;
