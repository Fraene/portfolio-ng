import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
	selector: 'c-spinner',
	templateUrl: './spinner.component.html',
	imports: [ NgClass, NgStyle ],
	styleUrls: [ './spinner.component.scss' ]
})
export class SpinnerComponent {
	@Input() public dark = false;
	@Input() public size = 32;
	@Input() public thickness = 6;
}
