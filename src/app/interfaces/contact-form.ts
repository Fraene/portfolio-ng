import { FormControl } from '@angular/forms';

export interface ContactForm {
	name: FormControl<string>;
	email: FormControl<string>;
	topic: FormControl<string>;
	message: FormControl<string>;
	recaptchaToken: FormControl<string>;
}
