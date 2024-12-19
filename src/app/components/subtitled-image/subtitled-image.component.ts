import { Component, Input } from '@angular/core';

@Component({
	selector: 'c-subtitled-image',
	templateUrl: './subtitled-image.component.html',
	styleUrls: [ './subtitled-image.component.scss' ]
})
export class SubtitledImageComponent {
	@Input() public imgSrc!: string;
	@Input() public label = '';
}
