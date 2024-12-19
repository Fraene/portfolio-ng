import { StrapiFormats } from './strapi-formats';

export interface StrapiMedia {
	id: number;
	documentId: string;
	name: string;
	alternativeText?: string;
	caption?: string;
	width?: number;
	height?: number;
	formats: StrapiFormats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl?: string;
	provider: string;
	provider_metadata?: any;
}
