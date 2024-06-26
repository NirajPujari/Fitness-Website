export interface MenuItemProps {
	to: string;
	label: string;
}

export interface MobileMenuProps {
	isOpen: boolean;
	handleClose: () => void;
}
