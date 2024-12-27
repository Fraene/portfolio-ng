import { Component, OnInit } from '@angular/core';
import { AboutMeData } from '../../interfaces/about-me-data';
import { StrapiService } from '../../services/strapi.service';
import { LoaderService } from '../../services/loader.service';

@Component({
	selector: 'p-about-me',
	templateUrl: './about-me.page.html',
	styleUrls: [ './about-me.page.scss' ],
	standalone: false
})
export class AboutMePage implements OnInit {
	public data?: AboutMeData;
	public loading = true;

	constructor(
		private strapi: StrapiService,
		private loader: LoaderService
	){}

	public ngOnInit(): void {
		this.loader.show();
		const startTime = Date.now();

		this.strapi.fetchAboutMe().subscribe({
			next: res => {
				this.data = res.data;
			},
			error: err => {
				console.error(err);
			}
		}).add(() => {
			this.loading = false;
			const endTime = Date.now();

			setTimeout(() => this.loader.hide(), 1000 - (endTime - startTime));
		});
	}
}
