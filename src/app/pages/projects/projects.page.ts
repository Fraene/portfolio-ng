import { Component } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';
import { LoaderService } from '../../services/loader.service';
import { Project } from '../../interfaces/project';

@Component({
	selector: 'p-projects',
	templateUrl: './projects.page.html',
	styleUrls: [ './projects.page.scss' ],
	standalone: false
})
export class ProjectsPage {
	public data: Project[] = [];
	public loading = true;

	public readonly defaultThumbnail = 'img/placeholder.png';

	constructor(
		private strapi: StrapiService,
		private loader: LoaderService
	) {}

	public ngOnInit(): void {
		this.fetchData();
	}

	public fetchData(): void {
		this.loader.show();
		const startTime = Date.now();

		this.strapi.fetchProjects().subscribe({
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

	public openUrl(url: string): void {
		const element = document.createElement('a');
		element.setAttribute('href', url);
		element.setAttribute('target', '_blank');
		element.click();
		setTimeout(() => element.remove());
	}
}
