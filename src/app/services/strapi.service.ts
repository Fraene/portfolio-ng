import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../environment/environment';
import { StrapiData } from '../interfaces/strapi/strapi-data';
import { AboutMeData } from '../interfaces/about-me-data';
import { ContactForm } from '../interfaces/contact-form';
import { FormGroup } from '@angular/forms';
import { Project } from '../interfaces/project';

@Injectable({
	providedIn: 'root'
})
export class StrapiService {
	constructor(
		private http: HttpClient
	){}

	public fetchAboutMe(){
		const populate = [ 'photo', 'techStack', 'workHistory', 'education' ];
		const populateString = populate.map(p => `populate[${p}][populate]=*`).join('&');
		return this.http.get<StrapiData<AboutMeData>>(`${API.url}/api/about-me?${populateString}`);
	}

	public sendContactForm(data: FormGroup<ContactForm>){
		return this.http.post(`${API.url}/api/contact`, data.value);
	}

	public fetchProjects(){
		return this.http.get<StrapiData<Project[]>>(`${API.url}/api/projects?populate=*`);
	}
}
