import { StrapiMedia } from './strapi/strapi-media';
import { TechStackItem } from './tech-stack-item';
import { TimelineEntry } from './timeline-entry';

export interface AboutMeData {
	title: string;

	workplace: string;
	location: string;
	summary: string;
	techStack: TechStackItem[];
	workHistory: TimelineEntry[];
	education: TimelineEntry[];

	photo: StrapiMedia;
}
