import { Component, ViewChild } from '@angular/core';
import { FormInputComponent } from '../form-input/form-input.component';
import { ContactForm } from '../../interfaces/contact-form';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormTextareaComponent } from '../form-textarea/form-textarea.component';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';
import { StrapiService } from '../../services/strapi.service';
import { captchaSiteKey } from '../../../environment/environment';
import { NgxCaptchaModule, ReCaptcha2Component } from 'ngx-captcha';

@Component({
	selector: 'c-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: [ './contact-form.component.scss' ],
	imports: [ FormInputComponent, FormTextareaComponent, ButtonComponent, NgClass, NgxCaptchaModule ]
})
export class ContactFormComponent {
	public form: FormGroup<ContactForm> = new FormGroup({
		name: new FormControl<string>('', { validators: [ Validators.required, Validators.minLength(3), Validators.maxLength(48) ], nonNullable: true }),
		email: new FormControl<string>('', { validators: [ Validators.required, Validators.email ], nonNullable: true }),
		topic: new FormControl<string>('', { validators: [ Validators.required ], nonNullable: true }),
		message: new FormControl<string>('', { validators: [ Validators.required, Validators.minLength(3), Validators.maxLength(500) ], nonNullable: true }),
		recaptchaToken: new FormControl<string>('', { validators: [ Validators.required ], nonNullable: true })
	});

	public message = '';
	public successMessage = true;
	public showMessage = false;
	public sending = false;

	public readonly captchaKey = captchaSiteKey;
	private messageTimeout?: any;

	@ViewChild('captchaElement') recaptcha?: ReCaptcha2Component;

	constructor(
		private strapi: StrapiService
	) {}

	public submit(){
		this.form.markAllAsTouched();
		if(this.form.controls.recaptchaToken.invalid){
			this.message = 'Please verify that you are not a robot.';
			this.successMessage = false;
			this.showMessage = true;
			this.startMessageTimeout();
			return;
		}
		if(this.form.invalid) return;

		this.strapi.sendContactForm(this.form).subscribe({
			next: res => {
				this.message = 'Message has been sent successfully!';
				this.successMessage = true;
				this.showMessage = true;
				this.startMessageTimeout();
				this.form.reset();
				this.recaptcha?.resetCaptcha();
			},
			error: err => {
				this.message = 'An error occurred while sending the message.';
				this.successMessage = false;
				this.showMessage = true;
				this.startMessageTimeout();
			}
		})
	}

	public captchaResolved(token: string){
		this.form.controls.recaptchaToken.setValue(token);
	}

	private startMessageTimeout(){
		clearTimeout(this.messageTimeout);
		this.messageTimeout = setTimeout(() => {
			this.showMessage = false;
		}, 5000);
	}
}
