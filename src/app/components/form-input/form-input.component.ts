import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { errorMessage } from '../../util/error-messages';

@Component({
	selector: 'c-form-input',
	templateUrl: './form-input.component.html',
	imports: [ ReactiveFormsModule ],
	styleUrls: [ './form-input.component.scss' ]
})
export class FormInputComponent {
	@Input() label = '';
	@Input() type = 'text';
	@Input() placeholder = '';
	@Input() disabled = false;
	@Input() control!: FormControl;

	public getErrorMessage = () => errorMessage(this.control);
}
