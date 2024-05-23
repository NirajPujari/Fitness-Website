export interface SocialLinkProps {
	to: string;
	icon: React.ElementType;
}

export interface SoftLink {
	name: string;
	url: string;
}

export interface SoftLinks {
	title: string;
	links: SoftLink[];
}
