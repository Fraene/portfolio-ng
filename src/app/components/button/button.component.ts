import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
	selector: 'c-button',
	templateUrl: './button.component.html',
	imports: [ SpinnerComponent ],
	styleUrls: [ './button.component.scss' ]
})
export class ButtonComponent {
	@Input() public disabled = false;
	@Input() public loading = false;
	@Output() public onClick = new EventEmitter<void>();
}
