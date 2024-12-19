import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { errorMessage } from '../../util/error-messages';

@Component({
	selector: 'c-form-textarea',
	templateUrl: './form-textarea.component.html',
	imports: [ ReactiveFormsModule ],
	styleUrls: [ './form-textarea.component.scss' ]
})
export class FormTextareaComponent {
	@Input() label = '';
	@Input() placeholder = '';
	@Input() disabled = false;
	@Input() control!: FormControl;

	public getErrorMessage = () => errorMessage(this.control);
}
