export interface StrapiFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: string;
	size?: number;
	width?: number;
	height?: number;
	sizeInBytes?: number;
	isUrlSigned: boolean;
}

export interface StrapiFormats {
	small?: StrapiFormat;
	thumbnail?: StrapiFormat;
}
