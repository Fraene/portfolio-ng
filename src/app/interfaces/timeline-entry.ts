import { TimelineSubentry } from './timeline-subentry';

export interface TimelineEntry {
	id: number;
	name: string;
	subtitle: string;
	timeframe: string;
	description: string;
	subentries: TimelineSubentry[];
}
