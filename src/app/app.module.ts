import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsPage } from './pages/projects/projects.page';
import { CrtHeaderComponent } from './components/crt-header/crt-header.component';
import { AboutMePage } from './pages/about-me/about-me.page';
import { IDSectionComponent } from './components/id-section/id-section.component';
import { ButtonComponent } from './components/button/button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { provideHttpClient } from '@angular/common/http';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FullscreenLoaderComponent } from './components/fullscreen-loader/fullscreen-loader.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SubtitledImageComponent } from './components/subtitled-image/subtitled-image.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
	declarations: [
		AppComponent,
		ProjectsPage,
		AboutMePage
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		CrtHeaderComponent,
		IDSectionComponent,
		ButtonComponent,
		NavBarComponent,
		ContactFormComponent,
		FullscreenLoaderComponent,
		SubtitledImageComponent,
		TimelineComponent,
		NgxCaptchaModule
	],
	providers: [
		provideHttpClient()
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {
}
