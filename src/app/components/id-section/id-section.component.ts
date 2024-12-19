import { Component, Input } from '@angular/core';
import { AboutMeData } from '../../interfaces/about-me-data';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'c-id-section',
	templateUrl: './id-section.component.html',
	styleUrls: [ './id-section.component.scss' ],
	imports: [ ButtonComponent ]
})
export class IDSectionComponent {
	@Input() public data?: AboutMeData;

	public panToContact(){
		window.scrollTo({
			top: document.getElementById('contact')?.offsetTop,
			behavior: 'smooth'
		});
	}
}
