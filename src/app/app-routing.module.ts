import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPage } from './pages/projects/projects.page';
import { AboutMePage } from './pages/about-me/about-me.page';

const routes: Routes = [
	{ path: '', component: AboutMePage },
	{ path: 'projects', component: ProjectsPage }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
