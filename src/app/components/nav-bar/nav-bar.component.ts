import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'c-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: [ './nav-bar.component.scss' ]
})
export class NavBarComponent {
	public atTop = true;

	@HostListener('window:scroll', [])
	onWindowScroll() {
		this.atTop = window.scrollY === 0;
	}
}
