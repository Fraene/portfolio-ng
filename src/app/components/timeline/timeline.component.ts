import { Component, Input } from '@angular/core';
import { TimelineEntry } from '../../interfaces/timeline-entry';

@Component({
	selector: 'c-timeline',
	templateUrl: './timeline.component.html',
	styleUrls: [ './timeline.component.scss' ]
})
export class TimelineComponent {
	@Input() public items!: TimelineEntry[];
}
