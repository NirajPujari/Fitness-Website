export const parseQueryString = (queryString: string) => {
	return queryString
		.substring(1)
		.split("&")
		.reduce((acc, pair) => {
			const [key, value] = pair.split("=");
			acc[decodeURIComponent(key)] = decodeURIComponent(value);
			return acc;
		}, {} as Record<string, string>);
};

export const stringifyQueryParams = (params: Record<string, string>) => {
	return Object.entries(params)
		.map(
			([key, value]) =>
				`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
		)
		.join("&");
};
