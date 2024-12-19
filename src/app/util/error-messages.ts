import { FormControl } from '@angular/forms';

export const errorMessage = (control: FormControl): string => {
	if(control.valid) return '';

	if(control.hasError('required')) return 'This field is required';
	if(control.hasError('email')) return 'Please enter a valid email address';
	if(control.hasError('minlength')) return `Please enter at least ${control.errors!['minlength']!.requiredLength} characters`;
	if(control.hasError('maxlength')) return `Please enter no more than ${control.errors!['maxlength']!.requiredLength} characters`;
	return 'Invalid value';
}
