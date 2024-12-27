import { StrapiMedia } from './strapi/strapi-media';
import { ProjectGroup } from './project-group';

export interface Project {
	id: number;
	title: string;
	thumbnail?: StrapiMedia;
	description: string;
	projectGroups: ProjectGroup[];
	githubUrl?: string;
}
