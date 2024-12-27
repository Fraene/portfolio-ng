import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'c-nav-bar',
	templateUrl: './nav-bar.component.html',
	imports: [ RouterLink ],
	styleUrls: [ './nav-bar.component.scss' ]
})
export class NavBarComponent {
	public atTop = true;

	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.atTop = window.scrollY === 0;
	}
}
