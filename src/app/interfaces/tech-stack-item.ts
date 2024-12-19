import { StrapiMedia } from './strapi/strapi-media';

export interface TechStackItem {
	id: number;
	label: string;
	image: StrapiMedia;
}
